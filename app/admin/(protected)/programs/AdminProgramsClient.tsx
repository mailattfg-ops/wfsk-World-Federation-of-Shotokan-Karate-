'use client';

import Link from "next/link";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { deleteProgram } from "@/lib/actions/programs";

interface AdminProgramsClientProps {
    initialPrograms: any[];
    searchParams: { edit?: string; showModal?: string };
}

export default function AdminProgramsClient({ initialPrograms, searchParams }: AdminProgramsClientProps) {
    const getEditUrl = (programId: string) => {
        const params = new URLSearchParams();
        params.set('edit', programId);
        params.set('showModal', 'true');
        return `?${params.toString()}`;
    };

    const getAddUrl = () => {
        const params = new URLSearchParams();
        params.set('showModal', 'true');
        return `?${params.toString()}`;
    };

    return (
        <div className="flex flex-col h-full space-y-6 lg:space-y-8 pb-10">
            {/* Header with Title and Action */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-4 lg:pb-8">
                <div>
                    <h1 className="text-xl lg:text-3xl font-black text-[#111111] uppercase tracking-tighter leading-none mb-2">Program Management</h1>
                    <div className="flex items-center gap-3">
                        <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-[0.2em]">Manage your homepage program cards</p>
                    </div>
                </div>

                <div>
                    <Link
                        href={getAddUrl()}
                        className="inline-flex group relative items-center gap-3 bg-[#111111] text-white px-4 md:px-8 py-3 md:py-4 rounded-2xl overflow-hidden shadow-2xl hover:bg-black transition-all active:scale-95 transform"
                    >
                        <span className="hidden md:inline relative z-10 text-[10px] font-black uppercase tracking-[0.2em]">Create New Program</span>
                        <div className="relative z-10 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </div>
                    </Link>
                </div>
            </header>

            {/* Main Content Area */}
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
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Program Info</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Badges / Target</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Order</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-right">Settings</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {initialPrograms.map((program: any) => (
                                    <tr key={program.id} className="group hover:bg-zinc-50/50 transition-colors">
                                        <td className="px-8 py-4 text-center">
                                            <div className="w-20 h-14 rounded-xl bg-gray-100 ring-4 ring-white shadow-sm overflow-hidden mx-auto group-hover:scale-110 transition-transform duration-500">
                                                <img src={program.image_url} alt="" className="object-cover w-full h-full" />
                                            </div>
                                        </td>
                                        <td className="px-8 py-4">
                                            <p className="font-black text-zinc-900 text-sm uppercase tracking-tight">{program.title}</p>
                                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1 line-clamp-1 group-hover:line-clamp-none transition-all duration-300">{program.description}</p>
                                        </td>
                                        <td className="px-8 py-4">
                                            <div className="flex flex-wrap gap-1">
                                                {program.badges?.map((badge: string, idx: number) => (
                                                    <span key={idx} className="bg-[#E6E6E6] text-[9px] font-bold text-[#262626] px-2.5 py-0.5 rounded-md uppercase tracking-wide">
                                                        {badge}
                                                    </span>
                                                )) || <span className="text-zinc-300">-</span>}
                                            </div>
                                        </td>
                                        <td className="px-8 py-4 text-center">
                                            <span className="text-zinc-600 font-bold text-xs bg-zinc-100 px-3 py-1 rounded-lg">
                                                {program.display_order}
                                            </span>
                                        </td>
                                        <td className="px-8 py-4">
                                            <div className="flex items-center justify-end gap-3">
                                                <Link
                                                    href={getEditUrl(program.id)}
                                                    className="p-2.5 bg-zinc-100 text-zinc-900 rounded-xl hover:bg-[#111111] hover:text-white transition-all shadow-sm active:scale-95"
                                                    title="Edit Program"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                </Link>
                                                <DeleteButton
                                                    onDelete={async () => {
                                                        await deleteProgram(program.id);
                                                    }}
                                                    confirmMessage={`Are you sure you want to remove the program "${program.title}"?`}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {initialPrograms.length === 0 && (
                        <div className="py-32 text-center bg-gray-50/30">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="zinc-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">No programs registered yet</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
