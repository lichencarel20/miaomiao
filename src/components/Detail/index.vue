<template>
  <div class="detail">
    <Header title="详情页面">
      <span @click="goback">BACK</span>
    </Header>
    <div class="head_pic">
      <img :src="datalist.poster" alt />
    </div>
    <div class="introduction">
      <div class="text1">
        <div>
          <p>{{datalist.name}}</p>
          <span class="xxx">2D</span>
        </div>
        <div class="right">
          <i class="right" v-if="datalist.grade?true:false">{{datalist.grade}}分</i>
        </div>
      </div>
      <p>{{datalist.category}}</p>
      <p>{{datalist.nation}}| {{datalist.runtime}}分钟</p>
      <p class="texta" style="margin-bottom:0px">{{datalist.synopsis}}</p>
      <p class="omit">...</p>
    </div>

    <div class="posters">
      <p class="main">演职人员</p>
      <ul>
        <li v-for="data in datalist.actors" :key="data.name" class="dealLi">
          <img :src="data.avatarAddress" alt />
          <p>{{data.name}}</p>
        </li>
      </ul>
    </div>

    <div class="picloop">
      <div class="afters">
        <p style="float:left">剧照</p>
        <p style="float:right" v-if="datalist.photos?true:false">全部{{datalist.photos.length}}</p>
        <!-- <p  style="clear:both"></p> -->
      </div>
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="data in datalist.photos" :key="data">
          <img :src="data" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
    
<script>
//mint-ui
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Swipe.name, Swipe);

import Header from "../Header";
export default {
  data() {
    return {
      datalist: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    goback() {
      this.$router.back();
    },
  },
  mounted() {
    console.log("mounted");
  },
  activated() {
    /* console.log(this.$route.params) */
    const id = this.$route.params.id;
    /* console.log(id) */
    this.axios({
      url: `https://m.maizuo.com/gateway?filmId=${id}&k=7720850`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"159551147410496900071431","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.info",
      },
    })
      .then((res) => {
        console.log(res.data.data.film);
        this.datalist = res.data.data.film;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.detail {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  background: white;
  z-index: 100;
}

.head_pic img {
  width: 100%;
}
.introduction {
  margin-top: 20px;
  padding-left: 18px;
  margin-bottom: 10px;
  width: 100%;
  border-bottom: 6px solid #f4f4f4;
}
.introduction p {
  color: #797d82;
  margin-bottom: 10px;
}

.text1 {
  display: flex;
  margin-bottom: 10px;
}
.text1 div {
  flex: 1;
  height: 24px;
  overflow: hidden;
}
.text1 div p {
  display: inline;
  font-size: 18px;
  margin-right: 10px;
  color: black;
}
.text1 span {
  font-size: 16px;
  line-height: 24px;
}
.text1 .right {
  display: inline;
  text-align: end;
  margin-right: 10px;
  font-size: 18px;
  color: orange;
}
.text1 .xxx {
  line-height: 18px;
  font-size: 16px;
}
.texta {
  width: 100%;
  height: 108px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 20em;
}
.posters {
  padding-left: 18px;
  margin-bottom: 10px;
  border-bottom: 6px solid #f4f4f4;
}
.posters .main {
  font-size: 20px;
  margin-bottom: 10px;
}
.posters ul {
  display: flex;
  overflow: hidden;
  margin-bottom: 10px;
}
.dealLi {
  flex: 1;
  margin-right: 20px;
}
.dealLi img {
  width: 100px;
  height: 128px;
  border: 1px solid rgb(245, 235, 235);
}
.dealLi p {
  display: block;
  text-align: center;
}
.picloop {
  margin-left: 18px;
}
.picloop .afters:after {
  content: "";
  display: block;
  clear: both;
}
.picloop .swiper_ui {
  width: 100%;
  height: 300px;
}
.picloop img {
  width: 100%;
  height: auto;
}
.mint-swipe {
  height: 300px;
}
</style>