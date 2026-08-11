import { useState, useEffect } from 'react';
import AdminNavbar from '@/AdminWrapper/AdminNavbar';
import AdminSidebar from '@/AdminWrapper/AdminSidebar';

export default function AdminLayout({ header, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 640;
            setIsMobile(mobile);
            if (!mobile) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <AdminNavbar
                onToggleSidebar={toggleSidebar}
                sidebarOpen={sidebarOpen}
                isMobile={isMobile}
            />
            <AdminSidebar 
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            {/* Main content - adjusts based on sidebar state */}
            <div className={`pt-16 transition-all duration-300 ${
                sidebarOpen ? 'sm:ml-64' : 'sm:ml-20'
            }`}>
                {header && (
                    <header className="border-b border-gray-200 bg-white shadow-sm">
                        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {children}
                </main>
            </div>
        </div>
    );
}