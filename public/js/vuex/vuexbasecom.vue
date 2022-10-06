<template>
	<div class="content">
		<div class="container-fluid">
			<h2>This is Base Copmonents </h2>
			<p>Global value vor Base Compo:: {{$store.state.count}}</p>
			<ComA/>
			<ComB/>
			<ComC/>
			<div>
				<Button type='info' @click='this.increment'>Increase value 1</Button>
				<Button type='info' @click='sendNameToStore()'>Send names</Button>
			</div>
			<div>
				<p>{{counters}}</p>
			</div>
			<DeleteModal/>
		</div>
	</div>
</template>


<script>
	import ComA from './comA.vue'
	import ComB from './comB.vue'
	import ComC from './comC.vue'
	import DeleteModal from '../admin/components/delete_modal.vue';
	import {mapGetters} from 'vuex';

	export default {
		name: 'Vuex',
		data(){
			return{
				
			}
		},
		methods:{
			increment(){
				// this.$store.commit("increments", 1);
				this.$store.dispatch('changeCounter', 1)
			},

		},
		computed: {

			//Get data from global store
			...mapGetters({
				'counters'		: 'getCounters',
				'gStoreNames'	: 'getNames',
			}),
			
		},
		watch: {
		    counters(value){
		      console.log('Changing', value)
		    }
	  	},
	  	components: {
			ComC,
			ComB,
			ComA,
			DeleteModal
		},
	}
</script>



<style scoped>
	.content .container-fluid[data-v-b52e4382] {
	    background: #fff;
	    padding: 20px;
	    box-shadow: 0px 0px 20px rgb(47 91 231 / 10%);
	}
	ComA{
		margin-top: 30px;
	}
</style>