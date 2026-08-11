// Addcomponents/AddHeroSection.jsx
import { useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function AddHeroSection({ isOpen, onClose, onSuccess }) {
    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        image: null,
        order: 0,
        is_active: true,
    });

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            reset();
            setPreview(null);
            clearErrors();
        }
    }, [isOpen]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setData('image', file);
        setPreview(URL.createObjectURL(file));
        clearErrors('image');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Debug: Log the data being sent
        console.log('Submitting form with data:', data);
        
        post(route('ourhero.store'), {
            forceFormData: true,
            onSuccess: (response) => {
                console.log('Success:', response);
                reset();
                setPreview(null);
                if (onSuccess) onSuccess();
                onClose();
            },
            onError: (errors) => {
                console.log('Errors:', errors);
                // Keep modal open to show errors
            },
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                    onClick={onClose}
                ></div>

                <div className="relative w-full max-w-2xl rounded-xl bg-white shadow-xl">
                    <div className="flex items-center justify-between border-b border-gray-200 p-4">
                        <h3 className="text-lg font-semibold text-gray-900">Add New Image</h3>
                        <button
                            onClick={onClose}
                            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="space-y-6">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Hero Image <span className="text-red-500">*</span>
                                </label>

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
                                        <p className="mt-1 text-xs text-gray-400">JPG, PNG or WEBP. Max 2MB.</p>
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
                        </div>

                        <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-6">
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-lg bg-[#007dcc] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#006bb3] disabled:opacity-50"
                            >
                                {processing ? 'Saving...' : 'Save Image'}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-lg px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}