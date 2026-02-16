import { getMembers } from "@/lib/actions/members";
import { getBranches } from "@/lib/actions/branches";
import Link from "next/link";

export default async function AdminDashboard() {
    const [directors, executive, instructors, branches, blackBelts] = await Promise.all([
        getMembers('director'),
        getMembers('executive'),
        getMembers('instructor'),
        getBranches(),
        getMembers('black_belt')
    ]);

    const stats = [
        { label: "Total Directors", value: directors.length, color: "bg-black" },
        { label: "Executive Team", value: executive.length, color: "bg-red-600" },
        { label: "Instructors", value: instructors.length, color: "bg-zinc-800" },
        { label: "Global Branches", value: branches.length, color: "bg-red-700" },
        { label: "Black Belt Members", value: blackBelts.length, color: "bg-black" },
    ];

    return (
        <div className="space-y-8">
            <div className="bg-[#111111] rounded-2xl p-6 lg:p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-xl lg:text-3xl font-bold mb-2 tracking-tight uppercase leading-tight">Admin Dashboard</h1>
                    <p className="text-zinc-400 text-xs lg:text-base max-w-lg">Welcome back. Here is a real-time overview of the World Federation of Shotokan Karate data.</p>
                </div>
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-5 lg:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className={`w-8 h-8 lg:w-10 lg:h-10 ${stat.color} rounded-lg mb-3 lg:mb-4 flex items-center justify-center text-white font-black italic text-xs lg:text-base`}>
                            {stat.value}
                        </div>
                        <p className="text-[9px] lg:text-[10px] uppercase font-black tracking-widest text-zinc-400 mb-1">{stat.label}</p>
                        <p className="text-xl lg:text-2xl font-black text-[#111111]">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Visual Section / Shortcut Card */}
                <div className="hidden lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6 sm:gap-10">
                        <div className="flex-1 order-2 md:order-1">
                            <div className="mb-4 sm:mb-6">
                                <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em] mb-2 sm:mb-4 block">The Karate Way</span>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#111111] uppercase tracking-tighter leading-[1.1] sm:leading-[0.9] mb-4">
                                    "Karate-do is a lifelong study."
                                </h2>
                                <p className="text-zinc-400 text-[10px] sm:text-xs font-medium italic">
                                    The ultimate aim of Karate lies not in victory or defeat, but in the perfection of the character of its participants.
                                </p>
                            </div>
                            <div className="h-px w-20 bg-gray-100 mb-4 sm:mb-6"></div>
                            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                                Manage your federation data with the same precision and discipline as your kata.
                                Use the sidebar or quick links to maintain records.
                            </p>
                        </div>
                        <div className="w-40 h-40 sm:w-56 sm:h-56 bg-zinc-50 rounded-3xl flex items-center justify-center border-8 border-white shadow-2xl overflow-hidden shrink-0 transform rotate-2 hover:rotate-0 transition-transform duration-500 order-1 md:order-2">
                            <img src="/images/logo.png" className="w-20 sm:w-32 opacity-90 group-hover:scale-110 transition-transform" alt="" />
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 px-2 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-red-600"></span>
                        Quick Access
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                        <Link href="/admin/team" className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:border-red-600/30 hover:bg-red-50/10 transition-all group shadow-sm">
                            <span className="font-bold text-sm text-zinc-700 uppercase tracking-tight">Manage Team</span>
                            <svg className="w-5 h-5 text-zinc-300 group-hover:text-red-600 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                        </Link>
                        <Link href="/admin/branches" className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:border-red-600/30 hover:bg-red-50/10 transition-all group shadow-sm">
                            <span className="font-bold text-sm text-zinc-700 uppercase tracking-tight">Manage Branches</span>
                            <svg className="w-5 h-5 text-zinc-300 group-hover:text-red-600 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                        </Link>
                        <Link href="/admin/world-record" className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:border-red-600/30 hover:bg-red-50/10 transition-all group shadow-sm font-medium">
                            <span className="font-bold text-sm text-zinc-700 uppercase tracking-tight">Manage World Record</span>
                            <div className="flex items-center gap-1">
                                <svg className="w-5 h-5 text-zinc-300 group-hover:text-red-600 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
