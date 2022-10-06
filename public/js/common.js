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
        }
	}
}