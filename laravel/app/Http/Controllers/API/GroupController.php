<?php

namespace App\Http\Controllers\API;

use App\Group;
use Illuminate\Http\Request;
use App\Http\Requests\StoreGroup;
use App\Http\Controllers\Controller;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Group::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreGroup  $request
     * @return Group $group
     */
    public function store(StoreGroup $request)
    {
        $group = Group::create($request->validated());

        return $group;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function show(Group $group)
    {
        return $group;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Group $group)
    {
        $group->update($request->all());

        return $group;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function destroy(Group $group)
    {
        $group->delete();

        return response()->json(null, 204);
    }
}
