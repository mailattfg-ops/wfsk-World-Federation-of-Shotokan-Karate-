import Link from "next/link";
import Image from "next/image";
import { JapaneseHeading } from "./ui/JapaneseHeading";

export function Header() {
    return (
        <header className="fixed top-6 left-0 w-full px-4 sm:px-8 z-50 flex justify-between items-center pointer-events-none">
            {/* Left Island - Logo & Text */}
            <div className="bg-[#111111]/90 backdrop-blur-md rounded-lg pl-3 pr-8 flex items-center gap-4 shadow-2xl border border-white/5 pointer-events-auto h-[60px]">
                {/* Logo */}
                <div className="relative w-12 h-12 shrink-0">
                    <Image
                        src="/images/logo.png"
                        alt="WFSK Logo"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Text Block */}
                <div className="hidden sm:flex flex-col items-start justify-center">
                    <span className="text-white text-[13px] font-bold tracking-wide uppercase whitespace-nowrap leading-tight">
                        World Federation of Shotokan Karate
                    </span>

                    {/* Japanese Text with Solid Lines */}
                    <JapaneseHeading text="世界 松 濤 館 空 手 連 盟" />
                </div>
            </div>

            {/* Right Island - Navigation */}
            <div className="bg-[#111111]/90 backdrop-blur-md rounded-lg px-8 flex items-center shadow-2xl border border-white/5 pointer-events-auto h-[60px]">
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
    );
}

