'use client'

import { Sparkles } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

interface CharacterProfileSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CharacterProfileSheet({
  open,
  onOpenChange,
}: CharacterProfileSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto p-6">
        {/* Pink accent bar at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-rose-400" />

        <SheetHeader className="text-left pt-4">
          <SheetTitle
            className="text-2xl font-bold text-slate-800 dark:text-white"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Character Profile
          </SheetTitle>
        </SheetHeader>

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
                kindness, selflessness, and unwavering loyalty to those around
                her.
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
                Dark brown bob-cut hair, brown eyes, standing 160 cm tall.
                Classic balanced features that are neither striking nor plain,
                embodying the perfect picture of an ordinary girl.
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
      </SheetContent>
    </Sheet>
  )
}
