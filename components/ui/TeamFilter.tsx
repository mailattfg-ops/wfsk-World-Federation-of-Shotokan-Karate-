"use client";

import { cn } from "@/lib/utils";

interface TeamFilterProps {
    filters: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

export function TeamFilter({ filters, activeFilter, onFilterChange }: TeamFilterProps) {
    return (
        <div className="w-full overflow-x-auto no-scrollbar pb-2">
            <div className="flex items-center gap-2 md:gap-4 min-w-max px-4">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => onFilterChange(filter)}
                        className={cn(
                            "px-6 py-2 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap",
                            activeFilter === filter
                                ? "bg-white text-black shadow-sm"
                                : "bg-[#2C2C2C] text-[#C0C0C0] hover:bg-[#3C3C3C]"
                        )}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
}
