'use client'

import { cn } from '@/lib/utils'

const TAGS = [
  { id: 'waifu', label: 'Waifu', emoji: '👩' },
  { id: 'maid', label: 'Maid', emoji: '🎀' },
  { id: 'uniform', label: 'Uniform', emoji: '👔' },
  { id: 'marin-kitagawa', label: 'Marin', emoji: '💖' },
  { id: 'raiden-shogun', label: 'Raiden', emoji: '⚡' },
]

interface FilterBarProps {
  activeTags: Array<string>
  onTagsChange: (tags: Array<string>) => void
}

export function FilterBar({ activeTags, onTagsChange }: FilterBarProps) {
  const toggleTag = (tagId: string) => {
    if (activeTags.includes(tagId)) {
      // Remove tag
      const newTags = activeTags.filter((t) => t !== tagId)
      onTagsChange(newTags.length > 0 ? newTags : ['waifu'])
    } else {
      // Add tag
      onTagsChange([...activeTags, tagId])
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-4">
      {TAGS.map((tag) => (
        <button
          key={tag.id}
          onClick={() => toggleTag(tag.id)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            'border hover:scale-105 active:scale-95',
            activeTags.includes(tag.id)
              ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white border-transparent shadow-lg shadow-pink-500/25'
              : 'bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 border-pink-200 dark:border-pink-800 hover:border-pink-400 dark:hover:border-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/30 backdrop-blur-sm',
          )}
        >
          <span className="mr-1.5">{tag.emoji}</span>
          {tag.label}
        </button>
      ))}
    </div>
  )
}
