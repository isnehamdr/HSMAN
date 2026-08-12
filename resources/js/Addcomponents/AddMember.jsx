// import { X } from 'lucide-react';
// import React, { useEffect, useState, useCallback, useRef } from 'react'
// import axios from 'axios';

// const AddMember = ({ 
//     showForm, 
//     editingmember, 
//     setShowForm, 
//     setEditingmember, 
//     setReloadTrigger, 
//     handleUpdate 
// }) => {
//     const [submitting, setSubmitting] = useState(false);
//     const [categories, setCategories] = useState([]);
//     const [memberForm, setmemberForm] = useState({
//         image: null,
//         name: '',
//         position: '',
//         phone_number: '',
//         is_active: true,
//         category_id: '',
//     });
//     const [preview, setPreview] = useState(null);
//     const fileInputRef = useRef(null);
//     const formRef = useRef(null);

//     // Fetch categories once when the form is available
//     useEffect(() => {
//         if (!showForm) return;

//         const fetchCategories = async () => {
//             try {
//                 const response = await axios.get('/membercategory');
//                 setCategories(response.data.data || []);
//             } catch (error) {
//                 console.log("Error fetching categories", error);
//             }
//         };

//         fetchCategories();
//     }, [showForm]);

//     useEffect(() => {
//         if (editingmember) {
//             setmemberForm({
//                 image: null,
//                 name: editingmember.name ?? '',
//                 position: editingmember.position ?? '',
//                 phone_number: editingmember.phone_number ?? '',
//                 is_active: editingmember.is_active ?? true,
//                 category_id: editingmember.category_id ?? '',
//             });
//             setPreview(
//                 editingmember.image_path
//                     ? `/storage/${editingmember.image_path}`
//                     : null
//             );
//         } else {
//             setmemberForm({
//                 image: null,
//                 name: '',
//                 position: '',
//                 phone_number: '',
//                 is_active: true,
//                 category_id: '',
//             });
//             setPreview(null);
//             // Reset file input
//             if (fileInputRef.current) {
//                 fileInputRef.current.value = '';
//             }
//         }
//     }, [editingmember]);

//     const handleCreate = useCallback(async (formData) => {
//         try {
//             await axios.post('/ourmember', formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content,
//                 },
//             });
//             setReloadTrigger(prev => !prev);
//         } catch (error) {
//             console.log("Error creating member", error);
//             throw error;
//         }
//     }, [setReloadTrigger]);

//     const handleSubmit = useCallback(async (e) => {
//         e.preventDefault();
//         e.stopPropagation();

//         if (!editingmember && !memberForm.image) {
//             alert("Please select an image.");
//             return;
//         }

//         const formData = new FormData();
//         if (memberForm.image) formData.append("image_path", memberForm.image);
//         formData.append("name", memberForm.name ?? '');
//         formData.append("position", memberForm.position ?? '');
//         formData.append("phone_number", memberForm.phone_number ?? '');
//         formData.append("is_active", memberForm.is_active ? 1 : 0);
//         formData.append("category_id", memberForm.category_id || '');

//         try {
//             setSubmitting(true);

//             if (editingmember) {
//                 await handleUpdate(formData, editingmember.id);
//             } else {
//                 await handleCreate(formData);
//             }

//             // Reset form
//             setmemberForm({ 
//                 image: null, 
//                 name: '', 
//                 position: '', 
//                 phone_number: '', 
//                 is_active: true,
//                 category_id: '',
//             });
//             setPreview(null);
//             if (fileInputRef.current) {
//                 fileInputRef.current.value = '';
//             }
//             setShowForm(false);
//             setEditingmember(null);
//         } catch (error) {
//             console.log("Error saving data", error);
//         } finally {
//             setSubmitting(false);
//         }
//     }, [editingmember, memberForm, handleUpdate, handleCreate, setShowForm, setEditingmember]);

//     const handleChange = useCallback((e) => {
//         const { name, value, type, checked, files } = e.target;

//         if (type === "file") {
//             const file = files[0];
//             if (file) {
//                 setmemberForm(prev => ({ ...prev, image: file }));
//                 // Create object URL for preview
//                 const objectUrl = URL.createObjectURL(file);
//                 setPreview(objectUrl);
//                 // Clean up old preview URL
//                 return () => {
//                     if (preview && preview.startsWith('blob:')) {
//                         URL.revokeObjectURL(preview);
//                     }
//                 };
//             }
//             return;
//         }

