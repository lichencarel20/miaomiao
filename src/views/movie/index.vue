<template>
    <div>
        <div>
            <Header></Header>
            <div id="content">
                    <div class="movie_menu">
                        <router-link to='/movie/city' tag='div' class="city_name">
                            <span>大连</span><i class="icon iconfont icon-drop-down"></i>
                        </router-link>
                        
                        <router-link to='/movie/nowPlaying' tag='div' class="hot_item active">正在热映</router-link>

                        <router-link tag='div' to='/movie/comingSoon' class="hot_item">即将上映</router-link>
                        
                        <router-link tag='div' to="/movie/search" class="search_entry" >
                            <i class="icon iconfont icon-search"></i>
                        </router-link>
                    </div>
                    <keep-alive>
                        <router-view/>
                    </keep-alive>
            </div>
           
            <tabBar></tabBar>
        </div>
        
    </div>
</template>

<script>
import Header from '@/components/Header'
import tabBar from '@/components/tabBar'
export default {
    name:'movie',
    components:{
        Header,
        tabBar
    }
}
</script>

<style  scoped>
   
     .movie_menu{
         display: flex;flex:1;justify-content: space-between;
         line-height: 40px;
     }
    .city_name{width: 70px; text-align: center; }
    .city_name.router-link-active{color: #ef4238;border-bottom: 2px #ef4238 solid; font-weight: 700;}

    .hot_item{width: 70px; text-align: center; }
    .hot_item.router-link-active{color: #ef4238;border-bottom: 2px #ef4238 solid;font-weight: 700;}
    .search_entry{width: 70px;text-align: center;}
    .search_entry.router-link-active{color: #ef4238;border-bottom: 2px #ef4238 solid;font-weight: 700;}
</style>