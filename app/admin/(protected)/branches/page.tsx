import { getBranches, deleteBranch } from "@/lib/actions/branches";
import BranchFormModal from "@/components/admin/BranchFormModal";
import { DeleteButton } from "@/components/admin/DeleteButton";
import Link from 'next/link';

export default async function BranchesManagementPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string; edit?: string; showModal?: string }>;
}) {
    const params = await searchParams;
    const currentCountry = params.category || "All";
    const editId = params.edit;
    const showModal = params.showModal === "true";

    const allBranches = await getBranches();

    // Filter branches based on country selection
    const branches = currentCountry === "All"
        ? allBranches
        : allBranches.filter((b: any) => b.country_name === currentCountry);

    // Determine the editing branch if in edit mode
    const editingBranch = editId ? allBranches.find((b: any) => b.id === editId) : null;

    const countries = ["All", "UAE", "India"];

    return (
        <div className="flex flex-col h-full space-y-8 animate-in fade-in duration-700 pb-10">
            {/* Header with Title and Global Action */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-8">
                <div>
                    <h1 className="text-4xl font-black text-[#111111] uppercase tracking-tighter leading-none mb-2">Branch Management</h1>
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                        <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-[0.2em]">Global Network / Location Control</p>
                    </div>
                </div>

                <Link
                    href={`?category=${currentCountry}&showModal=true`}
                    className="group relative inline-flex items-center gap-4 bg-[#111111] text-white px-8 py-4 rounded-2xl overflow-hidden shadow-2xl hover:bg-black transition-all active:scale-95 transform"
                >
                    <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em]">Register New Branch</span>
                    <div className="relative z-10 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </div>
                </Link>
            </header>

            {/* Horizontal Country Navigation */}
            <nav className="flex items-center gap-4 overflow-x-auto py-6 -my-2 no-scrollbar">
                <div className="flex items-center gap-3 px-2">
                    {countries.map((country) => (
                        <Link
                            key={country}
                            href={`?category=${country}`}
                            className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all rounded-full border whitespace-nowrap flex items-center gap-3 ${currentCountry === country
                                ? "bg-[#111111] text-white border-black shadow-xl shadow-black/20 scale-110 z-10"
                                : "bg-white text-zinc-400 border-gray-100 hover:border-gray-200 hover:text-zinc-600"
                                }`}
                        >
                            {country}
                            {currentCountry === country && <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Main Content Area: Content full width */}
            <div className="space-y-6">
                <div className="relative bg-white rounded-4xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden">
                    {/* Horizontal Scroll Indicator for Mobile */}
                    <div className="lg:hidden flex items-center justify-center gap-2 py-3 bg-gray-50/50 border-b border-gray-100 italic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 animate-pulse"><path d="m9 18 6-6-6-6" /></svg>
                        <span className="text-[8px] font-black uppercase tracking-widest text-zinc-400">Scroll sideways for more details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 animate-pulse"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/50 border-b border-gray-100">
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 w-32 text-center">Preview</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Branch Identity</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Lead Instructor</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Region</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-right">Settings</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {branches.map((branch: any) => (
                                    <tr key={branch.id} className="group hover:bg-zinc-50/50 transition-colors">
                                        <td className="px-8 py-4 text-center">
                                            <div className="w-20 h-14 rounded-xl bg-gray-100 ring-4 ring-white shadow-sm overflow-hidden mx-auto group-hover:scale-110 transition-transform duration-500">
                                                <img src={branch.image_url} alt="" className="object-cover w-full h-full" />
                                            </div>
                                        </td>
                                        <td className="px-8 py-4">
                                            <p className="font-black text-zinc-900 text-sm uppercase tracking-tight">{branch.place_name}</p>
                                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1 line-clamp-1 group-hover:line-clamp-none transition-all duration-300">{branch.description}</p>
                                        </td>
                                        <td className="px-8 py-4">
                                            <span className="text-zinc-600 font-bold uppercase tracking-tight text-xs bg-zinc-100 px-3 py-1 rounded-lg">
                                                {branch.instructor_name}
                                            </span>
                                        </td>
                                        <td className="px-8 py-4 text-center">
                                            <span className={`inline-block px-3 py-1 text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-sm ${branch.country_name === 'UAE' ? 'bg-zinc-900' : 'bg-red-600'}`}>
                                                {branch.country_name}
                                            </span>
                                        </td>
                                        <td className="px-8 py-4">
                                            <div className="flex items-center justify-end gap-3">
                                                <Link
                                                    href={`?category=${currentCountry}&edit=${branch.id}&showModal=true`}
                                                    className="p-2.5 bg-zinc-100 text-zinc-900 rounded-xl hover:bg-[#111111] hover:text-white transition-all shadow-sm active:scale-95"
                                                    title="Edit Branch"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                </Link>
                                                <DeleteButton
                                                    onDelete={async () => {
                                                        'use server'
                                                        await deleteBranch(branch.id)
                                                    }}
                                                    confirmMessage={`Are you sure you want to remove the ${branch.place_name} branch?`}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {branches.length === 0 && (
                        <div className="py-32 text-center bg-gray-50/30">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="zinc-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">No branches found in {currentCountry}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Client-Side Modal for Add/Edit */}
            <BranchFormModal
                isOpen={showModal}
                editingBranch={editingBranch}
            />
        </div>
    );
}
