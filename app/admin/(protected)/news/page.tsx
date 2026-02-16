import { getNewsEvents } from '@/lib/actions/news'
import NewsManagementClient from './NewsManagementClient'
import Link from 'next/link'
import NewsFormModal from '@/components/admin/NewsFormModal'

export default async function AdminNewsPage({
    searchParams,
}: {
    searchParams: Promise<{ showModal?: string; edit?: string }>
}) {
    const params = await searchParams
    const news = await getNewsEvents()
    const showModal = params.showModal === "true"
    const editId = params.edit
    const editingNews = editId ? news.find(n => n.id === editId) : null

    return (
        <div className="flex flex-col h-full space-y-6 lg:space-y-8 animate-in fade-in duration-700 pb-10">
            {/* Header with Title and Global Action */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-8">
                <div>
                    <h1 className="text-xl lg:text-3xl font-black text-[#111111] uppercase tracking-tighter leading-none mb-2">News & Events</h1>
                    <div className="flex items-center gap-3">
                        <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-[0.2em]">Manage your website's news feed</p>
                    </div>
                </div>

                <Link
                    href="?showModal=true"
                    className="inline-flex group relative items-center justify-between md:justify-start gap-4 bg-[#111111] text-white px-8 py-4 rounded-2xl overflow-hidden shadow-2xl hover:bg-black transition-all active:scale-95 transform w-full md:w-auto"
                >
                    <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em]">Compose Article</span>
                    <div className="relative z-10 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </div>
                </Link>
            </header>

            <NewsManagementClient initialNews={news} />

            <NewsFormModal
                isOpen={showModal}
                news={editingNews}
            />
        </div>
    )
}
