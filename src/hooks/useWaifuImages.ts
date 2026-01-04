import { useCallback, useState } from 'react'

export interface WaifuImage {
  signature: string
  extension: string
  image_id: number
  favorites: number
  dominant_color: string
  source: string
  artist: {
    artist_id: number
    name: string
    patreon: string | null
    pixiv: string | null
    twitter: string | null
    deviant_art: string | null
  } | null
  uploaded_at: string
  liked_at: string | null
  is_nsfw: boolean
  width: number
  height: number
  byte_size: number
  url: string
  preview_url: string
  tags: Array<{
    tag_id: number
    name: string
    description: string
    is_nsfw: boolean
  }>
}

interface UseWaifuImagesResult {
  images: Array<WaifuImage>
  loading: boolean
  error: string | null
  loadMore: () => Promise<void>
  refetch: (tags: Array<string>) => Promise<void>
  hasMore: boolean
}

const IMAGES_PER_PAGE = 30

export function useWaifuImages(
  initialTags: Array<string> = ['waifu'],
): UseWaifuImagesResult {
  const [images, setImages] = useState<Array<WaifuImage>>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentTags, setCurrentTags] = useState<Array<string>>(initialTags)
  const [hasMore, setHasMore] = useState(true)

  const fetchImages = useCallback(
    async (tags: Array<string>, append: boolean = false) => {
      if (loading) return

      setLoading(true)
      setError(null)

      try {
        const tagsParam = tags.length > 0 ? tags.join(',') : 'waifu'
        const url = `https://api.waifu.im/search?included_tags=${tagsParam}&many=true&limit=${IMAGES_PER_PAGE}`

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`)
        }

        const data = await response.json()
        const newImages = data.images || []

        if (append) {
          setImages((prev) => {
            // Filter out duplicates
            const existingIds = new Set(prev.map((img) => img.image_id))
            const uniqueNew = newImages.filter(
              (img: WaifuImage) => !existingIds.has(img.image_id),
            )
            return [...prev, ...uniqueNew]
          })
        } else {
          setImages(newImages)
        }

        setHasMore(newImages.length >= IMAGES_PER_PAGE)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch images')
      } finally {
        setLoading(false)
      }
    },
    [loading],
  )

  const refetch = useCallback(
    async (tags: Array<string>) => {
      setCurrentTags(tags)
      setImages([])
      await fetchImages(tags, false)
    },
    [fetchImages],
  )

  const loadMore = useCallback(async () => {
    await fetchImages(currentTags, true)
  }, [fetchImages, currentTags])

  return {
    images,
    loading,
    error,
    loadMore,
    refetch,
    hasMore,
  }
}
