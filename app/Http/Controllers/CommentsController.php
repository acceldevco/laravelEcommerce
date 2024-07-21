<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use Illuminate\Http\Request;

class CommentsController extends Controller
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
    public function show(Comments $comments)
    {
       //return Comments::all();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comments $comments)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comments $comments)
    {
                //$data = Comments::find(Auth::user()->id);
        //foreach ($request->data as $key => $value) {
        //   $data->$key = $value;
        //}
        //$data->save();
        //return 'update';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comments $comments)
    {
        //Comments::find(Auth::user()->id)->delete();
    }
}
