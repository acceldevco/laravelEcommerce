<?php

namespace App\Http\Controllers;

use App\Models\Orders;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrdersController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Orders $orders)
    {


        return Inertia::render('Profile/OrdersAu', [
            'cate' => false,
            'num' => false,
            'data' => '',
            'data2' => Orders::with(['products','detail'])->get(),
            'form' => ['nameuser', 'email', 'name', 'address'],
            'products' => [],
            'cal'=>function(){
                return 'dasd';
            }
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Orders $orders)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Orders $orders)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Orders $orders,Request $req)
    {

        
        Orders::find($req->id)->delete();

        return 'delete';
    }
}
