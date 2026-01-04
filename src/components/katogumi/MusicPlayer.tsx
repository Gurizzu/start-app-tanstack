'use client'

import { useEffect, useRef, useState } from 'react'
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

// Free lofi music from pixabay (royalty-free)
const MUSIC_URL =
  'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = new Audio(MUSIC_URL)
    audio.loop = true
    audio.volume = volume
    audioRef.current = audio

    audio.addEventListener('timeupdate', () => {
      setProgress(audio.currentTime)
    })

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration)
    })

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (value: Array<number>) => {
    setVolume(value[0])
    if (value[0] > 0) setIsMuted(false)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-pink-200/50 dark:border-pink-800/50 shadow-lg shadow-pink-100/50 dark:shadow-none">
        {/* Music Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500">
          <Music className="h-5 w-5 text-white" />
        </div>

        {/* Play/Pause */}
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlay}
          className="h-9 w-9 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/30"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-pink-600 dark:text-pink-400" />
          ) : (
            <Play className="h-4 w-4 ml-0.5 text-pink-600 dark:text-pink-400" />
          )}
        </Button>

        {/* Progress */}
        <div className="hidden sm:flex items-center gap-2 min-w-[120px]">
          <span className="text-xs text-slate-500 dark:text-slate-400 w-10">
            {formatTime(progress)}
          </span>
          <div className="w-16 h-1 bg-pink-100 dark:bg-pink-900/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all"
              style={{
                width: `${duration ? (progress / duration) * 100 : 0}%`,
              }}
            />
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="h-8 w-8 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/30"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            ) : (
              <Volume2 className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            )}
          </Button>
          <Slider
            value={[isMuted ? 0 : volume]}
            onValueChange={handleVolumeChange}
            max={1}
            step={0.01}
            className="w-16 hidden sm:flex"
          />
        </div>

        {/* Track Info */}
        <div className="hidden md:block">
          <p className="text-xs font-medium text-slate-700 dark:text-slate-200">
            Lofi Vibes
          </p>
          <p className="text-[10px] text-slate-400 dark:text-slate-500">
            Ambient Music
          </p>
        </div>
      </div>
    </div>
  )
}
