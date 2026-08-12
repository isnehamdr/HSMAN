import { Plus, Pencil, Trash2 } from 'lucide-react'
import React from 'react'
import AddHeroSection from '@/Addcomponents/AddHeroSection'
import AdminWrapper from '@/AdminComponent/AdminWrapper';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HeroSection = () => {
    const [allHero, setAllHero] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [editingHero, setEditingHero] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const response = await axios.get('/ourhero');
                setAllHero(response.data.data || []);
            } catch (error) {
                console.error("fetching error ", error);
            }
        };

        fetchHero();
    }, [reloadTrigger]);

    console.log(allHero);

    // FIXED: Delete handler with proper method
    const handleDelete = async (id) => {
        if (!confirm("Delete this hero section?")) return;
        try {
            // Use POST with _method DELETE instead of axios.delete
            await axios.post(`/ourhero/${id}`, {
                _method: 'DELETE'
            }, {
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content,
                    'Content-Type': 'application/json',
                }
            });
            setReloadTrigger((prev) => !prev);
        } catch (error) {
            console.error("Delete error:", error);
            alert('Failed to delete hero section');
        }
    };

    const handleEdit = (hero) => {
        setEditingHero(hero);
        setShowForm(true);
    };

    // FIXED: Update handler with proper method and URL
    const handleUpdate = async (formData, id) => {
        try {
            // Append _method for Laravel to treat as PUT
            formData.append("_method", "PUT");
            
            const response = await axios.post(
                `/ourhero/${id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content,
                    },
                }
            );
            
            setReloadTrigger((prev) => !prev);
            return response.data;
        } catch (error) {
            console.error("Error updating hero:", error);
            alert('Failed to update hero section');
            throw error;
        }
    };

    return (
        <>
            <AdminWrapper>
                <div className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
                            Add Hero Section
                        </h1>
                    </div>
                    <button
                        onClick={() => {
                            setEditingHero(null);
                            setShowForm(true);
                        }}
                        className="px-4 py-2 flex items-center gap-2 bg-[#007DCC] text-white rounded-3xl transition"
                    >
                        <Plus size={18} />
                        <span>Create</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allHero.length === 0 && (
                        <p className="text-gray-500 col-span-full">No hero sections yet.</p>
                    )}

                    {allHero.map((hero) => (
                        <div
                            key={hero.id}
                            className="bg-white rounded-xl shadow border overflow-hidden"
                        >
                            <img
                                src={`/storage/${hero.image_path}`}
                                alt="Hero"
                                className="w-full h-40 object-cover"
                                onError={(e) => {
                                    e.target.src = '/placeholder-image.jpg'; // Add a fallback image
                                }}
                            />
                            <div className="p-4 flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500">Order: {hero.order}</p>
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full ${
                                            hero.is_active
                                                ? "bg-green-100 text-green-700"
                                                : "bg-gray-100 text-gray-500"
                                        }`}
                                    >
                                        {hero.is_active ? "Active" : "Inactive"}
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(hero)}
                                        className="p-2 hover:bg-gray-100 rounded-full"
                                    >
                                        <Pencil size={16} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(hero.id)}
                                        className="p-2 hover:bg-red-50 text-red-600 rounded-full"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <AddHeroSection
                    showForm={showForm}
                    setShowForm={setShowForm}
                    setReloadTrigger={setReloadTrigger}
                    editingHero={editingHero}
                    setEditingHero={setEditingHero}
                    handleUpdate={handleUpdate}
                />
            </AdminWrapper>
        </>
    );
};

export default HeroSection;