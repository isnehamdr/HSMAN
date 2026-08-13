<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HeroSectionController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\FaqController;
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


// Make sure these are not inside a route group that might affect them
Route::get('/ourhero', [HeroSectionController::class, 'index'])->name('ourhero.index');
Route::post('/ourhero', [HeroSectionController::class, 'store'])->name('ourhero.store');
Route::put('/ourhero/{id}', [HeroSectionController::class, 'update'])->name('ourhero.update');
Route::delete('/ourhero/{id}', [HeroSectionController::class, 'destroy'])->name('ourhero.destroy');


Route::get('/ourmember', [MemberController::class, 'index'])->name('ourmember.index');
Route::post('/ourmember', [MemberController::class, 'store'])->name('ourmember.store');
Route::post('/ourmember/{member}', [MemberController::class, 'update'])->name('ourmember.update');
Route::delete('/ourmember/{member}', [MemberController::class, 'destroy'])->name('ourmember.destroy');


Route::get('/ourevents', [EventsController::class, 'index'])->name('ourevents.index');
Route::post('/ourevents', [EventsController::class, 'store'])->name('ourevents.store');
Route::post('/ourevents/{event}', [EventsController::class, 'update'])->name('ourevents.update');
Route::delete('/ourevents/{event}', [EventsController::class, 'destroy'])->name('ourevents.destroy');

Route::get('/ourgallery', [GalleryController::class, 'index'])
    ->name('ourgallery.index');

Route::post('/ourgallery', [GalleryController::class, 'store'])
    ->name('ourgallery.store');

Route::post('/ourgallery/{gallery}', [GalleryController::class, 'update'])
    ->name('ourgallery.update');

Route::delete('/ourgallery/{gallery}', [GalleryController::class, 'destroy'])
    ->name('ourgallery.destroy');

Route::get('/ourfaq', [FaqController::class, 'index'])->name('ourfaq.index');
Route::post('/ourfaq', [FaqController::class, 'store'])->name('ourfaq.store');
Route::put('/ourfaq/{faq}', [FaqController::class, 'update'])->name('ourfaq.update');
Route::delete('/ourfaq/{faq}', [FaqController::class, 'destroy'])->name('ourfaq.destroy');
  

    Route::get('/hero-section', function () {
        return Inertia::render('AdminPages/HeroSection');
    });

    
Route::get('/member', function () {
    return Inertia::render('AdminPages/Members');
});

Route::get('/event', function () {
    return Inertia::render('AdminPages/Events');
});
Route::get('/galleries', function () {
    return Inertia::render('AdminPages/Gallery');
});

Route::get('/faqs', function () {
    return Inertia::render('AdminPages/FAQ');
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
