import { Home, Package, FileText, Settings, Users, Folder, BarChart2, Bell, Search, Hexagon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Sidebar() {
    return (
        <aside className="hidden md:flex flex-col w-16 bg-[#0f172a] text-white items-center py-4 gap-6">
            <div className="mb-4">
                <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center">
                    <Hexagon className="h-5 w-5 text-white fill-current" />
                </div>
            </div>

            <nav className="flex flex-col gap-6 w-full items-center">
                <NavItem icon={<Home className="h-5 w-5" />} active />
                <NavItem icon={<FileText className="h-5 w-5" />} />
                <NavItem icon={<Package className="h-5 w-5" />} />
                <NavItem icon={<Users className="h-5 w-5" />} />
                <NavItem icon={<Folder className="h-5 w-5" />} />
                <NavItem icon={<BarChart2 className="h-5 w-5" />} />
            </nav>

            <div className="mt-auto flex flex-col gap-6 w-full items-center mb-4">
                <NavItem icon={<Search className="h-5 w-5" />} />
                <NavItem icon={<Bell className="h-5 w-5" />} />
                <NavItem icon={<Settings className="h-5 w-5" />} />
                <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center">
                    <span className="text-xs font-bold">MC</span>
                </div>
            </div>
        </aside>
    )
}

function NavItem({ icon, active }: { icon: React.ReactNode, active?: boolean }) {
    return (
        <button className={cn(
            "p-2 rounded-lg transition-colors hover:bg-white/10",
            active && "bg-white/20 text-blue-400"
        )}>
            {icon}
        </button>
    )
}
