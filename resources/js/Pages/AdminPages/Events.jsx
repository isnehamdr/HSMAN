import { Plus, Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AddEvents from "@/Addcomponents/AddEvents";
import AdminWrapper from "@/AdminComponent/AdminWrapper";

const formatEventDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
};

const Events = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEvents();
    }, [reloadTrigger]);

    const fetchEvents = async () => {
        try {
            setLoading(true);

            const response = await axios.get("/ourevents");

            setAllEvents(response.data?.data || []);
        } catch (error) {
            console.error("Error fetching events:", error);

            setAllEvents([]);
        } finally {
            setLoading(false);
        }
    };

    const handleAdd = () => {
        setEditingEvent(null);
        setShowForm(true);
    };

    const handleEdit = (event) => {
        setEditingEvent(event);
        setShowForm(true);
    };

    const handleDelete = async (eventId) => {
        if (!window.confirm("Are you sure you want to delete this event?")) {
            return;
        }

        try {
            await axios.delete(`/ourevents/${eventId}`);

            setAllEvents((prevEvents) =>
                prevEvents.filter((event) => event.id !== eventId)
            );
        } catch (error) {
            console.error("Delete error:", error);

            alert(
                error?.response?.data?.message ||
                    "Failed to delete event."
            );
        }
    };

    const handleUpdate = async (formData, eventId) => {
        try {
            const response = await axios.post(
                `/ourevents/${eventId}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setReloadTrigger((prev) => !prev);

            return response.data;
        } catch (error) {
            console.error("Error updating event:", error);
            throw error;
        }
    };

    const handleFormClose = () => {
        setShowForm(false);
        setEditingEvent(null);
    };

    return (
        <AdminWrapper>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
                        Events
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Manage your events and activities.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={handleAdd}
                    className="px-4 py-2 flex items-center justify-center gap-2 bg-[#007DCC] text-white rounded-3xl transition hover:bg-[#006db3]"
                >
                    <Plus size={18} />
                    <span>Create Event</span>
                </button>
            </div>

            {loading ? (
                <div className="flex items-center justify-center py-20">
                    <p className="text-gray-500">Loading events...</p>
                </div>
            ) : allEvents.length === 0 ? (
                <div className="bg-white border rounded-xl p-10 text-center">
                    <p className="text-gray-500">
                        No events available.
                    </p>

                    <button
                        type="button"
                        onClick={handleAdd}
                        className="mt-4 px-5 py-2 bg-[#007DCC] text-white rounded-full hover:bg-[#006db3]"
                    >
                        Add Your First Event
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {allEvents.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-xl shadow border overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative">
                                {event.image_path ? (
                                    <img
                                        src={`/storage/${event.image_path}`}
                                        alt={event.title || "Event"}
                                        className="w-full h-48 object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display =
                                                "none";
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                                        No Image
                                    </div>
                                )}

                                <span
                                    className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full ${
                                        event.is_active
                                            ? "bg-green-100 text-green-700"
                                            : "bg-gray-100 text-gray-500"
                                    }`}
                                >
                                    {event.is_active
                                        ? "Active"
                                        : "Inactive"}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                                    {event.title}
                                </h2>

                                {event.short_description && (
                                    <p className="text-sm text-gray-600 line-clamp-2 mt-2 mb-4">
                                        {event.short_description}
                                    </p>
                                )}

                                <div className="space-y-2 text-sm text-gray-500 mb-4">
                                    {event.date && (
                                        <div>
                                            <span className="font-semibold text-gray-700">
                                                Date:
                                            </span>{" "}
                                            {formatEventDate(event.date)}
                                        </div>
                                    )}

                                    {event.time && (
                                        <div>
                                            <span className="font-semibold text-gray-700">
                                                Time:
                                            </span>{" "}
                                            {event.time}
                                        </div>
                                    )}

                                    {event.location && (
                                        <div>
                                            <span className="font-semibold text-gray-700">
                                                Location:
                                            </span>{" "}
                                            {event.location}
                                        </div>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex justify-end gap-2 border-t pt-3">
                                    <button
                                        type="button"
                                        onClick={() => handleEdit(event)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition"
                                        title="Edit Event"
                                    >
                                        <Pencil size={16} />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDelete(event.id)
                                        }
                                        className="p-2 hover:bg-red-50 text-red-600 rounded-full transition"
                                        title="Delete Event"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <AddEvents
                showForm={showForm}
                setShowForm={setShowForm}
                setReloadTrigger={setReloadTrigger}
                editingEvent={editingEvent}
                setEditingEvent={setEditingEvent}
                handleUpdate={handleUpdate}
            />
        </AdminWrapper>
    );
};

export default Events;