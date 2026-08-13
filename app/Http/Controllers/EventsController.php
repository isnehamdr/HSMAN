<?php

namespace App\Http\Controllers;

use App\Models\Events;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class EventsController extends Controller
{
    /**
     * Display all events.
     */
    public function index()
    {
        $events = Events::latest()->get();

        return response()->json([
            'success' => true,
            'data' => $events,
        ]);
    }

    /**
     * Store a new event.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'date' => ['nullable', 'date'],
            'time' => ['nullable', 'date_format:H:i'],
            'location' => ['nullable', 'string', 'max:255'],
            'short_description' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'image_path' => ['nullable', 'image', 'mimes:jpeg,png,jpg,webp', 'max:5120'],
            'is_active' => ['nullable', 'boolean'],
        ]);

        if ($request->hasFile('image_path')) {
            $validated['image_path'] = $request->file('image_path')
                ->store('events', 'public');
        }

        $event = Events::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Event created successfully.',
            'data' => $event,
        ], 201);
    }

    /**
     * Update an existing event.
     */
    public function update(Request $request, Events $event)
    {
        $validated = $request->validate([
            'title' => ['sometimes', 'required', 'string', 'max:255'],
            'date' => ['nullable', 'date'],
            'time' => ['nullable', 'date_format:H:i'],
            'location' => ['nullable', 'string', 'max:255'],
            'short_description' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'image_path' => ['nullable', 'image', 'mimes:jpeg,png,jpg,webp', 'max:5120'],
            'is_active' => ['nullable', 'boolean'],
        ]);

        if ($request->hasFile('image_path')) {
            if ($event->image_path) {
                Storage::disk('public')->delete($event->image_path);
            }

            $validated['image_path'] = $request->file('image_path')
                ->store('events', 'public');
        }

        $event->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Event updated successfully.',
            'data' => $event->fresh(),
        ]);
    }

    /**
     * Delete an event.
     */
    public function destroy(Events $event)
    {
        if ($event->image_path) {
            Storage::disk('public')->delete($event->image_path);
        }

        $event->delete();

        return response()->json([
            'success' => true,
            'message' => 'Event deleted successfully.',
        ]);
    }
}