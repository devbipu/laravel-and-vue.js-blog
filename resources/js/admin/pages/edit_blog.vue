<template>
	<div class="content">
		<div class="container-fluid">
			<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
				<p class="_title0">Edit Blog</p>

				<div class="_input_field">
					<Input type="text" v-model="data.title" placeholder="Post Title" />
				</div>

				<div class=" _overflow _table_div blog_editor">
					<editor v-if='initData'
					 	ref="editor"
                        holder-id="codex-editor"
                        save-button-id="save-button"
                        :init-data="initData"
                        @save="onSave"
						:config="config"
					/>
				</div>

				<div class="_input_field">
					<Input  type="textarea" v-model="data.post_excerpt" :rows="4" placeholder="Post excerpt " />
				</div>
				<div class="_input_field">
					<Input  type="textarea" v-model="data.metaDescription" :rows="4" placeholder="Meta description" />
				</div>
				<div class="_input_field">
					<Row :gutter="16">
				        <Col span="12">
				        	<Select 
					        	:filterable="true" 
					        	filter-by-label 
					        	:max-tag-count="4" 
					        	multiple 
					        	placeholder="Select tag" 
					        	v-model="data.tag_id"
					        >
						        <Option v-for="(tag, i) in tags" :key='i' v-if="tags.length" :value="tag.id">{{ tag.tagName }}</Option>
						    </Select>
				    	</Col>
				        <Col span="12">
				        	<Select 
				        		:filterable="true"
				        		multiple
				        		:max-tag-count="4" 
				        		placeholder="Select categorys" 
				        		v-model="data.categorys_id"
				        	>
						        <Option v-for="(category, i) in categorys" :key='i' v-if="categorys.length" :value="category.id">{{ category.categoryName }}</Option>
						    </Select>
				    	</Col>
				    </Row>
				</div>
				<div class="_input_field">
					<Button type="info" @click='save()'>Save Post</Button>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default{
		name: 'Blog-edit',
		data(){
			return{
				config: {},
	            initData: {},
	            data: {
	            	id: '',
					title : '',
					post : '',
					post_excerpt : '',
					metaDescription : '',
					categorys_id : [],
					tag_id : [],
					jsonData: null
				},
				articleHTML: '',
				categorys : [],
				tags : [],
				isCreating: false,
			}
		},
		methods: {
			async onSave(response){
				var data = response;
				this.outputHtml(data.blocks);
				this.data.post = this.articleHTML;
				this.data.jsonData = JSON.stringify(data);

				const savePost = await this.__callApi('post', '/app/save_edit_blog', this.data);
				if(savePost.status == 201 || savePost.status == 200){
					this.sc(`Post saved Successfully`);
					this.$router.push('/blogs')
					this.data = {
						title : '',
						post : '',
						jsonData: null,
						post_excerpt : '',
						metaDescription : '',
						categorys_id : [],
						tag_id : [],
					}
				}else{
					this.er("Post save faild")
					console.log(savePost);
				}
			},
			async save(){
				this.$refs.editor.save();
			},
			outputHtml(articleObj){
				// console.log(articleObj);
				articleObj.map(obj => {
					// console.log(obj);
					switch(obj.type){
					case 'paragraph':
						this.articleHTML += this.makeParagraph(obj);
						console.log("from paragraph" + obj);
						break;
					case 'image':
						this.articleHTML += this.makeImage(obj);
						break;
					case 'header':
						this.articleHTML += this.makeHeader(obj);
						console.log("from Header" + obj);
						break;
					case 'raw':
						this.articleHTML += `<div class="ce-block">
						<div class="ce-block__content">
						<div class="ce-code">
							<code>${obj.data.html}</code>
						</div>
						</div>
					</div>\n`;
						break;
					case 'code':
						this.articleHTML += this.makeCode(obj);
						break;
					case 'list':
						this.articleHTML += this.makeList(obj)
						break;
					case "quote":
						this.articleHTML += this.makeQuote(obj)
						break;
					case "warning":
						this.articleHTML += this.makeWarning(obj)
						break;
					case "checklist":
						this.articleHTML += this.makeChecklist(obj)
						break;
					case "embed":
						this.articleHTML += this.makeEmbed(obj)
						break;
					case 'delimeter':
						this.articleHTML += this.makeDelimeter(obj);
						break;
					default:
						return '';
					}
				})	
			}
		},
		async created(){
			const [blog, cats, tags] = await Promise.all([
				this.__callApi('get', `/app/get_blog_by_id/${this.$route.params.id}`),
				this.__callApi('get', '/app/get_cats'),
				this.__callApi('get', '/app/get_tags'),
			]);

			

			if (blog.status == 200) {
				this.tags = tags.data
				this.categorys = cats.data
	            for(let t of blog.data.tags){
	                this.data.tag_id.push(t.id)
	            }
	            for(let c of blog.data.cats){
	                this.data.categorys_id.push(c.id)
	            }

	            this.data.id = blog.data.id
	            this.data.title = blog.data.title
	            this.data.jsonData = blog.data.jsonData
	            this.data.metaDescription = blog.data.metaDescription
	            this.data.post_excerpt = blog.data.post_excerpt
				this.initData = JSON.parse(blog.data.jsonData);
			}
		},
	}
</script>