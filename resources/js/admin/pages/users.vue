<template>
	<div class="content">
		<div class="container-fluid">
			<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
				<p class="_title0">All users <Button size="small" v-if="isWritePermission" @click='onUserAddModalOpen()'><Icon type="md-add"/> Add</Button></p>


				<div class="_overflow _table_div">
					<table class="table table-striped table-hover">
						<thead class="bg-primary">
							<tr>
								<th>Sl. No</th>
								<th>User Name</th>
								<th>User Email</th>
								<th>User Type</th>
								<th>Created At</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(user, i) in allUsers" :key='i' v-if="allUsers.length">
								<td>{{i+1}}</td>
								<td>{{user.fullName}}</td>
								<td>{{user.email}}</td>
								<td>{{user.userType}}</td>
								<td>{{user.created_at}}</td>
								<td>
									<Tooltip content="Edit category" placement="top-start" v-if="isUpdatePermission">
							            <Button type="primary" icon='ios-create-outline' size='small' @click="onUserEditModalOpen(user)">
											Edit
										</Button>
							        </Tooltip>
									<Tooltip content="Delete category" placement="top-start" v-if="isDeletePermission">
							            <Button type="error" icon='ios-trash-outline' @click='onDeleteModalOpen(cat)' size='small'>
											Delete
										</Button>
							        </Tooltip>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			
			<!-- User Add Modal -->
			<div>
				<Modal
			        v-model="modal.addModalTriger"
			        title="Add new User"
			        :mask-closable="false">
			        <Row :gutter="10" >
			        	<Col>
				        	<Input type="text" v-model="data.fullName" placeholder="Full Name">
				                <Icon type="ios-person-outline" slot="prefix"></Icon>
				            </Input>
				        </Col>
			        	<Col>
				        	<Input type="email" v-model="data.email" placeholder="Email">
				                <Icon type="ios-mail-outline" slot="prefix"/>
				            </Input>
				        </Col>
			        	<Col>
				        	<Input v-model="data.password" type="password" password placeholder="Password">
				                <Icon type="md-key" slot="prefix"/>
				            </Input>
				        </Col>
			        	<Col>
				        	<Select v-model="data.role_id" placeholder="Select a role" style="width:233px;">
						        <Option v-for="(role, i) in roles" :key='i' :value="role.id" v-if='roles.length'>{{role.roleName}}</Option>
						    </Select>
				        </Col>
			        </Row>
			        <template slot='footer'>
			        	<Button size='small' @click='onUserAddModalCancle()'>Cancel</Button>
			        	<Button  size='small' type="info" @click='onUserAddSave()' :disabled='helpers.isAdding' :loading='helpers.isAdding'>{{helpers.isAdding ? 'Adding...' : "Add User"}}</Button>
			        </template>
			    </Modal>
			</div>

			<!-- User Edit Modal -->
			<div>
				<Modal
			        v-model="modal.editModalTriger"
			        title="Edit User"
			        :mask-closable="false">
			        <Row :gutter="10" >
			        	<Col>
				        	<Input type="text" v-model="userEditData.fullName" placeholder="Full Name">
				                <Icon type="ios-person-outline" slot="prefix"></Icon>
				            </Input>
				        </Col>
			        	<Col>
				        	<Input type="email" v-model="userEditData.email" placeholder="Email Address">
				                <Icon type="ios-mail-outline" slot="prefix"/>
				            </Input>
				        </Col>
			        	<Col>
				        	<Input v-model="userEditData.password" type="password" password placeholder="Password">
				                <Icon type="md-key" slot="prefix"/>
				            </Input>
				        </Col>
			        	<Col>
				        	<Select v-model="userEditData.role_id" placeholder="Select a role" style="width:233px;">
						        <Option v-for="(role, i) in roles" :key='i' :value="role.id" v-if='roles.length'>{{role.roleName}}</Option>
						    </Select>
				        </Col>
			        </Row>
			        <template slot='footer'>
			        	<Button size='small' @click='onUserEditModalCancle()'>Cancel</Button>
			        	<Button type="info" size='small' @click='onUserEditSave()' :disabled='helpers.isAdding' :loading='helpers.isAdding'>{{helpers.isAdding ? 'Saving...' : "Save User"}}</Button>
			        </template>
			    </Modal>
			</div>

		</div>
	</div>
</template>


<script type="text/javascript">
	export default {
		name: "Users",
		data(){
			return {
				data: {
					fullName: '',
					email: '',
					password: '',
					role_id: '',
				},
				userEditData: {
					id: null,
					fullName: '',
					email: '',
					password: '',
					role_id: '',
				},
				allUsers: [],
				roles: [],
				modal: {
					addModalTriger: false,
					editModalTriger: false,
				},
				helpers: {
					isAdding: false,
				},
			}
		},
		methods: {
			async getAllUser(){
				const [res, getRoleRes] = await Promise.all([
					await this.__callApi('get', '/app/get_users'),
					await this.__callApi('get', '/app/get_new_role')
				]);
				
				if(res.status == 200){
					this.allUsers = res.data;
					this.roles = getRoleRes.data;
				}else{
					this.swr();
				}

			},


			onUserAddModalOpen(){
				this.modal.addModalTriger = true;
			},
			async onUserAddSave(){
				this.helpers.isAdding = true;
				const res = await this.__callApi('post', '/app/add_user', this.data);
				if (res.status == 200 || res.status == 201) {
					this.sc('User added Successfully');
					this.getAllUser();
					this.helpers.isAdding = true;
					this.modal.addModalTriger = false
					this.data = {
						fullName: '',
						email: '',
						password: '',
						role_id: '',
					}
				}else if(res.status == 422){
					var err = res.data.errors;
					for (var i in err) {
						this.er(`User adding failed "<b>${res.data.errors[i]}</b>"`);
					}
				}else{
					this.er("User not added")
				}
				this.helpers.isAdding = false;
			},
			onUserAddModalCancle(){
				this.modal.addModalTriger = false;
				this.data = {
					fullName: '',
					email: '',
					password: '',
					role_id: null,
				}
			},

			// User edit start //

			onUserEditModalOpen(user){
				const data = {
					id:  user.id,
					fullName: user.fullName,
					email: user.email,
					password: user.password,
					role_id: user.role_id,
				}
				this.modal.editModalTriger = true;
				this.userEditData = data;
			},
			onUserEditModalCancle(){
				this.modal.editModalTriger = false;
				this.userEditData = {
					id: null,
					fullName: '',
					email: '',
					password: '',
					role_id: null,
				}
			},
			async onUserEditSave(){
				this.helpers.isAdding = true;
				const res = await this.__callApi('post', '/app/edit_user', this.userEditData);
				if(res.status == 200 || res.status == 201){
					this.helpers.isAdding = false;
					this.modal.editModalTriger = false;
					this.getAllUser()
					this.sc("User Edited Successfully");
				}else if(res.status == 422){
					var err = res.data.errors;
					for (var i in err) {
						this.er(`User edit failed "<b>${res.data.errors[i]}</b>"`);
					}
				}else{
					this.er("User not Edited")
				}
				this.helpers.isAdding = false;
			}
		},
		created(){
			this.getAllUser();
		}
	}
</script>

<style type="text/css">
	.ivu-row .ivu-col:not(:last-child){
		margin-bottom: 10px;
	}
</style>