//         setmemberForm(prev => ({
//             ...prev,
//             [name]: type === "checkbox" ? checked : value,
//         }));
//     }, [preview]);

//     const handleClose = useCallback(() => {
//         // Clean up preview URL
//         if (preview && preview.startsWith('blob:')) {
//             URL.revokeObjectURL(preview);
//         }
//         setShowForm(false);
//         setEditingmember(null);
//         if (fileInputRef.current) {
//             fileInputRef.current.value = '';
//         }
//     }, [preview, setShowForm, setEditingmember]);

//     if (!showForm) return null;

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//             <div 
//                 className="bg-white rounded-xl max-w-lg w-full p-6 shadow-xl max-h-[90vh] overflow-y-auto"
//                 ref={formRef}
//             >
//                 <div className="flex justify-between items-center mb-6 sticky top-0 bg-white z-10 pb-2">
//                     <h2 className="text-2xl font-bold text-gray-800">
//                         {editingmember ? "Edit" : "Add"} Member
//                     </h2>
//                     <button
//                         onClick={handleClose}
//                         className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                         aria-label="Close form"
//                     >
//                         <X size={24} />
//                     </button>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Image {editingmember && "(leave blank to keep current)"}
//                         </label>
//                         <input
//                             ref={fileInputRef}
//                             type="file"
//                             name="image_path"
//                             accept="image/png, image/jpeg, image/jpg, image/webp"
//                             onChange={handleChange}
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             required={!editingmember}
//                         />
//                         {preview && (
//                             <img
//                                 src={preview}
//                                 alt="Preview"
//                                 className="mt-3 h-32 w-full object-cover rounded-lg border"
//                             />
//                         )}
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Name *
//                         </label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={memberForm.name}
//                             onChange={handleChange}
//                             required
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Position *
//                         </label>
//                         <input
//                             type="text"
//                             name="position"
//                             value={memberForm.position}
//                             onChange={handleChange}
//                             required
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Category
//                         </label>
//                         <select
//                             name="category_id"
//                             value={memberForm.category_id}
//                             onChange={handleChange}
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                         >
//                             <option value="">Select category</option>
//                             {categories.map((cat) => (
//                                 <option key={cat.id} value={cat.id}>
//                                     {cat.name}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Phone Number
//                         </label>
//                         <input
//                             type="text"
//                             name="phone_number"
//                             value={memberForm.phone_number}
//                             onChange={handleChange}
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                         />
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <input
//                             type="checkbox"
//                             name="is_active"
//                             id="is_active"
//                             checked={memberForm.is_active}
//                             onChange={handleChange}
//                             className="h-4 w-4"
//                         />
//                         <label htmlFor="is_active" className="text-sm font-medium text-gray-700">
//                             Active
//                         </label>
//                     </div>

//                     <div className="flex justify-end gap-3 pt-2 sticky bottom-0 bg-white pb-2">
//                         <button
//                             type="button"
//                             onClick={handleClose}
//                             className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
//                             disabled={submitting}
//                         >
//                             Cancel
//                         </button>
//                         <button
//                             type="submit"
//                             disabled={submitting}
//                             className="px-4 py-2 rounded-full bg-[#007dcc] text-white transition disabled:opacity-50 hover:bg-[#0066aa] active:scale-95"
//                         >
//                             {submitting ? (
//                                 <span className="flex items-center gap-2">
//                                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                                     Saving...
//                                 </span>
//                             ) : (
//                                 "Save"
//                             )}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddMember;

import { X } from 'lucide-react';
import React, { useEffect, useState, useCallback, useRef } from 'react'
import axios from 'axios';

// Static category list — keep this in sync with App\Enums\MemberCategory on the backend
export const MEMBER_CATEGORIES = [
    { value: 'executive_committee', label: 'Executive Committee' },
    { value: 'executive_members', label: 'Executive Members' },
    { value: 'advisors', label: 'Advisors' },
    
];

