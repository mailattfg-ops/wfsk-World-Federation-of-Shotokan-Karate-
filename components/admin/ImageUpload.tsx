'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { toast } from '@/components/ui/Toaster'

interface ImageUploadProps {
    name: string;
    defaultValue?: string;
    label: string;
    required?: boolean;
    fullHeight?: boolean;
    className?: string;
    maxSizeMB?: number;
}

export function ImageUpload({
    name,
    defaultValue,
    label,
    required = false,
    fullHeight = false,
    className = "",
    maxSizeMB = 2
}: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(defaultValue || null);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setError(null);

        if (file) {
            // Check file size
            if (file.size > maxSizeMB * 1024 * 1024) {
                toast.error(`Photo must be below ${maxSizeMB}MB`);
                if (fileInputRef.current) fileInputRef.current.value = '';
                setPreview(defaultValue || null);
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={`space-y-4 flex flex-col ${fullHeight ? 'h-full' : ''} ${className}`}>
            <label className="block text-[10px] font-black uppercase text-white/40 mb-1.5 tracking-widest shrink-0">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <div className={`relative group cursor-pointer flex-1 flex flex-col`} onClick={() => fileInputRef.current?.click()}>
                <div className={`w-full ${fullHeight ? 'flex-1 min-h-48' : 'h-48'} bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center transition-all group-hover:border-white/20`}>
                    {preview ? (
                        <div className="relative w-full h-full">
                            <Image
                                src={preview}
                                alt="Preview"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-[10px] font-black uppercase tracking-widest">Change Photo</span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-2 text-white/20 group-hover:text-white/40 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                            <span className="text-[10px] font-black uppercase tracking-widest">Upload Photo (Max {maxSizeMB}MB)</span>
                        </div>
                    )}
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    name={name}
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    required={required && !defaultValue}
                />
            </div>
        </div>
    )
}
