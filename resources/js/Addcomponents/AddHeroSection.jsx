import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AddHeroSection = ({ showForm, editingHero, setShowForm, setEditingHero, setReloadTrigger, handleUpdate }) => {
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [heroForm, setHeroForm] = useState({
        image: null,
        order: 0,
        is_active: true,
    });
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (editingHero) {
            setHeroForm({
                image: null,
                order: editingHero.order ?? 0,
                is_active: editingHero.is_active ?? true,
            });
            setPreview(
                editingHero.image_path
                    ? `/storage/${editingHero.image_path}`
                    : null
            );
        } else {
            setHeroForm({
                image: null,
                order: 0,
                is_active: true,
            });
            setPreview(null);
        }
        setErrorMessage(null);
    }, [editingHero]);

    const extractErrorMessage = (error) => {
        const errors = error?.response?.data?.errors;
        if (errors) {
            // Grab the first validation message (e.g. order.unique)
            const firstField = Object.keys(errors)[0];
            return errors[firstField]?.[0] || 'Something went wrong. Please check your input.';
        }
        return error?.response?.data?.message || 'Something went wrong. Please try again.';
    };

    const handleCreate = async (formData) => {
        await axios.post(route("ourhero.store"), formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        setReloadTrigger((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(null);

        // image is required on create
        if (!editingHero && !heroForm.image) {
            setErrorMessage("Please select an image.");
            return;
        }

        const formData = new FormData();
        if (heroForm.image) formData.append("image", heroForm.image);
        formData.append("order", heroForm.order ?? 0);
        formData.append("is_active", heroForm.is_active ? 1 : 0);

        try {
            setSubmitting(true);

            if (editingHero) {
                await handleUpdate(formData, editingHero.id);
            } else {
                await handleCreate(formData);
            }

            setHeroForm({ image: null, order: 0, is_active: true });
            setPreview(null);
            setShowForm(false);
            setEditingHero(null);
        } catch (error) {
            console.log("Error saving data", error);
            setErrorMessage(extractErrorMessage(error));
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === "file") {
            const file = files[0];
            setHeroForm((prev) => ({ ...prev, image: file }));
            if (file) setPreview(URL.createObjectURL(file));
            return;
        }

        setHeroForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : (name === "order" ? Number(value) : value),
        }));
    };

    if (!showForm) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {editingHero ? "Edit" : "Add"} Hero Section
                    </h2>
                    <button
                        onClick={() => {
                            setShowForm(false);
                            setEditingHero(null);
                        }}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {errorMessage && (
                    <div className="mb-4 px-3 py-2 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Image {editingHero && "(leave blank to keep current)"}
                        </label>
                        <input
                            type="file"
                            name="image"
                            accept="image/png, image/jpeg, image/jpg, image/webp"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                            required={!editingHero}
                        />
                        {preview && (
                            <img
                                src={preview}
                                alt="Preview"
                                className="mt-3 h-32 w-full object-cover rounded-lg border"
                            />
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Order
                        </label>
                        <input
                            type="number"
                            name="order"
                            min="0"
                            value={heroForm.order}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="is_active"
                            id="is_active"
                            checked={heroForm.is_active}
                            onChange={handleChange}
                            className="h-4 w-4"
                        />
                        <label htmlFor="is_active" className="text-sm font-medium text-gray-700">
                            Active
                        </label>
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={() => {
                                setShowForm(false);
                                setEditingHero(null);
                            }}
                            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-4 py-2 rounded-full bg-[#007dcc] text-white transition disabled:opacity-50"
                        >
                            {submitting ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddHeroSection