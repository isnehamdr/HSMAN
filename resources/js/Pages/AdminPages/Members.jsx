// import { Plus, Pencil, Trash2, Tag, X, Check } from 'lucide-react'
// import React from 'react'
// import AdminWrapper from '@/AdminComponent/AdminWrapper';
// import { useState, useEffect, useCallback, useMemo } from 'react';
// import axios from 'axios';
// import AddMember from '@/Addcomponents/AddMember';

// const Members = () => {
//     const [allMember, setAllMember] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [filterCategory, setFilterCategory] = useState('');
//     const [reloadTrigger, setReloadTrigger] = useState(false);
//     const [editingMember, setEditingMember] = useState(null);
//     const [showForm, setShowForm] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [deletingId, setDeletingId] = useState(null);

//     // Category management (inline section)
//     const [showCategoryPanel, setShowCategoryPanel] = useState(false);
//     const [categoryName, setCategoryName] = useState('');
//     const [categorySubmitting, setCategorySubmitting] = useState(false);
//     const [editingCategoryId, setEditingCategoryId] = useState(null);
//     const [editingCategoryName, setEditingCategoryName] = useState('');
//     const [deletingCategoryId, setDeletingCategoryId] = useState(null);

//     // Fetch members with loading state
//     useEffect(() => {
//         const fetchMember = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get('/ourmember');
//                 setAllMember(response.data.data || []);
//             } catch (error) {
//                 console.error("fetching error ", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchMember();
//     }, [reloadTrigger]);

//     // Fetch categories (used for filter dropdown + management panel)
//     const fetchCategories = useCallback(async () => {
//         try {
//             const response = await axios.get('/membercategory');
//             setCategories(response.data.data || []);
//         } catch (error) {
//             console.error("fetching categories error ", error);
//         }
//     }, []);

//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories, reloadTrigger]);

//     // Add a new category
//     const handleAddCategory = useCallback(async (e) => {
//         e.preventDefault();
//         if (!categoryName.trim()) return;

//         try {
//             setCategorySubmitting(true);
//             await axios.post('/membercategory',
//                 { name: categoryName.trim() },
//                 {
//                     headers: {
//                         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content,
//                     },
//                 }
//             );
//             setCategoryName('');
//             fetchCategories();
//         } catch (error) {
//             console.error("Error adding category:", error.response?.data);
//             alert(error.response?.data?.errors?.name?.[0] || 'Failed to add category');
//         } finally {
//             setCategorySubmitting(false);
//         }
//     }, [categoryName, fetchCategories]);

//     // Start / cancel inline rename
//     const startEditCategory = useCallback((cat) => {
//         setEditingCategoryId(cat.id);
//         setEditingCategoryName(cat.name);
//     }, []);

//     const cancelEditCategory = useCallback(() => {
//         setEditingCategoryId(null);
//         setEditingCategoryName('');
//     }, []);

//     // Save renamed category
//     const handleRenameCategory = useCallback(async (id) => {
//         if (!editingCategoryName.trim()) return;

//         try {
//             await axios.post(`/membercategory/${id}`,
//                 { name: editingCategoryName.trim() },
//                 {
//                     headers: {
//                         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content,
//                     },
//                 }
//             );
//             setEditingCategoryId(null);
//             setEditingCategoryName('');
//             fetchCategories();
//         } catch (error) {
//             console.error("Error renaming category:", error.response?.data);
//             alert(error.response?.data?.errors?.name?.[0] || 'Failed to rename category');
//         }
//     }, [editingCategoryName, fetchCategories]);

//     // Delete a category (members using it will fall back to no category)
//     const handleDeleteCategory = useCallback(async (id) => {
//         if (!confirm("Delete this category? Members in it will become uncategorized.")) return;

//         setDeletingCategoryId(id);
//         try {
//             await axios.delete(`/membercategory/${id}`, {
//                 headers: {
//                     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content,
//                 },
//             });
//             if (filterCategory === String(id)) setFilterCategory('');
//             fetchCategories();
//             setReloadTrigger(prev => !prev); // refresh members since category may be nulled
//         } catch (error) {
//             console.error("Error deleting category:", error.response?.data);
//             alert('Failed to delete category');
//         } finally {
//             setDeletingCategoryId(null);
//         }
//     }, [fetchCategories, filterCategory]);

//     // Optimized delete handler with debouncing
//     const handleDelete = useCallback(async (id, e) => {
//         if (e) {
//             e.stopPropagation();
//             e.preventDefault();
//         }

//         if (!confirm("Delete this Member section?")) return;
//         if (deletingId === id) return;

//         setDeletingId(id);

//         try {
//             await axios.delete(`/ourmember/${id}`, {
//                 headers: {
//                     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content,
//                 }
//             });
//             setReloadTrigger(prev => !prev);
//         } catch (error) {
//             console.error("Delete error:", error.response?.status, error.response?.data);
//             alert(JSON.stringify(error.response?.data || error.message));
//         } finally {
//             setDeletingId(null);
//         }
//     }, [deletingId]);

//     const handleEdit = useCallback((member, e) => {
//         if (e) {
//             e.stopPropagation();
//             e.preventDefault();
//         }
//         setEditingMember(member);
//         setShowForm(true);
//     }, []);

//     const handleUpdate = useCallback(async (formData, id) => {
//         try {
//             const response = await axios.post(
//                 `/ourmember/${id}`,
//                 formData,
//                 {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content,
//                     },
//                 }
//             );

//             setReloadTrigger(prev => !prev);
//             return response.data;
//         } catch (error) {
//             console.error("Error updating Member:", error.response?.status, error.response?.data);
//             alert('Failed to update Member section');
//             throw error;
//         }
//     }, []);

//     const handleCreate = useCallback(() => {
//         setEditingMember(null);
//         setShowForm(true);
//     }, []);

//     const handleCloseForm = useCallback(() => {
//         setShowForm(false);
//         setEditingMember(null);
//     }, []);

//     // Filter members by selected category
//     const filteredMembers = useMemo(() => {
//         if (!filterCategory) return allMember;
//         return allMember.filter(
//             (member) => String(member.category_id) === String(filterCategory)
//         );
//     }, [allMember, filterCategory]);

//     // Memoize members list to prevent unnecessary re-renders
//     const membersList = useMemo(() => {
//         if (filteredMembers.length === 0) {
//             return (
//                 <p className="text-gray-500 col-span-full">
//                     {filterCategory ? "No members in this category." : "No Member sections yet."}
//                 </p>
//             );
//         }

//         return filteredMembers.map((member) => (
//             <div
//                 key={member.id}
//                 className="bg-white rounded-xl shadow border overflow-hidden hover:shadow-md transition-shadow duration-200"
//             >
//                 <img
//                     src={`/storage/${member.image_path}`}
//                     alt={member.name}
//                     className="w-full h-40 object-cover"
//                     loading="lazy" // Lazy load images
//                     onError={(e) => {
//                         e.target.src = '/placeholder-image.jpg';
//                     }}
//                 />
//                 <div className="p-4">
//                     <h3 className="font-semibold text-lg">{member.name}</h3>
//                     <p className="text-sm text-gray-600">{member.position}</p>
//                     {member.category?.name && (
//                         <p className="text-xs text-indigo-600 font-medium mt-1">
//                             {member.category.name}
//                         </p>
//                     )}
//                     {member.phone_number && (
//                         <p className="text-sm text-gray-500">{member.phone_number}</p>
//                     )}
//                     <div className="mt-2 flex justify-between items-center">
//                         <span
//                             className={`text-xs px-2 py-1 rounded-full ${
//                                 member.is_active
//                                     ? "bg-green-100 text-green-700"
//                                     : "bg-gray-100 text-gray-500"
//                             }`}
//                         >
//                             {member.is_active ? "Active" : "Inactive"}
//                         </span>
//                         <div className="flex gap-2">
//                             <button
//                                 onClick={(e) => handleEdit(member, e)}
//                                 className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-150"
//                                 aria-label="Edit member"
//                             >
//                                 <Pencil size={16} />
//                             </button>
//                             <button
//                                 onClick={(e) => handleDelete(member.id, e)}
//                                 disabled={deletingId === member.id}
//                                 className={`p-2 hover:bg-red-50 text-red-600 rounded-full transition-colors duration-150 ${
//                                     deletingId === member.id ? 'opacity-50 cursor-not-allowed' : ''
//                                 }`}
//                                 aria-label="Delete member"
//                             >
//                                 {deletingId === member.id ? (
//                                     <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
//                                 ) : (
//                                     <Trash2 size={16} />
//                                 )}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         ));
//     }, [filteredMembers, filterCategory, deletingId, handleDelete, handleEdit]);

