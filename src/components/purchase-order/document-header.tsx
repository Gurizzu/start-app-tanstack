import * as React from 'react'
import { cn } from '@/lib/utils'

interface ApprovalBadgeProps {
  name: string
  role: string
  date?: string
  variant?: 'default' | 'warning' | 'info'
  className?: string
}

export function ApprovalBadge({
  name,
  role,
  date,
  variant = 'default',
  className,
}: ApprovalBadgeProps) {
  const variants = {
    default: 'bg-muted text-muted-foreground border-border',
    warning: 'bg-warning-muted text-warning-muted-foreground border-warning/30',
    info: 'bg-info-muted text-info-muted-foreground border-info/30',
  }

  return (
    <div
      className={cn(
        'flex flex-col rounded-md border px-3 py-2 text-sm',
        variants[variant],
        className,
      )}
    >
      <span className="font-semibold">{name}</span>
      <span className="text-xs opacity-80">{role}</span>
      {date && <span className="text-xs opacity-60 mt-0.5">{date}</span>}
    </div>
  )
}

interface DocumentHeaderProps {
  approvers: Array<{
    name: string
    role: string
    date?: string
    variant?: 'default' | 'warning' | 'info'
  }>
  className?: string
}

export function DocumentHeader({ approvers, className }: DocumentHeaderProps) {
  return (
    <div
      className={cn('rounded-lg border border-border bg-card p-4', className)}
    >
      <div className="flex flex-wrap items-stretch gap-2">
        {approvers.map((approver, index) => (
          <React.Fragment key={index}>
            <ApprovalBadge {...approver} />
            {index < approvers.length - 1 && (
              <div className="hidden sm:flex items-center">
                <div className="h-px w-6 bg-border" />
                <div className="h-2 w-2 rotate-45 border-r border-t border-border" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
