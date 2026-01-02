import { FileText, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

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
    <div className={cn('space-y-2', className)}>
      {attachments.map((attachment) => (
        <div
          key={attachment.id}
          className="flex items-center justify-between gap-4 py-1.5 border-b border-border last:border-0"
        >
          <div className="flex items-center gap-2 min-w-0">
            <FileText className="h-4 w-4 text-info shrink-0" />
            <a
              href={attachment.url || '#'}
              className="text-sm text-info hover:underline truncate"
              target="_blank"
              rel="noopener noreferrer"
            >
              {attachment.name}
            </a>
          </div>
          <button
            onClick={() => onRemove?.(attachment.id)}
            className="text-sm text-destructive hover:underline shrink-0"
          >
            Remove
          </button>
        </div>
      ))}

      <Button
        variant="ghost"
        size="sm"
        onClick={onAdd}
        className="gap-1 text-info hover:text-info/80 h-8 px-2"
      >
        <Plus className="h-4 w-4" />
        Add attachment
      </Button>
    </div>
  )
}
