<template>
    <div class="cinema_body">   
        <ul>
            <li>
                <div>
                    <span class="da">大地影院（澳东世纪店）</span>
                    <span class="q"> <span class="price">22.9</span> 元起</span>
                </div>
                <div class="address">
                    <span class="left">金州区大连经济技术开发区澳东世纪3层</span> 
                    <span class="right">1763.5km</span>
                    <div class="clear"></div>
                </div>
                <div class="card">
                    <span>小吃</span> 
                    <span>折扣卡</span>
                </div>
            </li>
            <li>
                <div>
                    <span class="da">大地影院（澳东世纪店）</span>
                    <span class="q"> <span class="price">22.9</span> 元起</span>
                </div>
                <div class="address">
                    <span class="left">金州区大连经济技术开发区澳东世纪3层</span> 
                    <span class="right">1763.5km</span>
                    <div class="clear"></div>
                </div>
                <div class="card">
                    <span>小吃</span> 
                    <span>折扣卡</span>
                </div>
            </li>
            <li>
                <div>
                    <span class="da">大地影院（澳东世纪店）</span>
                    <span class="q"> <span class="price">22.9</span> 元起</span>
                </div>
                <div class="address">
                    <span class="left">金州区大连经济技术开发区澳东世纪3层</span> 
                    <span class="right">1763.5km</span>
                    <div class="clear"></div>
                </div>
                <div class="card">
                    <span>小吃</span> 
                    <span>折扣卡</span>
                </div>
            </li>
            <li>
                <div>
                    <span class="da">大地影院（澳东世纪店）</span>
                    <span class="q"> <span class="price">22.9</span> 元起</span>
                </div>
                <div class="address">
                    <span class="left">金州区大连经济技术开发区澳东世纪3层</span> 
                    <span class="right">1763.5km</span>
                    <div class="clear"></div>
                </div>
                <div class="card">
                    <span>小吃</span> 
                    <span>折扣卡</span>
                </div>
            </li>
            
        </ul>

    </div>
</template>

<script>
export default {
    name:'CiList'
}
</script>

<style scoped >
    .cinema_body ul{
        margin:0 20px;
        margin-top: 5px;
    }
    .cinema_body ul li{
        list-style: none;
        margin-top: 10px;
        border-bottom: 2px solid whitesmoke;
    }
    .cinema_body ul li div{
        margin-bottom: 10px;
        height: 20px;
        line-height: 20px;
    }
    .da{
        font-weight: bold;
        font-size: 30rpx;
    }
    .q{
        font-size: 14px;
        color:red;
    }
    .price{
        font-size: 18px;
    }
    .address{
        font-size: 14px;
        align-items: center;
        color: rgb(128, 118, 118);
        
    }
    .clear{
        clear: both;
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
    .card{
        font-size: 15px;
        color: #ffc76f ;
    }
    .card span{
        border:1px solid hsl(37, 82%, 68%);
        margin-right: 10px;
        border-radius: 4px;
        padding-right:5px;
        padding-left:5px;
        font-weight: bold;

    }
</style>