//     if (loading) {
//         return (
//             <AdminWrapper>
//                 <div className="flex justify-center items-center h-64">
//                     <div className="w-12 h-12 border-4 border-[#007DCC] border-t-transparent rounded-full animate-spin" />
//                 </div>
//             </AdminWrapper>
//         );
//     }

//     return (
//         <AdminWrapper>
//             <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//                 <div>
//                     <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
//                         Members
//                     </h1>
//                 </div>
//                 <div className="flex items-center gap-3">
//                     <select
//                         value={filterCategory}
//                         onChange={(e) => setFilterCategory(e.target.value)}
//                         className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     >
//                         <option value="">All Categories</option>
//                         {categories.map((cat) => (
//                             <option key={cat.id} value={cat.id}>
//                                 {cat.name}
//                             </option>
//                         ))}
//                     </select>
//                     <button
//                         onClick={handleCreate}
//                         className="px-4 py-2 flex items-center gap-2 bg-[#007DCC] text-white rounded-3xl transition hover:bg-[#0066aa] active:scale-95"
//                     >
//                         <Plus size={18} />
//                         <span>Create</span>
//                     </button>
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {membersList}
//             </div>

//             <AddMember
//                 showForm={showForm}
//                 setShowForm={handleCloseForm}
//                 setReloadTrigger={setReloadTrigger}
//                 editingmember={editingMember}
//                 setEditingmember={setEditingMember}
//                 handleUpdate={handleUpdate}
//             />
//         </AdminWrapper>
//     );
// };

// export default Members;


