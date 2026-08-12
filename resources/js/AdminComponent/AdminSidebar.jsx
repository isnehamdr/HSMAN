import { Link, usePage } from '@inertiajs/react';

const menuItems = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
            </svg>
        ),
    },

    {
        label: 'Hero Section',
        href: '/hero-section',
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
            </svg>
        ),
    },

    {
        label: 'Members',
        href: '/member',
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-4a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
        ),
    },

    {
        label: 'Events',
        href: '/events',
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
            </svg>
        ),
    },

    {
        label: 'Gallery',
        href: '/gallery',
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
            </svg>
        ),
    },

    {
        label: 'FAQs',
        href: '/faqs',
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31.826-2.37 2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        ),
    },
];

export default function AdminSidebar({ isOpen, onClose }) {
    const { url } = usePage();

    return (
        <>
            {/* Mobile backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm sm:hidden"
                    onClick={onClose}
                />
            )}

            <aside
                className={`
                    fixed left-0 top-0 z-30 h-screen
                    border-r border-gray-200 bg-white pt-16
                    transition-all duration-300

                    ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'}

                    sm:translate-x-0
                    ${isOpen ? 'sm:w-64' : 'sm:w-20'}
                `}
            >
                <div className="flex h-full flex-col overflow-y-auto px-3 py-4">

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1">
                        {menuItems.map((item) => {
                            const isActive =
                                url === item.href ||
                                url.startsWith(`${item.href}/`);

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    title={!isOpen ? item.label : undefined}
                                    onClick={() => {
                                        if (window.innerWidth < 640 && onClose) {
                                            onClose();
                                        }
                                    }}
                                    className={`
                                        group flex items-center rounded-lg
                                        px-3 py-2.5 text-sm font-medium
                                        transition-all duration-200

                                        ${isOpen
                                            ? 'justify-start'
                                            : 'sm:justify-center'
                                        }

                                        ${isActive
                                            ? 'bg-[#007dcc] text-white shadow-md'
                                            : 'text-gray-700 hover:bg-gray-100 hover:text-[#007dcc]'
                                        }
                                    `}
                                >
                                    <span
                                        className={`
                                            shrink-0
                                            ${isActive
                                                ? 'text-white'
                                                : 'text-gray-400 group-hover:text-[#007dcc]'
                                            }
                                        `}
                                    >
                                        {item.icon}
                                    </span>

                                    {isOpen && (
                                        <span className="ml-3 whitespace-nowrap">
                                            {item.label}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Logout */}
                    <div className="mt-auto border-t border-gray-200 pt-4">
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            title={!isOpen ? 'Log Out' : undefined}
                            className={`
                                flex w-full items-center gap-3
                                rounded-lg px-3 py-2.5
                                text-sm text-gray-600
                                transition-all
                                hover:bg-red-50 hover:text-red-600

                                ${!isOpen ? 'sm:justify-center' : ''}
                            `}
                        >
                            <svg
                                className="h-5 w-5 shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>

                            {isOpen && 'Log Out'}
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}