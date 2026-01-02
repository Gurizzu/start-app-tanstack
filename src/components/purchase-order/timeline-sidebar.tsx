import { cn } from '@/lib/utils'

interface TimelineEntry {
  date: string
  time?: string
  title: string
  description?: string
  author?: string
  type?: 'system' | 'message'
}

interface TimelineSidebarProps {
  poNumber: string
  sourceInfo?: string
  entries: TimelineEntry[]
  className?: string
}

export function TimelineSidebar({
  poNumber,
  sourceInfo,
  entries,
  className
}: TimelineSidebarProps) {
  return (
    <div className={cn('flex flex-col h-full', className)}>
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-bold text-foreground">{poNumber}</h2>
        {sourceInfo && (
          <p className="text-xs text-muted-foreground mt-0.5">{sourceInfo}</p>
        )}
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-4">
            {entries.map((entry, index) => (
              <div key={index} className="relative pl-5">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 h-2.5 w-2.5 rounded-full bg-info" />

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <span>{entry.date}</span>
                    {entry.time && (
                      <>
                        <span>·</span>
                        <span>{entry.time}</span>
                      </>
                    )}
                  </div>
                  <h4 className="text-xs font-semibold text-info mt-0.5">
                    {entry.title}
                  </h4>
                  {entry.description && (
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                      {entry.description}
                    </p>
                  )}
                  {entry.type && (
                    <span className="text-[9px] mt-0.5 text-muted-foreground/60">
                      {entry.type === 'system' ? 'System' : 'Message'}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