import { Plus, Pencil, Trash2 } from 'lucide-react'
import React from 'react'
import AdminWrapper from '@/AdminComponent/AdminWrapper';
import { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import AddMember, { MEMBER_CATEGORIES } from '@/Addcomponents/AddMember';

const Members = () => {
    const [allMember, setAllMember] = useState([]);
    const [filterCategory, setFilterCategory] = useState('');
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [editingMember, setEditingMember] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [deletingId, setDeletingId] = useState(null);

    // Fetch members with loading state
    useEffect(() => {
        const fetchMember = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/ourmember');
                setAllMember(response.data.data || []);
            } catch (error) {
                console.error("fetching error ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMember();
    }, [reloadTrigger]);

    // Optimized delete handler with debouncing
    const handleDelete = useCallback(async (id, e) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }

        if (!confirm("Delete this Member section?")) return;
        if (deletingId === id) return;

        setDeletingId(id);

        try {
            await axios.delete(`/ourmember/${id}`, {
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content,
                }
            });
            setReloadTrigger(prev => !prev);
        } catch (error) {
            console.error("Delete error:", error.response?.status, error.response?.data);
            alert(JSON.stringify(error.response?.data || error.message));
        } finally {
            setDeletingId(null);
        }
    }, [deletingId]);

    const handleEdit = useCallback((member, e) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        setEditingMember(member);
        setShowForm(true);
    }, []);

    const handleUpdate = useCallback(async (formData, id) => {
        try {
            const response = await axios.post(
                `/ourmember/${id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content,
                    },
                }
            );

            setReloadTrigger(prev => !prev);
            return response.data;
        } catch (error) {
            console.error("Error updating Member:", error.response?.status, error.response?.data);
            alert('Failed to update Member section');
            throw error;
        }
    }, []);

    const handleCreate = useCallback(() => {
        setEditingMember(null);
        setShowForm(true);
    }, []);

    const handleCloseForm = useCallback(() => {
        setShowForm(false);
        setEditingMember(null);
    }, []);

    // Filter members by selected category
    const filteredMembers = useMemo(() => {
        if (!filterCategory) return allMember;
        return allMember.filter((member) => member.category === filterCategory);
    }, [allMember, filterCategory]);

    // Helper to turn a category value into its display label
    const categoryLabel = useCallback((value) => {
        return MEMBER_CATEGORIES.find((c) => c.value === value)?.label || null;
    }, []);

    // Memoize members list to prevent unnecessary re-renders
    const membersList = useMemo(() => {
        if (filteredMembers.length === 0) {
            return (
                <p className="text-gray-500 col-span-full">
                    {filterCategory ? "No members in this category." : "No Member sections yet."}
                </p>
            );
        }

        return filteredMembers.map((member) => (
            <div
                key={member.id}
                className="bg-white rounded-xl shadow border overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
                <img
                    src={`/storage/${member.image_path}`}
                    alt={member.name}
                    className="w-full h-40 object-cover"
                    loading="lazy" // Lazy load images
                    onError={(e) => {
                        e.target.src = '/placeholder-image.jpg';
                    }}
                />
                <div className="p-4">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.position}</p>
                    {categoryLabel(member.category) && (
                        <p className="text-xs text-indigo-600 font-medium mt-1">
                            {categoryLabel(member.category)}
                        </p>
                    )}
                    {member.phone_number && (
                        <p className="text-sm text-gray-500">{member.phone_number}</p>
                    )}
                    <div className="mt-2 flex justify-between items-center">
                        <span
                            className={`text-xs px-2 py-1 rounded-full ${
                                member.is_active
                                    ? "bg-green-100 text-green-700"
                                    : "bg-gray-100 text-gray-500"
                            }`}
                        >
                            {member.is_active ? "Active" : "Inactive"}
                        </span>
                        <div className="flex gap-2">
                            <button
                                onClick={(e) => handleEdit(member, e)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-150"
                                aria-label="Edit member"
                            >
                                <Pencil size={16} />
                            </button>
                            <button
                                onClick={(e) => handleDelete(member.id, e)}
                                disabled={deletingId === member.id}
                                className={`p-2 hover:bg-red-50 text-red-600 rounded-full transition-colors duration-150 ${
                                    deletingId === member.id ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                                aria-label="Delete member"
                            >
                                {deletingId === member.id ? (
                                    <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <Trash2 size={16} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }, [filteredMembers, filterCategory, deletingId, handleDelete, handleEdit, categoryLabel]);

    if (loading) {
        return (
            <AdminWrapper>
                <div className="flex justify-center items-center h-64">
                    <div className="w-12 h-12 border-4 border-[#007DCC] border-t-transparent rounded-full animate-spin" />
                </div>
            </AdminWrapper>
        );
    }

    return (
        <AdminWrapper>
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
                        Members
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">All Categories</option>
                        {MEMBER_CATEGORIES.map((cat) => (
                            <option key={cat.value} value={cat.value}>
                                {cat.label}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={handleCreate}
                        className="px-4 py-2 flex items-center gap-2 bg-[#007DCC] text-white rounded-3xl transition hover:bg-[#0066aa] active:scale-95"
                    >
                        <Plus size={18} />
                        <span>Create</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {membersList}
            </div>

            <AddMember
                showForm={showForm}
                setShowForm={handleCloseForm}
                setReloadTrigger={setReloadTrigger}
                editingmember={editingMember}
                setEditingmember={setEditingMember}
                handleUpdate={handleUpdate}
            />
        </AdminWrapper>
    );
};

export default Members;