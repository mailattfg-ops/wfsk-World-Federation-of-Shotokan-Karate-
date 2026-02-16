'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

interface Category {
    key: string;
    title: string;
}

interface CategoryDropdownProps {
    categories: Record<string, { title: string }>;
    currentCategory: string;
}

export function CategoryDropdown({ categories, currentCategory }: CategoryDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const currentTitle = categories[currentCategory]?.title || 'Select Category';

    const handleSelect = (key: string) => {
        setIsOpen(false);
        // We use Link for navigation, but we can also push to router if needed for some reason.
        // The Link component in the dropdown menu will handle the actual navigation.
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-5 py-4 bg-white border border-zinc-200 rounded-2xl shadow-sm active:scale-[0.99] transition-all"
            >
                <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-600"></span>
                    <span className="text-xs font-black uppercase tracking-widest text-[#111111]">{currentTitle}</span>
                </div>
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><path d="m6 9 6 6 6-6" /></svg>
                </div>
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 right-0 mt-2 bg-[#111111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 origin-top z-40 ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <div className="py-2">
                    {Object.entries(categories).map(([key, info]) => (
                        <Link
                            key={key}
                            href={`?category=${key}`}
                            onClick={() => handleSelect(key)}
                            className={`flex items-center justify-between px-5 py-3 hover:bg-white/5 transition-colors group ${currentCategory === key ? 'bg-white/10' : ''}`}
                        >
                            <span className={`text-[10px] font-black uppercase tracking-widest ${currentCategory === key ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
                                {info.title}
                            </span>
                            {currentCategory === key && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><polyline points="20 6 9 17 4 12" /></svg>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
