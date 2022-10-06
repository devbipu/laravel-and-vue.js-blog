<template>
	<div class="content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-12 col-md-3">
					<div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_one">
						<div class="_1adminOverveiw_card_left">
							<p class="_1adminOverveiw_card_left_num">{{site_summery.total_blog}}</p>
							<p class="_1adminOverveiw_card_left_title">Total Blog</p>
						</div>
						<div class="_1adminOverveiw_card_right">
							<Icon type="ios-paper" />
						</div>
					</div>
				</div>
				<div class="col-12 col-md-3">
					<div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two">
						<div class="_1adminOverveiw_card_left">
							<p class="_1adminOverveiw_card_left_num">{{site_summery.total_cats}}</p>
							<p class="_1adminOverveiw_card_left_title">Total Category</p>
						</div>
						<div class="_1adminOverveiw_card_right">
							<Icon type="ios-paper-outline" />
						</div>
					</div>
				</div>
				<div class="col-12 col-md-3">
					<div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two">
						<div class="_1adminOverveiw_card_left">
							<p class="_1adminOverveiw_card_left_num">{{site_summery.total_tags}}</p>
							<p class="_1adminOverveiw_card_left_title">Total Tag</p>
						</div>
						<div class="_1adminOverveiw_card_right">
							<Icon type="md-copy" />
						</div>
					</div>
				</div>
				<div class="col-12 col-md-3">
					<div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two">
						<div class="_1adminOverveiw_card_left">
							<p class="_1adminOverveiw_card_left_num">{{site_summery.total_user}}</p>
							<p class="_1adminOverveiw_card_left_title">Total Users</p>
						</div>
						<div class="_1adminOverveiw_card_right">
							<Icon type="md-list-box" />
						</div>
					</div>
				</div>
			</div>
			<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
			<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
				<p class="_title0">Recent News</p>
				<div class="_overflow _table_div">
					<table class="_table">
						<!-- TABLE TITLE -->
						<tr>
							<th>Date</th>
							<th>Title</th>
							<th>Category</th>
							<th>Action</th>
						</tr>
						<!-- TABLE TITLE -->
						<!-- ITEMS -->
						<tr v-for="post in top_posts" :key="post.id">
							<td>{{new Date(post.created_at).toDateString( { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}}</td>

							<!-- <td>{{new Date(post.created_at).getDay()}}-{{new Date(post.created_at).getMonth()}}-{{new Date(post.created_at).getFullYear()}}</td> -->
							<td class="_table_name">{{post.title}}</td>
							<td>
								<Tag v-for="cat in post.cats" :key="cat.id" color="geekblue">{{cat.categoryName}} </Tag>
							</td>
							<td>
								<button class="_btn _action_btn view_btn1" type="button">View</button>
								<button class="_btn _action_btn edit_btn1" type="button">Edit</button>
								<button class="_btn _action_btn make_btn1" type="button">Delete</button>
							</td>
						</tr>
						<!-- ITEMS -->
					</table>
				</div>
			</div>
		</div>
	</div>
</template>



<script>
	export default{
		name: "Dashboard",
		data(){
			return{
				site_summery: {
					total_blog: null,
		            total_cats: null,
		            total_tags: null,
		            total_user: null,
				},
				top_posts: {},
			}
		},
		methods: {
			async getData(){
				const resData = await this.__callApi('get', '/app/get_dashboard_data');
				if (resData.status == 200) {
					this.site_summery.total_blog = resData.data.total_blog;
		            this.site_summery.total_cats = resData.data.total_cats;
		            this.site_summery.total_tags = resData.data.total_tags;
		            this.site_summery.total_user = resData.data.total_user;
				}else{
					console.log("Error to fetch data")
				}
			},
			async getAllPost(){
				const res = await this.__callApi('get', `/app/get_dashbaord_post`);
				if (res.status == 200) {
					this.top_posts = res.data;
				}else{
					console.log(res)
				}
			}
		},
		mounted(){
			this.getData();
			this.getAllPost();
		}
	}
</script>