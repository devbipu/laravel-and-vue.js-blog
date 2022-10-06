<template>
	<div class="content">
		<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
			<p class="_title0 mb-4">
				<span>Role asign</span>
				<Select v-model="data.id" size="large" @on-change="getRoleOnSelectUser()" style="width:250px">
				        <Option v-for="role in allUserRole" :value="role.id" :key="role.id">{{ role.roleName }}</Option>
				</Select>
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
				resources: [
					{ rName: "Blog", read: false, write: false, update: false, delete: false, name: 'Blog' },
					{ rName: "Category", read: false, write: false, update: false, delete: false, name: 'Category' },
					{ rName: "Tag", read: false, write: false, update: false, delete: false, name: 'Tag' },
					{ rName: "User", read: false, write: false, update: false, delete: false, name: 'User' }
				],
				defaultPermissions: [
					{ rName: "Blog", read: false, write: false, update: false, delete: false, name: 'Blog' },
					{ rName: "Category", read: false, write: false, update: false, delete: false, name: 'Category' },
					{ rName: "Tag", read: false, write: false, update: false, delete: false, name: 'Tag' },
					{ rName: "User", read: false, write: false, update: false, delete: false, name: 'User' }
				],
				helpers: {
					sending: false,
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
				const res = await this.__callApi('post', '/app/assign_role', {permission: jsonData, id: this.data.id});
				if (res.status == 200) {
					this.sc("Role Assigned Successfully");

					// let index = this.allUserRole.findIndex(role => role.id == this.data.id);



					console.log(res.data);
				}else{
					console.log(res);
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