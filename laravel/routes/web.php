<?php

use App\Lesson;
use App\Faculty;
use App\Teacher;
use App\Group;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('dashboard');
});


Route::get('/create', function () {
    return Lesson::create([
        'group_id' => 1,
        'subgroup' => 1,
        'day_num' => 1,
        'lesson_num' => 1,
        'room' => 1,
        'subject_id' => 1,
        'teacher_id' => 1,
    ]);
});


Route::get('/lessons', function () {
    return Lesson::all();
});

Route::get('/teachers/{teacher}/lessons', function (Teacher $teacher) {
    return $teacher->getLessonsInfo();
});

Route::get('/groups/{group}/lessons', function (Group $group) {
    return $group->getLessonsInfo();
});

Route::get('/groups/{group}/exams', function (Group $group) {
    return $group->getLessonsInfo();
});

Route::get('/groups/{group}/search', function (Group $group) {
    return $group->getLessonsInfo();
});

Route::get('/groups/{group}/info', function (Group $group) {
    return $group->getLessonsInfo();
});

Route::get('/lesson/{lesson}', function (Lesson $lesson) {
    return $lesson;
});

Route::view('/schedule', 'schedule');
Route::view('/schedule/{tab}', 'schedule');
Route::view('/schedule/{tab}/{entityId}', 'schedule');
Route::view('/schedule/{tab}/{entityId}/{type}', 'schedule');

Route::view('/{path?}', 'dashboard');
