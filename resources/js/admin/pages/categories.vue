<template>
   	<div class="content">
		<div class="container-fluid">
			<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
			<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
				<p class="_title0">Categories <Button size="small" @click="modal.catAddModal = true" v-if="this.isWritePermission"> <Icon type="md-add"/> Add</Button></p>
				<div class="_overflow _table_div">
					<table class="table table-striped table-hover">
						<thead class="bg-primary">
							<tr>
								<th>Sl. No</th>
								<th>Categories Icon</th>
								<th>Categories Name</th>
								<th>Created at</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(cat, i) in allCats" :key='i' v-if="allCats.length">
								<td>{{i+1}}</td>
								<td>
									<img :src="cat.iconImage ? cat.iconImage : 'https://via.placeholder.com/50x20'" class="tableImg">
								</td>
								<td>{{cat.categoryName}}</td>								
								<td>{{cat.created_at}}</td>
								<td>
									<Tooltip content="Edit category" placement="top-start" v-if="isUpdatePermission">
							            <Button type="primary"   icon='ios-create-outline' size='small' @click="showEditModal(cat,i)">
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
							<tr>
								<td v-if="allCats.length == 0" colspan="5">
									<h5>No Category found</h5>
								</td>
							</tr>
						</tbody>					
					</table>
				</div>
			</div>
			<!-- Cats Add Modal -->
			<div>
				<Modal
			        v-model="modal.catAddModal"
			        title="Add new Category"
			        :mask-closable="false">
			        <div>
			        	<Input v-model="data.categoryName" placeholder="Enter Category Name..."></Input>
			        	<div class="mt-2">
			        		<Upload
			        			ref='addCatUpload'
						        type="drag"
						        :headers="{'x-csrf-token' : helpers.token,'X-Requested-With': 'XMLHttpRequest'}"
						        :on-success="uploadSuccess"
						        :on-error="onUploadError"
						        :on-exceeded-size="uploadMaxSize"
						        :max-size="1024"
						        action="/app/cats/img_upload">
						        <div style="padding: 20px 0">
						            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
						            <p>Click or drag files here to upload (max-width 50px)</p>
						        </div>
						    </Upload>
			        	</div>
			        	<div v-if="data.iconImage.length">
			        		<div class="demo-upload-list">
						        <template>
						            <img :src="data.iconImage"/>
						            <div class="demo-upload-list-cover">
						                <Icon type="ios-trash-outline" @click='onUploadDelete()'></Icon>
						            </div>
						        </template>
						    </div>
			        	</div>
			        </div>
			        <template slot='footer'>
			        	<Button @click='onAddCatModalClose' size='small'>Cancel</Button>
			        	<Button @click='onCatAdd' size='small' :disabled='modal.isAdding' :loading='modal.isAdding'>{{modal.isAdding ? 'Adding...' : "Add Category"}}</Button>			        
			        </template>
			    </Modal>
			</div>


			<!-- Cat Edit modal -->
			<div>
				<Modal
			        v-model="modal.catEditModal"
			        title="Edit Category"
			        :mask-closable="false">
			        <div>
			        	<Input v-model="catEdit.categoryName" placeholder="Enter Category Name..."/>
			        </div>

			        <div class="mt-2" v-show="helpers.isIconImgNew || catEdit.iconImage == null">
				    	<Upload
				    		ref='editDataUpload'
					        type="drag"
					        :show-upload-list="false"
					        :headers="{'x-csrf-token' : helpers.token,'X-Requested-With': 'XMLHttpRequest'}"
					        :on-success="uploadSuccess"
					        :on-error="onUploadError"
					        :on-exceeded-size="uploadMaxSize"
					        :max-size="1024"
					        action="/app/cats/img_upload">
					        <div style="padding: 20px 0">
					            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
					            <p>Click or drag files here to upload (max-width 50px)</p>
					        </div>
					    </Upload>
				    </div>

			        <div v-if="helpers.isIconImgNew == false && catEdit.iconImage != null"  class="mt-2">
			        	<div class="demo-upload-list">
					        <template>
					            <img :src="catEdit.iconImage">
					            <div class="demo-upload-list-cover">
					                <Icon type="ios-trash-outline" @click='onUploadDelete(false)'></Icon>
					            </div>
					        </template>
					    </div>
			        </div>


			        <template slot='footer'>
			        	<Button @click='onEditModalCancle()' size='small'>Cancel</Button>
			        	<Button @click='onEditSave()' size='small' :disabled='modal.isAdding' :loading='modal.isAdding'>{{modal.isAdding ? 'Saving...' : "Save Category"}}</Button>			        
			        </template>
			    </Modal>
			</div>

			<!-- Tag delete confirm Modal -->
			<!-- <div>
				<Modal v-model="modal.deleteModal" width="360" :mask-closable="false">
			        <template #header>
			            <p style="color:#f60;text-align:center">
			                <Icon type="ios-information-circle"></Icon>
			                <span>Delete confirmation</span>
			            </p>
			        </template>
			        <div style="text-align:center">
			            <p>Are you sure You want to delete the "{{deleteModal.categoryName}}" Category?</p>
			            <div v-if="deleteModal.iconImage">
			            	<Checkbox v-model='helpers.deleteImageWithCat' border>Also Delete Image?</Checkbox>
			            </div>
			        </div>
			        <div class="mt-2">
					        
			        </div>
			        <template #footer>
			            <Button type="error" size="large" long icon="ios-information-circle" :loading="modal.isAdding" @click='onDeleteCat()'>Delete</Button>
			        </template>
			    </Modal>
			</div> -->


			<DeleteModal>
				<template #imageAttched>
					<div v-if="deleteCat.iconImage" class="text-center mt-2">
		            	<Checkbox v-model='helpers.deleteImageWithCat' @on-change='deleteImgWithCat()' border>Also Delete Image?</Checkbox>
		            </div>
				</template>
			</DeleteModal>
		</div>
	</div>
