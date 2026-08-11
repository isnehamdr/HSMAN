// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/react';

// export default function Dashboard() {
//     return (
//         <AuthenticatedLayout
//             header={
//                 <h2 className="text-xl font-semibold leading-tight text-gray-800">
//                     Dashboard
//                 </h2>
//             }
//         >
//             <Head title="Dashboard" />

//             <div className="py-12">
//                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//                     <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
//                         <div className="p-6 text-gray-900">
//                             You're logged in!
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }


import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

function Dashboard() {
    const [stats, setStats] = useState({
        totalMembers: 0,
        totalEvents: 0,
        totalGallery: 0,
        totalFAQs: 0,
        recentMembers: [],
        upcomingEvents: [],
        recentActivity: []
    });

    // Simulated data - replace with actual API calls
    useEffect(() => {
        // Fetch dashboard data from your backend
        setStats({
            totalMembers: 1247,
            totalEvents: 56,
            totalGallery: 342,
            totalFAQs: 89,
            recentMembers: [
                { id: 1, name: 'John Doe', email: 'john@example.com', joined: '2 hours ago' },
                { id: 2, name: 'Jane Smith', email: 'jane@example.com', joined: '5 hours ago' },
                { id: 3, name: 'Mike Johnson', email: 'mike@example.com', joined: '1 day ago' },
            ],
            upcomingEvents: [
                { id: 1, title: 'Annual Conference', date: '2024-12-15', attendees: 120 },
                { id: 2, title: 'Workshop Session', date: '2024-12-20', attendees: 45 },
                { id: 3, title: 'Networking Meetup', date: '2024-12-25', attendees: 78 },
            ],
            recentActivity: [
                { id: 1, action: 'New member registered', time: '10 minutes ago', user: 'Sarah Wilson' },
                { id: 2, action: 'Event updated', time: '1 hour ago', user: 'Admin' },
                { id: 3, action: 'New gallery uploaded', time: '3 hours ago', user: 'Mike Brown' },
                { id: 4, action: 'FAQ published', time: '5 hours ago', user: 'Emily Davis' },
            ]
        });
    }, []);

    const StatCard = ({ icon, label, value, color = 'blue' }) => (
        <div className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{label}</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">{value.toLocaleString()}</p>
                </div>
                <div className={`rounded-full bg-${color}-100 p-3`}>
                    <div className={`h-6 w-6 text-${color}-600`}>{icon}</div>
                </div>
            </div>
        </div>
    );

    const ActivityItem = ({ icon, action, time, user }) => (
        <div className="flex items-start gap-4 border-b border-gray-100 py-3 last:border-0">
            <div className="rounded-full bg-gray-100 p-2">
                {icon}
            </div>
            <div className="flex-1">
                <p className="text-sm text-gray-800">{action}</p>
                <div className="mt-1 flex items-center gap-2">
                    <span className="text-xs text-gray-500">{user}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-400">{time}</span>
                </div>
            </div>
        </div>
    );

    const EventItem = ({ title, date, attendees }) => (
        <div className="flex items-center justify-between border-b border-gray-100 py-3 last:border-0">
            <div>
                <p className="text-sm font-medium text-gray-800">{title}</p>
                <p className="text-xs text-gray-500">{date}</p>
            </div>
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                {attendees} attending
            </span>
        </div>
    );

    const MemberItem = ({ name, email, joined }) => (
        <div className="flex items-center justify-between border-b border-gray-100 py-3 last:border-0">
            <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#007dcc] to-[#005fa3] text-sm font-semibold text-white">
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-800">{name}</p>
                    <p className="text-xs text-gray-500">{email}</p>
                </div>
            </div>
            <span className="text-xs text-gray-400">{joined}</span>
        </div>
    );

    return (
        <>
            <Head title="Dashboard" />

            {/* Welcome Section */}
            <div className="mb-8 rounded-lg bg-gradient-to-r from-[#007dcc] to-[#005fa3] p-6 text-white shadow-lg">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold">Welcome back, Admin!</h1>
                        <p className="mt-1 text-sm text-white/80">
                            Here's what's happening with your website today.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            href="#"
                            className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/30"
                        >
                            <span className="flex items-center gap-2">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Add New
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    icon={
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-4a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    }
                    label="Total Members"
                    value={stats.totalMembers}
                    color="blue"
                />
                <StatCard
                    icon={
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    }
                    label="Total Events"
                    value={stats.totalEvents}
                    color="green"
                />
                <StatCard
                    icon={
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    }
                    label="Gallery Items"
                    value={stats.totalGallery}
                    color="purple"
                />
                <StatCard
                    icon={
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                    label="FAQs"
                    value={stats.totalFAQs}
                    color="orange"
                />
            </div>

            {/* Charts and Recent Activity */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Recent Members - Left */}
                <div className="rounded-lg bg-white p-6 shadow-sm lg:col-span-1">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">Recent Members</h2>
                        <Link href="#" className="text-sm text-[#007dcc] hover:text-[#0066aa]">
                            View All →
                        </Link>
                    </div>
                    <div className="space-y-1">
                        {stats.recentMembers.map((member) => (
                            <MemberItem key={member.id} {...member} />
                        ))}
                    </div>
                </div>

                {/* Recent Activity - Middle */}
                <div className="rounded-lg bg-white p-6 shadow-sm lg:col-span-1">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
                        <Link href="#" className="text-sm text-[#007dcc] hover:text-[#0066aa]">
                            View All →
                        </Link>
                    </div>
                    <div className="space-y-1">
                        {stats.recentActivity.map((activity) => (
                            <ActivityItem
                                key={activity.id}
                                icon={
                                    <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                                {...activity}
                            />
                        ))}
                    </div>
                </div>

                {/* Upcoming Events - Right */}
                <div className="rounded-lg bg-white p-6 shadow-sm lg:col-span-1">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">Upcoming Events</h2>
                        <Link href="#" className="text-sm text-[#007dcc] hover:text-[#0066aa]">
                            View All →
                        </Link>
                    </div>
                    <div className="space-y-1">
                        {stats.upcomingEvents.map((event) => (
                            <EventItem key={event.id} {...event} />
                        ))}
                    </div>
                </div>
            </div>

            
        </>
    );
}

Dashboard.layout = (page) => <AdminLayout children={page}>{page}</AdminLayout>;

export default Dashboard;