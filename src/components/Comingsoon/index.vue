<template>
  <div>
    <div class="movie_body" :style="PH">
      <Scroller>
        <ul>
          <li v-for="data in datalist" :key="data.filmId" @tap="godetail(data.filmId)">
            <div class="pic_show">
              <img :src="data.poster" />
            </div>
            <div class="info_list">
              <h2>{{data.name}}</h2>
              <p>
                <span class="person">17746</span> 人想看
              </p>
              <p>
                主演
                <span v-for="item in data.actors" :key="item.name">{{item.name}} ,</span>
              </p>
              <p>2018-11-30上映</p>
            </div>
            <div class="btn_pre">预售</div>
          </li>
        </ul>
      </Scroller>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comingsoon",
  data() {
    return {
      datalist: [],
      previous: 1,
      PH: "height:0px",
    };
  },
  methods: {
    godetail(data) {
      console.log(data);
      this.$router.push("/detail" + data);
    },
  },

  beforeMount() {
    this.PH = `height:${window.screen.height - 146}px`;
  },

  activated() {
    var cityId = this.$store.state.city.id;

    if (this.previous === cityId) {
      return;
    }
    this.axios({
      url: `https://m.maizuo.com/gateway?cityId=${this.$store.state.city.id}&pageNum=1&pageSize=10&type=2&k=7996463`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"159551147410496900071431","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.msg === "ok") {
          this.datalist = res.data.data.films;
        }
        this.previous = this.$store.state.city.id;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style  scoped>
.movie_body {
  overflow: hidden;
}
.movie_body ul {
  margin: 0 12px;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}

.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>