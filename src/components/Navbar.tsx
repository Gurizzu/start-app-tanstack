import { ChevronRight, Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function Navbar() {
    return (
        <header className="h-14 border-b bg-background flex items-center px-6 justify-between shrink-0">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <span className="text-orange-500">📄</span>
                    Purchase Orders
                    <ChevronRight className="h-4 w-4" />
                </div>
                <h1 className="text-sm font-bold text-foreground">PO01-2601-0002</h1>
            </div>

            <div className="flex items-center gap-2">
                {/* Top right actions if needed */}
            </div>
        </header>
    )
}
