<?php

namespace App\Http\Controllers;

use App\Models\HeroSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HeroSectionController extends Controller
{
    public function index()
    {
        $heroes = HeroSection::orderBy('order')->get();
        return response()->json([
            'success' => true,
            'data' => $heroes
        ]);
    }

    public function store(Request $request)
    {
        // Your store logic
        $validated = $request->validate([
            'image' => 'required|image|max:2048',
            'order' => 'required|integer',
            'is_active' => 'boolean'
        ]);

        $path = $request->file('image')->store('heroes', 'public');
        
        $hero = HeroSection::create([
            'image_path' => $path,
            'order' => $request->order,
            'is_active' => $request->is_active ?? true
        ]);

        return response()->json([
            'success' => true,
            'data' => $hero
        ]);
    }

    public function update(Request $request, $id)
    {
        // Your update logic
        $hero = HeroSection::findOrFail($id);
        
        $validated = $request->validate([
            'order' => 'sometimes|integer',
            'is_active' => 'sometimes|boolean',
            'image' => 'nullable|image|max:2048'
        ]);

        if ($request->hasFile('image')) {
            // Delete old image
            if ($hero->image_path) {
                Storage::disk('public')->delete($hero->image_path);
            }
            $path = $request->file('image')->store('heroes', 'public');
            $hero->image_path = $path;
        }

        $hero->order = $request->order ?? $hero->order;
        $hero->is_active = $request->is_active ?? $hero->is_active;
        $hero->save();

        return response()->json([
            'success' => true,
            'data' => $hero
        ]);
    }

    public function destroy($id)
    {
        $hero = HeroSection::findOrFail($id);
        
        // Delete the image file
        if ($hero->image_path) {
            Storage::disk('public')->delete($hero->image_path);
        }
        
        $hero->delete();

        return response()->json([
            'success' => true,
            'message' => 'Hero section deleted successfully'
        ]);
    }
}