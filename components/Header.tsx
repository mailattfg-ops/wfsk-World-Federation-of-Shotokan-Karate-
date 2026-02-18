"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { JapaneseHeading } from "./ui/JapaneseHeading";
import { APP_NAME, JAPANESE_NAME } from "@/lib/constants";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className={`fixed top-4 sm:top-6 left-0 w-full px-2 sm:px-6 z-50 flex justify-between items-center pointer-events-none transition-all duration-300 ${scrolled ? "top-2 sm:top-4" : ""}`}>
                {/* Mobile & Tablet: Single Merged Bar (lg:hidden) */}
                <div className="lg:hidden bg-[#111111]/90 backdrop-blur-md rounded-lg px-2 sm:px-6 flex items-center justify-between shadow-2xl border border-white/5 pointer-events-auto h-[54px] sm:h-[60px] grow overflow-hidden">
                    <Link href="/" className="flex items-center gap-1.5 sm:gap-3 min-w-0 shrink">
                        <div className="relative w-10 h-10 sm:w-11 md:w-14 sm:h-11 md:h-14 shrink-0">
                            <Image src="/images/logo.png" alt="WFSK Logo" fill className="object-contain" />
                        </div>
                        <div className="flex flex-col items-stretch justify-center min-w-0 shrink">
                            <span className="text-white text-[8.5px] sm:text-[11px] md:text-[13px] font-bold tracking-wide uppercase whitespace-nowrap overflow-hidden text-ellipsis leading-tight block">
                                {APP_NAME}
                            </span>
                            <JapaneseHeading text={JAPANESE_NAME} className="text-[6.5px] sm:text-[9px] md:text-[12px]" />
                        </div>
                    </Link>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex text-white shrink-0 p-1.5"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        )}
                    </button>
                </div>

                {/* Desktop: Separate Islands (hidden lg:flex) */}
                <div className="hidden lg:flex items-center justify-between w-full pointer-events-none">
                    {/* Left Branding Island */}
                    <div className="bg-[#111111]/90 backdrop-blur-md rounded-lg pl-3 pr-8 flex items-center shadow-2xl border border-white/5 pointer-events-auto h-[66px]">
                        <Link href="/" className="flex items-center">
                            <div className="relative w-14 h-14 xl:w-16 xl:h-16 shrink-0">
                                <Image src="/images/logo.png" alt="WFSK Logo" fill className="object-contain" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-white text-[15px] font-bold tracking-wide uppercase leading-tight block">
                                    {APP_NAME}
                                </span>
                                <JapaneseHeading text={JAPANESE_NAME} className="text-[13px]" />
                            </div>
                        </Link>
                    </div>

                    {/* Right Navigation Island */}
                    <div className="bg-[#111111]/90 backdrop-blur-md rounded-lg px-8 flex items-center shadow-2xl border border-white/5 pointer-events-auto h-[66px]">
                        <nav className="flex items-center gap-10 text-[15px] text-zinc-300 font-medium tracking-wide">
                            <Link href="/branches" className="hover:text-white transition-colors">Our Branches</Link>
                            <Link href="/news" className="hover:text-white transition-colors">News & Events</Link>
                            <Link href="/black-belts" className="hover:text-white transition-colors">Black Belts</Link>
                            <Link href="/team" className="hover:text-white transition-colors">Our Team</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-60 transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Drawer Content */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-[#0A0A0A] border-l border-white/5 z-70 transition-transform duration-300 lg:hidden flex flex-col ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-end mb-8">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-zinc-400 hover:text-white p-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6">
                        <Link href="/branches" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-white tracking-tight">
                            Our Branches
                        </Link>
                        <Link href="/news" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-white tracking-tight">
                            News & Events
                        </Link>
                        <Link href="/black-belts" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-white tracking-tight">
                            Black Belts
                        </Link>
                        <Link href="/team" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-white tracking-tight">
                            Our Team
                        </Link>
                    </nav>

                    <div className="mt-auto pb-8">
                        <div className="relative w-16 h-16 opacity-50 mb-1">
                            <Image src="/images/logo.png" alt="WFSK Logo" fill className="object-contain grayscale" />
                        </div>
                        <p className="text-zinc-500 text-sm tracking-widest uppercase">
                            World Federation of<br />Shotokan Karate
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

