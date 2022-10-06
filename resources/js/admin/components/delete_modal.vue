<template>
	<div>
		<Modal v-model="getDeleteObj.triger" width="360" :mask-closable="false">
	        <template #header>
	            <p style="color:#f60;text-align:center">
	                <Icon type="ios-information-circle"></Icon>
	                <span>Delete confirmation</span>
	            </p>
	        </template>
	        <div style="text-align:center">
	            <p>Do you want to Delete this {{getDeleteObj.name}} </p>
	        </div>
	       	<slot name="imageAttched"></slot>
	        <template #footer>
	            <Button type="error" size="large" long icon="ios-information-circle" @click='onDeleteCat()' :disabled='helpers.isAdding' :loading="helpers.isAdding">{{helpers.isAdding ? 'Deleting...' : 'Delete'}}</Button>
	        </template>
	    </Modal>

	</div>
</template>



<script>
	import {mapGetters} from 'vuex';
	export default {
		name: 'Global-Delete-Confirm-Modal',
		data(){
			return{
				helpers: {
					isAdding: false,
				}
			}
		},
		methods: {
  			
            async onDeleteCat(){
            	this.helpers.isAdding = true;

            	if(this.getDeleteObj.delete_attachment){
            		//delete the name from db
	            	const dbDeleteRes = await this.__callApi('post', this.getDeleteObj.url, this.getDeleteObj.data);

	            	//delete image from file
            		var filePath = this.getDeleteObj.data.iconImage;
            		let fileName = filePath.split('/').slice(-1)[0].replace(/^\/|\/$/g, '');
        			const fileDeleteRes = await this.__callApi('post', '/app/delete_upload_file', {iconImage: fileName});

        			if(fileDeleteRes.status == 200 || dbDeleteRes.status == 200){
        				this.sc('Icon images deleted successfully');
        				this.helpers.isAdding = false;
        				this.$store.commit('setDataAfterSendRequest', {deleteModalClose: false});
	            		this.$store.commit('updateStatusChange', {dataUpdated: true});
        			}else{
        				this.wr('Image not deleted');
        				this.helpers.isAdding = false;
        				this.$store.commit('setDataAfterSendRequest', {deleteModalClose: true});
	            		this.$store.commit('updateStatusChange', {dataUpdated: false});
        			}
        			this.helpers.isAdding = false;
            	}else{
            		const res = await this.__callApi('post', this.getDeleteObj.url, this.getDeleteObj.data);
	            	if(res.status == 200){
	            		this.sc(this.getDeleteObj.name.trim() + " Deleted Successfully");
	            		this.helpers.isAdding = false;
	            		this.$store.commit('setDataAfterSendRequest', {deleteModalClose: false});
	            		this.$store.commit('updateStatusChange', {dataUpdated: true});
	            	}else{
	            		this.$store.commit('setDataAfterSendRequest', {deleteModalClose: true});
	            		this.$store.commit('updateStatusChange', {dataUpdated: false});
	            		this.helpers.isAdding = false;
	            		this.er(this.getDeleteObj.name + " Not Deleted");
	            	}
            	}
            },

		},
		computed: {
			...mapGetters(['getDeleteObj'])
		},
		// created(){
		// 	console.log(this.getDeleteObj);
		// }
	}
</script>