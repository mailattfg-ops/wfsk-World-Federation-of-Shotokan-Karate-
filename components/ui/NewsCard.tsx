'use client'

import Image from 'next/image'

interface NewsCardProps {
    title: string;
    subtitle?: string;
    description: string;
    image_url?: string;
    video_url?: string;
    media_type?: 'image' | 'video';
}

import { useState, useRef, useEffect } from 'react';

// ... existing imports

export function NewsCard({ title, subtitle, description, image_url, video_url, media_type = 'image' }: NewsCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const descriptionRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const checkOverflow = () => {
            if (descriptionRef.current) {
                const { scrollHeight, clientHeight } = descriptionRef.current;
                // If it's already expanded, we should definitely show the button (to collapse it)
                // But initially (collapsed), check if content is actually taller than visible area
                if (scrollHeight > clientHeight || isExpanded) {
                    setShowButton(true);
                } else {
                    setShowButton(false);
                }
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [description, isExpanded]);

    // Extract YouTube ID
    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url?.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const isVideo = media_type === 'video' || (!media_type && video_url);
    const videoId = isVideo ? getYouTubeId(video_url || '') : null;

    return (
        <div className="group bg-[#262626] rounded-lg overflow-hidden flex flex-col h-full min-h-[500px] md:min-h-[600px] transition-all duration-300">
            {/* Media Section - Fixed height or Aspect Ratio */}
            <div className="relative h-[300px] md:h-[350px] w-full bg-zinc-900 shrink-0 overflow-hidden">
                {videoId ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : image_url ? (
                    <Image
                        src={image_url}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
                    </div>
                )}

                {/* Subtle Overlay for Image only */}
                {!videoId && (
                    <div className="absolute inset-0 bg-linear-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60"></div>
                )}
            </div>

            {/* Content Section - Flexible height */}
            <div className="px-3 py-5 md:p-6 flex flex-col grow text-center">
                {subtitle && (
                    <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
                        {subtitle}
                    </span>
                )}
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal tracking-normal leading-[1.1] mb-4 font-(family-name:--font-cal-sans)">
                    {title}
                </h3>

                <div className="relative">
                    <p
                        ref={descriptionRef}
                        className={`text-zinc-400 text-sm md:text-base font-medium leading-relaxed font-(family-name:--font-geist-sans) transition-all duration-300 ${!isExpanded ? 'line-clamp-4' : ''}`}
                    >
                        {description}
                    </p>

                    {/* Gradient overlay when collapsed (optional but nice) */}
                    {showButton && !isExpanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-[#262626] to-transparent pointer-events-none"></div>
                    )}
                </div>

                {showButton && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300 self-center border-b border-transparent hover:border-white pb-0.5"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                )}
            </div>
        </div>
    );
}
