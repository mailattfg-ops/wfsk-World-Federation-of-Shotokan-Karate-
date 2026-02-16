'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { APP_NAME } from '@/lib/constants'

interface AdminSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
    const pathname = usePathname()

    const navLinks = [
        { href: '/admin', label: 'Overview', activeDot: true },
        { href: '/admin/team', label: 'Team Members', activeDot: true },
        { href: '/admin/branches', label: 'Branches', activeDot: true },
        { href: '/admin/news', label: 'News & Events', activeDot: true },
        { href: '/admin/world-record', label: 'World Record', activeDot: true },
    ]

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Container */}
            <aside className={`fixed lg:static inset-y-0 left-0 w-64 bg-[#111111] text-white z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'} flex flex-col`}>
                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                    <div>
                        <div className="flex items-center mb-2 gap-1">
                            <div className="relative w-8 h-8">
                                <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
                            </div>
                            <span className="font-bold text-sm tracking-tight uppercase">WFSK</span>
                        </div>
                        {/* <p className="text-[10px] text-zinc-400 uppercase tracking-widest leading-none">
                            {APP_NAME}
                        </p> */}
                    </div>
                    {/* Close button for mobile */}
                    <button onClick={onClose} className="lg:hidden text-white/40 hover:text-white p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto no-scrollbar">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => onClose()}
                                className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-all text-sm font-bold uppercase tracking-tight group ${isActive
                                    ? "bg-white/10 text-white shadow-inner"
                                    : "text-zinc-500 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                {link.label}
                                {isActive && link.activeDot && (
                                    <span className="w-1 h-1 rounded-full bg-red-600 animate-ping"></span>
                                )}
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <form action="/admin/logout" method="post">
                        <button className="w-full px-4 py-3 text-left hover:bg-red-500/10 text-red-500/60 hover:text-red-500 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest">
                            Sign Out
                        </button>
                    </form>
                </div>
            </aside>
        </>
    )
}
