import { ChevronDown, Menu, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface PageHeaderProps {
  userName: string
  organization?: string
  poNumber: string
  onToggleSidebar?: () => void
  showSidebarToggle?: boolean
  theme?: 'light' | 'dark'
  onToggleTheme?: () => void
  className?: string
}

export function PageHeader({
  userName,
  organization = 'MBSS',
  poNumber,
  onToggleSidebar,
  showSidebarToggle = false,
  theme = 'light',
  onToggleTheme,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        'flex items-center justify-between px-4 py-2 border-b border-border bg-card sticky top-0 z-50',
        className,
      )}
    >
      <div className="flex items-center gap-4">
        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2 h-9">
              <div className="h-7 w-7 rounded-full bg-info flex items-center justify-center text-info-foreground text-sm font-medium">
                {userName.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-medium hidden sm:inline">
                {userName}
              </span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Organization */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-1 h-9 text-sm">
              {organization}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>MBSS</DropdownMenuItem>
            <DropdownMenuItem>Other Org</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-warning flex items-center gap-1">
          <span className="h-4 w-4">📋</span>
          Purchase Orders
        </span>
        <span className="text-muted-foreground">/</span>
        <span className="font-medium text-foreground">{poNumber}</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleTheme}
          className="h-9 w-9"
        >
          {theme === 'light' ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </Button>

        {showSidebarToggle && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="h-9 w-9 lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </Button>
        )}
      </div>
    </header>
  )
}
