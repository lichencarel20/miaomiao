<template>
    <div class="search_body">
				<div class="search_input">
					<div class="search_input_wrapper">
						<i class="iconfont icon-sousuo"></i>
						<input type="text" v-model="message">
					</div>					
				</div>
				<div class="search_result">
					<h3>电影/电视剧/综艺</h3>
					<ul>
						<li v-for="data in datalist" :key="data.id">
							<div class="img"><img :src="delPic(data.img)"></div>
							<div class="info">
								<p><span>{{data.nm}}</span><span>{{data.sc}} </span></p>
								<p>{{data.enm}} </p>
								<p> {{data.cat}} </p>
								<p>{{data.rt}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		
</template>

<script>
/* import axios from 'axios' */
export default {
	name:"search",

	data(){
		return {
			message:'',
			datalist:'',
			timeOutLoading:0

		}
	},
	methods:{
		delPic(data){
			/* console.log(data) */
			return data.replace(/w.h/,"64.90")
		},
		/* cancelRequest(){
					if(typeof this.source ==='function'){
						this.source('终止请求')}} */
		},
		


	watch:{
		//监听message,开始发送请求搜索
		//函数防抖 method1;settimeinval  methods2: axios自带
		message(newVal){
				//axios 自带防抖
				/* var that =this
				this.cancelRequest()
				this.axios.get(`/ajax/search?kw=${newVal}&cityId=927&stype=-1`,{
					cancelToken: new this.axios.CancelToken(function executor(c) {
                    that.source = c
                })
				}).then(res=>{
					this.datalist=res.data.movies.list
				}).catch(err=>{
					console.log(err)
				}) */
				
				
				if(this.timeOutLoading!=0){
					clearTimeout(this.timeOutLoading)
				}
				
				/* window.clearTimeout() */
				this.timeOutLoading=setTimeout(()=>{
						this.axios.get(`/ajax/search?kw=${newVal}&cityId=927&stype=-1`)
							.then(res=>{
								this.datalist=res.data.movies.list
							}).catch(err=>{
								console.log(err)
							})
					},2000)
				
				
				
				

		}
	}
	
}
</script>

<style  scoped>
    #content .search_body{ flex:1; overflow:auto;}
.search_body .search_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
.search_body .search_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 20px;}
.search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
.search_body .search_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}

.search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}

.search_body .search_result li{ border-bottom:1px #c9c9c9 dashed; padding: 10px 15px; box-sizing:border-box; display: flex;}
.search_body .search_result .img{ width: 60px; float:left; }
.search_body .search_result .img img{ width: 100%; }
.search_body .search_result .info{ float:left; margin-left: 15px; flex:1;}
.search_body .search_result .info p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; color:#fc7103;}
</style>