<template>
	<div class="content">
		<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
			<p class="_title0">Add New Role <Button size="small" v-if="isWritePermission" @click="modal.addRoleModal = true"> <Icon type="md-add"/> Add</Button></p class="_title0">

			<div class="_overflow _table_div">
					<table class="table table-striped table-hover">
						<thead class="bg-primary">
							<tr>
								<th>Sl. No</th>
								<th>Role Name</th>
								<th>Created at</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(role, i) in allUserRole" :key='i' v-if="allUserRole.length">
								<td>{{i+1}}</td>
								<td>{{role.roleName}}</td>
								<td>{{role.created_at}}</td>
								<td>
									 <Tooltip content="Edit Tag" placement="top-start" v-if="isUpdatePermission">
							            <Button type="primary" icon='ios-create-outline' size='small' @click="onEditRole(role)">
											Edit
										</Button>
							        </Tooltip>
									 <Tooltip content="Delete Tag" placement="top-start" v-if="isDeletePermission">
							            <Button type="error" icon='ios-trash-outline' @click='onDeleteModalOpen(role)' size='small'>
											Delete
										</Button>
							        </Tooltip>
								</td>
							</tr>
							<tr>
								<td v-if="allUserRole.length == 0" colspan="4">
									<h5>No Roles found</h5>
								</td>
							</tr>
						</tbody>					
					</table>
				</div>
		</div>

		<!-- Add New Role Modal -->
		<div class="mt-2">
			<Modal
		        v-model="modal.addRoleModal"
		        title="Add new Role">
		        <div>
		        	<Input v-model="data.roleName" placeholder="Enter Role Name..."></Input>
		        </div>
		        <template slot='footer'>
		        	<Button @click='roleAddModalCancel' size='small'>Cancel</Button>
		        	<Button @click='onUserRoleSave' size='small' :disabled='modal.isAdding' :loading='modal.isAdding'>{{modal.isAdding ? 'Adding...' : "Add Role"}}</Button>
		        </template>
		    </Modal>
		</div>

		<!-- Edit Role Modal -->
		<div class="mt-2">
			<Modal
		        v-model="modal.editRoleModel"
		        title="Add new Role">
		        <div>
		        	<Input v-model="editData.roleName" placeholder="Enter Role Name..."></Input>
		        </div>
		        <template slot='footer'>
		        	<Button @click='roleEditModalCancel' size='small'>Cancel</Button>
		        	<Button @click='onEditRoleSave' size='small' :disabled='modal.isAdding' :loading='modal.isAdding'>{{modal.isAdding ? 'Saving...' : "Save Role"}}</Button>			        
		        </template>
		    </Modal>
		</div>


	</div>
</template>


<script type="text/javascript">
	import DeleteModal from '../components/delete_modal.vue';
	import {mapGetters} from 'vuex';
	export default {
		name: "Add-New-role",
		data(){
			return {
				data: {
					roleName: '',
				},
				editData: {
					roleName: ''
				},
				modal: {
					addRoleModal: false,
					editRoleModel: false,
					isAdding: false,
				},
				allUserRole: []
			}
		},
		methods: {
			//Get all Role by call this functions.
			async getAllUserRole(){
				const res = await this.__callApi('get', '/app/get_new_role');
				if (res.status == 200) {
					this.allUserRole = res.data;
				}else{
					this.er("Error")
				}
			},
			async onUserRoleSave(){
				this.modal.isAdding = true;
				const res = await this.__callApi('post', '/app/add_new_role', this.data);
				if(res.status == 200 || res.status == 201) {
					this.sc("Role added Successfully");
					this.getAllUserRole();
					this.modal.addRoleModal = false;
					this.modal.isAdding = false;
					this.data.roleName = '';
				}else if(res.status == 422){
					var err = res.data.errors;
					for (var i in err) {
						this.er(`User edit failed "<b>${res.data.errors[i]}</b>"`);
					}
					this.modal.isAdding = false;
				}else{
					this.swr()
					this.modal.isAdding = false;
				}
			},
			roleAddModalCancel(){
				this.modal.addRoleModal = false;
				this.data.roleName = '';
			},

			//Role edit start
			onEditRole(role){
				const obj = {
					id: role.id,
					roleName: role.roleName,
				}
				this.modal.editRoleModel = true;
				this.editData = obj;
			},
			//edit save 
			async onEditRoleSave(){
				this.modal.isAdding = true;
				const res = await this.__callApi('post', '/app/edit_user_role', this.editData);
				if(res.status == 200) {
					this.sc("Role Saved Successfully");
					this.modal.editRoleModel = false;
					this.modal.isAdding = false;
					this.editData.roleName = '';
				}
			},
			roleEditModalCancel(){
				this.modal.editRoleModel = false;
				this.editData.roleName = '';
			}
		},
		created(){
			this.getAllUserRole();
		}
	}
</script>