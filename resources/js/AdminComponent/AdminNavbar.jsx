import { Link, usePage } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

export default function AdminNavbar({ onToggleSidebar, sidebarOpen }) {
    const { auth } = usePage().props;
    const user = auth?.user;

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

    const dropdownRef = useRef(null);
    const notifRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
            if (notifRef.current && !notifRef.current.contains(e.target)) {
                setNotifOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const notifications = [
        { id: 1, text: 'New user registered', time: '5m ago' },
        { id: 2, text: 'Server backup completed', time: '1h ago' },
        { id: 3, text: 'New comment on your post', time: '3h ago' },
    ];

    return (
        <nav className="fixed top-0 z-40 w-full border-b border-gray-200 bg-white">
            <div className="flex h-16 items-center justify-between gap-3 px-4 lg:px-6">
                {/* Left: Hamburger / X + Logo */}
                <div className="flex shrink-0 items-center gap-3">
                    <button
                        onClick={onToggleSidebar}
                        aria-label="Toggle sidebar"
                        className="inline-flex items-center rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    >
                        {sidebarOpen ? (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>

                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/images/logo2.jpeg"
                            alt="Logo"
                            className="h-14 w-14 object-contain"
                        />
                    </Link>
                </div>

                

                {/* Right: search icon (mobile), bell, user */}
                <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                   

                  

                    {/* User dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            onClick={() => setDropdownOpen((p) => !p)}
                            className="flex items-center gap-2 rounded-full p-1 text-sm transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                                {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                            </div>
                            <span className="hidden text-sm font-medium text-gray-700 sm:block">
                                {user?.name ?? 'Guest'}
                            </span>
                            <svg
                                className="hidden h-4 w-4 text-gray-400 sm:block"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 z-40 mt-2 w-48 rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
                                <div className="border-b border-gray-100 px-4 py-2.5">
                                    <p className="text-sm font-medium text-gray-800">{user?.name}</p>
                                    <p className="truncate text-xs text-gray-500">{user?.email}</p>
                                </div>
                                <Link
                                    href={route('profile.edit')}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                >
                                    Profile
                                </Link>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                                >
                                    Log Out
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        
        </nav>
    );
}