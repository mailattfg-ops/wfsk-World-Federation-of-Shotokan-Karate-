import Image from "next/image";
import Link from "next/link";
import { JapaneseHeading } from "./ui/JapaneseHeading";

export function Footer() {
    return (
        <footer className="w-full bg-[#E5E5E5] py-6 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_0.8fr] gap-x-8 gap-y-12 pb-12">

                {/* Left Column - Brand & Info */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-0 md:space-y-6 w-full px-2 sm:px-0 md:col-span-2 lg:col-span-1">

                    {/* MOBILE/TABLET BRANDING (Centered Row) */}
                    <div className="lg:hidden flex flex-col items-center max-w-full">
                        <div className="flex flex-row items-center gap-3 w-full justify-center mt-1">
                            {/* Logo - Sized to 65x52px on mobile */}
                            <div className="relative w-[55px] h-[44px] sm:w-[65px] sm:h-[52px] shrink-0">
                                <Image
                                    src="/images/logo.png"
                                    alt="WFSK Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Text Columns - Top English (13px), Bottom Japanese (14px) */}
                            <div className="flex flex-col items-start justify-center py-0.5 overflow-hidden">
                                <h2 className="text-[11px] sm:text-[13px] md:text-lg font-extrabold text-[#111111] font-(family-name:--font-geist-sans) leading-none tracking-tight text-left whitespace-nowrap">
                                    WORLD FEDERATION OF SHOTOKAN KARATE
                                </h2>

                                <div className="flex items-center w-full mt-0.5 sm:mt-1">
                                    <div className="h-px bg-[#FF0000] grow" />
                                    <span className="text-[12px] sm:text-[14px] text-[#FF0000] font-bold tracking-[0.15em] shrink-0 px-1 leading-none">
                                        世 界 松 濤 館 空 手 連 盟
                                    </span>
                                    <div className="h-px bg-[#FF0000] grow" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DESKTOP BRANDING (Original Design Restored) */}
                    <div className="hidden lg:flex flex-col items-start space-y-4">
                        <div className="flex flex-row items-center gap-4 w-full">
                            {/* Logo */}
                            <div className="relative w-24 h-24 shrink-0">
                                <Image
                                    src="/images/logo.png"
                                    alt="WFSK Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            {/* Text Block */}
                            <div className="flex flex-col items-start">
                                <h2 className="text-xl font-bold text-black font-(family-name:--font-belanosima) leading-tight tracking-tight text-left">
                                    WORLD FEDERATION OF SHOTOKAN KARATE
                                </h2>
                                {/* Japanese Text with Solid Lines */}
                                <JapaneseHeading
                                    text="世 界 松 濤 館 空 手 連 盟"
                                    className="text-lg font-bold pb-[2px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Copyright & Socials */}
                    <div className="flex flex-col items-center lg:items-start w-full lg:pl-28 pt-2">
                        <p className="text-gray-500 text-xs font-(family-name:--font-geist-sans) mb-3 text-center lg:text-left">
                            © 2025, WFSK. All Rights Reserved.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <Link href="#" className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Center Column - Contact Info */}
                <div className="flex flex-col items-center md:items-start gap-2 lg:gap-8 md:gap-6 pt-0 md:pt-2 md:pl-8">
                    <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-[#111111] uppercase tracking-wide font-(family-name:--font-inter) font-bold md:font-semibold text-xl md:text-3xl leading-tight">ADDRESS</h3>
                        <p className="text-gray-500 font-(family-name:--font-geist-sans) text-base leading-relaxed max-w-[280px] font-medium">
                            Office 210, Al Serkal Avenue, Al Quoz Industrial Area 1, Dubai, United Arab Emirates
                        </p>
                    </div>
                    <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-[#111111] uppercase tracking-wide font-(family-name:--font-inter) font-bold md:font-semibold text-xl md:text-3xl leading-tight">PHONE</h3>
                        <p className="text-gray-500 font-(family-name:--font-geist-sans) text-base font-medium">
                            +971 4 123 4567
                        </p>
                    </div>
                </div>

                {/* Right Column - Navigation */}
                <div className="flex flex-col items-center md:items-start gap-4 sm:gap-5 pt-0 md:pt-2">
                    <Link href="/about" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-bold md:font-semibold text-xl md:text-2xl lg:text-3xl leading-tight">
                        ABOUT
                    </Link>
                    <Link href="/packages" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-bold md:font-semibold text-xl md:text-2xl lg:text-3xl leading-tight">
                        PACKAGES
                    </Link>
                    <Link href="/blog" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-bold md:font-semibold text-xl md:text-2xl lg:text-3xl leading-tight">
                        BLOG
                    </Link>
                    <Link href="/contact" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-bold md:font-semibold text-xl md:text-2xl lg:text-3xl leading-tight">
                        CONTACT
                    </Link>
                </div>

            </div>
        </footer>
    );
}
