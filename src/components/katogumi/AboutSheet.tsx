'use client'

import { Sparkles } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

interface AboutSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AboutSheet({ open, onOpenChange }: AboutSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto p-6">
        {/* Pink accent bar at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-rose-400" />

        <SheetHeader className="text-left pt-4">
          <SheetTitle
            className="text-2xl font-bold text-slate-800 dark:text-white italic"
            style={{ fontFamily: 'serif' }}
          >
            "An Ordinary Girl"
          </SheetTitle>
        </SheetHeader>

        {/* Description Paragraphs */}
        <div className="mt-6 space-y-4">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            An extraordinarily ordinary girl with minimal presence—so
            unremarkable that her own classmate failed to recognize they'd been
            together since first year.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Yet beneath her flat demeanor lies hidden depth. Her quiet exterior
            masks genuine emotion, fierce dedication, and unwavering loyalty
            that makes her truly irreplaceable.
          </p>
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
              "She's not a heroine. She's just an ordinary girl. But that's what
              makes her special."
            </p>
            <footer className="text-xs text-slate-400 dark:text-slate-500">
              — Saenai Heroine no Sodatekata
            </footer>
          </blockquote>
        </div>

        {/* Her Hidden Strength Card */}
        <div className="mt-6 bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <h3 className="font-semibold text-pink-600 dark:text-pink-400">
              Her Hidden Strength
            </h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Despite her perceived blandness and emotionless demeanor, Megumi
            constantly supports others with genuine kindness and selflessness.
            Her growing expressiveness and devoted commitment reveal a character
            of surprising depth—proving that the most ordinary person can become
            the most extraordinary presence.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
