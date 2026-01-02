import * as React from 'react'
import { cn } from '@/lib/utils'

interface ApprovalBadgeProps {
  name: string
  role: string
  variant?: 'creator' | 'approved' | 'pending' | 'default'
  className?: string
}

export function ApprovalBadge({
  name,
  role,
  variant = 'default',
  className,
}: ApprovalBadgeProps) {
  const variants = {
    creator:
      'border-blue-500 bg-blue-500 text-white dark:border-blue-600 dark:bg-blue-600',
    approved:
      'border-emerald-500 bg-emerald-50/50 text-emerald-700 dark:bg-emerald-950/20 dark:border-emerald-800 dark:text-emerald-400',
    pending:
      'border-amber-400 bg-amber-50/50 text-amber-700 dark:bg-amber-950/20 dark:border-amber-800 dark:text-amber-400',
    default:
      'border-dashed border-gray-300 bg-transparent text-gray-500 dark:border-gray-700 dark:text-gray-400',
  }

  return (
    <div
      className={cn(
        'flex flex-col justify-center rounded-sm border px-4 py-2.5 text-sm min-w-[140px] h-[60px]',
        variants[variant],
        className,
      )}
    >
      <span className="font-bold text-[13px] leading-tight mb-0.5">{name}</span>
      <span className="text-[11px] leading-tight opacity-90">{role}</span>
    </div>
  )
}

interface DocumentHeaderProps {
  approvers: Array<{
    name: string
    role: string
    variant?: 'creator' | 'approved' | 'pending' | 'default'
  }>
  className?: string
}

export function DocumentHeader({ approvers, className }: DocumentHeaderProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-0 mb-6', className)}>
      {approvers.map((approver, index) => (
        <React.Fragment key={index}>
          <ApprovalBadge {...approver} />
          {index < approvers.length - 1 && (
            <div className="flex items-center px-1">
              <div className="w-8 h-[1px] bg-border" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
