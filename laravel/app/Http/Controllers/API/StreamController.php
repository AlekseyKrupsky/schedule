<?php

namespace App\Http\Controllers\API;

use App\Stream;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStream;

class StreamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Stream::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreStream $request
     * @return Stream
     */
    public function store(StoreStream $request)
    {
        $stream = Stream::create($request->validated());

        return $stream;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Stream  $stream
     * @return \Illuminate\Http\Response
     */
    public function show(Stream $stream)
    {
        return $stream;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Stream  $stream
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Stream $stream)
    {
        $stream->update($request->all());

        return $stream;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Stream  $stream
     * @return \Illuminate\Http\Response
     */
    public function destroy(Stream $stream)
    {
        $stream->delete();

        return response()->json(null, 204);
    }
}
