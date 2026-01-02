import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FormSectionProps {
  title?: string
  customTitle?: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
  className?: string
  contentClassName?: string
}

export function FormSection({
  title,
  customTitle,
  children,
  defaultOpen = true,
  className,
  contentClassName,
}: FormSectionProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <div className={cn('', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 bg-slate-700 px-4 py-2 text-left text-sm font-semibold text-white hover:bg-slate-800 transition-colors rounded-t-sm min-w-40 dark:bg-slate-800 dark:hover:bg-slate-700',
          customTitle ? 'w-full' : 'w-fit',
        )}
      >
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform shrink-0',
            !isOpen && '-rotate-90',
          )}
        />
        {customTitle ? (
          <div
            className="flex-1 flex items-center justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {customTitle}
          </div>
        ) : (
          <span>{title}</span>
        )}
      </button>
      {isOpen && (
        <div
          className={cn(
            'bg-slate-100/50 border  border-border p-4 rounded-b-sm rounded-tr-sm dark:bg-slate-900/40 dark:border-slate-800',
            contentClassName,
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}

// Table-style info row with label on left, value on right
interface InfoTableProps {
  children: React.ReactNode
  className?: string
}

export function InfoTable({ children, className }: InfoTableProps) {
  return (
    <div className={cn('divide-y divide-border/50', className)}>{children}</div>
  )
}

interface InfoTableRowProps {
  items: Array<{ label: string; value?: React.ReactNode; span?: number }>
  className?: string
}

export function InfoTableRow({ items, className }: InfoTableRowProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-4 lg:grid-cols-8 gap-x-1 py-2 text-sm',
        className,
      )}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="text-muted-foreground text-[10px] uppercase font-medium tracking-wide">
            {item.label}
          </div>
          <div
            className={cn('text-foreground', item.span === 2 && 'col-span-3')}
          >
            {item.value || ''}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

// Simple inline label-value display
interface InfoRowProps {
  label: string
  value?: React.ReactNode
  className?: string
}

export function InfoRow({ label, value, className }: InfoRowProps) {
  return (
    <div
      className={cn(
        'flex items-baseline gap-4 py-1.5 border-b border-border/30 last:border-0',
        className,
      )}
    >
      <span className="text-muted-foreground text-[10px] uppercase font-medium tracking-wide w-32 shrink-0">
        {label}
      </span>
      <span className="text-foreground text-sm">{value || '--'}</span>
    </div>
  )
}

// Grid for document header info fields - matches reference table format
interface DocInfoGridProps {
  children: React.ReactNode
  className?: string
}

export function DocInfoGrid({ children, className }: DocInfoGridProps) {
  return (
    <div className={cn('divide-y divide-border/40', className)}>{children}</div>
  )
}

interface DocInfoRowProps {
  items: Array<{ label: string; value?: React.ReactNode }>
  className?: string
}

export function DocInfoRow({ items, className }: DocInfoRowProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 py-1.5',
        className,
      )}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="text-muted-foreground text-[10px] uppercase font-medium px-1">
            {item.label}
          </div>
          <div className="text-foreground text-sm px-1">{item.value || ''}</div>
        </React.Fragment>
      ))}
    </div>
  )
}
