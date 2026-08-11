<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HeroSectionController;
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


 Route::post('/ourhero', [HeroSectionController::class, 'store'])->name('ourhero.store');
 Route::get('/ourhero', [HeroSectionController::class, 'index'])->name('ourhero.index');
Route::post('/ourhero/{heroSection}', [HeroSectionController::class, 'update'])->name('ourhero.update');
    Route::delete('/ourhero/{heroSection}', [HeroSectionController::class, 'destroy'])->name('ourhero.destroy');
  

    Route::get('/hero-section', function () {
        return Inertia::render('AdminPages/HeroSection');
    });


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
