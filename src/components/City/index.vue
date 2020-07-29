<template>
    
        <div class="city_body" >
				<div class="city_list" >
					<div class="city_hot">
						<h2>热门城市</h2>
						<ul class="clearfix" >
							<li  v-for="data in origin" :key="data.index">
								{{data.name}}
							</li>
							
						</ul>
					</div>
					<div class="city_sort" ref="city_sort">
						<div v-for="data in citylist" :key="data.index">
							<h2>{{data.index}}</h2>
							<ul v-for="jink in data.list" :key="jink.cityId">
								<li>
									{{jink.name}}
								</li>
							</ul>
						</div>	
					</div>
				</div>
				<div class="city_index">
					<ul v-for="(data,index) in citylist" :key="data.index">
						<li @click="handleturn(index)">{{data.index}}</li>
					</ul>
				</div>
			</div>
		

</template>

<script>
import axios from 'axios'
export default {
	data(){
		return{
			citylist:[],
			origin:[],
			count:1
		}
	},
	
	
	methods:{
		filt(data){
			if(data.isHot==1){
				/* console.log(data.name) */
				return data.name
			}	
		},

		dealit(data){
			//遍历26个字母
			var letterArr=[]
			for(var i = 65;i < 91; i++){
				letterArr.push(String.fromCharCode(i))
			}
			/* console.log(letterArr) */

			//筛选数据
			var newList=[]
			for(var j=0;j<letterArr.length;j++){
				var arr=[]
				arr=data.filter(item=>item.pinyin.substring(0,1)===letterArr[j].toLowerCase())

				if(arr.length>0){
					newList.push({
						index:letterArr[j],
						list:arr
					})
				}
			}
			// 返回数据
			/* console.log(newList) */
			return newList
		},

		hot(data){
			var arr=[]
			for(var i=0;i<data.length;i++){
				if(data[i].isHot==1){
					arr.push(data[i])
				}
			}
			return arr
		},

		handleturn(data){
			//ref放在便签上，拿到的是原生节点
			var h2 =this.$refs.city_sort.getElementsByTagName('h2')
			//通过设置city_sort的父节点的滚动高度等于city——sort中对应节点的
			this.$refs.city_sort.parentNode.scrollTop=h2[data].offsetTop
		}




	},


	mounted(){

		axios({
			url:"https://m.maizuo.com/gateway?k=9989774",
			headers: {
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159551147410496900071431"}',
'X-Host': 'mall.film-ticket.city.list'
			}
		}).then(res=>{
			// this.citylist=res.data.data.cities
			this.origin=this.hot(res.data.data.cities)
			
			this.citylist= this.dealit(res.data.data.cities)
			/* console.log(this.citylist) */
		}).catch(err=>{
			console.log(err)
		})
	}

	

}
</script>

<style  scoped>
*{ margin : 0; padding : 0;}
ul,li{ list-style: none;}
img{ display: block;}
html,body{ height:100%;}
.clearfix:after{ content:""; display: block; clear:both;}



#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}

.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}

.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>