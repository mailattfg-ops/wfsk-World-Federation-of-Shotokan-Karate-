import Image from "next/image";
import Link from "next/link";
import { JapaneseHeading } from "./ui/JapaneseHeading";
import { APP_NAME, JAPANESE_NAME } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="w-full bg-[#E5E5E5] py-6 px-2 sm:px-4">
            <div className="max-w-7xl mx-auto xl:max-w-none xl:mx-0 xl:px-12 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr_1fr] gap-y-4 xl:gap-y-12 pb-4 xl:pb-12 text-center xl:text-left">

                {/* Left Column - Brand & Info */}
                <div className="flex flex-col items-center xl:items-start w-full px-1 sm:px-0 xl:pl-0 xl:pt-6">

                    {/* MOBILE/TABLET BRANDING (Centered Row) - Visible up to LG (exclusive) i.e. hidden on LG+ */}
                    <div className="lg:hidden flex flex-col items-center max-w-full">
                        <div className="flex flex-row items-center gap-2 w-full justify-center mt-1">
                            <div className="relative shrink-0">
                                <Image
                                    src="/images/logo.png"
                                    alt="WFSK Logo"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Text Columns */}
                            <div className="flex flex-col items-start justify-center py-0.5 overflow-hidden">
                                <div className="w-fit">
                                    <h2 className="text-[9px] sm:text-[15px] font-extrabold text-[#111111] font-(family-name:--font-geist-sans) leading-none tracking-tight text-left whitespace-nowrap">
                                        {APP_NAME.toUpperCase()}
                                    </h2>

                                    <div className="flex items-center w-full mt-0.5 sm:mt-1">
                                        <div className="h-px bg-[#FF0000] grow" />
                                        <span className="text-[10px] sm:text-[12px] text-[#FF0000] font-bold tracking-[0.15em] shrink-0 px-1 leading-none">
                                            {JAPANESE_NAME}
                                        </span>
                                        <div className="h-px bg-[#FF0000] grow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DESKTOP BRANDING (Original Design) - Visible only on LG+ */}
                    <div className="hidden lg:flex flex-col items-start w-full">
                        <div className="flex flex-row items-center w-full">
                            <div className="relative shrink-0 w-[60px] h-[60px] xl:w-[90px] xl:h-[90px] mr-2 xl:mr-0">
                                <Image
                                    src="/images/logo.png"
                                    alt="WFSK Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

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

                        <div className="flex flex-col items-start lg:items-center w-full pt-2 xl:pl-32">
                            <p className="text-gray-500 text-sm font-(family-name:--font-geist-sans) mb-2 text-center">
                                © 2025, WFSK. All Rights Reserved.
                            </p>
                            <div className="flex items-center justify-center gap-3">
                                <Link
                                    href="https://www.instagram.com/wfsk_official?igsh=Z2p1cDBibDM5emx1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-[#E1306C] transition-colors"
                                    aria-label="Instagram"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center xl:items-start gap-4 xl:pl-32">
                    <div className="space-y-2 flex flex-col items-center xl:items-start">
                        <h3 className="text-[#111111] uppercase tracking-wide font-(family-name:--font-inter) font-bold text-base lg:text-xl xl:text-3xl leading-tight">ADDRESS</h3>
                        <p className="text-gray-500 font-(family-name:--font-geist-sans) text-sm lg:text-base leading-relaxed max-w-[280px] font-medium">
                            Wfsk Head Office, Zulu Tower, Puthukulangara P.O Edassery, Thrissur, Kerala, India, 680569
                        </p>
                    </div>
                    <div className="space-y-2 flex flex-col items-center xl:items-start">
                        <h3 className="text-[#111111] uppercase tracking-wide font-(family-name:--font-inter) font-bold text-base lg:text-xl xl:text-3xl leading-tight">PHONE</h3>
                        <p className="text-gray-500 font-(family-name:--font-geist-sans) text-sm lg:text-base font-medium">
                            +91 8275 900 700
                        </p>
                    </div>
                </div>

                {/* Right Column - Navigation */}
                {/* Right Column - Navigation */}
                <div className="flex flex-col items-center xl:items-start gap-4 pt-2 lg:pt-0">
                    <Link href="/branches" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-bold text-base lg:text-xl xl:text-3xl leading-tight">
                        OUR BRANCHES
                    </Link>
                    <Link href="/team" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-bold text-base lg:text-xl xl:text-3xl leading-tight">
                        OUR TEAM
                    </Link>
                    <Link href="/news" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-bold text-base lg:text-xl xl:text-3xl leading-tight">
                        NEWS & EVENTS
                    </Link>
                    <Link href="/black-belts" className="text-[#111111] uppercase hover:text-[#CC0000] transition-colors font-(family-name:--font-inter) font-bold text-base lg:text-xl xl:text-3xl leading-tight">
                        BLACK BELTS
                    </Link>

                    {/* Mobile/Tablet Instagram & Copyright - Visible only up to XL */}
                    <div className="lg:hidden flex flex-col items-center gap-3 mt-4">
                        <Link
                            href="https://www.instagram.com/wfsk_official?igsh=Z2p1cDBibDM5emx1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center text-white hover:bg-[#E1306C] transition-colors"
                            aria-label="Instagram"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </Link>
                        <p className="text-gray-500 text-xs font-(family-name:--font-geist-sans)">
                            © 2025, WFSK. All Rights Reserved.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
