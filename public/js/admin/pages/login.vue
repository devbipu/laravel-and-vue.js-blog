<template>
	<div :class="[$store.state.auth.user ? 'content' : '']">
		<div class="container">
			<div class="_loginCont">
				<div style="padding: 20px">
			        <Card :bordered="false" style='width: 400px; margin: auto;'>
			            <template #title><h3>Login</h3></template>
			            <div>
			            	<div>
			            		<Input v-model="data.email" type='email' placeholder="Email Address" prefix="ios-mail-outline" />
			            	</div>
			            	<div class="mt-4">
			            		<Input v-model="data.password" type="password" placeholder="Password" password prefix="md-key"/>
			            	</div>
			            	<div class="mt-4">
			            		<Button type="info" long @click="onLogin()" :loading="helpers.isLoading" :disabled="helpers.isLoading">{{helpers.isLoading ? "Logging in..." : "Login"}}</Button>
			            	</div>
			            </div>
			        </Card>
			    </div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: 'Login-Page',
		data(){
			return{
				data: {
					email: '',
					password: '',
				},
				helpers: {
					isLoggedIn: false,
					isLoading: false,
				}
			}
		},
		methods: {
			async onLogin(){
				this.helpers.isLoading = true;
				const res = await this.__callApi('post', '/app/admin_login', this.data);
				console.log(res);
				if(res.status == 200){
					window.location = '/';
					this.sc(res.data.msg);
				}else if(res.status == 401){
					this.er(res.data.msg);
				}else if (res.status == 422){
					var err = res.data.errors;
					for (var i in err) {
						this.er(`User edit failed "<b>${res.data.errors[i]}</b>"`);
					}
				}else{
					this.er(res.data.msg);
				}
				this.helpers.isLoading = false;
			}
		}
	}
</script>


<style scoped>
	._loginCont{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	.content ._loginCont{
		height: inherit;
	}
</style>