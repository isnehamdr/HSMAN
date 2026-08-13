import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AddGallery = ({
    showForm,
    editingGallery,
    setShowForm,
    setEditingGallery,
    setReloadTrigger,
}) => {
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (editingGallery) {
            setImage(null);

            if (editingGallery.image_path) {
                setPreview(`/storage/${editingGallery.image_path}`);
            } else {
                setPreview(null);
            }
        } else {
            setImage(null);
            setPreview(null);
        }

        setErrorMessage("");
    }, [editingGallery]);

    const extractErrorMessage = (error) => {
        const errors = error?.response?.data?.errors;

        if (errors) {
            const firstField = Object.keys(errors)[0];

            return (
                errors[firstField]?.[0] ||
                "Something went wrong. Please check your input."
            );
        }

        return (
            error?.response?.data?.message ||
            "Something went wrong. Please try again."
        );
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) {
            setImage(null);
            return;
        }

        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const closeForm = () => {
        setShowForm(false);
        setEditingGallery(null);
        setImage(null);
        setPreview(null);
        setErrorMessage("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        if (!editingGallery && !image) {
            setErrorMessage("Please select an image.");
            return;
        }

        const formData = new FormData();

        if (image) {
            formData.append("image", image);
        }

        try {
            setSubmitting(true);

            if (editingGallery) {
                // Your Laravel update route is POST
                await axios.post(
                    `/ourgallery/${editingGallery.id}`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
            } else {
                await axios.post("/ourgallery", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
            }

            setReloadTrigger((prev) => !prev);

            closeForm();
        } catch (error) {
            console.error("Error saving gallery:", error);
            setErrorMessage(extractErrorMessage(error));
        } finally {
            setSubmitting(false);
        }
    };

    if (!showForm) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {editingGallery ? "Edit Gallery Image" : "Add Gallery Image"}
                    </h2>

                    <button
                        type="button"
                        onClick={closeForm}
                        className="rounded-full p-2 transition hover:bg-gray-100"
                    >
                        <X size={24} />
                    </button>
                </div>

                {errorMessage && (
                    <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Gallery Image
                            {editingGallery && (
                                <span className="ml-1 text-gray-500">
                                    (optional)
                                </span>
                            )}
                        </label>

                        <input
                            type="file"
                            name="image"
                            accept="image/jpeg,image/png,image/jpg,image/webp"
                            onChange={handleImageChange}
                            required={!editingGallery}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        />

                        <p className="mt-1 text-xs text-gray-500">
                            JPG, JPEG, PNG or WEBP. Maximum 5MB.
                        </p>
                    </div>

                    {preview && (
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-700">
                                Preview
                            </p>

                            <img
                                src={preview}
                                alt="Gallery preview"
                                className="h-64 w-full rounded-lg border object-cover"
                            />
                        </div>
                    )}

                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={closeForm}
                            disabled={submitting}
                            className="rounded-full border border-gray-300 px-5 py-2 transition hover:bg-gray-100 disabled:opacity-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="rounded-full bg-[#007DCC] px-5 py-2 text-white transition hover:bg-[#006bad] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {submitting ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddGallery;