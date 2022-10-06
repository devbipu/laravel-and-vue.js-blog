<?php

namespace App\Models;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blogs extends Model
{
 
    protected $fillable = ['title', 'post', 'post_excerpt','jsonData', 'slug', 'user_id', 'featuredImage', 'metaDescription', 'views', ];

    public function setTitleAttribute($title)
    {
        $this->attributes['title'] = $title;
        // $this->attributes['slug'] = Str::slug($value, '-');
        $this->attributes['slug'] = $this->uinqueSlug($title);
    }

    private function uinqueSlug($title){
        $slug = Str::slug($title, '-');
        $count = Blogs::where('slug', 'LIKE', "{$slug}%")->count();
        $newCount = $count > 0 ? ++$count  : '';
        return $newCount > 0 ? "$slug-$newCount" : "$slug";
    }


    // Get tags by blogs
    public function tags(){
        return $this->belongsToMany('App\Models\Tags', 'blog_tags', 'blog_id', 'tag_id'); //belongsToMany('Data model name', 'Data Save table name', 'forgen key', 'data id')
    }

    // Get Cats by blogs
    public function cats(){
        return $this->belongsToMany('App\Models\Categories', 'blog_categories', 'blog_id', 'category_id');
    }
}
