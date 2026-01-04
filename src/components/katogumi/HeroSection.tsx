'use client'

import { ArrowRight, Images, Sparkles, Star } from 'lucide-react'
import type { WaifuImage } from '@/hooks/useWaifuImages'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface HeroSectionProps {
  featuredImage: WaifuImage | null
  totalImages: number
  onCharacterProfile: () => void
  onAbout: () => void
}

export function HeroSection({
  featuredImage,
  totalImages,
  onCharacterProfile,
  onAbout,
}: HeroSectionProps) {
  return (
    <section className="relative py-8 lg:py-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 via-transparent to-transparent dark:from-pink-950/20 dark:via-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Featured Image */}
          <div className="relative order-1 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-200/50 dark:bg-pink-900/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-rose-200/50 dark:bg-rose-900/30 rounded-full blur-2xl" />

              {/* Image Card */}
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl shadow-pink-200/50 dark:shadow-pink-900/20 p-3 transform hover:scale-[1.02] transition-transform duration-500">
                {featuredImage ? (
                  <img
                    src={featuredImage.url}
                    alt="Featured artwork"
                    className="w-full h-auto rounded-2xl"
                    style={{ backgroundColor: featuredImage.dominant_color }}
                  />
                ) : (
                  <div className="w-full aspect-[3/4] rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/50 dark:to-rose-900/50 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-pink-400" />
                  </div>
                )}
              </div>

              {/* Floating Sparkle */}
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
                <span className="text-pink-400 text-2xl animate-pulse">✦</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            {/* Category Tag */}
            <div className="mb-4">
              <Badge
                variant="secondary"
                className="bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-300 border-0 px-4 py-1"
              >
                Saenai Heroine no Sodatekata Fine
              </Badge>
            </div>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-2"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              The Ordinary Girl
            </h1>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink-500 dark:text-pink-400 mb-4"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              with Extraordinary Charm
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              ぼくらい 彼女の育てかた •{' '}
              <span className="text-pink-500">Fine</span>
            </p>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              She may seem unnoticeable at first glance, but this gallery
              possesses a quiet elegance that grows on you. A collection curated
              with unwavering dedication and subtle grace.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              <Badge
                variant="outline"
                className="px-4 py-2 border-slate-300 dark:border-slate-600"
              >
                <Images className="w-4 h-4 mr-2 text-pink-500" />
                <span className="font-semibold">{totalImages}</span>
                <span className="ml-1 text-muted-foreground">
                  Illustrations
                </span>
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 border-slate-300 dark:border-slate-600"
              >
                <Star className="w-4 h-4 mr-2 text-pink-500" />
                Handpicked
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 border-slate-300 dark:border-slate-600"
              >
                <Star className="w-4 h-4 mr-2 text-pink-500" />
                HD Quality
              </Badge>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              <Button
                onClick={onCharacterProfile}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full px-6 gap-2"
              >
                Character Profile
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={onAbout}
                className="rounded-full px-6 gap-2 border-slate-300 dark:border-slate-600"
              >
                About Her
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Hint */}
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Click on any artwork to view in full resolution
            </p>

            {/* Decorative Sparkle */}
            <div className="hidden lg:block mt-4">
              <span className="text-pink-300 text-xl">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
