<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\Blogs;
use App\Models\Tags;
use App\Models\Categories;
use App\Models\BlogCategories;
use App\Models\BlogTags;
use App\Models\User;


class PostController extends Controller
{  


    public function get_dashbaord_data(){
        $total_blog = Blogs::get()->count();
        $total_cats = Categories::get()->count();
        $total_tags = Tags::get()->count();
        $total_user = User::get()->count();
    
        return response()->json([
            'total_blog' => $total_blog,
            'total_cats' => $total_cats,
            'total_tags' => $total_tags,
            'total_user' => $total_user
        ]);
    }

    public function getDashbaordPost(Request $req){
        $posts = Blogs::orderBy('created_at', 'DESC')->with('cats')->select('id', 'title', 'slug', 'created_at')->get();
        $data = json_encode($posts);
        return $data;
    }
 
    public function removeFileFromServer($fileName){

        $filePath = public_path().'/uploads/'.$fileName;
        if(file_exists($filePath)){
            @unlink($filePath);
        }
    }


    // Get tags
    public function getTags(){
        return Tags::orderBy('id', 'desc')->get();
    }
    //add tag
    public function addTags(Request $req){
        $data = $req->input('tagName');
        // $this->validate($req, [
        //     $data = 'required'
        // ]);
        $dbres = Tags::create([
            'tagName' => $data,
        ]);
        return $dbres;
    }

    //edit tag
    public function editTag(Request $req){
        $id = $req->input('id');
        $tagName = $req->input('tagName');
        $dbres = Tags::where('id', '=', $id)
        ->update([
            'tagName' => $tagName,
        ]);
        return $dbres;
    }

    //tag delete
    public function deleteTag(Request $req){
        $id = $req->input('id');
        return Tags::where('id', '=', $id)->delete();
    }


    /*Categories Start*/
    public function getCategory(){
        $res = Categories::orderBy('id', 'desc')->get();
        return $res;
    }

    //img upload
    public function catImgUpload(Request $req){
        $req->validate([
            'file' => 'required|mimes:jpg,jpeg,png',
        ]);
        $picName = time().".".$req->file->extension();
        $req->file->move(public_path('uploads'), $picName);
        return $picName;
    }

    public function catImgDelete(Request $req){
        $fileName = $req->input('iconImage');
        $this->removeFileFromServer($fileName);
        return $fileName." has been Deleted";
    }

    //Category adding
    public function catAdd(Request $req){

        $catName = $req->input('categoryName');
        $catImage = $req->input('iconImage');


        $res = Categories::create([
            'categoryName'  => $catName,
            'iconImage'     => $catImage
        ]);

        return $res;
    }

    //Category edit
    public function catEdit(Request $req){
        $catName = $req->input('categoryName');
        $catImage = $req->input('iconImage');
        $id = $req->input('catId');


        $res = Categories::where('id', '=', $id)->update([
            'categoryName'  => $catName,
            'iconImage'     => $catImage
        ]);
        return $res;
    }

    //Delete Category
    public function catDelete(Request $req)
    {
        $id = $req->input('id');
        $res = Categories::where('id', $id)->delete();

        ($res == true) ? $res : "Delete unsuccessfull" ;
    }

    /*Categories end*/

    // Blog start
    public function uploadBlogPostImage(Request $req)
    {
        $req->validate([
            'image' => 'required|mimes:jpg,jpeg,png',
        ]);
        $picName = time().".".$req->image->extension();
        $req->image->move(public_path('uploads'), $picName);
        return response()->json([
            "success" => 1,
            "file" => [
                'url' => '/uploads/'.$picName
            ]
        ]);
        // return $req->getHttpHost().'/uploads/'.$picName;
    }




    //get all img file

    public function getAllImgFile(){
        $path    = public_path().'/uploads';
        $files = scandir($path);
        $files = array_diff(scandir($path), array('.', '..'));
        return $files;
    }


    //Get all blog
    public function getAllPosts()
    {
        $blogs = Blogs::orderBy('id', 'desc')->with(['tags', 'cats'])->get();
        return $blogs;
    }

    //Save blog
    public function saveBlog(Request $req)
    {
        $postCats = [];
        $postTags = [];
        
        DB::beginTransaction();
        try{
            $dbres =  Blogs::create([
                'title' => $req->title,
                'post' => $req->post, 
                'post_excerpt' => $req->post_excerpt,
                'jsonData' => $req->jsonData,
                'user_id' => Auth::id(),
                'metaDescription' => $req->metaDescription,
            ]);


            //insert categoryes
            if(!empty($req->categorys_id)){
                foreach ($req->categorys_id as $cat) {
                    array_push($postCats, array('category_id' => $cat, 'blog_id' => $dbres->id));
                }
                BlogCategories::insert($postCats);
            }

            //insert tags
            if(!empty($req->tag_id)){
                foreach ($req->tag_id as $tag) {
                    array_push($postTags, array('tag_id' => $tag, 'blog_id' => $dbres->id));
                }
                BlogTags::insert($postTags);
            }
            DB::commit();
            return "Success";
        } catch(Throwable $th) {
            DB::rollBack();
            return $th->getMessage();
        }
    }


    public function deleteBlog(Request $req)
    {
        $blogDelete = Blogs::where('id', '=', $req->id)->delete();
        $delete_cats = BlogCategories::where('blog_id', '=', $req->id)->delete();
        $delete_tags = BlogTags::where('blog_id', '=', $req->id)->delete();
        return $blogDelete;
    }

    //filter post
    public function getPostByFilter(Request $req)
    {
        $blogs_ids = BlogCategories::where('category_id', '=', $req->cat_id)->get('blog_id');
        $blogs_byCats=array();
        foreach($blogs_ids as $blog_id){
             array_push($blogs_byCats, Blogs::where('id', '=', $blog_id->blog_id)->with(['cats', 'tags'])->first());
        }

        return $blogs_byCats;
    }

    //getBlogById for edit
    public function getBlogById(Request $req)
    {
        return Blogs::with(['cats', 'tags'])->where('id', $req->id)->first();
    }

    //Save edit blog data
    public function saveEditBlog(Request $req)
     {
        $postCats = [];
        $postTags = [];
        
        DB::beginTransaction();
        try{
            $dbres =  Blogs::where('id', $req->id)->update([
                'title' => $req->title,
                'post' => $req->post, 
                'post_excerpt' => $req->post_excerpt,
                'jsonData' => $req->jsonData,
                'user_id' => Auth::id(),
                'metaDescription' => $req->metaDescription,
            ]);

            //insert categoryes
            BlogCategories::where('blog_id', $req->id)->delete();
            if(!empty($req->categorys_id)){
                foreach ($req->categorys_id as $cat) {
                    array_push($postCats, array('category_id' => $cat, 'blog_id' => $req->id));
                }
                BlogCategories::insert($postCats);
            }

            //insert tags
            BlogTags::where('blog_id', $req->id)->delete();
            if(!empty($req->tag_id)){
                foreach ($req->tag_id as $tag) {
                    array_push($postTags, array('tag_id' => $tag, 'blog_id' => $req->id));
                }
                BlogTags::insert($postTags);
            }
            DB::commit();
            return "Success";
        } catch(Throwable $th) {
            DB::rollBack();
            return $th->getMessage();
        }
     } 
}
