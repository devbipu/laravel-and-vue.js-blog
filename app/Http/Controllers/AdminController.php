<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Support\Facades\Auth;
class AdminController extends Controller
{
    //User add
    public function onUserAdd(Request $req)
    {
        $valid = $req->validate([
            'fullName' => 'required',
            'email' => 'bail|required|email|unique:users',
            'password' => 'required|min:4',
            'role_id' => 'required',
        ]);
        $dbres = User::create([
            'fullName' => $req->fullName,
            'email' => $req->email,
            'password' => bcrypt($req->password),
            'userType' => 'User',
            'role_id' => $req->role_id,
        ]);
        return $dbres;
    }

    //get all user
    public function onUserFetch()
    {
        $users = User::get();
        return $users;
    }

    //edit user

    public function onUserEdit(Request $req)
    {
        $valid = $req->validate([
            'fullName' => 'required',
            'email' => "bail|required|email|unique:users,email, $req->id",
            'password' => 'min:4',
            'role_id' => 'required',
        ]);
        $data = [
            'fullName' => $req->fullName,
            'email' => $req->email,
            'role_id' => $req->role_id,
        ];
        if($req->password){
            $data['password'] = bcrypt($req->password);
        }
        $dbres = User::where('id', '=', $req->id)->update($data);
        return $dbres;
    }


    // login
    public function onLogin(Request $req)
    {
        $valid = $req->validate([
            'email' => "bail|required",
            'password' => 'bail|required|min:4',
        ]);
        if (Auth::attempt(['email' => $req->email, 'password' => $req->password])) {
            $user = Auth::user();

            //return $user->role;
            if($user->role->isAdmin == 0){
                Auth::logout();
                return response()->json([
                    'msg' => 'User Not Allowed',
                ], 401);
            }
            return response()->json([
                'msg' => 'You are logged in',
            ]);
            
        }else{
            return response()->json([
                'msg' => 'Incurrect Login Detail',
            ], 401);
        }
    }

    //Role add 
    public function onRoleAdd(Request $req)
    {
        $req->validate([
            'roleName' => 'required'
        ]);
        $dbres = UserRole::create([
            'roleName' => $req->roleName,
        ]);
        return $dbres;
    }

    //Get all User Role 
    public function onRoleFetch()
    {
        $dbres = UserRole::get();
        return $dbres;
    }

    //Role edit save
    public function onRoleEditSave(Request $req)
    {
        $dbres = UserRole::where('id', '=', $req->id)->update([
            'roleName' => $req->roleName,
        ]);
        return $dbres;
    }


    //Asign role save
    public function onAssignRole(Request $req)
    {
        $valid = $req->validate([
            'permission' => 'required'
        ]);

        $dbres = UserRole::where('id', '=', $req->id)->update([
            'permission' => $req->permission,
        ]);
        return $dbres;
    }

    //Get user permission data by id
    public function onUserPermissionFetch(Request $req)
    {
        $dbres = UserRole::where('id', '=', $req->id)->get();
        return $dbres;
    }
}
