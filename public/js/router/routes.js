import Vue from 'vue'
import Router from 'vue-router'


// Components
import NotFound from '../components/notfound.vue'



/* ---------------------
All imported pages start 
-----------------------*/

import HomePage from '../pages/home';


// Admin pages
import TagList from '../admin/pages/tags';
import AllCategories from '../admin/pages/categories';
import Users from '../admin/pages/users.vue';
import AddRole from '../admin/pages/add_role';
import RoleAsign from '../admin/pages/roleasign';
import Login from '../admin/pages/login';

// vue x
import VuexTest from '../vuex/vuexbasecom'

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
	  path: '/admin',
	  name: 'HomePage',
	  component: HomePage
	},
	{
	  path: '/admin/tags',
	  name: 'Tags',
	  component: TagList
	},
	{
	  path: '/admin/categories',
	  name: 'Categories',
	  component: AllCategories
	},
	{
	  path: '/admin/users',
	  name: 'Users',
	  component: Users
	},
	{
	  path: '/admin/addnewrole',
	  name: 'AddNewRole',
	  component: AddRole
	},{
	  path: '/admin/user_role_asign',
	  name: 'UsersRoleAsign',
	  component: RoleAsign
	},
	{
	  path: '/login',
	  name: 'Login',
	  component: Login
	},
	

	//404 error
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFound
  },


	//vuex
	{
		path: '/admin/vuextest',
		name: 'VueX',
		component: VuexTest
	}
	
]



export default new Router({
  mode: 'history',
  routes,
})

