"use client";

import { useState } from "react";
import { BranchCard } from "../ui/BranchCard";

const FILTERS = ["All", "India", "UAE", "Gambia", "Qatar", "Bahrain"];

export function BranchesClient({ initialBranches }: { initialBranches: any[] }) {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredBranches = activeFilter === "All"
        ? initialBranches
        : initialBranches.filter(branch => branch.country === activeFilter || branch.category === activeFilter);

    return (
        <div className="space-y-4 xl:space-y-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1 md:gap-2 justify-center lg:justify-start px-1 sm:px-0">
                {FILTERS.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-2 sm:px-6 py-1.5 sm:py-2 rounded-md text-[9px] sm:text-sm font-bold transition-all duration-300 ${activeFilter === filter
                            ? "bg-white text-black shadow-md border border-black/5"
                            : "bg-[#2C2C2C] text-[#C0C0C0] hover:bg-[#3C3C3C]"
                            } font-(family-name:--font-geist-sans) whitespace-nowrap`}
                    >
                        {filter}
                    </button>
                ))}
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
