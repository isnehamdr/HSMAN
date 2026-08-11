<?php

namespace App\Http\Controllers;

use App\Models\HeroSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HeroSectionController extends Controller
{
   public function index()
{
    $heroSections = HeroSection::orderBy('order')->get();

    \Log::info('HeroSection count: ' . $heroSections->count());

    return inertia('AdminPages/HeroSection', [
        'heroSections' => $heroSections,
    ]);
}
    public function store(Request $request)
    {
        $validated = $request->validate([
            'image'     => ['required', 'image', 'max:2048'],
            'order'     => ['nullable', 'integer'],
            'is_active' => ['nullable', 'boolean'],
        ]);

        $imagePath = $request->file('image')->store('hero-sections', 'public');

        HeroSection::create([
            'image_path' => $imagePath,
            'order'      => $validated['order'] ?? 0,
            'is_active'  => $validated['is_active'] ?? true,
        ]);

        return redirect()->back()->with('success', 'Hero slide added successfully');
    }

    public function update(Request $request, HeroSection $heroSection)
    {
        $validated = $request->validate([
            'image'     => ['nullable', 'image', 'max:2048'],
            'order'     => ['nullable', 'integer'],
            'is_active' => ['nullable', 'boolean'],
        ]);

        $data = [
            'order'     => $validated['order'] ?? $heroSection->order,
            'is_active' => $validated['is_active'] ?? $heroSection->is_active,
        ];

        if ($request->hasFile('image')) {
            if ($heroSection->image_path) {
                Storage::disk('public')->delete($heroSection->image_path);
            }
            $data['image_path'] = $request->file('image')->store('hero-sections', 'public');
        }

        $heroSection->update($data);

        return redirect()->back()->with('success', 'Hero slide updated successfully');
    }

    public function destroy(HeroSection $heroSection)
    {
        if ($heroSection->image_path) {
            Storage::disk('public')->delete($heroSection->image_path);
        }

        $heroSection->delete();

        return redirect()->back()->with('success', 'Hero slide deleted successfully');
    }
}