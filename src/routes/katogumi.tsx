'use client'

import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowLeft, Eye, Heart } from 'lucide-react'
import type { WaifuImage } from '@/hooks/useWaifuImages'
import { useWaifuImages } from '@/hooks/useWaifuImages'
import { GalleryEntry } from '@/components/katogumi/GalleryEntry'
import { HeroSection } from '@/components/katogumi/HeroSection'
import { FilterBar } from '@/components/katogumi/FilterBar'
import { MasonryGallery } from '@/components/katogumi/MasonryGallery'
import { CharacterProfile } from '@/components/katogumi/CharacterProfile'
import { CharacterProfileSheet } from '@/components/katogumi/CharacterProfileSheet'
import { AboutSheet } from '@/components/katogumi/AboutSheet'
import { GalleryFooter } from '@/components/katogumi/GalleryFooter'
import { MusicPlayer } from '@/components/katogumi/MusicPlayer'
import { ThemeToggle } from '@/components/katogumi/ThemeToggle'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/katogumi')({
  component: KatogumiPage,
})

function KatogumiPage() {
  const [entered, setEntered] = useState(false)
  const [activeTags, setActiveTags] = useState<Array<string>>(['waifu'])
  const [selectedImage, setSelectedImage] = useState<WaifuImage | null>(null)
  const [imageProfileOpen, setImageProfileOpen] = useState(false)
  const [characterProfileOpen, setCharacterProfileOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [viewedCount, setViewedCount] = useState(1)

  // TanStack Query automatically refetches when activeTags changes (part of queryKey)
  const { images, loading, hasMore, loadMore, isFetchingNextPage } =
    useWaifuImages(activeTags)

  const handleEnter = () => {
    setEntered(true)
  }

  const handleTagsChange = (tags: Array<string>) => {
    setActiveTags(tags)
    // No need to call refetch - TanStack Query automatically refetches when queryKey changes
  }

  const handleImageClick = (image: WaifuImage) => {
    setSelectedImage(image)
    setImageProfileOpen(true)
    setViewedCount((prev) => prev + 1)
  }

  const handleCharacterProfile = () => {
    setCharacterProfileOpen(true)
  }

  const handleAbout = () => {
    setAboutOpen(true)
  }

  // Entry Screen
  if (!entered) {
    return (
      <>
        <GalleryEntry onEnter={handleEnter} />
        <MusicPlayer />
      </>
    )
  }

  // Gallery View
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-pink-100 dark:border-pink-900/30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left: Back & Title */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setEntered(false)}
                className="h-9 w-9 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/30"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full" />
                <div>
                  <h1
                    className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2"
                    style={{ fontFamily: 'serif' }}
                  >
                    <span>加藤 恵</span>
                    <span
                      className="text-sm font-normal text-slate-500 dark:text-slate-400"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      Megumi Kato
                    </span>
                  </h1>
                  <p className="text-xs text-slate-400 dark:text-slate-500 italic">
                    The Unnoticeable Heroine
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Stats & Theme Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {viewedCount} / {images.length} viewed
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3 text-pink-500" />
                  {images.length} pieces
                </span>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection
        featuredImage={images[0] || null}
        totalImages={images.length}
        onCharacterProfile={handleCharacterProfile}
        onAbout={handleAbout}
      />

      {/* Filter Bar */}
      <div className="container mx-auto">
        <FilterBar activeTags={activeTags} onTagsChange={handleTagsChange} />
      </div>

      {/* Gallery */}
      <main className="container mx-auto">
        <MasonryGallery
          images={images}
          loading={loading}
          loadingMore={isFetchingNextPage}
          hasMore={hasMore}
          onLoadMore={loadMore}
          onImageClick={handleImageClick}
        />
      </main>

      {/* Footer */}
      <GalleryFooter />

      {/* Image Profile Sheet (when clicking an image) */}
      <CharacterProfile
        image={selectedImage}
        open={imageProfileOpen}
        onOpenChange={setImageProfileOpen}
      />

      {/* Character Profile Sheet */}
      <CharacterProfileSheet
        open={characterProfileOpen}
        onOpenChange={setCharacterProfileOpen}
      />

      {/* About Sheet */}
      <AboutSheet open={aboutOpen} onOpenChange={setAboutOpen} />

      {/* Music Player */}
      <MusicPlayer />
    </div>
  )
}
