<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', function () {
    return Inertia::render('HomePage');
});
Route::get('/about', function () {
    return Inertia::render('AboutPage');
});
Route::get('/committee-members', function () {
    return Inertia::render('Member');
});
Route::get('/agency', function () {
    return Inertia::render('Agencies');
});
Route::get('/services', function () {
    return Inertia::render('Services');
});
Route::get('/gallery', function () {
    return Inertia::render('Gallery');
});
Route::get('/faq', function () {
    return Inertia::render('FAQ');
});
Route::get('/contact', function () {
    return Inertia::render('Contact');
});
Route::get('/popular-destinations', function () {
    return Inertia::render('Destinations');
});

Route::get('/events', function () {
    $events = json_decode(File::get(resource_path('js/Data/events.json')), true);

    return Inertia::render('NewsnEvents', [
        'events' => $events,
    ]);
})->name('events.index');

Route::get('/events/{event}', function (string $event) {
    $events = json_decode(File::get(resource_path('js/Data/events.json')), true);
    $data = collect($events)->firstWhere('id', $event);

    abort_if(!$data, 404);

    return Inertia::render('Eventsdetail', [
        'event' => $data,
    ]);
})->name('events.show');


require __DIR__.'/auth.php';
