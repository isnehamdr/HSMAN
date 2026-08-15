// import { X } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const initialForm = {
//     title: "",
//     date: "",
//     time: "",
//     location: "",
//     short_description: "",
//     description: "",
//     image_path: null,
//     is_active: true,
// };

// const AddEvents = ({
//     showForm,
//     editingEvent,
//     setShowForm,
//     setEditingEvent,
//     setReloadTrigger,
//     handleUpdate,
// }) => {
//     const [eventsForm, setEventsForm] = useState(initialForm);
//     const [preview, setPreview] = useState(null);
//     const [submitting, setSubmitting] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");

//     useEffect(() => {
//         if (editingEvent) {
//             setEventsForm({
//                 title: editingEvent.title ?? "",
//                 date: editingEvent.date
//                     ? String(editingEvent.date).substring(0, 10)
//                     : "",
//                 time: editingEvent.time
//                     ? String(editingEvent.time).substring(0, 5)
//                     : "",
//                 location: editingEvent.location ?? "",
//                 short_description:
//                     editingEvent.short_description ?? "",
//                 description: editingEvent.description ?? "",
//                 image_path: null,
//                 is_active: Boolean(editingEvent.is_active),
//             });

//             setPreview(
//                 editingEvent.image_path
//                     ? `/storage/${editingEvent.image_path}`
//                     : null
//             );
//         } else {
//             setEventsForm(initialForm);
//             setPreview(null);
//         }

//         setErrorMessage("");
//     }, [editingEvent]);

//     const extractErrorMessage = (error) => {
//         const errors = error?.response?.data?.errors;

//         if (errors) {
//             const firstField = Object.keys(errors)[0];

//             return (
//                 errors[firstField]?.[0] ||
//                 "Please check your input."
//             );
//         }

//         return (
//             error?.response?.data?.message ||
//             "Something went wrong. Please try again."
//         );
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked, files } = e.target;

//         if (type === "file") {
//             const file = files?.[0] || null;

//             setEventsForm((prev) => ({
//                 ...prev,
//                 image_path: file,
//             }));

//             if (file) {
//                 setPreview(URL.createObjectURL(file));
//             }

//             return;
//         }

//         setEventsForm((prev) => ({
//             ...prev,
//             [name]: type === "checkbox" ? checked : value,
//         }));
//     };

//     const handleCreate = async (formData) => {
//         const response = await axios.post(
//             "/ourevents",
//             formData,
//             {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                 },
//             }
//         );

//         setReloadTrigger((prev) => !prev);

//         return response.data;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setErrorMessage("");

//         if (!eventsForm.title.trim()) {
//             setErrorMessage("Event title is required.");
//             return;
//         }

//         if (!editingEvent && !eventsForm.image_path) {
//             setErrorMessage("Please select an event image.");
//             return;
//         }

//         const formData = new FormData();

//         formData.append("title", eventsForm.title);
//         formData.append("date", eventsForm.date);
//         formData.append("time", eventsForm.time);
//         formData.append("location", eventsForm.location);
//         formData.append(
//             "short_description",
//             eventsForm.short_description
//         );
//         formData.append("description", eventsForm.description);
//         formData.append(
//             "is_active",
//             eventsForm.is_active ? "1" : "0"
//         );

//         if (eventsForm.image_path) {
//             formData.append(
//                 "image_path",
//                 eventsForm.image_path
//             );
//         }

//         try {
//             setSubmitting(true);

//             if (editingEvent) {
//                 await handleUpdate(
//                     formData,
//                     editingEvent.id
//                 );
//             } else {
//                 await handleCreate(formData);
//             }

//             setShowForm(false);
//             setEditingEvent(null);
//             setEventsForm(initialForm);
//             setPreview(null);
//         } catch (error) {
//             console.error("Error saving event:", error);
//             setErrorMessage(extractErrorMessage(error));
//         } finally {
//             setSubmitting(false);
//         }
//     };

//     const handleClose = () => {
//         if (submitting) return;

//         setShowForm(false);
//         setEditingEvent(null);
//         setErrorMessage("");
//         setEventsForm(initialForm);
//         setPreview(null);
//     };

//     if (!showForm) {
//         return null;
//     }

//     return (
//         <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
//             <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
//                 {/* Header */}
//                 <div className="flex justify-between items-center p-6 border-b">
//                     <div>
//                         <h2 className="text-2xl font-bold text-gray-800">
//                             {editingEvent
//                                 ? "Edit Event"
//                                 : "Add Event"}
//                         </h2>

//                         <p className="text-sm text-gray-500 mt-1">
//                             {editingEvent
//                                 ? "Update event information."
//                                 : "Create a new event."}
//                         </p>
//                     </div>

//                     <button
//                         type="button"
//                         onClick={handleClose}
//                         disabled={submitting}
//                         className="p-2 hover:bg-gray-100 rounded-full transition disabled:opacity-50"
//                     >
//                         <X size={24} />
//                     </button>
//                 </div>

