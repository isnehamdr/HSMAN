<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class FaqController extends Controller
{
    /**
     * Get all FAQs.
     */
    public function index()
    {
        try {
            $faqs = Faq::latest()->get();

            return response()->json([
                'success' => true,
                'data' => $faqs,
            ]);
        } catch (\Exception $e) {
            \Log::error('FAQ index error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch FAQs: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Store a new FAQ.
     */
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'text' => 'required|string',
            ]);

            $faq = Faq::create($validated);

            return response()->json([
                'success' => true,
                'message' => 'FAQ created successfully.',
                'data' => $faq,
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            \Log::error('FAQ store error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to create FAQ: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update an existing FAQ.
     */
    public function update(Request $request, Faq $faq)
    {
        try {
            $validated = $request->validate([
                'text' => 'required|string',
            ]);

            $faq->update($validated);

            return response()->json([
                'success' => true,
                'message' => 'FAQ updated successfully.',
                'data' => $faq,
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            \Log::error('FAQ update error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to update FAQ: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Delete an FAQ.
     */
    public function destroy(Faq $faq)
    {
        try {
            $faq->delete();

            return response()->json([
                'success' => true,
                'message' => 'FAQ deleted successfully.',
            ]);
        } catch (\Exception $e) {
            \Log::error('FAQ delete error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete FAQ: ' . $e->getMessage(),
            ], 500);
        }
    }
}