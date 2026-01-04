'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface GalleryEntryProps {
  onEnter: () => void
}

export function GalleryEntry({ onEnter }: GalleryEntryProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background - Pink Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200 dark:from-slate-950 dark:via-rose-950/30 dark:to-slate-900">
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300/15 rounded-full blur-3xl" />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(236,72,153,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(236,72,153,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Cherry Blossom Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400/60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 7}s`,
              fontSize: `${8 + Math.random() * 12}px`,
            }}
          >
            ✿
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Japanese Text */}
        <div className="mb-4">
          <span className="text-lg md:text-xl font-light tracking-[0.5em] text-pink-600/70 dark:text-pink-300/70">
            加藤 恵
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-800 dark:text-white mb-4 tracking-tight"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Katogumi
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-white/70 mb-2 font-light max-w-md mx-auto">
          Megumi Kato
        </p>
        <p className="text-sm text-pink-500 dark:text-pink-400 mb-8">
          The Unnoticeable Heroine
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-pink-400" />
          <span className="text-pink-400">✦</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-pink-400" />
        </div>

        {/* Enter Button */}
        <Button
          onClick={onEnter}
          size="lg"
          className="group relative px-8 py-6 text-lg font-medium bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 border-0"
        >
          <Sparkles className="h-5 w-5 mr-2 group-hover:animate-pulse" />
          Enter Gallery
          <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Additional Info */}
        <p className="mt-8 text-sm text-slate-500 dark:text-white/40">
          Powered by waifu.im API
        </p>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
