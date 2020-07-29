<template>
    <div class="cinema_body">   
       <ul>
		<li v-for="data in cinemaList" :key="data.cinemaId">
			<div>
				<span>{{data.name}} </span>
				<span class="q"><span class="price">{{data.lowPrice/100}}</span> 元起</span>
			</div>
			<div class="address">
				<span>{{data.address}} </span>
				<span>未知</span>
			</div>
			<div class="card">
                <span class="or">电话：{{data.phone}} </span>
                <span v-if="data.businessTime" :class="data.businessTime|classCard">营业时间：{{data.businessTime}} </span>
            </div>
		</li>
       </ul>
    </div>
</template>

<script>
export default {
    name:'CiList',
    data(){
        return {
            cinemaList:[]
        }
    },
    filters:{
        classCard(value){
            if(value){
                return "bl"
            }
        }
    },
    

    mounted(){
        this.axios({
            url:'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4437061',
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"159551147410496900071431","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            console.log(res.data.data.cinemas)
            this.cinemaList=res.data.data.cinemas
        }).catch(err=>{
            console.log(err)
        })
    }
}
</script>

<style scoped >
    /* #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;} */
    #content .cinema_body{ display: flex; flex:1; overflow:auto;}
    .cinema_body ul{ padding:20px;}
    .cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px; list-style: none;}
    .cinema_body div{ margin-bottom: 10px;}
    .cinema_body .q{ font-size: 11px; color:#f03d37;}
    .cinema_body .price{ font-size: 18px;}
    .cinema_body .address{ font-size: 13px; color:#666;}
    .cinema_body .address span:nth-of-type(2){ float:right; }
    /* .cinema_body .card{ display: flex;} */
    .cinema_body .card span{ padding: 0 3px; height: 16px; line-height: 16px; border-radius: 6px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px; display: inline-block;margin-bottom:10px ; }
    .cinema_body .card span.or{ color: #f90; border: 1px solid #f90;}
    .cinema_body .card span.bl{ color: #589daf; border: 1px solid #589daf;}
</style>