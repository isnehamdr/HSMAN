<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MemberController extends Controller
{
    /**
     * Display a listing of members.
     */
    public function index()
    {
        $members = Member::latest()->get();

        return response()->json([
            'success' => true,
            'data' => $members,
        ]);
    }

    /**
     * Store a newly created member.
     */
public function store(Request $request)
{
    $validated = $request->validate([
        'image_path'   => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        'name'         => 'required|string|max:255',
        'position'     => 'required|string|max:255',
        'category'     => 'required|string|in:executive_committee,executive_members,advisors',
        'phone_number' => 'nullable|string|max:20',
        'is_active'    => 'nullable|boolean',
    ]);

    if ($request->hasFile('image_path')) {
        $validated['image_path'] = $request->file('image_path')->store('members', 'public');
    }

    $validated['is_active'] = $request->boolean('is_active');

    $member = Member::create($validated);

    return response()->json([
        'success' => true,
        'message' => 'Member created successfully.',
        'data' => $member,
    ], 201);
}

public function update(Request $request, Member $member)
{
    $validated = $request->validate([
        'image_path'   => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        'name'         => 'required|string|max:255',
        'position'     => 'required|string|max:255',
        'category'     => 'required|string|in:executive_committee,executive_members,advisors',
        'phone_number' => 'nullable|string|max:20',
        'is_active'    => 'nullable|boolean',
    ]);

    if ($request->hasFile('image_path')) {
        if ($member->image_path && Storage::disk('public')->exists($member->image_path)) {
            Storage::disk('public')->delete($member->image_path);
        }
        $validated['image_path'] = $request->file('image_path')->store('members', 'public');
    }

    $validated['is_active'] = $request->boolean('is_active');

    $member->update($validated);

    return response()->json([
        'success' => true,
        'message' => 'Member updated successfully.',
        'data' => $member->fresh(),
    ]);
}
    /**
     * Remove the specified member.
     */
    public function destroy(Member $member)
    {
        // Delete member image
        if ($member->image_path && Storage::disk('public')->exists($member->image_path)) {
            Storage::disk('public')->delete($member->image_path);
        }

        $member->delete();

        return response()->json([
            'success' => true,
            'message' => 'Member deleted successfully.',
        ]);
    }
}