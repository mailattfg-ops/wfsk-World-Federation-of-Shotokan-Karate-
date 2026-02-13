'use client';

import Link from 'next/link';
import { JapaneseHeading } from '@/components/ui/JapaneseHeading';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
    return (
        <main className="flex flex-col min-h-screen bg-[#111111] overflow-hidden">
            <Header />

            <div className="flex-1 relative flex items-center justify-center py-20 px-6">
                {/* Abstract Background Element */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                    <h1 className="text-[40vw] font-black tracking-tighter text-white whitespace-nowrap leading-none">
                        404
                    </h1>
                </div>

                {/* Decorative Lines */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent rotate-12 pointer-events-none"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-red-600/10 to-transparent -rotate-45 pointer-events-none"></div>

                <div className="relative z-10 text-center max-w-xl animate-in fade-in zoom-in duration-1000">
                    <div className="mb-12 flex justify-center flex-col items-center">
                        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-2">
                            The Path is Lost
                        </h2>
                        <JapaneseHeading
                            text="道 が 見 つ か ら な い"
                            className="text-[14px] sm:text-[18px]"
                        />
                    </div>

                    <div className="space-y-6 mb-12">
                        <p className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] leading-relaxed">
                            The technique you seek does not exist within these walls. Your focus must remain on the true path.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 opacity-40"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 opacity-10"></span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/"
                            className="group relative px-10 py-4 bg-red-600 text-white overflow-hidden rounded-xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-red-600/20"
                        >
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em]">
                                Return to Home
                            </span>
                        </Link>

                        <Link
                            href="/branches"
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all underline underline-offset-8 decoration-white/0 hover:decoration-white/20"
                        >
                            Explore Branches
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main >
    );
}
