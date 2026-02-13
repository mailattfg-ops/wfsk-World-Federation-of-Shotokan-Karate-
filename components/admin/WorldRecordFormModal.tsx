'use client'

import { useState, useTransition } from 'react'
import { updateWorldRecord } from '@/lib/actions/world-record'
import { useRouter } from 'next/navigation'
import { ImageUpload } from './ImageUpload'
import { toast } from '@/components/ui/Toaster'

interface WorldRecordFormModalProps {
    isOpen: boolean;
    record: any;
    onClose?: () => void;
}

export default function WorldRecordFormModal({ isOpen, onClose, record }: WorldRecordFormModalProps) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

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
                const result = await updateWorldRecord(formData);

                if (result.success) {
                    toast.success("World record updated successfully");
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border transition-all duration-300 scale-in-center no-scrollbar bg-[#111111] border-white/10`}>
                <header className="px-8 py-6 border-b border-white/10 flex items-center justify-between">
                    <div>
                        <span className="px-2 py-0.5 bg-white text-black text-[8px] font-black uppercase tracking-widest rounded mb-2 inline-block">
                            System Registry
                        </span>
                        <h2 className="text-xl font-black text-white uppercase tracking-tighter">
                            Edit World Record
                        </h2>
                    </div>
                    <button onClick={handleClose} className="text-white/40 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </header>

                <form action={handleSubmit} className="p-8 space-y-6">
                    <input type="hidden" name="id" value={record?.id || ''} />
                    <input type="hidden" name="image_url" value={record?.image_url || ''} />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                        {/* Col 1: Identity & Description */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-end mb-1.5">
                                    <label className="block text-[10px] font-black uppercase text-white/40 tracking-widest">Headline Title</label>
                                    <span className="text-[10px] font-bold text-white/20">{record?.title?.length || 0}/30</span>
                                </div>
                                <input
                                    name="title"
                                    defaultValue={record?.title}
                                    placeholder="e.g. Most World Championships Won"
                                    required
                                    maxLength={30}
                                    onChange={(e) => {
                                        const count = e.target.value.length;
                                        const counter = e.target.previousElementSibling?.lastElementChild;
                                        if (counter) counter.textContent = `${count}/30`;
                                        if (count >= 30) counter?.classList.add('text-red-500');
                                        else counter?.classList.remove('text-red-500');
                                    }}
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-sm transition-all placeholder:text-white/10"
                                />
                            </div>

                            <div className="flex flex-col">
                                <div className="flex justify-between items-end mb-1.5">
                                    <label className="block text-[10px] font-black uppercase text-white/40 tracking-widest text">Detailed Narrative</label>
                                    <span className="text-[10px] font-bold text-white/20">{record?.description?.length || 0}/200</span>
                                </div>
                                <textarea
                                    name="description"
                                    defaultValue={record?.description}
                                    placeholder="Describe the record achievement..."
                                    required
                                    rows={5}
                                    maxLength={200}
                                    onChange={(e) => {
                                        const count = e.target.value.length;
                                        const counter = e.target.previousElementSibling?.lastElementChild;
                                        if (counter) counter.textContent = `${count}/200`;
                                        if (count >= 200) counter?.classList.add('text-red-500');
                                        else counter?.classList.remove('text-red-500');
                                    }}
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-sm transition-all placeholder:text-white/10 resize-none min-h-[180px]"
                                />
                            </div>
                        </div>

                        {/* Col 2: Media Upload */}
                        <div className="flex flex-col">
                            <ImageUpload
                                name="image_file"
                                label="Background Media Photo"
                                defaultValue={record?.image_url}
                                required={!record}
                                fullHeight
                                maxSizeMB={10}
                            />
                        </div>
                    </div>


                    <div className="pt-4 flex gap-4">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="w-1/3 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-all underline underline-offset-8 decoration-white/0 hover:decoration-white/20"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="flex-1 py-3 bg-red-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl hover:bg-red-700 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
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
