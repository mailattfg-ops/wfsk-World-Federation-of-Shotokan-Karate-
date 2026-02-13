'use client'

import { useState } from 'react'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { AdminHeader } from '@/components/admin/AdminHeader'

export default function AdminLayoutClient({
    children,
}: {
    children: React.ReactNode
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-zinc-50 flex overflow-hidden">
            {/* Shared Sidebar Component */}
            <AdminSidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                {/* Mobile Header with Toggle */}
                <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} />

                {/* Dynamic Content Area */}
                <div className="p-4 lg:p-8 overflow-y-auto h-full no-scrollbar">
                    {children}
                </div>
            </main>
        </div>
    )
}
