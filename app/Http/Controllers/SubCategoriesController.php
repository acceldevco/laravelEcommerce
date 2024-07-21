<?php

namespace App\Http\Controllers;

use App\Models\SubCategories;
use Illuminate\Http\Request;

class SubCategoriesController extends Controller
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
            //{{ parentModel }}::create($value);
        //}
        //return {{ parentModel }}::all();
    }

    /**
     * Display the specified resource.
     */
    public function show(SubCategories $subCategories)
    {
       //return SubCategories::all();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SubCategories $subCategories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SubCategories $subCategories)
    {
                //$data = SubCategories::find(Auth::user()->id);
        //foreach ($request->data as $key => $value) {
        //   $data->$key = $value;
        //}
        //$data->save();
        //return 'update';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SubCategories $subCategories)
    {
        //SubCategories::find(Auth::user()->id)->delete();
    }
}
