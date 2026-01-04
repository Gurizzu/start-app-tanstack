import { useInfiniteQuery } from '@tanstack/react-query'

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

interface WaifuApiResponse {
  images: Array<WaifuImage>
}

interface PageResult {
  images: Array<WaifuImage>
  page: number
  hasMore: boolean
}

interface UseWaifuImagesResult {
  images: Array<WaifuImage>
  loading: boolean
  error: Error | null
  loadMore: () => void
  refetch: () => void
  hasMore: boolean
  isFetchingNextPage: boolean
}

const IMAGES_PER_PAGE = 30

async function fetchWaifuImages(
  tags: Array<string>,
  page: number,
): Promise<PageResult> {
  const tagsParam = tags.length > 0 ? tags.join(',') : 'waifu'
  const url = `https://api.waifu.im/search?included_tags=${tagsParam}&many=true&limit=${IMAGES_PER_PAGE}`

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`)
  }

  const data: WaifuApiResponse = await response.json()

  return {
    images: data.images,
    page,
    hasMore: data.images.length >= IMAGES_PER_PAGE,
  }
}

export function useWaifuImages(
  initialTags: Array<string> = ['waifu'],
): UseWaifuImagesResult {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery<PageResult, Error>({
    queryKey: ['waifuImages', initialTags],
    queryFn: async ({ pageParam }) => {
      return fetchWaifuImages(initialTags, pageParam as number)
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage: PageResult) => {
      if (lastPage.hasMore) {
        return lastPage.page + 1
      }
      return undefined
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes
  })

  // Flatten all pages into a single array and deduplicate by image_id
  const allImages = data?.pages.flatMap((page: PageResult) => page.images) ?? []
  const uniqueImages = allImages.reduce<Array<WaifuImage>>(
    (acc: Array<WaifuImage>, image: WaifuImage) => {
      if (!acc.find((i: WaifuImage) => i.image_id === image.image_id)) {
        acc.push(image)
      }
      return acc
    },
    [],
  )

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }

  const handleRefetch = () => {
    refetch()
  }

  return {
    images: uniqueImages,
    loading: isFetching && !isFetchingNextPage,
    error: error ?? null,
    loadMore: handleLoadMore,
    refetch: handleRefetch,
    hasMore: hasNextPage,
    isFetchingNextPage,
  }
}
