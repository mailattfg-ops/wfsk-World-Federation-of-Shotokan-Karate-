import React from 'react';

interface SectionHeaderProps {
    title: React.ReactNode;
    children: React.ReactNode;
}

export function SectionHeader({ title, children }: SectionHeaderProps) {
    return (
        <div className="bg-white rounded-lg p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center gap-6">
            <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
                <h2 className="text-4xl sm:text-5xl font-bold text-black font-(family-name:--font-belanosima) text-center lg:text-right leading-tight">
                    {title}
                </h2>
            </div>

            <div className="hidden lg:block w-px h-32 bg-black shrink-0"></div>

            <div className="w-full lg:w-3/4 max-w-2xl">
                <div className="text-[#7C7C7C] font-(family-name:--font-geist-sans) text-sm sm:text-lg leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
}
