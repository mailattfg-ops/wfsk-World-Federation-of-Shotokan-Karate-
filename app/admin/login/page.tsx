"use client";

import { useState } from "react";
import { login } from "./actions";
import { JapaneseHeading } from "@/components/ui/JapaneseHeading";
import { APP_NAME, JAPANESE_NAME } from "@/lib/constants";
import Image from "next/image";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await login(formData);

        if (result?.error) {
            setError(result.error);
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex bg-white overflow-hidden">
            {/* Left Column: Visual Branding - Fully fixed background on desktop */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-[#111111] overflow-hidden">


                <div className="relative z-10 w-full h-full flex flex-col justify-between p-8">
                    <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12">
                            <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
                        </div>
                        <div>
                            <span className="block text-white font-black text-xl uppercase tracking-tighter leading-none">World Federation of Shotokan Karate</span>
                            <span className="text-[10px] text-red-600 font-bold uppercase tracking-[0.3em]">Access Restricted</span>
                        </div>
                    </div>

                    <div>
                        <JapaneseHeading text={JAPANESE_NAME} className="text-white/20 text-7xl mb-6 opacity-30 select-none" />
                        <h2 className="text-white text-5xl font-black uppercase tracking-tighter max-w-md leading-[0.9]">
                            Guardian of the <br />
                            <span className="text-red-600">Pure Path</span>
                        </h2>
                        <div className="w-16 h-1.5 bg-red-600 mt-8"></div>
                    </div>

                    <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">
                        © {new Date().getFullYear()} {APP_NAME} Internal System
                    </p>
                </div>
            </div>

            {/* Right Column: Authentication Form */}
            <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-24 bg-white relative">
                {/* Mobile Identity */}
                <div className="lg:hidden absolute top-12 left-0 right-0 flex flex-col items-center">
                    <div className="relative w-16 h-16 mb-4">
                        <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <h1 className="text-black text-xs font-black uppercase tracking-widest">{APP_NAME} Admin</h1>
                </div>

                <div className="w-full max-w-sm space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="space-y-4">
                        <h3 className="text-4xl font-black text-[#111111] uppercase tracking-tighter leading-none">Console <br />Login</h3>
                        <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                            Secure Authentication Required
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-center gap-3 text-red-600 animate-in zoom-in duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                <span className="text-[10px] font-black uppercase tracking-widest">{error}</span>
                            </div>
                        )}

                        <div className="space-y-5">
                            <div className="group">
                                <label className="block text-[10px] font-black uppercase text-zinc-400 mb-2 tracking-widest group-focus-within:text-red-600 transition-colors">Enter Your Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600/20 text-zinc-900 text-sm transition-all placeholder:text-zinc-300"
                                    placeholder="admin@wfsk.com"
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-black uppercase text-zinc-400 mb-2 tracking-widest group-focus-within:text-red-600 transition-colors">Enter Your Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    required
                                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600/20 text-zinc-900 text-sm transition-all placeholder:text-zinc-300"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full bg-[#111111] text-white py-5 rounded-2xl overflow-hidden shadow-2xl hover:bg-black transition-all active:scale-95 disabled:opacity-50"
                        >
                            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em]">
                                {isLoading ? "Logging..." : "Login"}
                            </span>
                            <div className="absolute inset-0 bg-linear-to-r from-red-600/0 via-red-600/20 to-red-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
