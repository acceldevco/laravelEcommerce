<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
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
    public function show(Products $products)
    {
       //return Products::all();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Products $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Products $products)
    {
        //$data = Products::find(Auth::user()->id);
        //foreach ($request->data as $key => $value) {
        //   $data->$key = $value;
        //}
        //$data->save();
        //return 'update';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $products)
    {
        //Products::find(Auth::user()->id)->delete();
    }
}