//                 <form
//                     onSubmit={handleSubmit}
//                     className="p-6 space-y-5"
//                 >
//                     {/* Error */}
//                     {errorMessage && (
//                         <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
//                             {errorMessage}
//                         </div>
//                     )}

//                     {/* Image */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Event Image{" "}
//                             {editingEvent &&
//                                 "(leave blank to keep current)"}
//                         </label>

//                         <input
//                             type="file"
//                             name="image_path"
//                             accept="image/png,image/jpeg,image/jpg,image/webp"
//                             onChange={handleChange}
//                             required={!editingEvent}
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//                         />

//                         {preview && (
//                             <div className="mt-3">
//                                 <img
//                                     src={preview}
//                                     alt="Event preview"
//                                     className="h-48 w-full object-cover rounded-lg border"
//                                 />
//                             </div>
//                         )}
//                     </div>

//                     {/* Title */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Event Title
//                         </label>

//                         <input
//                             type="text"
//                             name="title"
//                             value={eventsForm.title}
//                             onChange={handleChange}
//                             placeholder="Enter event title"
//                             maxLength={255}
//                             required
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007DCC]"
//                         />
//                     </div>

//                     {/* Date + Time */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Date
//                             </label>

//                             <input
//                                 type="date"
//                                 name="date"
//                                 value={eventsForm.date}
//                                 onChange={handleChange}
//                                 className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007DCC]"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Time
//                             </label>

//                             <input
//                                 type="time"
//                                 name="time"
//                                 value={eventsForm.time}
//                                 onChange={handleChange}
//                                 className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007DCC]"
//                             />
//                         </div>
//                     </div>

//                     {/* Location */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Location
//                         </label>

//                         <input
//                             type="text"
//                             name="location"
//                             value={eventsForm.location}
//                             onChange={handleChange}
//                             placeholder="Enter event location"
//                             maxLength={255}
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007DCC]"
//                         />
//                     </div>

//                     {/* Short Description */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Short Description
//                         </label>

//                         <textarea
//                             name="short_description"
//                             value={eventsForm.short_description}
//                             onChange={handleChange}
//                             rows={3}
//                             placeholder="Enter a short description"
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#007DCC]"
//                         />
//                     </div>

//                     {/* Description */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Description
//                         </label>

//                         <textarea
//                             name="description"
//                             value={eventsForm.description}
//                             onChange={handleChange}
//                             rows={6}
//                             placeholder="Enter full event description"
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#007DCC]"
//                         />
//                     </div>

//                     {/* Active */}
//                     <div className="flex items-center gap-2">
//                         <input
//                             type="checkbox"
//                             name="is_active"
//                             id="event_is_active"
//                             checked={eventsForm.is_active}
//                             onChange={handleChange}
//                             className="h-4 w-4"
//                         />

//                         <label
//                             htmlFor="event_is_active"
//                             className="text-sm font-medium text-gray-700"
//                         >
//                             Active
//                         </label>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4 border-t">
//                         <button
//                             type="button"
//                             onClick={handleClose}
//                             disabled={submitting}
//                             className="px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition disabled:opacity-50"
//                         >
//                             Cancel
//                         </button>

//                         <button
//                             type="submit"
//                             disabled={submitting}
//                             className="px-5 py-2 rounded-full bg-[#007DCC] text-white hover:bg-[#006db3] transition disabled:opacity-50"
//                         >
//                             {submitting
//                                 ? "Saving..."
//                                 : editingEvent
//                                 ? "Update Event"
//                                 : "Create Event"}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddEvents;


import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const initialForm = {
    title: "",
    date: "",
    time: "",
    location: "",
    short_description: "",
    description: "",
    image_path: null,
    is_active: true,
};

const quillModules = {
    toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link"],
        ["clean"],
    ],
};

