import * as React from 'react'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Navbar />
                <main className="flex-1 overflow-auto p-4 md:p-6 bg-muted/40">
                    {children}
                </main>
            </div>
        </div>
    )
}
