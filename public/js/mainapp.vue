<template>
	<div>
		<div v-if="$store.state.auth.user">
			<!--========== ADMIN SIDE MENU one ========-->
			<div class="_1side_menu" >
				<div class="_1side_menu_logo">
					<h3 style="">WorldSoftZone</h3>
				</div>
				<!--~~~~~~~~ MENU CONTENT ~~~~~~~~-->
				<div class="_1side_menu_content">
					<div class="_1side_menu_img_name">
						<!-- <img class="_1side_menu_img" src="/pic.png" alt="" title=""> -->
						<p class="_1side_menu_name">Admin Menu</p>
					</div>
					<!--~~~ MENU LIST ~~~~~~-->
					<div class="_1side_menu_list">
						<Menu active-name="" :open-names="[]">
					        <MenuItem name="1" to="/admin">Dashboard</MenuItem>
					        <MenuItem name="2" to="/admin/categories">Categories</MenuItem>
					        <MenuItem name="3" to="/admin/Tags">Tags</MenuItem>
					        <Submenu name="4">
					            <template #title>
					                <h6>Users</h6>
					            </template>
					            <MenuItem name="4-1" to="/admin/users">All Users</MenuItem>
					            <MenuItem name="4-2" to="/admin/addnewrole">Add New Role</MenuItem>
					            <MenuItem name="4-3" to="/admin/user_role_asign">Role Assign</MenuItem>
					        </Submenu>
					    </Menu>
					</div>
				</div>
			</div>
			<!--========== ADMIN SIDE MENU ========-->
			<!--========= HEADER ==========-->
			<div class="header">
				<div class="_2menu _box_shadow">
					<div class="_2menu_logo">
						<ul class="open_button">
							<li>
								<router-link to='/'>
									<Icon type="ios-home" />
									<span>Home</span>
								</router-link>
							</li>
						</ul>
					</div>
					<div class="_2menu_logo">
						<ul class="open_button">
							<li>
								<a href='/logout'>
									<Icon type="md-arrow-forward" size="16"/>
									<span>Logout</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!--========= HEADER ==========-->

		</div>
		<router-view/>
	</div>
</template>


<script type="text/javascript">
	export default{
		name: 'Main-App',
		data(){
			return{
				helpers: {
					isLoggedIn: true,
				}
			}
		},
		props: ['user'],
		created(){
			this.$store.commit('setUserLoginInfo', this.user);
		}
	}
</script>