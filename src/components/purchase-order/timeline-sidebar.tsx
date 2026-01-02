import { cn } from '@/lib/utils'

interface TimelineEntry {
  date: string
  time?: string
  title: string
  description?: string
  type?: 'system' | 'message'
}

interface TimelineSidebarProps {
  poNumber: string
  sourceInfo?: string
  entries: Array<TimelineEntry>
  className?: string
}

export function TimelineSidebar({
  poNumber,
  sourceInfo,
  entries,
  className,
}: TimelineSidebarProps) {
  return (
    <div className={cn('flex flex-col h-full bg-card', className)}>
      <div className="p-4 border-b border-border">
        <h2 className="text-base font-bold text-foreground">{poNumber}</h2>
        {sourceInfo && (
          <p className="text-[10px] text-muted-foreground mt-0.5">
            {sourceInfo}
          </p>
        )}
      </div>
      <div className="flex-1 overflow-y-auto p-3">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[5px] top-3 bottom-3 w-px bg-border" />

          <div className="space-y-3">
            {entries.map((entry, index) => (
              <div key={index} className="relative pl-5">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-info" />

                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <span>{entry.date}</span>
                    {entry.time && (
                      <>
                        <span>·</span>
                        <span>{entry.time}</span>
                      </>
                    )}
                  </div>
                  <h4 className="text-xs font-semibold text-info">
                    {entry.title}
                  </h4>
                  {entry.description && (
                    <p className="text-[11px] text-muted-foreground leading-snug">
                      {entry.description}
                    </p>
                  )}
                  {entry.type && (
                    <span className="text-[9px] text-muted-foreground/60 mt-0.5">
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
