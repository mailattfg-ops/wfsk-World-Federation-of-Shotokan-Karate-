"use client";

import { useState } from "react";
import { BranchCard } from "../ui/BranchCard";

export function BranchesClient({ initialBranches }: { initialBranches: any[] }) {
    const [activeFilter, setActiveFilter] = useState("All");

    // Dynamic Filter: Get unique countries from branches
    const allCountries = ["All", ...Array.from(new Set(initialBranches.map(b => b.country || b.category))).filter(Boolean).sort()];

    const filteredBranches = activeFilter === "All"
        ? initialBranches
        : initialBranches.filter(branch => branch.country === activeFilter || branch.category === activeFilter);

    return (
        <div className="space-y-4 xl:space-y-8">
            {/* Filter Dropdown */}
            <div className="flex justify-start px-1 sm:px-0">
                <div className="relative">
                    <select
                        value={activeFilter}
                        onChange={(e) => setActiveFilter(e.target.value)}
                        className="appearance-none bg-[#2C2C2C] text-[#C0C0C0] px-3 sm:px-6 py-1.5 sm:py-2 pr-8 rounded-md text-[10px] sm:text-sm font-bold font-(family-name:--font-geist-sans) border border-white/5 focus:outline-none cursor-pointer transition-colors hover:bg-[#3C3C3C]"
                    >
                        {allCountries.map((country) => (
                            <option key={country as string} value={country as string}>
                                {country as string}
                            </option>
                        ))}
                    </select>
                    {/* Custom Arrow Icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {filteredBranches.map((branch, index) => (
                    <BranchCard
                        key={index}
                        country={branch.country}
                        title={branch.title}
                        description={branch.description}
                        leader={branch.leader}
                        image={branch.image}
                    />
                ))}
            </div>
            {filteredBranches.length === 0 && (
                <div className="text-center py-20 text-zinc-400 font-bold uppercase tracking-widest text-xs border-2 border-dashed border-zinc-100 rounded-xl">
                    No branches found for this filter.
                </div>
            )}
        </div>
    );
}
