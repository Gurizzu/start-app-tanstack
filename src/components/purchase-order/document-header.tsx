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
  className
}: ApprovalBadgeProps) {
  const variants = {
    default: 'bg-muted text-muted-foreground border-border',
    warning: 'bg-warning-muted text-foreground border-warning',
    info: 'bg-info-muted text-foreground border-info'
  }

  return (
    <div className={cn(
      'flex flex-col rounded-md border-l-4 px-3 py-1.5 text-sm bg-card shadow-sm',
      variants[variant],
      className
    )}>
      <span className="font-semibold text-sm">{name}</span>
      <span className="text-xs text-muted-foreground">{role}</span>
      {date && <span className="text-xs text-muted-foreground">{date}</span>}
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
    <div className={cn('flex flex-wrap items-stretch gap-3 mb-4', className)}>
      {approvers.map((approver, index) => (
        <React.Fragment key={index}>
          <ApprovalBadge {...approver} />
          {index < approvers.length - 1 && (
            <div className="hidden sm:flex items-center">
              <div className="h-0 w-4 border-t border-dashed border-muted-foreground/40" />
              <div className="h-0 w-0 border-l-4 border-y-4 border-l-muted-foreground/40 border-y-transparent" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
