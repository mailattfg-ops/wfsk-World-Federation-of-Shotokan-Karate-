'use client'

import { NewsCard } from '@/components/ui/NewsCard';

export function NewsSection({ news }: { news: any[] }) {
    return (
        <section className="w-full">
            <div className="w-full mx-auto space-y-4 xl:space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-8">
                    {news.map((item) => (
                        <div key={item.id} className="animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both">
                            <NewsCard
                                title={item.title}
                                subtitle={item.subtitle}
                                description={item.description}
                                image_url={item.image_url}
                                video_url={item.video_url}
                                media_type={item.media_type}
                            />
                        </div>
                    ))}
                </div>

                {news.length === 0 && (
                    <div className="text-center py-40 border border-black/5 rounded-[3rem]">
                        <p className="text-zinc-500 font-(family-name:--font-belanosima) text-2xl uppercase tracking-widest">
                            No news available at the moment.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
