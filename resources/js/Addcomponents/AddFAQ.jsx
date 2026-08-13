import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddFAQ = ({
    showForm,
    editingFAQ,
    setShowForm,
    setEditingFAQ,
    setReloadTrigger,
}) => {
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        if (editingFAQ) {
            setText(editingFAQ.text || "");
        } else {
            setText("");
        }
        setErrorMessage("");
    }, [editingFAQ]);

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

    const closeForm = () => {
        if (submitting) return;
        setShowForm(false);
        setEditingFAQ(null);
        setText("");
        setErrorMessage("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        // Remove HTML tags to check if editor is actually empty
        const plainText = text
            .replace(/<(.|\n)*?>/g, "")
            .replace(/&nbsp;/g, " ")
            .trim();

        if (!plainText) {
            setErrorMessage("Please enter an FAQ.");
            return;
        }

        try {
            setSubmitting(true);

            const data = { text: text };

            if (editingFAQ) {
                // Use PUT for updates
                await axios.put(`/ourfaq/${editingFAQ.id}`, data);
            } else {
                await axios.post("/ourfaq", data);
            }

            setReloadTrigger((prev) => !prev);
            closeForm();
        } catch (error) {
            console.error("Error saving FAQ:", error);
            setErrorMessage(extractErrorMessage(error));
        } finally {
            setSubmitting(false);
        }
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            ["blockquote", "code-block"],
            ["link"],
            ["clean"],
        ],
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "align",
        "blockquote",
        "code-block",
        "link",
    ];

    if (!showForm) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">
                            {editingFAQ ? "Edit FAQ" : "Add FAQ"}
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            {editingFAQ
                                ? "Update the frequently asked question."
                                : "Add a new frequently asked question."}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={closeForm}
                        disabled={submitting}
                        className="rounded-full p-2 transition hover:bg-gray-100 disabled:opacity-50"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Error */}
                {errorMessage && (
                    <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {errorMessage}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label
                            htmlFor="faq-text"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            FAQ
                        </label>
                        <div className="overflow-hidden rounded-xl border border-gray-300">
                            <ReactQuill
                                theme="snow"
                                value={text}
                                onChange={setText}
                                modules={modules}
                                formats={formats}
                                placeholder="Enter your frequently asked question..."
                                readOnly={submitting}
                            />
                        </div>
                        <div className="mt-2 flex justify-between">
                            <p className="text-xs text-gray-500">
                                Use the editor to format your FAQ text.
                            </p>
                            <p className="text-xs text-gray-400">
                                {text.replace(/<(.|\n)*?>/g, "").length}{" "}
                                characters
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 border-t border-gray-100 pt-5">
                        <button
                            type="button"
                            onClick={closeForm}
                            disabled={submitting}
                            className="rounded-full border border-gray-300 px-5 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="rounded-full bg-[#007DCC] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#006bad] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {submitting
                                ? "Saving..."
                                : editingFAQ
                                ? "Update FAQ"
                                : "Save FAQ"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFAQ;