import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FormSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  className?: string
  actions?: React.ReactNode
}

export function FormSection({
  title,
  children,
  defaultOpen = true,
  className,
  actions,
}: FormSectionProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <div className={cn('overflow-hidden', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-2 bg-primary/95 px-3 py-1.5 text-left text-xs font-semibold text-primary-foreground hover:bg-primary transition-colors rounded-t-md"
      >
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform",
            !isOpen && "-rotate-90"
          )}
        />
        <span>{title}</span>
        {actions && (
          <div className="ml-auto" onClick={(e) => e.stopPropagation()}>
            {actions}
          </div>
        )}
      </button>
      {isOpen && (
        <div className="border border-t-0 border-border bg-card p-4 rounded-b-md">
          {children}
        </div>
      )}
    </div>
  )
}

interface InfoRowProps {
  label: string
  value?: React.ReactNode
  className?: string
  inline?: boolean
}

export function InfoRow({ label, value, className, inline = false }: InfoRowProps) {
  if (inline) {
    return (
      <div className={cn('flex items-baseline gap-2 text-sm py-0.5', className)}>
        <span className="text-muted-foreground text-xs uppercase shrink-0 min-w-[100px]">
          {label}
        </span>
        <span className="text-foreground">{value || '-'}</span>
      </div>
    )
  }

  return (
    <div className={cn('text-sm py-0.5', className)}>
      <span className="text-muted-foreground text-xs uppercase block mb-0.5">
        {label}
      </span>
      <span className="text-foreground">{value || '-'}</span>
    </div>
  )
}

interface InfoGridProps {
  children: React.ReactNode
  columns?: 2 | 3 | 4 | 5 | 6
  className?: string
}

export function InfoGrid({ children, columns = 4, className }: InfoGridProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  }

  return (
    <div className={cn('grid gap-x-6 gap-y-2', gridCols[columns], className)}>
      {children}
    </div>
  )
}

interface InfoTableRowProps {
  items: Array<{ label: string; value?: React.ReactNode }>
  className?: string
}

export function InfoTableRow({ items, className }: InfoTableRowProps) {
  return (
    <div className={cn('grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-1 py-1 border-b border-border/50 last:border-0', className)}>
      {items.map((item, index) => (
        <div key={index} className="text-sm">
          <span className="text-muted-foreground text-[10px] uppercase tracking-wide">{item.label}</span>
          <div className="text-foreground">{item.value || ''}</div>
        </div>
      ))}
    </div>
  )
}
