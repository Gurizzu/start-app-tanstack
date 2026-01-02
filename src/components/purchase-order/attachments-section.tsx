import { FileText, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface Attachment {
  id: string
  name: string
  url?: string
}

interface AttachmentsSectionProps {
  attachments: Attachment[]
  onAdd?: () => void
  onRemove?: (id: string) => void
  className?: string
}

export function AttachmentsSection({
  attachments,
  onAdd,
  onRemove,
  className
}: AttachmentsSectionProps) {
  return (
    <div className={cn('space-y-1', className)}>
      {attachments.map((attachment) => (
        <div
          key={attachment.id}
          className="flex items-center justify-between gap-4 py-1"
        >
          <div className="flex items-center gap-2 min-w-0">
            <FileText className="h-3.5 w-3.5 text-info shrink-0" />
            <a
              href={attachment.url || '#'}
              className="text-xs text-info hover:underline truncate"
              target="_blank"
              rel="noopener noreferrer"
            >
              {attachment.name}
            </a>
          </div>
          <button
            onClick={() => onRemove?.(attachment.id)}
            className="text-xs text-destructive hover:underline shrink-0"
          >
            Remove
          </button>
        </div>
      ))}

      <Button
        variant="ghost"
        size="sm"
        onClick={onAdd}
        className="gap-1 text-info hover:text-info/80 h-7 px-2 text-xs mt-2"
      >
        <Plus className="h-3 w-3" />
        Add attachment
      </Button>
    </div>
  )
}
