import Image from "next/image";
import Link from "next/link";
import { JapaneseHeading } from "./ui/JapaneseHeading";

export function Footer() {
    return (
        <footer className="w-full bg-[#E5E5E5] py-12 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_0.8fr] gap-x-8 gap-y-12">

                {/* Left Column - Brand & Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                    <div className="flex items-center gap-4 w-full">
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
                        <div className="flex flex-col">
                            <h2 className="text-xl sm:text-2xl font-bold text-black font-(family-name:--font-belanosima) leading-none tracking-tight whitespace-nowrap">
                                WORLD FEDERATION OF SHOTOKAN KARATE
                            </h2>
                            {/* Japanese Text with Solid Lines */}
                            <JapaneseHeading
                                text="世 界 松 濤 館 空 手 連 盟"
                                className="text-lg font-bold pb-[2px]"
                            />
                        </div>
                    </div>

                    {/* Copyright & Socials - Centered Relative to Brand Block */}
                    <div className="flex flex-col items-center w-full pl-0 md:pl-28 pt-2">
                        <p className="text-gray-500 text-xs font-(family-name:--font-geist-sans) mb-3 text-center">
                            © 2025, WFSK. All Rights Reserved.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center justify-center gap-3">
                            <Link href="#" className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-black transition-colors">
                                {/* Globe Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-black transition-colors">
                                {/* LinkedIn Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-black transition-colors">
                                {/* Instagram Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Center Column - Contact Info */}
                <div className="flex flex-col gap-6 pt-2 pl-0 md:pl-8">
                    <div className="space-y-3">
                        <h3 className="text-[#111111] uppercase tracking-wide font-(family-name:--font-inter) font-semibold text-3xl leading-tight">ADDRESS</h3>
                        <p className="text-gray-500 font-(family-name:--font-geist-sans) text-base leading-relaxed max-w-[280px] font-medium">
                            Office 210, Al Serkal Avenue, Al Quoz Industrial Area 1, Dubai, United Arab Emirates
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-[#111111] uppercase tracking-wide font-(family-name:--font-inter) font-semibold text-3xl leading-tight">PHONE</h3>
                        <p className="text-gray-500 font-(family-name:--font-geist-sans) text-base font-medium">
                            +971 4 123 4567
                        </p>
                    </div>
                </div>

                {/* Right Column - Navigation */}
                <div className="flex flex-col gap-5 pt-2">
                    <Link href="/about" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-semibold text-3xl leading-tight">
                        ABOUT
                    </Link>
                    <Link href="/packages" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-semibold text-3xl leading-tight">
                        PACKAGES
                    </Link>
                    <Link href="/blog" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-semibold text-3xl leading-tight">
                        BLOG
                    </Link>
                    <Link href="/contact" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-semibold text-3xl leading-tight">
                        CONTACT
                    </Link>
                </div>

            </div>
        </footer>
    );
}
