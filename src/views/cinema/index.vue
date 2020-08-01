<template>
   
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
            <div id="span"></div>
            <CiList></CiList>
            <tabBar></tabBar>
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
        width: 100%;
        position: fixed;
        border-bottom: 2px solid  whitesmoke ;
        height: 40px;
        line-height: 40px;
        text-align: center;
        display: flex;
        align-content: center;
        justify-content: space-around;
        background: white;
    }
    #content div{
        flex: 1;
    }
    #span{
        height: 42px;
    }
</style>