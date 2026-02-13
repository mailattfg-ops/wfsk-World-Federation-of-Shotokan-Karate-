import { getNewsEvents } from '@/lib/actions/news'
import NewsManagementClient from './NewsManagementClient'

export default async function AdminNewsPage() {
    const news = await getNewsEvents()

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black text-zinc-900 uppercase tracking-tighter">
                        News & Events
                    </h1>
                    <p className="text-zinc-500 text-sm font-medium mt-1">
                        Manage your website's news feed, event updates, and video content.
                    </p>
                </div>
            </div>

            <NewsManagementClient initialNews={news} />
        </div>
    )
}
