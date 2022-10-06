<template>
	<div class="content">
		<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
			<p class="_title0 mb-4">
				<span>Role asign</span>
				<Select v-model="data.id" size="large" @on-change="getRoleOnSelectUser()" style="width:250px">
				        <Option v-for="role in allUserRole" :value="role.id" :key="role.id" v-if="isWritePermission || isUpdatePermission">{{ role.roleName }}</Option>
				</Select>
				<Checkbox @on-change="checkAll();" :disabled='(data.id == null) ? true : false '>{{helpers.allCheck ? 'Uncheck all' : 'Check all'}}</Checkbox>
			</p>

			<div class="_overflow _table_div">
				<div>
					
				</div>
				<table class="table table-striped table-hover disabled" :disabled='true'>
					<thead class="bg-primary text-white">
						<tr>
							<th>Recourse Name</th>
							<th>Read</th>
							<th>Write</th>
							<th>Update</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(role, i) in resources" :key='i'>
							<td>{{role.rName}}</td>
							<td><Checkbox v-model="role.read" :disabled='(data.id == null) ? true : false ' value='1'></Checkbox></td>
							<td><Checkbox v-model="role.write" :disabled='(data.id == null) ? true : false ' value='1'></Checkbox></td>
							<td><Checkbox v-model="role.update" :disabled='(data.id == null) ? true : false ' value='1'></Checkbox></td>
							<td><Checkbox v-model="role.delete" :disabled='(data.id == null) ? true : false ' value='1'></Checkbox></td>
						</tr>
					</tbody>					
				</table>
				<Button type="primary" :loading="helpers.sending" :disabled="helpers.sending" @click="onRoleAsignSave()">Save All</Button>
			</div>
		</div>

	</div>
</template>


<script type="text/javascript">
	export default {
		name: "Add-New-role",
		data(){
			return {
				data: {
					id: null,
				},
				allUserRole: [],
				resources: [],
				defaultPermissions: [
					{ rName: "Home", read: false, write: false, update: false, delete: false, name: 'home' },
					{ rName: "Blogs", read: false, write: false, update: false, delete: false, name: 'blogs' },
					{ rName: "CreateBlog", read: false, write: false, update: false, delete: false, name: 'createblog' },
					{ rName: "EditBlog", read: false, write: false, update: false, delete: false, name: 'EditBlog' },
					{ rName: "Categorys", read: false, write: false, update: false, delete: false, name: 'categories' },
					{ rName: "Tags", read: false, write: false, update: false, delete: false, name: 'tags' },
					{ rName: "Users", read: false, write: false, update: false, delete: false, name: 'users' },
					{ rName: "Add New Role", read: false, write: false, update: false, delete: false, name: 'addnewrole' },
					{ rName: "Role Asign", read: false, write: false, update: false, delete: false, name: 'roleasign' },
				],
				allCheckPermissions: [
					{ rName: "Home", read: true, write: true, update: true, delete: true, name: 'home' },
					{ rName: "Blogs", read: true, write: true, update: true, delete: true, name: 'blogs' },
					{ rName: "CreateBlog", read: true, write: true, update: true, delete: true, name: 'createblog' },
					{ rName: "EditBlog", read: true, write: true, update: true, delete: true, name: 'EditBlog' },
					{ rName: "Categorys", read: true, write: true, update: true, delete: true, name: 'categories' },
					{ rName: "Tags", read: true, write: true, update: true, delete: true, name: 'tags' },
					{ rName: "Users", read: true, write: true, update: true, delete: true, name: 'users' },
					{ rName: "Add New Role", read: true, write: true, update: true, delete: true, name: 'addnewrole' },
					{ rName: "Role Asign", read: true, write: true, update: true, delete: true, name: 'roleasign' },
				],
				helpers: {
					sending: false,
					allCheck: false,
				}
			}
		},
		methods: {
			//Get all Role by call this functions.
			async getAllUserRole(){
				const res = await this.__callApi('get', '/app/get_new_role');
				if (res.status == 200) {
					this.allUserRole = res.data;
					if (res.data.length) {
						// this.data.id = res.data[0].id;
						// this.getAllPermissionById(this.data.id);
						this.sc("Role fetched")
					}
				}else{
					this.er("Error")
				}
			},
			async onRoleAsignSave(){
				// this.helpers.sending = true;
				const jsonData = JSON.stringify(this.resources);
				console.log(jsonData);
				const res = await this.__callApi('post', '/app/assign_role', {permission: jsonData, id: this.data.id});
				if (res.status == 200) {
					this.sc("Role Assigned Successfully");
					this.getAllUserRole();
					// this.resources = this.defaultPermissions;
					// this.data.id = null;
					// this.getAllUserRole();
				}else{
					this.er('Role Not Assigned Successfully')
				}
			},

			getRoleOnSelectUser(){
				let index = this.allUserRole.findIndex(role => role.id == this.data.id);
				let permission = this.allUserRole[index].permission;
				// this.resources = JSON.parse(permission);
				if(permission == null){
					this.resources = this.defaultPermissions;
				}else{
					this.resources = JSON.parse(permission);
				}
			},
			checkAll: function(){
				if (this.helpers.allCheck) {
					this.resources = this.defaultPermissions;
					this.helpers.allCheck = false;
				}else{
					this.helpers.allCheck = true;
					this.resources = this.allCheckPermissions;
				}
			}
			

		},
		async created(){
			const res = await this.__callApi('get', '/app/get_new_role');
			if (res.status == 200) {
				this.allUserRole = res.data;
				if (res.data.length) {
					// this.data.id = res.data[0].id;
					// if(res.data[0].permission){
					// 	this.resources = JSON.parse(res.data[0].permission);
					// }
				}
			}else{
				this.er("Error")
			}
		}
	}
</script>