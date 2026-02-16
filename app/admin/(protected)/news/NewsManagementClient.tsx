'use client'

import { deleteNewsEvent, type NewsEvent } from '@/lib/actions/news'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { DeleteButton } from '@/components/admin/DeleteButton'
import { toast } from '@/components/ui/Toaster'

export default function NewsManagementClient({ initialNews }: { initialNews: NewsEvent[] }) {
    const router = useRouter()

    const handleDelete = async (id: string) => {
        const result = await deleteNewsEvent(id)
        if (result.success) {
            toast.success("News event deleted successfully")
            router.refresh()
        } else {
            toast.error(result.error || "Failed to delete news event")
        }
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {initialNews.map((news) => (
                    <div key={news.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl hover:border-red-100 transition-all duration-300">
                        <div className="relative h-48 bg-zinc-100 overflow-hidden">
                            {news.image_url ? (
                                <Image
                                    src={news.image_url}
                                    alt={news.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"></path><rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect></svg>
                                </div>
                            )}
                            {news.video_url && (
                                <div className="absolute top-4 right-4 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="m10 15 5-3-5-3v6Z"></path><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                                <span className="text-[8px] font-black text-white/60 uppercase tracking-widest">{news.subtitle || 'General News'}</span>
                                <h3 className="text-white font-bold leading-tight line-clamp-2 uppercase tracking-tight">{news.title}</h3>
                            </div>
                        </div>

                        <div className="p-6">
                            <p className="text-zinc-500 text-xs line-clamp-3 mb-6 leading-relaxed">
                                {news.description}
                            </p>

                            <div className="flex items-center gap-3">
                                <Link
                                    href={`?edit=${news.id}&showModal=true`}
                                    className="flex-1 py-3 bg-zinc-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg>
                                    Edit
                                </Link>
                                <DeleteButton
                                    onDelete={() => handleDelete(news.id)}
                                    title={news.title}
                                />
                            </div>
                        </div>
                    </div>
                ))}

                {initialNews.length === 0 && (
                    <div className="col-span-full py-20 bg-zinc-50 rounded-[40px] border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-zinc-300 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
                        </div>
                        <h3 className="text-lg font-black text-zinc-900 uppercase tracking-tight">No articles found</h3>
                        <p className="text-zinc-500 text-sm max-w-xs mt-2">Start by adding your first news article or tournament update.</p>
                        <Link
                            href="?showModal=true"
                            className="mt-6 px-8 py-3 bg-red-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all hover:bg-red-700 shadow-xl shadow-red-600/20 inline-block"
                        >
                            Create First Article
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
