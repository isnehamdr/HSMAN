import { useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function EditHeroSection({ isOpen, onClose, onSuccess, heroSection }) {
    const [preview, setPreview] = useState(null);

    const { data, setData, put, processing, errors, reset, clearErrors } = useForm({
        image: null,
        order: 0,
        is_active: true,
    });

    // Populate the form whenever a new slide is selected for editing
    useEffect(() => {
        if (heroSection) {
            setData({
                image: null,
                order: heroSection.order,
                is_active: heroSection.is_active,
            });
            setPreview(heroSection.image_path ? `/storage/${heroSection.image_path}` : null);
        }
    }, [heroSection]);

    if (!isOpen || !heroSection) return null;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setData('image', file);
        setPreview(URL.createObjectURL(file));
    };

    const handleClose = () => {
        reset();
        clearErrors();
        onClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('ourhero.update', heroSection.id), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                handleClose();
                onSuccess?.();
            },
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">Edit Hero Slide</h3>
                    <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
                        &times;
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">Hero Image</label>
                        <div className="flex items-center gap-4">
                            <div className="flex h-32 w-48 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-dashed border-gray-300 bg-gray-50">
                                {preview ? (
                                    <img src={preview} alt="Preview" className="h-full w-full object-cover" />
                                ) : (
                                    <span className="text-xs text-gray-400">No image</span>
                                )}
                            </div>
                            <div className="flex-1">
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg, image/webp"
                                    onChange={handleImageChange}
                                    className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[#007dcc] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#006bb3]"
                                />
                                <p className="mt-1 text-xs text-gray-400">
                                    Leave empty to keep the current image. Max 2MB.
                                </p>
                            </div>
                        </div>
                        {errors.image && <p className="mt-2 text-sm text-red-600">{errors.image}</p>}
                    </div>

                    <div>
                        <label htmlFor="order" className="mb-2 block text-sm font-medium text-gray-700">
                            Display Order
                        </label>
                        <input
                            id="order"
                            type="number"
                            min="0"
                            value={data.order}
                            onChange={(e) => setData('order', e.target.value)}
                            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                        />
                        {errors.order && <p className="mt-2 text-sm text-red-600">{errors.order}</p>}
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            id="is_active"
                            type="checkbox"
                            checked={data.is_active}
                            onChange={(e) => setData('is_active', e.target.checked)}
                            className="h-4 w-4 rounded border-gray-300 text-[#007dcc] focus:ring-[#007dcc]"
                        />
                        <label htmlFor="is_active" className="text-sm text-gray-700">
                            Active (visible on homepage)
                        </label>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-lg bg-[#007dcc] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#006bb3] disabled:opacity-50"
                        >
                            {processing ? 'Updating...' : 'Update Slide'}
                        </button>
                        <button
                            type="button"
                            onClick={handleClose}
                            className="rounded-lg px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}