import { getWorldRecord } from "@/lib/actions/world-record";
import WorldRecordFormModal from "@/components/admin/WorldRecordFormModal";
import Link from 'next/link';

export default async function WorldRecordPage({
    searchParams,
}: {
    searchParams: Promise<{ showModal?: string }>;
}) {
    const params = await searchParams;
    const worldRecord = await getWorldRecord();
    const showModal = params.showModal === "true";

    return (
        <div className="flex flex-col h-full space-y-8 animate-in fade-in duration-700">
            {/* Unified Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100">
                <div>
                    <h1 className="text-xl lg:text-3xl font-black text-[#111111] uppercase tracking-tighter leading-none mb-2">World Record</h1>
                    <div className="flex items-center gap-3">
                        <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-[0.2em]">Manage your global highlights</p>
                    </div>
                </div>

                <Link
                    href="?showModal=true"
                    className="inline-flex group relative items-center justify-between md:justify-start gap-4 bg-[#111111] text-white px-8 py-4 rounded-2xl overflow-hidden shadow-2xl hover:bg-black transition-all active:scale-95 transform w-full md:w-auto"
                >
                    <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em]">Edit Record</span>
                    <div className="relative z-10 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                    </div>
                </Link>
            </header>

            {/* Content Table Area */}
            <div className="space-y-6">
                <div className="bg-white rounded-4xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/50 border-b border-gray-100">
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 w-48 text-center">Visual Frame</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Record Identity</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Description Narrative</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-right">Settings</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {worldRecord ? (
                                    <tr className="group hover:bg-zinc-50/50 transition-colors">
                                        <td className="px-8 py-6 text-center">
                                            <div className="w-32 h-20 rounded-2xl bg-gray-100 ring-4 ring-white shadow-md overflow-hidden mx-auto group-hover:scale-105 transition-transform duration-500 relative">
                                                <img src={worldRecord.image_url} alt="" className="object-cover w-full h-full" />
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <span className="text-[8px] font-black text-white uppercase tracking-[0.2em]">Live Image</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <p className="font-black text-zinc-900 text-base uppercase tracking-tight leading-none mb-2">{worldRecord.title}</p>
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                                                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Active Record</p>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 max-w-md">
                                            <p className="text-xs font-medium text-zinc-500 leading-relaxed line-clamp-3">
                                                {worldRecord.description}
                                            </p>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center justify-end">
                                                <Link
                                                    href={`?showModal=true`}
                                                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#111111] text-white rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 group/btn"
                                                >
                                                    <span className="text-[9px] font-black uppercase tracking-widest">Edit Record</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="py-20 text-center text-zinc-300 font-black uppercase tracking-widest text-xs">
                                            No record data available
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Technical Tip */}
                <div className="p-8 bg-zinc-900 rounded-4xl border border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-white text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                            Display Guidelines
                        </h3>
                        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-2xl hidden md:block">
                            The world record section is a critical branding element. Ensure captions are impactful and imagery follows the "Modern Heritage" dark aesthetic.
                            <span className="block mt-2 text-zinc-400">Strict Limits: Title (30 chars) | Description (200 chars) to prevent layout breakage.</span>
                        </p>
                        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-2xl md:hidden">
                            Ensure captions are impactful and imagery follows the "Modern Heritage" dark aesthetic.
                            <span className="block mt-2 text-zinc-400">Strict Limits: Title (30 chars).</span>
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full translate-x-10 -translate-y-10 blur-3xl"></div>
                </div>
            </div>

            {/* Edit Modal */}
            <WorldRecordFormModal
                isOpen={showModal}
                record={worldRecord}
            />
        </div>
    );
}