</template>

<script type="text/javascript">
	import DeleteModal from '../components/delete_modal.vue';
	import {mapGetters} from 'vuex';
	export default {
		name: 'Cagetories',
		data(){
			return{
				data: {
					categoryName: "",
					iconImage: '',
				},
				catEdit:{
					catId: '',
					categoryName: "",
					iconImage: '',
				},
				deleteCat: {
					iconImage: null
				},								
				modal: {
					catAddModal: false,
					catEditModal: false,
					isAdding: false,
				},
				helpers: {
					token: '',
					isIconImgNew: false,
					editStrated: false,
					deleteImageWithCat: false,
				},
				allCats: [],
			}
		},
		methods: {
			//Call the function for get the tags from db
			async showCats(){
				const res = await this.__callApi('get', '/app/get_cats');
				if(res.status == 200){
					this.allCats = res.data;
				}else{
					this.swr();
				}
			},

			// Upload image
			uploadSuccess(file, res) {
				this.sc("File upload successfully");
				this.helpers.isIconImgNew = false;
				this.data.iconImage = '/uploads/'+file;

				if(this.helpers.editStrated){
					this.catEdit.iconImage = '/uploads/'+file;
				}
			},
			onUploadError(file, res){
				this.er(res.errors.file[0]);
			},
			uploadMaxSize(file, res){
				this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File is too large, File should be less or equal than 1M.'
                });
			},
			async onUploadDelete(isAdd = true){
				let fileName;
				if(!isAdd){
					this.helpers.isIconImgNew = true;
					this.$refs.editDataUpload.clearFiles();
					var filePath = this.catEdit.iconImage;
					fileName = filePath.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
					console.log(fileName);
				}else{
					fileName = this.data.iconImage;
					this.$refs.upload.clearFiles();
					console.log("From add modal")
				}

				const res = await this.__callApi('post', '/app/delete_upload_file', {iconImage: fileName});
				if(res.status == 200){
					this.$Message.info('Deleted Successfuly');
					if(!isAdd){
						this.catEdit.iconImage = '';
					}else{	
						this.data.iconImage = '';
					}
				}else{
					this.er("File not deleted");
				}
			},
			//add categorys
            async onCatAdd() {
            	if (this.data.categoryName.trim() == '') return this.er("Category name is Required");
            	this.modal.isAdding = true;
                const res = await this.__callApi('post', '/app/create_cat', this.data);
                if(res.status == 200 || res.status == 201){
                	this.modal.isAdding = false;
                	this.modal.catAddModal = false;
                	this.data = {
                		categoryName: "",
                		iconImage: '',
                	};
                	this.sc("Category added Successfuly");
                	this.$refs.addCatUpload.clearFiles();
                	this.showCats()
                }else{
                	if(res.status == 422){
                		this.wr("Category name is Required");
                	}else{
						this.swr();
                	}
                	
                }
            },
            //close add cat modal
            onAddCatModalClose(){
            	this.modal.catAddModal = false;
            	this.$refs.addCatUpload.clearFiles();
            	this.data.iconImage = '';
            	this.data.categoryName = '';
            },

            //Cat edit start
            showEditModal(cat, i){
            	this.modal.catEditModal = true;
            	this.helpers.editStrated = true;
            	this.catEdit = {
            		catId: cat.id,
            		categoryName: cat.categoryName,
            		iconImage: cat.iconImage
            	};
            },
            async onEditSave(){
            	if (this.catEdit.categoryName.trim() == '') return this.er("Category name is Required");
            	this.modal.isAdding = true;
            	const res = await this.__callApi('post', '/app/cat_edit', this.catEdit);
            	if(res.status == 200){
            		this.sc('Data Saved');
            		this.modal.isAdding = false;
            		this.helpers.editStrated = false;
            		this.helpers.isIconImgNew = false;
            		this.modal.catEditModal = false;
                	this.showCats()
            	}else{
            		this.modal.isAdding = false;
            		if(res.status == 422){
                		this.wr("Tag name is Required");
                		console.log(res);
                	}else{
						this.swr();
	                	console.log(res);
                	}
            	}
            },
            async changeCatImg(){
            	const res = await this.__callApi('post', '/app/delete_upload_file', {iconImage: this.catEdit.iconImage});
				if(res.status == 200){
					this.catEdit.iconImage = '';
					this.$Message.info('Deleted Successfuly');
					console.log(res)
				}
            },
            onEditModalCancle(){
            	this.modal.catEditModal = false;
            	this.helpers.editStrated = false;
            	this.helpers.isIconImgNew = false;
            },

            // Delete category
            onDeleteModalOpen(cat){
            	const data = {
            		name: 'Cagetories',
			      	triger: true,
			      	url: '/app/delete_cat',
			      	delete_attachment: false,
			      	data: cat,
			    }
			    this.$store.commit('setDeleteModalData', data);
			    
			    //For deleting attachments... (optional)
			    if (cat.iconImage) {
			    	this.deleteCat.iconImage = cat.iconImage;
			    	this.$store.commit('setDeleteModalData', data);
			    }
            },
            deleteImgWithCat(){
            	this.$store.commit('setAttachmentDelete', this.helpers.deleteImageWithCat);
            	console.log("deleted" + this.helpers.deleteImageWithCat)
            },
      
            // Start vuex using
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
					this.showCats();
					this.$store.commit('updateStatusChange', {dataUpdated: false});
				}
			}
		},
		async created(){
			this.showCats();
			this.helpers.token = window.Laravel.csrf_token;
		}
	}
</script>


<style scoped> 

	.tableImg{
		width: 25px;
	}
    .demo-upload-list{
        display: inline-block;
        width: 160px;
        height: 160px;
        object-fit: conver;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
	    display: flex;
	    align-items: center;
	    justify-content: center;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>