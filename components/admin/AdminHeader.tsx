'use client'

import Image from 'next/image'

interface AdminHeaderProps {
    onMenuClick: () => void;
}

export function AdminHeader({ onMenuClick }: AdminHeaderProps) {
    return (
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 lg:px-8 border-b border-gray-100 lg:hidden">
            <div className="flex items-center gap-3">
                <div className="relative w-8 h-8">
                    <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
                </div>
                <div className="flex flex-col">
                    <span className="font-black text-[10px] uppercase tracking-tighter leading-none">Admin Control</span>
                    <span className="text-[8px] font-bold text-red-600 uppercase tracking-widest">Federation HQ</span>
                </div>
            </div>

            <button
                onClick={onMenuClick}
                className="p-2.5 bg-[#111111] text-white rounded-xl shadow-lg active:scale-95 transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
        </header>
    )
}
