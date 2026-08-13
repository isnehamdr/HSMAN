import React, { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Pencil, Trash2 } from "lucide-react";

import AddGallery from "@/Addcomponents/AddGallery";
import AdminWrapper from "@/AdminComponent/AdminWrapper";

const Gallery = () => {
    const [allGallery, setAllGallery] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [editingGallery, setEditingGallery] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);
    const [deleteLoading, setDeleteLoading] = useState(null);

    const fetchGallery = async () => {
        try {
            setLoading(true);

            const response = await axios.get("/ourgallery");

            setAllGallery(response.data?.data || []);
        } catch (error) {
            console.error("Gallery fetching error:", error);
            setAllGallery([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGallery();
    }, [reloadTrigger]);

    const handleCreate = () => {
        setEditingGallery(null);
        setShowForm(true);
    };

    const handleEdit = (gallery) => {
        setEditingGallery(gallery);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this gallery image?"
        );

        if (!confirmed) {
            return;
        }

        try {
            setDeleteLoading(id);

            // Laravel route is DELETE /ourgallery/{gallery}
            await axios.delete(`/ourgallery/${id}`);

            setReloadTrigger((prev) => !prev);
        } catch (error) {
            console.error("Gallery delete error:", error);

            alert(
                error?.response?.data?.message ||
                    "Failed to delete gallery image."
            );
        } finally {
            setDeleteLoading(null);
        }
    };

    return (
        <AdminWrapper>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                        Gallery
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Manage your gallery images.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={handleCreate}
                    className="flex w-fit items-center gap-2 rounded-full bg-[#007DCC] px-5 py-2.5 text-white transition hover:bg-[#006bad]"
                >
                    <Plus size={18} />
                    <span>Add Image</span>
                </button>
            </div>

            {loading ? (
                <div className="py-10 text-center text-gray-500">
                    Loading gallery...
                </div>
            ) : allGallery.length === 0 ? (
                <div className="rounded-xl border border-dashed border-gray-300 bg-white py-12 text-center">
                    <p className="text-gray-500">
                        No gallery images found.
                    </p>

                    <button
                        type="button"
                        onClick={handleCreate}
                        className="mt-4 rounded-full bg-[#007DCC] px-5 py-2 text-sm text-white"
                    >
                        Add Gallery Image
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {allGallery.map((gallery) => (
                        <div
                            key={gallery.id}
                            className="overflow-hidden rounded-xl border bg-white shadow-sm"
                        >
                            <div className="relative">
                                <img
                                    src={`/storage/${gallery.image_path}`}
                                    alt="Gallery"
                                    className="h-52 w-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "/placeholder-image.jpg";
                                    }}
                                />
                            </div>

                            <div className="flex items-center justify-end gap-2 p-4">
                                <button
                                    type="button"
                                    onClick={() => handleEdit(gallery)}
                                    className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                                    title="Edit"
                                >
                                    <Pencil size={18} />
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleDelete(gallery.id)}
                                    disabled={deleteLoading === gallery.id}
                                    className="rounded-full p-2 text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                                    title="Delete"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <AddGallery
                showForm={showForm}
                editingGallery={editingGallery}
                setShowForm={setShowForm}
                setEditingGallery={setEditingGallery}
                setReloadTrigger={setReloadTrigger}
            />
        </AdminWrapper>
    );
};

export default Gallery;