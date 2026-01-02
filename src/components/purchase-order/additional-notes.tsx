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
        <pre className="text-sm font-mono text-foreground whitespace-pre-wrap min-h-[100px]">
          {value || 'No additional notes'}
        </pre>
      ) : (
        <textarea
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full min-h-[100px] p-2 text-sm font-mono bg-background border border-input rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Add additional notes..."
        />
      )}
    </div>
  )
}
