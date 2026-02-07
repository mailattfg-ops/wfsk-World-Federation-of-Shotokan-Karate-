"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { JapaneseHeading } from "./ui/JapaneseHeading";

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

    return (
        <>
            <header className={`fixed top-4 sm:top-6 left-0 w-full px-2 sm:px-8 z-50 flex justify-between items-center pointer-events-none transition-all duration-300 ${scrolled ? "top-2 sm:top-4" : ""}`}>
                {/* Mobile: Single Island / Desktop: Left Island */}
                <div className="bg-[#111111]/90 backdrop-blur-md rounded-lg pl-2 sm:pl-3 pr-2 sm:pr-8 flex items-center shadow-2xl border border-white/5 pointer-events-auto h-[54px] sm:h-[60px] grow md:grow-0 overflow-hidden mx-1 sm:mx-0">
                    <div className="flex items-center justify-between w-full gap-1">
                        <Link href="/" className="flex items-center gap-1.5 sm:gap-3 min-w-0 shrink">
                            {/* Logo */}
                            <div className="relative w-8 h-8 sm:w-14 sm:h-14 shrink-0">
                                <Image
                                    src="/images/logo.png"
                                    alt="WFSK Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Text Block */}
                            <div className="flex flex-col items-start justify-center min-w-0 shrink">
                                <span className="text-white text-[8.5px] sm:text-[13px] font-bold tracking-wide uppercase whitespace-nowrap overflow-hidden text-ellipsis leading-tight block">
                                    World Federation of Shotokan Karate
                                </span>
                                <JapaneseHeading text="世界 松 濤 館 空 手 連 盟" className="text-[6.5px] sm:text-[12px]" />
                            </div>
                        </Link>

                        {/* Mobile Toggle Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex md:hidden text-white shrink-0 p-1.5"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Desktop Right Island - Only visible on MD and up */}
                <div className="hidden md:flex bg-[#111111]/90 backdrop-blur-md rounded-lg px-8 items-center shadow-2xl border border-white/5 pointer-events-auto h-[60px]">
                    <nav className="flex items-center gap-8 text-[15px] text-zinc-300 font-medium tracking-wide">
                        <Link href="/branches" className="hover:text-white transition-colors">
                            Our Branches
                        </Link>

                        <Link href="/black-belts" className="hover:text-white transition-colors">
                            Black Belts
                        </Link>
                        <Link href="/team" className="hover:text-white transition-colors">
                            Our Team
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Mobile Drawer Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-60 transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Drawer Content */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-[#0A0A0A] border-l border-white/5 z-70 transition-transform duration-300 md:hidden flex flex-col ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
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
                        <Link href="/black-belts" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-white tracking-tight">
                            Black Belts
                        </Link>
                        <Link href="/team" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-white tracking-tight">
                            Our Team
                        </Link>
                    </nav>

                    <div className="mt-auto pb-8">
                        <div className="relative w-16 h-16 opacity-50 mb-4">
                            <Image src="/images/logo.png" alt="WFSK Logo" fill className="object-contain grayscale" />
                        </div>
                        <p className="text-zinc-500 text-xs tracking-widest uppercase">
                            World Federation of<br />Shotokan Karate
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

