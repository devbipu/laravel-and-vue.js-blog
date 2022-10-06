import Vue from 'vue'
import Router from 'vue-router'


// Components
import NotFound from '../components/notfound.vue'



/* ---------------------
All imported pages start 
-----------------------*/

import HomePage from '../pages/home';
import Dashboard from '../admin/pages/dashboard.vue';


// Admin pages
// import TagList from '';
// import AllCategories from '';
// import Blogs from '';
// import CreateBlog from '';
// import Users from '';
// import AddRole from '';
// import RoleAsign from '';
// import Login from '';
// import EditBlog from '';

/* ------------------
All imported pages end 
---------------------*/


Vue.use(Router)

const routes = [
	{
		path: '/',
		name: 'Root',
		component: HomePage
	},
	{
	  path: '/home',
	  name: 'Dashbaord',
	  component: Dashboard,
	},
	{
	  path: '/tags',
	  name: 'Tags',
	  component: () => import('../admin/pages/tags')
	},
	{
	  path: '/categories',
	  name: 'Categories',
	  component: () => import('../admin/pages/categories')
	},
	{
	  path: '/blogs',
	  name: 'blogs',
	  component: () => import('../admin/pages/blogs')
	},,
	{
	  path: '/createblog',
	  name: 'CreateBlog',
	  component: () => import('../admin/pages/createblog')
	},
	{
	  path: '/users',
	  name: 'Users',
	  component: () => import('../admin/pages/users.vue')
	},
	{
	  path: '/addnewrole',
	  name: 'AddNewRole',
	  component: () => import('../admin/pages/add_role')
	},{
	  path: '/roleasign',
	  name: 'RoleAsign',
	  component: () => import('../admin/pages/roleasign')
	},
	{
	  path: '/login',
	  name: 'Login',
	  component: () => import('../admin/pages/login')
	},
	{
	  path: '/edit_blog/:id',
	  name: 'edit_blog',
	  component: () => import('../admin/pages/edit_blog')
	},
	

	//404 error
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFound
  },

	
]



export default new Router({
  mode: 'history',
  routes,
})

