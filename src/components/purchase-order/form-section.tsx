import * as React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

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
    <div
      className={cn(
        'rounded-lg border border-border overflow-hidden',
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between bg-primary px-4 py-2 text-left text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        <span>{title}</span>
        <div className="flex items-center gap-2">
          {actions && <div onClick={(e) => e.stopPropagation()}>{actions}</div>}
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>
      </button>
      {isOpen && <div className="bg-card p-4">{children}</div>}
    </div>
  )
}

interface InfoRowProps {
  label: string
  value?: React.ReactNode
  className?: string
}

export function InfoRow({ label, value, className }: InfoRowProps) {
  return (
    <div className={cn('flex flex-col gap-1 text-sm', className)}>
      <span className="text-muted-foreground text-xs uppercase tracking-wide">
        {label}
      </span>
      <span className="font-medium text-foreground">{value || '-'}</span>
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
    <div className={cn('grid gap-4', gridCols[columns], className)}>
      {children}
    </div>
  )
}
