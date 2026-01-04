'use client'

import { Loader2 } from 'lucide-react'
import { ImageCard } from './ImageCard'
import type { WaifuImage } from '@/hooks/useWaifuImages'
import { Skeleton } from '@/components/ui/skeleton'

interface MasonryGalleryProps {
  images: Array<WaifuImage>
  loading: boolean
  hasMore: boolean
  onLoadMore: () => void
  onImageClick: (image: WaifuImage) => void
}

export function MasonryGallery({
  images,
  loading,
  hasMore,
  onLoadMore,
  onImageClick,
}: MasonryGalleryProps) {
  // Loading skeleton for initial load
  if (loading && images.length === 0) {
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 p-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="mb-6 break-inside-avoid">
            <Skeleton
              className="w-full rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 dark:from-slate-700 dark:to-slate-800"
              style={{
                height: `${250 + Math.random() * 150}px`,
              }}
            />
            <div className="mt-3 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/4" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Empty state
  if (!loading && images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4">
        <div className="text-6xl mb-4">🎨</div>
        <h3 className="text-xl font-medium text-foreground mb-2">
          No images found
        </h3>
        <p className="text-muted-foreground">Try adjusting your filters</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Section Divider with Sparkle */}
      <div className="flex items-center justify-center gap-3 py-6">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-pink-300 dark:to-pink-700" />
        <span className="text-pink-400 text-sm">✦</span>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-pink-300 dark:to-pink-700" />
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 px-4">
        {images.map((image, index) => (
          <ImageCard
            key={image.image_id}
            image={image}
            index={index}
            onClick={() => onImageClick(image)}
          />
        ))}
      </div>

      {/* Load More Section */}
      <div className="flex flex-col items-center py-12">
        {loading && images.length > 0 && (
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 mb-4">
            <Loader2 className="h-5 w-5 animate-spin text-pink-500" />
            <span className="text-sm">Loading more images...</span>
          </div>
        )}

        {hasMore ? (
          <button
            onClick={onLoadMore}
            disabled={loading}
            className="group flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-pink-200 dark:border-pink-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-pink-500 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-all duration-300 disabled:opacity-50"
          >
            <span className="text-sm font-medium">Load More Artworks</span>
            <span className="text-pink-400 group-hover:animate-pulse">✦</span>
          </button>
        ) : (
          <div className="text-center">
            <p className="text-pink-500 dark:text-pink-400 text-sm font-medium mb-1">
              You've reached the end of the gallery
            </p>
            <p className="text-slate-400 dark:text-slate-500 text-xs">
              • {images.length} photos •
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
