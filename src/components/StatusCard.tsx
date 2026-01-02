import { cn } from "@/lib/utils"

interface StatusCardProps {
    role: string
    name?: string
    date?: string
    status?: string
    variant?: 'default' | 'active' | 'outline'
    className?: string
}

export function StatusCard({ role, name, date, status, variant = 'default', className }: StatusCardProps) {
    return (
        <div className={cn(
            "flex flex-col p-3 rounded-lg border min-w-[180px] text-sm",
            variant === 'active' && "bg-[#FFF9E6] border-[#FFD700]",
            variant === 'default' && "bg-background border-border",
            variant === 'outline' && "bg-transparent border-dashed border-muted-foreground/30",
            className
        )}>
            <span className="font-semibold text-xs text-muted-foreground uppercase">{role}</span>
            {name && <span className="font-bold mt-1 text-foreground">{name}</span>}
            {status && <span className="text-xs text-muted-foreground mt-0.5">{status}</span>}
            {date && <span className="text-xs text-muted-foreground">{date}</span>}
        </div>
    )
}
