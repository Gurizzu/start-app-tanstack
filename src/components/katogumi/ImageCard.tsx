'use client'

import { useState } from 'react'
import type { WaifuImage } from '@/hooks/useWaifuImages'
import { Skeleton } from '@/components/ui/skeleton'

interface ImageCardProps {
  image: WaifuImage
  index: number
  onClick: () => void
}

export function ImageCard({ image, index, onClick }: ImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Generate a title from tags
  const generateTitle = () => {
    const tagNames = image.tags.map((t) => t.name).slice(0, 2)
    if (image.artist?.name) {
      return `${image.artist.name} - ${tagNames.join(' & ')} artwork`
    }
    return `Beautiful ${tagNames.join(' & ')} artwork`
  }

  return (
    <div
      className="group mb-6 break-inside-avoid cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-800 dark:to-slate-900 shadow-lg shadow-pink-100/50 dark:shadow-none hover:shadow-xl hover:shadow-pink-200/50 dark:hover:shadow-pink-900/20 transition-all duration-300">
        {!isLoaded && (
          <Skeleton
            className="w-full rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 dark:from-slate-700 dark:to-slate-800"
            style={{
              aspectRatio: `${image.width}/${image.height}`,
            }}
          />
        )}
        <img
          src={image.url}
          alt={generateTitle()}
          className={`w-full rounded-2xl transition-all duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
          } group-hover:scale-105`}
          style={{
            aspectRatio: `${image.width}/${image.height}`,
            backgroundColor: image.dominant_color,
          }}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </div>

      {/* Card Info - Below Image */}
      <div className="mt-3 px-1">
        <h3 className="text-sm font-medium text-slate-800 dark:text-slate-200 line-clamp-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
          {generateTitle()}
        </h3>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
          Collection #{image.image_id}
        </p>
      </div>
    </div>
  )
}
