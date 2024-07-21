<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Ramsey\Uuid\Type\Integer;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

       
        
        // $data = User::find(Auth::user()->id);
        
        // $test->email = 'casehe5368@tiervio.co';
        // $test->save();
        // dd();
        // $test = ['name'=>"dasd","email"=>"casehe5368@tiervio.co1"];
        // foreach ($test as $key => $value) {
        //    $data->$key = $value;
        // //    echo $key.'  '.$value.'<br/>';
        // }
        // $data->save();
        // dd(User::all());
        //return Inertia::render('Welcome', ['use'=>User::all()]);

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
    public function show()
    {
     return  Inertia::render('Profile/UsersAu',[
        'cate' => false,
        'num' => false,
        'data' => '',
        'data2' => [0],//User::with(['products','detail'])->get(),
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
