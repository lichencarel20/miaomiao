<template>
    <div>
        <div>
            <Header title="喵喵影院"></Header>

            <div id="content">
                
                    <div class="city_switch">
                        全城<i class="icon iconfont icon-drop-down"></i>
                    </div>
        
                <div class="brand_switch">
                        品牌<i class="icon iconfont icon-drop-down"></i>
                </div>
                <div class="feature_switch">
                        特色<i class="icon iconfont icon-drop-down"></i>
                </div>
            </div>


            <CiList></CiList>
            <tabBar></tabBar>
        </div>
        
        
    </div>
</template>

<script>
import Header from '@/components/Header'
import tabBar from '@/components/tabBar'
import CiList from "@/components/CiList"
export default {
    components:{
        Header,
        tabBar,
        CiList,
    }
}
</script>

<style  scoped>
    #content{
        border-bottom: 2px solid  whitesmoke ;
        height: 40px;
        line-height: 40px;
        text-align: center;
        display: flex;
        align-content: center;
        justify-content: space-around;
    }
    #content div{
        width: 100px;
    }
    /* #content div{
        width: 70px;
    }
    .city_switch{
        float: left;
    }
    .feature_switch{
        float:left;
    }
    .brand_switch{
        float: left;
    }
    .clear{
        clear: both;
    } */
</style>