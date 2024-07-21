<?php

namespace App\Http\Controllers;

use App\Models\Details;
use Illuminate\Http\Request;

class DetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //foreach ($request->data as $key => $value) {
        //Details::create($value);
        //}
        //return Details::all();
    }

    /**
     * Display the specified resource.
     */
    public function show(Details $details)
    {
       //return Details::all();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Details $details)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Details $details)
    {
        //$data = Details::find(Auth::user()->id);
        //foreach ($request->data as $key => $value) {
        //   $data->$key = $value;
        //}
        //$data->save();
        //return 'update';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Details $details)
    {
        //Details::find(Auth::user()->id)->delete();
    }
}
