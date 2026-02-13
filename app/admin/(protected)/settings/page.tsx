import { getSiteSettings, updateSiteSetting } from "@/lib/actions/settings";
import SettingsForm from "@/components/admin/SettingsForm";

export default async function SettingsPage() {
    const settings = await getSiteSettings();

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-black text-[#111111] uppercase tracking-tight leading-none mb-2">Site Settings</h1>
                <p className="text-zinc-500 font-medium">Manage global website configuration</p>
            </header>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
                {settings && settings.length > 0 ? (
                    settings.map((setting: any) => (
                        <div key={setting.id} className="p-8">
                            <SettingsForm
                                setting={setting}
                                onUpdate={async (formData: FormData) => {
                                    'use server'
                                    await updateSiteSetting(formData)
                                }}
                            />
                        </div>
                    ))
                ) : (
                    <div className="p-20 text-center">
                        <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">No settings found in the database.</p>
                        <p className="text-zinc-300 text-xs mt-2">Add settings to the 'site_settings' table in Supabase.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
