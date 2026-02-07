import React from 'react';

interface SectionHeaderProps {
    title: React.ReactNode;
    children: React.ReactNode;
}

export function SectionHeader({ title, children }: SectionHeaderProps) {
    return (
        <div className="bg-white rounded-lg p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center md:items-center gap-2 sm:gap-6 text-center md:text-left">
            <div className="w-full md:w-1/4 flex justify-center md:justify-end">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black font-(family-name:--font-belanosima) leading-tight whitespace-nowrap sm:whitespace-normal">
                    {title}
                </h2>
            </div>
            <div className="md:hidden w-16 h-[1px] bg-[#000000] mx-auto"></div>
            <div className="hidden md:block w-px h-32 bg-black grow-0 shrink-0"></div>

            <div className="w-full md:w-3/4 max-w-2xl mx-auto md:mx-0">
                <div className="text-[#7C7C7C] font-(family-name:--font-geist-sans) text-sm sm:text-[20px] leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
}
