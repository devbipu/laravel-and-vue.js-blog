<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AdminController;
use App\Http\Middleware\AdminCheckMiddleware;







/*------------------------------------
---------- Data fetch routes -----------
------------------------------------*/

Route::prefix('app')->middleware([AdminCheckMiddleware::class])->group(function(){
	Route::get('/get_dashboard_data', [PostController::class, 'get_dashbaord_data']);
	Route::get('/get_dashbaord_post', [PostController::class, 'getDashbaordPost']);
	//Tags
	Route::get('/get_tags', [PostController::class, 'getTags']);
	Route::post('/create_tag', [PostController::class, 'addTags']);
	Route::post('/eidt_tag', [PostController::class, 'editTag']);
	Route::post('/delete_tag', [PostController::class, 'deleteTag']);


	// Categories
	Route::get('/get_cats', [PostController::class, 'getCategory']);
	Route::post('/cats/img_upload', [PostController::class, 'catImgUpload']);
	Route::post('/delete_upload_file', [PostController::class, 'catImgDelete']);
	Route::post('/create_cat', [PostController::class, 'catAdd']);
	Route::post('/cat_edit', [PostController::class, 'catEdit']);
	Route::post('/delete_cat', [PostController::class, 'catDelete']);

	//cat img file
	Route::get('/getallfile', [PostController::class, 'getAllImgFile']);


	// Users
	Route::post('/add_user', [AdminController::class, 'onUserAdd']);
	Route::get('/get_users', [AdminController::class, 'onUserFetch']);
	Route::post('/edit_user', [AdminController::class, 'onUserEdit']);
	Route::post('/admin_login', [AdminController::class, 'onLogin']);
	Route::post('/add_new_role', [AdminController::class, 'onRoleAdd']);
	Route::get('/get_new_role', [AdminController::class, 'onRoleFetch']);
	Route::post('/edit_user_role', [AdminController::class, 'onRoleEditSave']);
	// Route::post('/get_users_roles', [AdminController::class, 'onRolefetch']);

	//Role asign
	Route::post('/assign_role', [AdminController::class, 'onAssignRole']);
	Route::post('/get_user_permission', [AdminController::class, 'onUserPermissionFetch']);

	// Blogs
	Route::get('/getblog', [PostController::class, 'getAllPosts']);
	Route::post('/delete_blog', [PostController::class, 'deleteBlog']);
	Route::post('/get_post_by_fulter', [PostController::class, 'getPostByFilter']);
	Route::get('/get_blog_by_id/{id}', [PostController::class, 'getBlogById']);
	Route::post('/save_edit_blog', [PostController::class, 'saveEditBlog']);

});


Route::post('app/saveblog', [PostController::class, 'saveBlog']);
Route::post('/createblog', [PostController::class, 'uploadBlogPostImage']);
//

Route::get('/logout', [HomeController::class, 'userLogout']);
Route::get('/', [HomeController::class, 'index']);
Route::get('/{any}', [HomeController::class, 'index'])->where('any', '.*');

