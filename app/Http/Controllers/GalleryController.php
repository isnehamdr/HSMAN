<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    
    public function index()
    {
        $galleries = Gallery::latest()->get();

        return response()->json([
            'success' => true,
            'data' => $galleries,
        ]);
    }

    /**
     * Store a new gallery image.
     */
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,webp|max:5120',
        ]);

        $imagePath = $request->file('image')->store('gallery', 'public');

        $gallery = Gallery::create([
            'image_path' => $imagePath,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Gallery image added successfully.',
            'data' => $gallery,
        ], 201);
    }

    /**
     * Update an existing gallery image.
     */
    public function update(Request $request, $id)
    {
        $gallery = Gallery::find($id);

        if (!$gallery) {
            return response()->json([
                'success' => false,
                'message' => 'Gallery image not found.',
            ], 404);
        }

        $request->validate([
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image
            if ($gallery->image_path && Storage::disk('public')->exists($gallery->image_path)) {
                Storage::disk('public')->delete($gallery->image_path);
            }

            // Store new image
            $gallery->image_path = $request->file('image')->store('gallery', 'public');
        }

        $gallery->save();

        return response()->json([
            'success' => true,
            'message' => 'Gallery image updated successfully.',
            'data' => $gallery,
        ]);
    }

    /**
     * Delete a gallery image.
     */
    public function destroy($id)
    {
        $gallery = Gallery::find($id);

        if (!$gallery) {
            return response()->json([
                'success' => false,
                'message' => 'Gallery image not found.',
            ], 404);
        }

        // Delete image from storage
        if ($gallery->image_path && Storage::disk('public')->exists($gallery->image_path)) {
            Storage::disk('public')->delete($gallery->image_path);
        }

        $gallery->delete();

        return response()->json([
            'success' => true,
            'message' => 'Gallery image deleted successfully.',
        ]);
    }
}