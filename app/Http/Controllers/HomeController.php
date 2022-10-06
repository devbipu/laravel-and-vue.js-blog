<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;




class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $req)
    {
        if (!Auth::check() && $req->path() != 'login') {
            return redirect('/login');
        }

        // if (!Auth::check() && $req->path() == 'login') {
        //     return view('index');
        // }


        // For loggedin users validation
        $user = Auth::user();
        if(Auth::check() && $user->role->isAdmin == 0){
            Auth::logout();
            return response()->json([
                'msg' => 'You are not able to access',
            ]);
        }
        if(Auth::check() && $req->path() == 'login'){
            return redirect('/');
        }

        return $this->checkPermissionByUser($user, $req);
        // return view('index');
    }

    // User permission checker
    public function checkPermissionByUser($user, $req)
    {
        // code...
        if(Auth::check()){
            $permission = json_decode($user->role->permission);
            if(!$permission) return Auth::logout(). redirect('/login');
            $hasReadPermission = false;
            if($req->path() == public_path('/uploads/*') || $req->path() == "/" || $req->path('/edit_blog/*')){
                $hasReadPermission = true;
            }else{
                 foreach ($permission as $p) {
                    // code...
                    if($p->name == $req->path()){
                        if($p->read == true){
                            $hasReadPermission = true;
                        }
                    }
                }
            }
           
            if ($hasReadPermission) return view('index');
            if($hasReadPermission == false) return view("noPermission");
        }else{
            return view('index');
        }
        
    }

    //Logout
    public function userLogout()
    {
        Auth::logout();
        return redirect('/login');
    }
}
