<template>
	<div :class="[$store.state.auth.user ? 'content' : '']">
		<div class="container">
			<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
				<h2>Blogs</h2>
				<div class="_input_field">
					<Input type="text" v-model="data.title" placeholder="Post Title" />
				</div>

				<div class=" _overflow _table_div blog_editor">
					<editor
						ref="editor"
                        autofocus
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
					        	:loading="helpers.isLoading"
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



<script type="text/javascript">
	import Header from 'vue-editor-js'
	export default {
		name: 'Blog',
		data(){
			return {
				data: {
					title : '',
					post : '',
					jsonData: null,
					post_excerpt : '',
					metaDescription : '',
					categorys_id : [],
					tag_id : [],
				},
				config: {
					image: {
				        // Like in https://github.com/editor-js/image#config-params
			          	endpoints: {
				            byFile: 'http://localhost:8090/image',
				            byUrl: 'http://localhost:8090/image-by-url',
				        },
			          field: 'image',
			          types: 'image/*',
		        	},
		        },
		        initData: null,
		        categorys: null,
		        tags: null,
		        articleHTML: '',
		        helpers: {
		        	isLoading: true,
		        }
			}
		},
		methods: {
			async getAllTags(){
				const [cats, tags] = await Promise.all([
					this.__callApi('get', 'app/get_cats'),
					this.__callApi('get', 'app/get_tags'),
				])
				if(cats.status==200 || tags.status == 200){
					this.categorys = cats.data
					this.tags = tags.data
					this.helpers.isLoading = false;
				}else{
					this.swr()
				}
			},
			async onSave(response){
				var data = response;
				this.outputHtml(data.blocks);
				this.data.post = this.articleHTML;
				this.data.jsonData = JSON.stringify(data);

				const savePost = await this.__callApi('post', 'app/saveblog', this.data);
				if(savePost.status == 201 || savePost.status == 200){
					this.in(`Post saved Successfully`);
					this.data = {
						title : '',
						post : '',
						jsonData: null,
						post_excerpt : '',
						metaDescription : '',
						categorys_id : [],
						tag_id : [],
					}
					this.$router.push('/blogs')
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
		
		created(){
			this.getAllTags();
		}

	}
</script>

<style>
	.blog_editor {
    	width: 770px;
    	margin-left: 114px;
		padding: 4px 7px;
		font-size: 14px;
		border: 1px solid #dcdee2;
		border-radius: 4px;
		color: #515a6e;
		background-color: #fff;
		background-image: none;
		z-index:  -1;
	}
	.blog_editor:hover {
		border: 1px solid #57a3f3;
	}
	._input_field{
		margin: 20px 0 20px 114px;
    	width: 770px;
	}
</style>