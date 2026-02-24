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

            {/* Bottom Section: Integrated Dark Card */}
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="bg-[#111111]/95 backdrop-blur-md border border-white/10 rounded-md sm:rounded-xl p-1.5 sm:p-3 flex flex-col gap-2 sm:gap-3 shadow-2xl">

                    {/* Top Row: Name, Title & Belt Indicator */}
                    <div className="flex justify-between items-start sm:items-center gap-2">
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <h3 className="text-white font-bold text-[11px] sm:text-base font-(family-name:--font-belanosima) tracking-wide leading-tight truncate">
                                {name}
                            </h3>
                            <p className="text-[4px] md:text-[10px] text-[#B7B7B7] font-(family-name:--font-geist-sans) leading-tight">
                                {title}
                            </p>
                        </div>

                        {/* Belt Color Circle */}
                        {showBelt && (
                            <div
                                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border-2 border-white shadow-lg ${beltColor ? '' : 'bg-wfsk-red'}`}
                                style={beltColor ? { backgroundColor: beltColor, boxShadow: `0 0 10px ${beltColor}44` } : {}}
                            >
                            </div>
                        )}
                    </div>

                    {/* Achievements Pills */}
                    {achievements.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                            {achievements.map((ach, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white text-white text-[5px] sm:text-[9px] font-medium leading-none whitespace-nowrap bg-white/5"
                                >
                                    {ach}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
