<template>
	<div class="content">
		<div class="container-fluid">
			<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
				<Row :gutter="16" >
					<Col span="2">
						<h3>Blogs</h3>
					</Col>
					<Col span="4">
						<Select v-model="search.cats" placeholder="Filter by Tag" size='small' @on-change="getBlogByFiler()">
					    	<Option v-for="(cat, i) in cats" :key="cat.i" :value="cat.id">
					    		{{cat.categoryName}}
					    	</Option>
					    </Select>
					</Col>
					<COL>
						<Select v-model="search.tags" placeholder="Filter by Category" size='small' @on-change="getBlogByFiler()">
					    	<Option v-for="(tag, i) in tags" :key="tag.i" :value="tag.id">
					    		{{tag.tagName}}
					    	</Option>
					    </Select>
					</COL>
				</Row>
				<Space></Space>
				<div class="_overflow _table_div" style="margin-top: 20px;">
					<table class="table table-striped table-hover">
						<thead class="bg-primary">
							<tr>
								<th>Sl. No</th>
								<th>Title</th>
								<th>Short Description</th>
								<th>Category Name</th>
								<th>Tags</th>
								<th>Views</th>
								<th>Created At</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(blog, i) in blogData" :key='i'>
								<td>{{i+1}}</td>
								<td>{{blog.title}}</td>
								<td>{{blog.post_excerpt}}</td>
								<td>
									<Tag color="geekblue" v-for="cat in blog.cats" :key='cat.id' v-if='blog.cats'>{{cat.categoryName}}</Tag>
									<p v-if="blog.cats.length == 0">No Category</p>
								</td>
								<td>
									<Tag type="border" v-for="tag in blog.tags" :key='tag.id'v-if='blog.tags'>{{tag.tagName}}</Tag>
									<p v-if="blog.tags.length == 0">No tag</p>
								</td>
								<td>{{blog.views}}</td>
								<td>{{blog.created_at}}</td>
								<td>
									<Tooltip content="Edit Post" placement="top-start">
							            <Button type="primary" icon='ios-create-outline' @click='editBlog(blog)' v-if="isUpdatePermission" size='small'>
											Edit
										</Button>
							        </Tooltip>
									<Tooltip content="Delete Post" placement="top-start" v-if="isDeletePermission">
							            <Button type="error" @click="onDeleteModalOpen(blog)"  icon='ios-trash-outline' size='small'>
											Delete
										</Button>
							        </Tooltip>
								</td>
							</tr>
							<tr>
								<td v-if="blogData.length == 0" colspan="8">
									<h5>No blog found</h5>
								</td>
							</tr>
						</tbody>					
					</table>
				</div>
			</div>

			<DeleteModal/>
		</div>
	</div>
</template>


<script>
	import DeleteModal from "../components/delete_modal";
	import {mapGetters} from 'vuex';
	export default {
		name: "Blogs",
		data(){
			return {
				blogData: [],
				cats: [],
				tags: [],
				search: {
					cats: '',
				}
			}
		},
		methods: {
			async getBlogs(){
				const res = await this.__callApi('get', 'app/getblog');
				if (res.status == 200 || res.status == 201) {
					this.blogData = res.data;
				}else{
					console.log(res);
				}
			},
			async getCats(){
				const [cats, tags] =  await Promise.all([
					this.__callApi('get', 'app/get_cats'),
					this.__callApi('get', 'app/get_tags')
				])
				if (cats.status == 200 || tags.status == 200) {
					this.cats = cats.data;
					this.tags = tags.data;
				}else{
					console.log(cats);
					console.log(tags);
				}
			},
			async getBlogByFiler(){
				const res = await this.__callApi('post', 'app/get_post_by_fulter', {cat_id: this.search.cats});
				if(res.status == 200){
					this.blogData = res.data;
				}else{
					console.log(res);
				}
			},
			//Blog delete
			onDeleteModalOpen(dataObj){
            	const data = {
            		name: 'Blog',
			      	triger: true,
			      	url: '/app/delete_blog',
			      	data: dataObj,
			    }
			    this.$store.commit('setDeleteModalData', data)
            },
            //edit blog
            editBlog(blog){
            	return this.$router.push(`/edit_blog/${blog.id}`)
            }
		},
		computed: {
			...mapGetters(['getUpdateStatus'])
		},
		components: {
			DeleteModal,
		},
		created(){
			this.getBlogs();
			this.getCats();
		},
		watch: {
			getUpdateStatus(value){
				if(value){
					this.getBlogs();
					this.$store.commit('updateStatusChange', {dataUpdated: false});
				}
			}
		},

	}
</script>
