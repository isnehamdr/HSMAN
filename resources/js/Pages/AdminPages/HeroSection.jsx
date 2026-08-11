import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import AddHeroSection from '@/Addcomponents/AddHeroSection';
import EditHeroSection from '@/EditComponent/EditHeroSection';


export default function HeroSection() {
    const { props } = usePage();
    const { heroSections, flash } = props;
    const sections = heroSections || [];
    const [deletingId, setDeletingId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSlide, setEditingSlide] = useState(null);

    const handleDelete = (id) => {
        if (!confirm('Are you sure you want to delete this hero slide?')) return;

        setDeletingId(id);
        router.delete(route('ourhero.destroy', id), {
            preserveScroll: true,
            onFinish: () => setDeletingId(null),
        });
    };

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {flash?.success && (
                    <div className="mb-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                        {flash.success}
                    </div>
                )}

                <div className="mb-6 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        Manage the images shown in the homepage hero slideshow.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#007dcc] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#006bb3]"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add image
                    </button>
                </div>

                {sections.length === 0 ? (
                    <div className="rounded-lg border border-dashed border-gray-300 bg-white py-16 text-center">
                        <p className="text-sm text-gray-500">No hero slides yet. Add your first one.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {sections.map((slide) => (
                            <div
                                key={slide.id}
                                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                            >
                                <div className="relative h-44 w-full bg-gray-100">
                                    <img
                                        src={`/storage/${slide.image_path}`}
                                        alt={`Hero slide ${slide.id}`}
                                        className="h-full w-full object-cover"
                                    />
                                    <span
                                        className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-xs font-medium ${
                                            slide.is_active
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-gray-200 text-gray-600'
                                        }`}
                                    >
                                        {slide.is_active ? 'Active' : 'Inactive'}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between px-4 py-3">
                                    <span className="text-xs text-gray-500">Order: {slide.order}</span>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setEditingSlide(slide)}
                                            className="rounded-lg p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-[#007dcc]"
                                            aria-label="Edit"
                                        >
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(slide.id)}
                                            disabled={deletingId === slide.id}
                                            className="rounded-lg p-1.5 text-gray-500 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                                            aria-label="Delete"
                                        >
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <AddHeroSection
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={() => router.reload()}
            />

            <EditHeroSection
                isOpen={!!editingSlide}
                heroSection={editingSlide}
                onClose={() => setEditingSlide(null)}
                onSuccess={() => router.reload()}
            />
        </>
    );
}

HeroSection.layout = (page) => <AdminLayout>{page}</AdminLayout>;