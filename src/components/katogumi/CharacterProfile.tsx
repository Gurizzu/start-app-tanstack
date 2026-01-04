'use client'

import {
  Download,
  ExternalLink,
  Heart,
  Link as LinkIcon,
  Palette,
  Sparkles,
  Twitter,
} from 'lucide-react'
import type { WaifuImage } from '@/hooks/useWaifuImages'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

interface CharacterProfileProps {
  image: WaifuImage | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CharacterProfile({
  image,
  open,
  onOpenChange,
}: CharacterProfileProps) {
  const handleDownload = async () => {
    if (!image) return
    try {
      const response = await fetch(image.url)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `katogumi-${image.image_id}${image.extension}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto border-l-pink-200 dark:border-l-pink-900 p-6">
        {image && (
          <>
            {/* Pink accent bar at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-rose-400" />

            <SheetHeader className="text-left pt-4">
              <SheetTitle
                className="text-2xl font-bold text-slate-800 dark:text-white"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Artwork Details
              </SheetTitle>
            </SheetHeader>

            {/* Image Preview */}
            <div className="mt-4 rounded-xl overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-800 dark:to-slate-900">
              <img
                src={image.url}
                alt={`Artwork by ${image.artist?.name || 'Unknown'}`}
                className="w-full h-auto"
                style={{ backgroundColor: image.dominant_color }}
              />
            </div>

            {/* Profile Sections */}
            <div className="mt-6 space-y-6">
              {/* Personality */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-1">
                    Personality
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Characterized by her extraordinarily ordinary nature and minimal
                    presence. Despite her flat demeanor, she demonstrates genuine
                    kindness, selflessness, and unwavering loyalty.
                  </p>
                </div>
              </div>

              {/* Appearance */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-1">
                    Appearance
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Classic balanced features that are neither striking nor plain,
                    embodying the perfect picture of an ordinary girl with hidden
                    depth.
                  </p>
                </div>
              </div>

              {/* Signature Trait */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-1">
                    Signature Trait
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Her stealthy, unnoticeable presence that makes her forgettable
                    at first, yet reveals hidden depth and fierce dedication once
                    you get to know her.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Separator */}
            <div className="flex items-center justify-center gap-3 my-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-pink-300 dark:to-pink-700" />
              <span className="text-pink-400 text-sm">✦</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-pink-300 dark:to-pink-700" />
            </div>

            {/* Quote Card */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
              <blockquote className="text-center">
                <p className="text-slate-600 dark:text-slate-300 italic text-sm leading-relaxed mb-2">
                  "I won't give up, Tomoya-kun. Even if Eriri goes away, even if
                  Kasumigaoka..."
                </p>
                <footer className="text-xs text-slate-400 dark:text-slate-500">
                  — Megumi Kato
                </footer>
              </blockquote>
            </div>

            <Separator className="my-6" />

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {image.tags.map((tag) => (
                <Badge
                  key={tag.tag_id}
                  variant="secondary"
                  className="capitalize bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-300 border-0"
                >
                  {tag.name}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-4">
              <Button
                onClick={handleDownload}
                className="flex-1 gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full"
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
              {image.source && (
                <Button
                  variant="outline"
                  className="flex-1 gap-2 rounded-full border-slate-300 dark:border-slate-600"
                  onClick={() => window.open(image.source, '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                  Source
                </Button>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-pink-50 dark:bg-pink-900/20">
                <Heart className="h-5 w-5 text-pink-500" />
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-white">
                    {image.favorites}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Favorites
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-pink-50 dark:bg-pink-900/20">
                <Palette className="h-5 w-5 text-pink-500" />
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-white">
                    {image.width} × {image.height}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Resolution
                  </p>
                </div>
              </div>
            </div>

            {/* Artist Links */}
            {(() => {
              const artist = image.artist
              if (!artist) return null
              return (
                <div className="mt-6 space-y-2">
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Artist
                  </h4>
                  <div className="space-y-2">
                    {artist.pixiv && (
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-3 h-auto py-3 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                        onClick={() =>
                          window.open(artist.pixiv ?? undefined, '_blank')
                        }
                      >
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                          <LinkIcon className="h-4 w-4 text-blue-500" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-medium text-slate-800 dark:text-white">
                            Pixiv
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            View on Pixiv
                          </p>
                        </div>
                      </Button>
                    )}
                    {artist.twitter && (
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-3 h-auto py-3 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                        onClick={() =>
                          window.open(artist.twitter ?? undefined, '_blank')
                        }
                      >
                        <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center">
                          <Twitter className="h-4 w-4 text-sky-500" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-medium text-slate-800 dark:text-white">
                            Twitter
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            @{artist.name}
                          </p>
                        </div>
                      </Button>
                    )}
                  </div>
                </div>
              )
            })()}

            {/* Dominant Color */}
            <div className="mt-6 flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div
                className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-700 shadow-sm"
                style={{ backgroundColor: image.dominant_color }}
              />
              <div>
                <p className="text-sm font-medium font-mono uppercase text-slate-800 dark:text-white">
                  {image.dominant_color}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Dominant Color
                </p>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
