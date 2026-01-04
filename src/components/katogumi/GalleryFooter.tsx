'use client'

export function GalleryFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 mt-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-100/80 via-pink-50/50 to-transparent dark:from-pink-950/30 dark:via-pink-900/10 dark:to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300/40 dark:text-pink-600/30"
            style={{
              left: `${10 + i * 9}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              fontSize: `${10 + Math.random() * 8}px`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
            }}
          >
            ✿
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 text-center">
        {/* Decorative Sparkle */}
        <div className="mb-6">
          <span className="text-pink-400 text-xl">✦</span>
        </div>

        {/* Japanese Title */}
        <h2
          className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-2"
          style={{ fontFamily: 'serif' }}
        >
          加藤 恵
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 italic mb-6">
          Saenai Heroine no Sodatekata Fine
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-pink-400" />
          <span className="text-pink-400 text-sm">✦</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-pink-400" />
        </div>

        {/* Quote */}
        <blockquote className="max-w-lg mx-auto mb-8">
          <p className="text-slate-600 dark:text-slate-300 italic text-sm leading-relaxed">
            "She's not a heroine. She's just an ordinary girl. But that's what
            makes her special."
          </p>
        </blockquote>

        {/* Credits */}
        <div className="space-y-2 text-xs text-slate-400 dark:text-slate-500">
          <p>
            Gallery curated with <span className="text-pink-500">♥</span> for
            fans of anime art
          </p>
          <p>
            All artworks belong to their respective creators and copyright
            holders.
          </p>
        </div>

        {/* Year */}
        <p className="mt-8 text-xs text-slate-400 dark:text-slate-500">
          • {currentYear} •
        </p>
      </div>
    </footer>
  )
}
