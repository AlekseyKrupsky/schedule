<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResources([
    'lessonTypes' => 'LessonTypeController',
    'groups' => 'GroupController',
    'faculties' => 'FacultyController',
    'streams' => 'StreamController',
    'rooms' => 'RoomController',
    'subjects' => 'SubjectController',
    'teachers' => 'TeacherController',
]);

/*Route::prefix('v1')->group(function () {
    Route::get('rooms', function () {
        return Room::all();
    });
    Route::get('rooms/{room}', function (Room $room) {
        return $room;
    });

    Route::get('rooms/number/{number?}', function ($number) {
        return null;
    });
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/