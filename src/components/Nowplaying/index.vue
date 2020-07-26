<template>
    <div class="movie_body">
        <ul>
            <li>
                <div class="pic_show">
                    <img src="/" alt="">
                </div>
                <div class="info_list">
                    <h2>无名之辈1</h2>
                    <p>观众平<span class="grade">9.2</span></p>
                    <p>主演：陈建斌，任素汐，潘斌龙</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show">
                    <img src="/" alt="">
                </div>
                <div class="info_list">
                    <h2>无名之辈2</h2>
                    <p>观众平<span class="grade">9.2</span></p>
                    <p>主演：陈建斌，任素汐，潘斌龙</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show">
                    <img src="/" alt="">
                </div>
                <div class="info_list">
                    <h2>无名之辈3</h2>
                    <p>观众平<span class="grade">9.2</span></p>
                    <p>主演：陈建斌，任素汐，潘斌龙</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
            <li>
                <div class="pic_show">
                    <img src="/" alt="">
                </div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>观众平<span class="grade">9.2</span></p>
                    <p>主演：陈建斌，任素汐，潘斌龙</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name :'Nowplaying'
}
</script>

<style  scoped>
    #content .movie_body{flex:1;overflow:auto;}
    .movie_body ul{margin: 0 12px;overflow: hidden;}
    .movie_body ul li {margin-top: 12px;display: flex; align-items: center;border-bottom: 1px solid #e6e6e6;padding-bottom: 10px; }
    .movie_body .pic_show{width: 64px;height: 90px;}
    .movie_body .pic_show img{width: 100%;}
    .movie_body .info_list{margin-left: 10px;flex:1;position: relative;}

</style>