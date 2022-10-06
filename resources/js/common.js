
import {mapGetters} from 'vuex';
export default{
	data(){
		return {

		}
	},
	methods: {
		async __callApi(methods, urls, dataObj){
			try{
				return await axios({
					method: methods,
					url: urls,
					data: dataObj
				});
			} catch (e){
				return e.response
			}
		},
        //## Messages ##//
		in(desc, title = 'Hay!') {
            this.$Notice.info({
                title: title,
                desc: desc
            });
        },
        sc(desc, title ='Great!!') {
            this.$Notice.success({
               title: title,
               desc: desc
            });
        },
        wr(desc, title = 'Opps!') {
            this.$Notice.warning({
                title: title,
                desc: desc
            });
        },
        er(desc, title = 'Opps!!') {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        },
        swr(desc = 'Something went wrong', title = 'Opps!'){
        	this.$Notice.error({
        		title: title,
        		desc: desc
        	})
        },
        checkUserPermission(key){

            // console.log(this.$route);
            var isPermited = false;

            for(let p of this.userPermissions){
                if(this.$route.name.toLowerCase() == p.name.toLowerCase()){
                    if(p[key]){
                        isPermited = true;
                        break;
                    }
                }else{
                    //console.log("Not Match " + this.$route.name.toLowerCase() + "  " + p.name);
                }
            }
            return isPermited;
        }
	},
    computed: {
        ...mapGetters({
            'userPermissions': 'getUserPermissionsData',
        }),

        isReadPermission(){
            return this.checkUserPermission('read');
        },
        isWritePermission(){
            return this.checkUserPermission('write');
        },
        isUpdatePermission(){
            return this.checkUserPermission('update');
        },
        isDeletePermission(){
            return this.checkUserPermission('delete');
        },
    },
    // created(){
    //     this.isReadPermission
    // }
}