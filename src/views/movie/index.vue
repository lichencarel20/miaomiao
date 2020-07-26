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
    /* #content{flex: 1;overflow: auto;margin-bottom: 50px;position: relative;display: flex;flex-direction: column;}
    #content .movie_menu{widows: 100%;height: 45px;border-bottom: 1px solid #e6e6e6;display: flex;justify-content: space-between;}
    .movie_menu .city_name{margin-left: 20px;height: 100%;line-height: 45px; font-size: 15px}
   
    .movie_menu .city_name.router-link-active{color: #ef4348;border-bottom: 2px #ef4348 solid;}

    .movie_menu .hot_swtich{display: flex;height: 100%;line-height: 45px;}
    .movie_menu .hot_item{font-size: 15px;color: #666;width: 80px;text-align: center;margin: 0 12px; font-weight: 700;}
    
    .movie_menu .hot_item.router-link-active{color: #ef4238;border-bottom: 2px #ef4238 solid;}

    .movie_menu .search_entry{margin-right: 20px;height: 100%;line-height:45px;display: block;}
  
    .movie_menu .search_entry.router-link-active{color: #ef4238;border:  2px #ef4238 solid;}
    .movie_menu .search_entry i{font-size: 24px;color:red;}
     */
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