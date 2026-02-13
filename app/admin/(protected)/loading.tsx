export default function AdminLoading() {
    return (
        <div className="space-y-8 animate-pulse">
            <div className="h-48 bg-gray-200 rounded-2xl w-full"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 h-96 bg-gray-100 rounded-2xl"></div>
                <div className="space-y-6">
                    <div className="h-32 bg-gray-100 rounded-2xl"></div>
                    <div className="h-48 bg-gray-100 rounded-2xl"></div>
                </div>
            </div>
        </div>
    )
}
