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
    <div className={cn('flex flex-col h-full', className)}>
      <div className="p-4 border-b border-border">
        <h2 className="text-xl font-bold text-foreground">{poNumber}</h2>
        {sourceInfo && (
          <p className="text-xs text-muted-foreground mt-1">{sourceInfo}</p>
        )}
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-4">
            {entries.map((entry, index) => (
              <div key={index} className="relative pl-6">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full bg-info border-2 border-info-foreground" />

                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{entry.date}</span>
                    {entry.time && (
                      <>
                        <span>·</span>
                        <span>{entry.time}</span>
                      </>
                    )}
                  </div>
                  <h4 className="text-sm font-medium text-foreground mt-0.5">
                    {entry.title}
                  </h4>
                  {entry.description && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {entry.description}
                    </p>
                  )}
                  {entry.author && (
                    <p className="text-xs text-muted-foreground">
                      by {entry.author}
                    </p>
                  )}
                  {entry.type && (
                    <span className="inline-flex text-[10px] mt-1 text-muted-foreground/70">
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
