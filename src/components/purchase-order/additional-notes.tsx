import { cn } from '@/lib/utils'

interface AdditionalNotesProps {
  value?: string
  onChange?: (value: string) => void
  readOnly?: boolean
  className?: string
}

export function AdditionalNotes({
  value = '',
  onChange,
  readOnly = true,
  className,
}: AdditionalNotesProps) {
  return (
    <div className={cn('', className)}>
      {readOnly ? (
        <div className="bg-muted/10 border border-border/60 rounded-sm p-4 min-h-[100px]">
          <pre className="text-xs font-mono text-foreground whitespace-pre-wrap leading-relaxed">
            {value || 'No additional notes'}
          </pre>
        </div>
      ) : (
        <textarea
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full min-h-[100px] p-4 text-xs font-mono bg-background border border-input rounded-sm resize-y focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Add additional notes..."
        />
      )}
    </div>
  )
}
