<template>
   	<div class="content">
		<div class="container-fluid">
			<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
			<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
				<p class="_title0">Tags <Button size="small" @click="modal.tagModal = true"> <Icon type="md-add"/> Add</Button></p>
				<div class="_overflow _table_div">
					<table class="table table-striped table-hover">
						<thead class="bg-primary">
							<tr>
								<th>Sl. No</th>
								<th>Tag Name</th>
								<th>Created at</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(tag, i) in allTags" :key='i' v-if="allTags.length">
								<td>{{i+1}}</td>
								<td>{{tag.tagName}}</td>
								<td>{{tag.created_at}}</td>
								<td>
									 <Tooltip content="Edit Tag" placement="top-start">
							            <Button type="primary" icon='ios-create-outline' size='small' @click="onEditTag(tag,i)">
											Edit
										</Button>
							        </Tooltip>
									 <Tooltip content="Delete Tag" placement="top-start">
							            <Button type="error" icon='ios-trash-outline' @click='onDeleteModalOpen(tag)' size='small'>
											Delete
										</Button>
							        </Tooltip>
								</td>
							</tr>
							<tr>
								<td v-if="allTags.length == 0" colspan="4">
									<h5>No tag found</h5>
								</td>
							</tr>
						</tbody>					
					</table>
				</div>
			</div>
			<!-- Tag Add Modal -->
			<div class="mt-2">
				<Modal
			        v-model="modal.tagModal"
			        title="Add new Tag">
			        <div>
			        	<Input v-model="data.tagName" placeholder="Enter Tag Name..."></Input>
			        </div>
			        <template slot='footer'>
			        	<Button @click='tagAddmodalClose' size='small'>Cancel</Button>
			        	<Button @click='tagAddmodalOpen' size='small' :disabled='modal.isAdding' :loading='modal.isAdding'>{{modal.isAdding ? 'Adding...' : "Add Tag"}}</Button>			        
			        </template>
			    </Modal>
			</div>
			<!-- Tag Edit modal -->
			<div class="mt-2">
				<Modal
			        v-model="modal.eidtModal"
			        title="Edit Tag">
			        <div>
			        	<Input v-model="editTag.tagName" placeholder="Enter Tag Name..."></Input>
			        </div>
			        <template slot='footer'>
			        	<Button @click='modal.eidtModal = false' size='small'>Cancel</Button>
			        	<Button @click='onEditSave' size='small' :disabled='modal.isAdding' :loading='modal.isAdding'>{{modal.isAdding ? 'Saving...' : "Save edit"}}</Button>			        
			        </template>
			    </Modal>
			</div>

			<!-- Tag delete confirm Modal -->
			<!-- <div>
				<Modal v-model="modal.deleteConfirm" width="360">
			        <template #header>
			            <p style="color:#f60;text-align:center">
			                <Icon type="ios-information-circle"></Icon>
			                <span>Delete confirmation</span>
			            </p>
			        </template>
			        <div style="text-align:center">
			            <p>Are you sure You want to delete the "{{deleteingTag.tagName}}" tag?</p>
			        </div>
			        <template #footer>
			            <Button type="error" size="large" long icon="ios-information-circle" :loading="modal.isAdding" @click='deleteTag()'>Delete</Button>
			        </template>
			    </Modal>
			</div> -->
			<DeleteModal/>
		</div>
	</div>
</template>

<script type="text/javascript">
	import DeleteModal from '../components/delete_modal.vue';
	import {mapGetters} from 'vuex';
	export default {
		name: 'Tags',
		data(){
			return{
				data: {
					tagName: ""
				},
				editTag: {
				},
				deleteingTag: {},
				modal: {
					tagModal: false,
					isAdding: false,
					eidtModal: false,
					deleteConfirm: false
				},
				allTags: [],
			}
		},
		methods: {
			//Call the function for get the tags from db
			async showTags(){
				const res = await this.__callApi('get', '/app/get_tags');
				if(res.status == 200){
					this.allTags = res.data;
				}else{
					this.swr();
				}
			},


            async tagAddmodalOpen() {
            	if (this.data.tagName.trim() == '') return this.er("Tag name is Required");
            	this.modal.isAdding = true;
                const res = await this.__callApi('POST', '/app/create_tag', this.data);
                if(res.status == 200 || res.status == 201){
                	this.allTags.unshift(res.data);
                	this.modal.isAdding = false;
                	this.modal.tagModal = false
                	this.sc("Tag added Successfuly");
                	this.data.tagName = '';
                }else{
                	if(res.status == 422){
                		this.wr("Tag name is Required");
                		console.log(res);
                	}else{
						this.swr();
	                	console.log(res);
                	}
                	
                }
            },
            tagAddmodalClose () {
                this.modal.tagModal = false;
            },

            //edit tag
            async onEditSave () {
            	if (this.editTag.tagName.trim() == '') return this.er("Tag name is Required");
            	this.modal.isAdding = true;
                const res = await this.__callApi('POST', '/app/eidt_tag', this.editTag);
                if(res.status == 200){
                	this.modal.eidtModal = false
                	this.sc("Tag Edited Successfuly");
                	this.modal.isAdding = false;
                	this.showTags(); //fetch data way
                	// this.allTags[this.index].tagName = this.editTag.tagName; //push way
                }else{
                	if(res.status == 422){
                		this.wr("Tag name is Required");
                		console.log(res);
                	}else{
						this.swr();
	                	console.log(res);
                	}
                }
            },
            onEditTag(tag, i){
            	let obj = {
            		id: tag.id,
            		tagName: tag.tagName,
            	}
            	this.editTag = obj;
            	this.modal.eidtModal = true;
            },


            //Tag delete
            // async deleteTag(){
            // 	this.modal.isAdding = true;
            // 	const res = await this.__callApi('post', '/app/delete_tag', this.deleteingTag);
            // 	if (res.status == 200) {
            // 		this.modal.isAdding = false;
            // 		this.modal.deleteConfirm = false;
            // 		this.showTags();
            // 	}
            // },
            // onDelete(tag){
            // 	this.deleteingTag = tag;
            // 	this.modal.deleteConfirm = true;
            // }

            // Delete category
            onDeleteModalOpen(dataObj){
            	const data = {
            		name: 'Tags',
			      	triger: true,
			      	url: '/app/delete_tag',
			      	data: dataObj,
			    }
			    this.$store.commit('setDeleteModalData', data)
            },
        },
        computed: {
        	...mapGetters(['getUpdateStatus'])
        },
        components: {
        	DeleteModal,
        },
		watch: {
			getUpdateStatus(value){
				if(value){
					this.showTags();
					this.$store.commit('updateStatusChange', {dataUpdated: false});
				}
			}
		},
		async created(){
			this.showTags()
		}
	}
</script>