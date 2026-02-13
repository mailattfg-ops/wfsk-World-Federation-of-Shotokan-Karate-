import Image from "next/image";
import Link from "next/link";
import { JapaneseHeading } from "./ui/JapaneseHeading";
import { APP_NAME, JAPANESE_NAME } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="w-full bg-[#E5E5E5] py-6 px-2 sm:px-4">
            <div className="max-w-7xl mx-auto xl:max-w-none xl:mx-0 xl:px-12 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_0.8fr] lg:grid-cols-[2fr_1fr_0.8fr] xl:grid-cols-[0.8fr_1.2fr_1fr] gap-x-2 md:gap-x-4 lg:gap-x-8 gap-y-12 pb-12">

                {/* Left Column - Brand & Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-0 md:space-y-6 w-full px-1 sm:px-0 md:pl-4 xl:pl-0 xl:pt-6 lg:col-span-1">

                    {/* MOBILE/TABLET BRANDING (Centered Row) */}
                    <div className="lg:hidden flex flex-col items-center md:items-start max-w-full">
                        <div className="flex flex-row items-center gap-0 w-full justify-center md:justify-start mt-1">
                            {/* Logo - Sized to 65x52px on mobile, 75x60px on sm */}
                            <div className="relative shrink-0">
                                <Image
                                    src="/images/logo.png"
                                    alt="WFSK Logo"
                                    width={80}
                                    height={64}
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Text Columns - Top English (13px), Bottom Japanese (14px) */}
                            <div className="flex flex-col items-start justify-center py-0.5 overflow-hidden">
                                <div className="w-fit">
                                    <h2 className="text-[13px] sm:text-[15px] md:text-[15px] lg:text-lg font-extrabold text-[#111111] font-(family-name:--font-geist-sans) leading-none tracking-tight text-left whitespace-nowrap">
                                        {APP_NAME.toUpperCase()}
                                    </h2>

                                    <div className="flex items-center w-full mt-0.5 sm:mt-1">
                                        <div className="h-px bg-[#FF0000] grow" />
                                        <span className="text-[14px] sm:text-[16px] md:text-[10px] lg:text-[14px] text-[#FF0000] font-bold tracking-[0.15em] shrink-0 px-1 leading-none">
                                            {JAPANESE_NAME}
                                        </span>
                                        <div className="h-px bg-[#FF0000] grow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DESKTOP BRANDING (Original Design Restored) */}
                    <div className="hidden lg:flex flex-col items-start w-full">
                        {/* Row for Logo and Text - Vertically Centered */}
                        <div className="flex flex-row items-center w-full">
                            {/* Logo - Sized down to prevent "big" look, added safety margin for "cutted" issue */}
                            <div className="relative shrink-0">
                                <Image
                                    src="/images/logo.png"
                                    alt="WFSK Logo"
                                    width={90}
                                    height={90}
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Text Titles Block - Wrapped in w-fit to ensure JapaneseHeading matches English Title width */}
                            <div className="flex flex-col items-start w-fit">
                                <h1 className="text-lg xl:text-2xl font-bold text-black font-(family-name:--font-cal-sans) leading-tight tracking-tight text-left whitespace-nowrap">
                                    {APP_NAME.toUpperCase()}
                                </h1>
                                <JapaneseHeading
                                    text={JAPANESE_NAME}
                                    className="text-lg xl:text-2xl font-bold pb-px"
                                />
                            </div>
                        </div>

                        {/* Copyright & Socials Area - Unified responsive block */}
                        <div className="hidden lg:flex flex-col items-start xl:items-center w-full pt-2 xl:pl-32">
                            <p className="text-gray-500 text-xs xl:text-sm font-(family-name:--font-geist-sans) mb-3 xl:mb-2 text-left xl:text-center">
                                © 2025, WFSK. All Rights Reserved.
                            </p>
                            <div className="flex items-center justify-start xl:justify-center gap-3">
                                <Link href="#" className="w-10 h-10 xl:w-9 xl:h-9 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-black transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="xl:w-[18px] xl:h-[18px]"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                                </Link>
                                <Link href="#" className="w-10 h-10 xl:w-9 xl:h-9 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-black transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="xl:w-[18px] xl:h-[18px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                </Link>
                                <Link href="#" className="w-10 h-10 xl:w-9 xl:h-9 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-black transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="xl:w-[18px] xl:h-[18px]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center Column - Contact Info */}
                <div className="flex flex-col items-center md:items-start gap-2 lg:gap-8 md:gap-4 pt-0 md:pt-2 xl:pl-32">
                    <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-[#111111] uppercase tracking-wide font-(family-name:--font-inter) font-bold md:font-semibold text-lg md:text-base lg:text-3xl leading-tight">ADDRESS</h3>
                        <p className="text-gray-500 font-(family-name:--font-geist-sans) text-base leading-relaxed max-w-[280px] font-medium">
                            Office 210, Al Serkal Avenue, Al Quoz Industrial Area 1, Dubai, United Arab Emirates
                        </p>
                    </div>
                    <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-[#111111] uppercase tracking-wide font-(family-name:--font-inter) font-bold md:font-semibold text-lg md:text-base lg:text-3xl leading-tight">PHONE</h3>
                        <p className="text-gray-500 font-(family-name:--font-geist-sans) text-base font-medium">
                            +971 4 123 4567
                        </p>
                    </div>
                </div>

                {/* Right Column - Navigation */}
                <div className="flex flex-col items-center md:items-start gap-4 sm:gap-5 pt-0 md:pt-2">
                    <Link href="/about" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-bold md:font-semibold text-lg md:text-base lg:text-3xl leading-tight">
                        ABOUT
                    </Link>
                    <Link href="/packages" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-bold md:font-semibold text-lg md:text-base lg:text-3xl leading-tight">
                        PACKAGES
                    </Link>
                    <Link href="/news" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-bold md:font-semibold text-lg md:text-base lg:text-3xl leading-tight">
                        NEWS & EVENTS
                    </Link>
                    <Link href="/contact" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-bold md:font-semibold text-lg md:text-base lg:text-3xl leading-tight">
                        CONTACT
                    </Link>
                </div>

            </div>
        </footer>
    );
}
