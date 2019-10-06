<?php

namespace App\Http\Controllers\API;

use App\LessonType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLessonType;

class LessonTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return LessonType::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreLessonType $request
     * @return LessonType
     */
    public function store(StoreLessonType $request)
    {
        $lessonType = LessonType::create($request->validated());

        return $lessonType;
    }

    /**
     * Display the specified resource.
     *
     * @param  LessonType $lessonType
     * @return \Illuminate\Http\Response
     */
    public function show(LessonType $lessonType)
    {
        return $lessonType;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  LessonType $lessonType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LessonType $lessonType)
    {
        $lessonType->update($request->all());

        return $lessonType;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  LessonType $lessonType
     * @return \Illuminate\Http\Response
     */
    public function destroy(LessonType $lessonType)
    {
        $lessonType->delete();

        return response()->json(null, 204);
    }
}
