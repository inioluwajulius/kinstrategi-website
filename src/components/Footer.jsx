export default function Footer() {
    return (
        <footer className="bg-brand-dark border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 mt-auto z-10 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="font-heading text-xl font-bold tracking-widest mb-4 text-brand-accent-2 uppercase">Control Console</h2>
                    <p className="text-gray-400 max-w-sm mb-6 font-body font-light">
                        Architecting elite digital and operational frameworks for visionary entities.
                    </p>
                </div>

                <div>
                    <h3 className="font-heading text-lg font-semibold mb-4 text-white uppercase">System Logs</h3>
                    <ul className="space-y-2 font-tech text-sm text-gray-500">
                        <li className="hover:text-brand-accent-3 transition-colors cursor-pointer">/ status: optimal</li>
                        <li className="hover:text-brand-accent-3 transition-colors cursor-pointer">/ signals: active</li>
                        <li className="hover:text-brand-accent-3 transition-colors cursor-pointer">/ uplink: secured</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-heading text-lg font-semibold mb-4 text-white uppercase">Directives</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="hover:text-brand-accent-1 transition-colors cursor-pointer">Privacy Protocol</li>
                        <li className="hover:text-brand-accent-1 transition-colors cursor-pointer">Terms of Engagement</li>
                        <li className="hover:text-brand-accent-1 transition-colors cursor-pointer">Contact Command</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center md:text-left text-xs font-tech text-gray-600">
                © {new Date().getFullYear()} KinStrategi | Leiré Studio. All dimensions reserved.
            </div>
        </footer>
    );
}
