import { getWhoWeAre } from "@/lib/actions/who-we-are";
import WhoWeAreFormModal from "@/components/admin/WhoWeAreFormModal";
import Link from 'next/link';

export default async function WhoWeAreAdminPage({
    searchParams,
}: {
    searchParams: Promise<{ showModal?: string }>;
}) {
    const params = await searchParams;
    const whoWeAre = await getWhoWeAre();
    const showModal = params.showModal === "true";

    return (
        <div className="flex flex-col h-full space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-4 lg:pb-8">
                <div>
                    <h1 className="text-xl lg:text-3xl font-black text-[#111111] uppercase tracking-tighter leading-none mb-2">Who We Are</h1>
                    <div className="flex items-center gap-3">
                        <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-[0.2em]">Manage your history, values, and branding details</p>
                    </div>
                </div>

                <Link
                    href="?showModal=true"
                    className="inline-flex group relative items-center justify-between md:justify-start gap-4 bg-[#111111] text-white px-8 py-4 rounded-2xl overflow-hidden shadow-2xl hover:bg-black transition-all active:scale-95 transform w-full md:w-auto text-center"
                >
                    <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] w-full text-center">Edit Section</span>
                    <div className="relative z-10 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500 shrink-0">
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
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Section Field</th>
                                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Current Value</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-xs text-zinc-600">
                                <tr>
                                    <td className="px-8 py-4 font-black uppercase tracking-wider text-zinc-400 text-[10px] w-48">Title (English)</td>
                                    <td className="px-8 py-4 font-bold text-zinc-800 text-sm">{whoWeAre.title}</td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-4 font-black uppercase tracking-wider text-zinc-400 text-[10px]">Subtitle (Japanese)</td>
                                    <td className="px-8 py-4 font-bold text-zinc-800 text-sm">{whoWeAre.subtitle}</td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-4 font-black uppercase tracking-wider text-zinc-400 text-[10px]">Headquarters Location</td>
                                    <td className="px-8 py-4 font-semibold text-zinc-700">{whoWeAre.hq}</td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-4 font-black uppercase tracking-wider text-zinc-400 text-[10px]">Info Banner (Certs)</td>
                                    <td className="px-8 py-4 whitespace-pre-line font-medium leading-relaxed">{whoWeAre.certified_box}</td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-4 font-black uppercase tracking-wider text-zinc-400 text-[10px]">Narrative Content</td>
                                    <td className="px-8 py-4 space-y-2">
                                        {whoWeAre.paragraphs.map((p: string, idx: number) => (
                                            <p key={idx} className="leading-relaxed">{p}</p>
                                        ))}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-4 font-black uppercase tracking-wider text-zinc-400 text-[10px]">Left Portrait Image</td>
                                    <td className="px-8 py-4">
                                        <div className="w-48 h-32 rounded-2xl bg-gray-100 ring-4 ring-white shadow-md overflow-hidden relative group">
                                            <img src={whoWeAre.image1_url} alt="Left Profile" className="object-cover w-full h-full" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-8 py-4 font-black uppercase tracking-wider text-zinc-400 text-[10px]">Right Team Image</td>
                                    <td className="px-8 py-4">
                                        <div className="w-48 h-32 rounded-2xl bg-gray-100 ring-4 ring-white shadow-md overflow-hidden relative group">
                                            <img src={whoWeAre.image2_url} alt="Right Profile" className="object-cover w-full h-full" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            <WhoWeAreFormModal
                isOpen={showModal}
                record={whoWeAre}
            />
        </div>
    );
}
