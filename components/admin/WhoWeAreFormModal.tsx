'use client'

import { useState, useTransition } from 'react'
import { updateWhoWeAre } from '@/lib/actions/who-we-are'
import { useRouter } from 'next/navigation'
import { ImageUpload } from './ImageUpload'
import { toast } from '@/components/ui/Toaster'

interface WhoWeAreFormModalProps {
    isOpen: boolean;
    record: any;
    onClose?: () => void;
}

export default function WhoWeAreFormModal({ isOpen, onClose, record }: WhoWeAreFormModalProps) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const [title, setTitle] = useState(record?.title || '');
    const [subtitle, setSubtitle] = useState(record?.subtitle || '');
    const [certifiedBox, setCertifiedBox] = useState(record?.certified_box || '');
    const [hq, setHq] = useState(record?.hq || '');
    const [paragraphs, setParagraphs] = useState(
        record?.paragraphs ? record.paragraphs.join('\n\n') : ''
    );

    if (!isOpen) return null;

    async function handleClose() {
        const params = new URLSearchParams(window.location.search);
        params.delete('showModal');
        router.push(`?${params.toString()}`);
        if (onClose) onClose();
    }

    async function handleSubmit(formData: FormData) {
        startTransition(async () => {
            try {
                const result = await updateWhoWeAre(formData);

                if (result.success) {
                    toast.success("Who We Are updated successfully");
                    handleClose();
                    router.refresh();
                } else {
                    toast.error(result.error || "An unexpected error occurred");
                }
            } catch (err) {
                toast.error("Failed to process request. Check connection.");
            }
        });
    }

    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border transition-all duration-300 scale-in-center no-scrollbar bg-[#111111] border-white/10">
                <header className="px-5 py-5 md:px-8 md:py-6 border-b border-white/10 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter">
                            Edit Who We Are
                        </h2>
                    </div>
                    <button onClick={handleClose} className="text-white/40 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </header>

                <form action={handleSubmit} className="p-5 md:p-8 space-y-6">
                    <input type="hidden" name="id" value={record?.id || ''} />
                    <input type="hidden" name="image1_url" value={record?.image1_url || ''} />
                    <input type="hidden" name="image2_url" value={record?.image2_url || ''} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {/* Column 1: Core Text Fields */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">Title (English)</label>
                                <input
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="World Federation of Shotokan Karate"
                                    required
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-xs md:text-sm transition-all placeholder:text-white/10"
                                />
                            </div>

                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">Subtitle (Japanese)</label>
                                <input
                                    name="subtitle"
                                    value={subtitle}
                                    onChange={(e) => setSubtitle(e.target.value)}
                                    placeholder="ショトカン空手の世界連盟"
                                    required
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-xs md:text-sm transition-all placeholder:text-white/10"
                                />
                            </div>

                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">World Headquarters</label>
                                <input
                                    name="hq"
                                    value={hq}
                                    onChange={(e) => setHq(e.target.value)}
                                    placeholder="World Headquarters - Dubai , UAE"
                                    required
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-xs md:text-sm transition-all placeholder:text-white/10"
                                />
                            </div>

                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">Certified Info Banner (Certs & Records)</label>
                                <textarea
                                    name="certified_box"
                                    value={certifiedBox}
                                    onChange={(e) => setCertifiedBox(e.target.value)}
                                    placeholder="AN ISO 9001:2015 CERTIFIED KARATE FEDERATION&#10;WORLD RECORDS HOLDING..."
                                    required
                                    rows={3}
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-xs md:text-sm transition-all placeholder:text-white/10 resize-none"
                                />
                            </div>
                        </div>

                        {/* Column 2: Paragraphs Text area */}
                        <div className="space-y-4 flex flex-col">
                            <div className="flex-1 flex flex-col">
                                <label className="block text-[9px] md:text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">Description Narrative Paragraphs</label>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest mb-1.5">(Separate each paragraph with an empty line)</span>
                                <textarea
                                    name="paragraphs"
                                    value={paragraphs}
                                    onChange={(e) => setParagraphs(e.target.value)}
                                    placeholder="First paragraph...&#10;&#10;Second paragraph..."
                                    required
                                    rows={8}
                                    className="flex-1 w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-xs md:text-sm transition-all placeholder:text-white/10 resize-none min-h-[220px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Image uploads row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                        <div>
                            <ImageUpload
                                name="image1_file"
                                label="Left Portrait Image"
                                defaultValue={record?.image1_url}
                                required={!record}
                                maxSizeMB={10}
                            />
                        </div>
                        <div>
                            <ImageUpload
                                name="image2_file"
                                label="Right Team Image"
                                defaultValue={record?.image2_url}
                                required={!record}
                                maxSizeMB={10}
                            />
                        </div>
                    </div>

                    <div className="pt-4 flex gap-4">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="w-1/3 py-3 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-all underline underline-offset-8 decoration-white/0 hover:decoration-white/20"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="flex-1 py-3 bg-red-600 text-white rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl hover:bg-red-700 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                        >
                            {isPending ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Updating...</span>
                                </>
                            ) : (
                                'Confirm Update'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