const AddMember = ({ 
    showForm, 
    editingmember, 
    setShowForm, 
    setEditingmember, 
    setReloadTrigger, 
    handleUpdate 
}) => {
    const [submitting, setSubmitting] = useState(false);
    const [memberForm, setmemberForm] = useState({
        image: null,
        name: '',
        position: '',
        phone_number: '',
        is_active: true,
        category: '',
    });
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        if (editingmember) {
            setmemberForm({
                image: null,
                name: editingmember.name ?? '',
                position: editingmember.position ?? '',
                phone_number: editingmember.phone_number ?? '',
                is_active: editingmember.is_active ?? true,
                category: editingmember.category ?? '',
            });
            setPreview(
                editingmember.image_path
                    ? `/storage/${editingmember.image_path}`
                    : null
            );
        } else {
            setmemberForm({
                image: null,
                name: '',
                position: '',
                phone_number: '',
                is_active: true,
                category: '',
            });
            setPreview(null);
            // Reset file input
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    }, [editingmember]);

    const handleCreate = useCallback(async (formData) => {
        try {
            await axios.post('/ourmember', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content,
                },
            });
            setReloadTrigger(prev => !prev);
        } catch (error) {
            console.log("Error creating member", error);
            throw error;
        }
    }, [setReloadTrigger]);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!editingmember && !memberForm.image) {
            alert("Please select an image.");
            return;
        }

        const formData = new FormData();
        if (memberForm.image) formData.append("image_path", memberForm.image);
        formData.append("name", memberForm.name ?? '');
        formData.append("position", memberForm.position ?? '');
        formData.append("phone_number", memberForm.phone_number ?? '');
        formData.append("is_active", memberForm.is_active ? 1 : 0);
        formData.append("category", memberForm.category || '');

        try {
            setSubmitting(true);

            if (editingmember) {
                await handleUpdate(formData, editingmember.id);
            } else {
                await handleCreate(formData);
            }

            // Reset form
            setmemberForm({ 
                image: null, 
                name: '', 
                position: '', 
                phone_number: '', 
                is_active: true,
                category: '',
            });
            setPreview(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            setShowForm(false);
            setEditingmember(null);
        } catch (error) {
            console.log("Error saving data", error);
        } finally {
            setSubmitting(false);
        }
    }, [editingmember, memberForm, handleUpdate, handleCreate, setShowForm, setEditingmember]);

    const handleChange = useCallback((e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === "file") {
            const file = files[0];
            if (file) {
                setmemberForm(prev => ({ ...prev, image: file }));
                // Create object URL for preview
                const objectUrl = URL.createObjectURL(file);
                setPreview(objectUrl);
                // Clean up old preview URL
                return () => {
                    if (preview && preview.startsWith('blob:')) {
                        URL.revokeObjectURL(preview);
                    }
                };
            }
            return;
        }

        setmemberForm(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }, [preview]);

    const handleClose = useCallback(() => {
        // Clean up preview URL
        if (preview && preview.startsWith('blob:')) {
            URL.revokeObjectURL(preview);
        }
        setShowForm(false);
        setEditingmember(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, [preview, setShowForm, setEditingmember]);

    if (!showForm) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div 
                className="bg-white rounded-xl max-w-lg w-full p-6 shadow-xl max-h-[90vh] overflow-y-auto"
                ref={formRef}
            >
                <div className="flex justify-between items-center mb-6 sticky top-0 bg-white z-10 pb-2">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {editingmember ? "Edit" : "Add"} Member
                    </h2>
                    <button
                        onClick={handleClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Close form"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Image {editingmember && "(leave blank to keep current)"}
                        </label>
                        <input
                            ref={fileInputRef}
                            type="file"
                            name="image_path"
                            accept="image/png, image/jpeg, image/jpg, image/webp"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required={!editingmember}
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
                            Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={memberForm.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Position *
                        </label>
                        <input
                            type="text"
                            name="position"
                            value={memberForm.position}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                   <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
        Category *
    </label>
    <select
        name="category"
        value={memberForm.category}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
        <option value="">Select category</option>
        {MEMBER_CATEGORIES.map((cat) => (
            <option key={cat.value} value={cat.value}>
                {cat.label}
            </option>
        ))}
    </select>
</div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name="phone_number"
                            value={memberForm.phone_number}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="is_active"
                            id="is_active"
                            checked={memberForm.is_active}
                            onChange={handleChange}
                            className="h-4 w-4"
                        />
                        <label htmlFor="is_active" className="text-sm font-medium text-gray-700">
                            Active
                        </label>
                    </div>

                    <div className="flex justify-end gap-3 pt-2 sticky bottom-0 bg-white pb-2">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                            disabled={submitting}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-4 py-2 rounded-full bg-[#007dcc] text-white transition disabled:opacity-50 hover:bg-[#0066aa] active:scale-95"
                        >
                            {submitting ? (
                                <span className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Saving...
                                </span>
                            ) : (
                                "Save"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMember;