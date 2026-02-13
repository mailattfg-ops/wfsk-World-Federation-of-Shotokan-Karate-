'use client'

import { useState, useEffect } from 'react'

export type ToastType = 'success' | 'error' | 'info';

interface Toast {
    id: number;
    message: string;
    type: ToastType;
}

let toastCount = 0;
let subscribers: ((toast: Toast) => void)[] = [];

export const toast = {
    success: (message: string) => notify(message, 'success'),
    error: (message: string) => notify(message, 'error'),
    info: (message: string) => notify(message, 'info'),
};

function notify(message: string, type: ToastType) {
    const newToast = { id: ++toastCount, message, type };
    subscribers.forEach(callback => callback(newToast));
}

export function Toaster() {
    const [toasts, setToasts] = useState<Toast[]>([]);

    useEffect(() => {
        const addToast = (toast: Toast) => {
            setToasts(prev => [...prev, toast]);
            setTimeout(() => {
                setToasts(prev => prev.filter(t => t.id !== toast.id));
            }, 5000);
        };

        subscribers.push(addToast);
        return () => {
            subscribers = subscribers.filter(s => s !== addToast);
        };
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-100 flex flex-col gap-3 pointer-events-none">
            {toasts.map(t => (
                <div
                    key={t.id}
                    className={`px-6 py-4 rounded-2xl shadow-2xl border text-[10px] font-black uppercase tracking-widest flex items-center gap-3 animate-in slide-in-from-right-8 duration-300 pointer-events-auto ${t.type === 'success' ? 'bg-[#111111] text-white border-green-500/50' :
                        t.type === 'error' ? 'bg-[#111111] text-white border-red-500/50' :
                            'bg-[#111111] text-white border-white/10'
                        }`}
                >
                    <div className={`w-2 h-2 rounded-full ${t.type === 'success' ? 'bg-green-500' :
                        t.type === 'error' ? 'bg-red-500' :
                            'bg-white'
                        }`} />
                    {t.message}
                </div>
            ))}
        </div>
    );
}