const AddEvents = ({
    showForm,
    editingEvent,
    setShowForm,
    setEditingEvent,
    setReloadTrigger,
    handleUpdate,
}) => {
    const [eventsForm, setEventsForm] = useState(initialForm);
    const [preview, setPreview] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (editingEvent) {
            setEventsForm({
                title: editingEvent.title ?? "",
                date: editingEvent.date
                    ? String(editingEvent.date).substring(0, 10)
                    : "",
                time: editingEvent.time
                    ? String(editingEvent.time).substring(0, 5)
                    : "",
                location: editingEvent.location ?? "",
                short_description:
                    editingEvent.short_description ?? "",
                description: editingEvent.description ?? "",
                image_path: null,
                is_active: Boolean(editingEvent.is_active),
            });

            setPreview(
                editingEvent.image_path
                    ? `/storage/${editingEvent.image_path}`
                    : null
            );
        } else {
            setEventsForm(initialForm);
            setPreview(null);
        }

        setErrorMessage("");
    }, [editingEvent]);

    const extractErrorMessage = (error) => {
        const errors = error?.response?.data?.errors;

        if (errors) {
            const firstField = Object.keys(errors)[0];

            return (
                errors[firstField]?.[0] ||
                "Please check your input."
            );
        }

        return (
            error?.response?.data?.message ||
            "Something went wrong. Please try again."
        );
    };

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === "file") {
            const file = files?.[0] || null;

            setEventsForm((prev) => ({
                ...prev,
                image_path: file,
            }));

            if (file) {
                setPreview(URL.createObjectURL(file));
            }

            return;
        }

        setEventsForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleDescriptionChange = (value) => {
        setEventsForm((prev) => ({
            ...prev,
            description: value,
        }));
    };

    const handleCreate = async (formData) => {
        const response = await axios.post(
            "/ourevents",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        setReloadTrigger((prev) => !prev);

        return response.data;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        if (!eventsForm.title.trim()) {
            setErrorMessage("Event title is required.");
            return;
        }

        if (!editingEvent && !eventsForm.image_path) {
            setErrorMessage("Please select an event image.");
            return;
        }

        const formData = new FormData();

        formData.append("title", eventsForm.title);
        formData.append("date", eventsForm.date);
        formData.append("time", eventsForm.time);
        formData.append("location", eventsForm.location);
        formData.append(
            "short_description",
            eventsForm.short_description
        );
        formData.append("description", eventsForm.description);
        formData.append(
            "is_active",
            eventsForm.is_active ? "1" : "0"
        );

        if (eventsForm.image_path) {
            formData.append(
                "image_path",
                eventsForm.image_path
            );
        }

        try {
            setSubmitting(true);

            if (editingEvent) {
                await handleUpdate(
                    formData,
                    editingEvent.id
                );
            } else {
                await handleCreate(formData);
            }

            setShowForm(false);
            setEditingEvent(null);
            setEventsForm(initialForm);
            setPreview(null);
        } catch (error) {
            console.error("Error saving event:", error);
            setErrorMessage(extractErrorMessage(error));
        } finally {
            setSubmitting(false);
        }
    };

    const handleClose = () => {
        if (submitting) return;

        setShowForm(false);
        setEditingEvent(null);
        setErrorMessage("");
        setEventsForm(initialForm);
        setPreview(null);
    };

    if (!showForm) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
                <div className="flex justify-between items-center p-6 border-b">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            {editingEvent
                                ? "Edit Event"
                                : "Add Event"}
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            {editingEvent
                                ? "Update event information."
                                : "Create a new event."}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleClose}
                        disabled={submitting}
                        className="p-2 hover:bg-gray-100 rounded-full transition disabled:opacity-50"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="p-6 space-y-5"
                >
                    {errorMessage && (
                        <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                            {errorMessage}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Event Image{" "}
                            {editingEvent &&
                                "(leave blank to keep current)"}
                        </label>

                        <input
                            type="file"
                            name="image_path"
                            accept="image/png,image/jpeg,image/jpg,image/webp"
                            onChange={handleChange}
                            required={!editingEvent}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />

                        {preview && (
                            <div className="mt-3">
                                <img
                                    src={preview}
                                    alt="Event preview"
                                    className="h-48 w-full object-cover rounded-lg border"
                                />
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Event Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={eventsForm.title}
                            onChange={handleChange}
                            placeholder="Enter event title"
                            maxLength={255}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007DCC]"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Date
                            </label>

                            <input
                                type="date"
                                name="date"
                                value={eventsForm.date}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007DCC]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Time
                            </label>

                            <input
                                type="time"
                                name="time"
                                value={eventsForm.time}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007DCC]"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                        </label>

                        <input
                            type="text"
                            name="location"
                            value={eventsForm.location}
                            onChange={handleChange}
                            placeholder="Enter event location"
                            maxLength={255}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007DCC]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Short Description
                        </label>

                        <textarea
                            name="short_description"
                            value={eventsForm.short_description}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Enter a short description"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#007DCC]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>

                        <ReactQuill
                            theme="snow"
                            value={eventsForm.description}
                            onChange={handleDescriptionChange}
                            modules={quillModules}
                            className="bg-white [&_.ql-container]:rounded-b-lg [&_.ql-toolbar]:rounded-t-lg"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="is_active"
                            id="event_is_active"
                            checked={eventsForm.is_active}
                            onChange={handleChange}
                            className="h-4 w-4"
                        />

                        <label
                            htmlFor="event_is_active"
                            className="text-sm font-medium text-gray-700"
                        >
                            Active
                        </label>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4 border-t">
                        <button
                            type="button"
                            onClick={handleClose}
                            disabled={submitting}
                            className="px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition disabled:opacity-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-5 py-2 rounded-full bg-[#007DCC] text-white hover:bg-[#006db3] transition disabled:opacity-50"
                        >
                            {submitting
                                ? "Saving..."
                                : editingEvent
                                ? "Update Event"
                                : "Create Event"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEvents;