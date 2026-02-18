'use client'

import { useState, useTransition } from 'react'
import { addNewsEvent, updateNewsEvent } from '@/lib/actions/news'
import { useRouter } from 'next/navigation'
import { ImageUpload } from './ImageUpload'
import { toast } from '@/components/ui/Toaster'

interface NewsFormModalProps {
    isOpen: boolean;
    news?: any;
    onClose?: () => void;
}

export default function NewsFormModal({ isOpen, onClose, news }: NewsFormModalProps) {
    const [isPending, startTransition] = useTransition();
    const [mediaType, setMediaType] = useState<'image' | 'video'>(news?.media_type || 'image');
    const router = useRouter();

    if (!isOpen) return null;

    async function handleClose() {
        const params = new URLSearchParams(window.location.search);
        params.delete('showModal');
        params.delete('edit');
        router.push(`?${params.toString()}`);
        if (onClose) onClose();
    }

    async function handleSubmit(formData: FormData) {
        startTransition(async () => {
            try {
                // Add media_type to formData explicitly
                formData.append('media_type', mediaType);

                const result = news?.id
                    ? await updateNewsEvent(news.id, formData)
                    : await addNewsEvent(formData);

                if (result.success) {
                    toast.success(news?.id ? "Article updated" : "Article added");
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
            <div className={`w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl border transition-all duration-300 scale-in-center no-scrollbar bg-[#111111] border-white/10`}>
                <header className="px-5 py-5 md:px-8 md:py-6 border-b border-white/10 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter">
                            {news ? 'Edit Article' : 'Compose News Article'}
                        </h2>
                    </div>
                    <button onClick={handleClose} className="text-white/40 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </header>

                <form action={handleSubmit} className="p-5 md:p-8 space-y-6">
                    <input type="hidden" name="image_url" value={news?.image_url || ''} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {/* Col 1: Content Details */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">Main Headline</label>
                                <input
                                    name="title"
                                    defaultValue={news?.title}
                                    placeholder="e.g. Largest Karate Performance"
                                    required
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-xs md:text-sm transition-all placeholder:text-white/10"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="block text-[9px] md:text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest text">Article Body</label>
                                <textarea
                                    name="description"
                                    defaultValue={news?.description}
                                    placeholder="Write the full event description here..."
                                    required
                                    rows={8}
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-xs md:text-sm transition-all placeholder:text-white/10 resize-none min-h-[220px]"
                                />
                            </div>
                        </div>

                        {/* Col 2: Media & Settings */}
                        <div className="space-y-6">
                            {/* Media Tab Switcher */}
                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black uppercase text-white/40 mb-3 tracking-widest text-center">Select Media Type</label>
                                <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl">
                                    <button
                                        type="button"
                                        onClick={() => setMediaType('image')}
                                        className={`flex-1 py-3 rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all ${mediaType === 'image' ? 'bg-red-600 text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}
                                    >
                                        Image
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setMediaType('video')}
                                        className={`flex-1 py-3 rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all ${mediaType === 'video' ? 'bg-red-600 text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}
                                    >
                                        Video
                                    </button>
                                </div>
                            </div>

                            <div className="min-h-[200px]">
                                {mediaType === 'image' ? (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                                        <ImageUpload
                                            name="image_file"
                                            label="Cover Photo"
                                            defaultValue={news?.image_url}
                                            required={!news || news?.media_type === 'video'}
                                            maxSizeMB={4}
                                        />
                                    </div>
                                ) : (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                                        <label className="block text-[9px] md:text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest">YouTube Video Link</label>
                                        <div className="relative">
                                            <input
                                                name="video_url"
                                                defaultValue={news?.video_url}
                                                placeholder="https://youtube.com/watch?v=..."
                                                required={mediaType === 'video'}
                                                className="w-full pl-12 pr-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-red-400 text-white text-xs md:text-sm transition-all placeholder:text-white/10"
                                            />
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"></path><rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect></svg>
                                            </div>
                                        </div>
                                        <p className="text-[9px] text-white/20 mt-2 ml-1 italic">Paste the full YouTube URL for the event video.</p>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    <div className="pt-4 flex gap-4">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="w-1/4 py-3 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-all underline underline-offset-8 decoration-white/0 hover:decoration-white/20"
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
                                    <span>Processing...</span>
                                </>
                            ) : (
                                news ? 'Save Changes' : 'Publish Article'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
