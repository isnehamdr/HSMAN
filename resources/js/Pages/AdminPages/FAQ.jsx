import React, { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Pencil, Trash2 } from "lucide-react";

import AddFAQ from "@/Addcomponents/AddFAQ";
import AdminWrapper from "@/AdminComponent/AdminWrapper";

const FAQ = () => {
    const [allFAQ, setAllFAQ] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [editingFAQ, setEditingFAQ] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);
    const [deleteLoading, setDeleteLoading] = useState(null);

    const fetchFAQ = async () => {
        try {
            setLoading(true);

            const response = await axios.get("/ourfaq");

            setAllFAQ(response.data?.data || []);
        } catch (error) {
            console.error("FAQ fetching error:", error);
            setAllFAQ([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFAQ();
    }, [reloadTrigger]);

    const handleCreate = () => {
        setEditingFAQ(null);
        setShowForm(true);
    };

    const handleEdit = (faq) => {
        setEditingFAQ(faq);
        setShowForm(true);
    };

   const handleDelete = async (id) => {
    const confirmed = window.confirm(
        "Are you sure you want to delete this FAQ?"
    );
    if (!confirmed) return;

    try {
        setDeleteLoading(id);
        await axios.delete(`/ourfaq/${id}`);
        setReloadTrigger((prev) => !prev);
    } catch (error) {
        console.error("FAQ delete error:", error);
        // Show a more specific error message
        const errorMsg = error?.response?.data?.message || "Failed to delete FAQ.";
        alert(errorMsg);
    } finally {
        setDeleteLoading(null);
    }
};

    return (
        <AdminWrapper>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                        FAQs
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Manage frequently asked questions.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={handleCreate}
                    className="flex w-fit items-center gap-2 rounded-full bg-[#007DCC] px-5 py-2.5 text-white transition hover:bg-[#006bad]"
                >
                    <Plus size={18} />
                    <span>Add FAQ</span>
                </button>
            </div>

            {loading ? (
                <div className="rounded-xl bg-white py-12 text-center shadow-sm">
                    <p className="text-gray-500">
                        Loading FAQs...
                    </p>
                </div>
            ) : allFAQ.length === 0 ? (
                <div className="rounded-xl border border-dashed border-gray-300 bg-white py-12 text-center">
                    <p className="text-gray-500">
                        No FAQs found.
                    </p>

                    <button
                        type="button"
                        onClick={handleCreate}
                        className="mt-4 rounded-full bg-[#007DCC] px-5 py-2 text-sm text-white transition hover:bg-[#006bad]"
                    >
                        Add FAQ
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {allFAQ.map((faq, index) => (
                        <div
                            key={faq.id}
                            className="flex min-h-[220px] flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                        >
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#007DCC]/10 text-sm font-semibold text-[#007DCC]">
                                        {index + 1}
                                    </span>

                                    <span className="text-xs text-gray-400">
                                        FAQ #{faq.id}
                                    </span>
                                </div>

                                <div
                                    className="prose prose-sm max-w-none text-base leading-7 text-gray-700"
                                    dangerouslySetInnerHTML={{
                                        __html: faq.text,
                                    }}
                                />
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-2 border-t border-gray-100 pt-4">
                                <button
                                    type="button"
                                    onClick={() => handleEdit(faq)}
                                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                                    title="Edit FAQ"
                                >
                                    <Pencil size={16} />
                                    Edit
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleDelete(faq.id)}
                                    disabled={deleteLoading === faq.id}
                                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                                    title="Delete FAQ"
                                >
                                    <Trash2 size={16} />

                                    {deleteLoading === faq.id
                                        ? "Deleting..."
                                        : "Delete"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <AddFAQ
                showForm={showForm}
                editingFAQ={editingFAQ}
                setShowForm={setShowForm}
                setEditingFAQ={setEditingFAQ}
                setReloadTrigger={setReloadTrigger}
            />
        </AdminWrapper>
    );
};

export default FAQ;