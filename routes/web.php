<?php

use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/test', [UserController::class, 'index']);

Route::get('/products', function () {
    return Inertia::render("Products");
});
Route::get('/orders', function () {
    return Inertia::render("Orders");
});
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/orderauth', [
    OrdersController::class, 'show'
])->middleware(['auth', 'verified']);

Route::get('/userauth', [
    UserController::class, 'show'
])->middleware(['auth', 'verified']);


Route::post('/orderauth', [
    OrdersController::class, 'destroy'
])->middleware(['auth', 'verified'])->name('deleteorder');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
