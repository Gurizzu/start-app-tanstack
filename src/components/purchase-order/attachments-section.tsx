import { FileText, Plus, Trash2 } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface Attachment {
  id: string
  name: string
  url?: string
}

interface AttachmentsSectionProps {
  attachments: Array<Attachment>
  onAdd?: () => void
  onRemove?: (id: string) => void
  className?: string
}

export function AttachmentsSection({
  attachments,
  onAdd,
  onRemove,
  className,
}: AttachmentsSectionProps) {
  return (
    <div className={cn('', className)}>
      <div className="border border-border/60 rounded-sm overflow-hidden border-t-0 rounded-t-none">
        {/* Blue Header Row simulating table structure */}
        <div className="grid grid-cols-[1fr_auto] gap-4 px-3 py-2 bg-blue-50/50 border-b border-border/60 dark:bg-slate-800 dark:border-slate-700">
          <div className="text-[10px] uppercase font-bold text-blue-900/70 tracking-wider dark:text-blue-200">
            ATTACHMENT
          </div>
          <div className="text-[10px] uppercase font-bold text-blue-900/70 tracking-wider dark:text-blue-200 px-2">
            ACTION
          </div>
        </div>

        <div className="space-y-0 text-sm">
          {attachments.map((attachment) => (
            <div
              key={attachment.id}
              className="grid grid-cols-[1fr_auto] gap-4 py-2 border-b border-border/40 hover:bg-muted/10 px-3 transition-colors last:border-0 dark:border-slate-700 dark:hover:bg-slate-800/50"
            >
              <div className="flex items-center gap-2 min-w-0">
                <FileText className="h-4 w-4 text-blue-500 shrink-0" />
                <a
                  href={attachment.url || '#'}
                  className="text-blue-600 hover:underline hover:text-blue-700 truncate font-medium text-xs dark:text-blue-400 dark:hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {attachment.name}
                </a>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => onRemove?.(attachment.id)}
                      className="text-muted-foreground hover:text-destructive shrink-0 p-1 rounded-sm hover:bg-destructive/10 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Remove Attachment</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onAdd}
        className="flex items-center gap-1.5 text-blue-500 text-xs hover:underline hover:text-blue-600 mt-3 px-1 font-medium dark:text-blue-400"
      >
        <Plus className="h-3.5 w-3.5" />
        Add attachment
      </button>
    </div>
  )
}
