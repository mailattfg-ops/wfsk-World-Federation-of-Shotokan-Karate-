import React from "react";
import Image from "next/image";

interface TeamCardProps {
    name: string;
    title: string;
    image: string;
    active?: boolean;
    beltColor?: string;
    showBelt?: boolean;
    achievements?: string[];
}

export function TeamCard({ name, title, image, active = false, beltColor, showBelt = true, achievements = [] }: TeamCardProps) {
    return (
        <div className="relative aspect-3/4 w-full rounded-md overflow-hidden shadow-md transition-all duration-300 group hover:shadow-xl">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-transparent to-black/40"></div>

            {/* Bottom Section: Achievements + Info Box */}
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 flex flex-col gap-1.5 z-10 transition-transform duration-500 group-hover:-translate-y-1">

                {/* Achievement Tags Red Marquee Box - Always Visible */}
                {achievements.length > 0 && (
                    <div className="bg-wfsk-red border border-white/10 overflow-hidden shadow-2xl">
                        <div className="inline-flex gap-16 animate-marquee-slow hover:pause whitespace-nowrap py-0.5 sm:py-1 px-4 items-center w-max">
                            {[...Array(10)].map((_, i) => (
                                <React.Fragment key={i}>
                                    {achievements.map((ach, idx) => (
                                        <span key={`${i}-${idx}`} className="text-white font-black text-[7px] sm:text-[9px] uppercase tracking-widest flex items-center gap-2">
                                            <svg className="w-2.5 h-2.5 sm:w-3.5 h-3.5 text-yellow-400 drop-shadow-[0_0_3px_rgba(250,204,21,0.5)]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 1L9 9l-8 .5 6 5.5-2 8.5 7-4.5 7 4.5-2-8.5 6-5.5-8-.5L12 1z" />
                                            </svg>
                                            {ach}
                                        </span>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                )}

                {/* Main Info Box */}
                <div className="bg-[#111111]/95 backdrop-blur-md border border-white/10 rounded-md sm:rounded-xl p-1.5 sm:p-3 flex justify-between items-center shadow-2xl">
                    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                        <h3 className="text-white font-bold text-[11px] sm:text-base font-(family-name:--font-belanosima) tracking-wide leading-tight truncate">{name}</h3>
                        <div className="overflow-hidden">
                            <p className="text-[6px] sm:text-[10px] text-[#B7B7B7] font-(family-name:--font-geist-sans) leading-tight truncate">
                                {title}
                            </p>
                        </div>
                    </div>
                    <div
                        className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 border-2 border-white shadow-inner ml-2 ${!showBelt ? 'hidden' : ''} ${beltColor ? '' : 'bg-wfsk-red'}`}
                        style={beltColor ? { backgroundColor: beltColor, boxShadow: `0 0 15px ${beltColor}66` } : {}}
                    >
                    </div>
                </div>
            </div>
        </div>
    );
}
