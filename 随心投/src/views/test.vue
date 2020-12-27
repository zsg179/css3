<template>
    <div class="main">
        <div class="title">
            <img src="/static/title.png" alt="">
        </div>
        <van-swipe class="swipe-list" :autoplay="2000" indicator-color="white">
            <van-swipe-item><img src="/static/tips0.png"></van-swipe-item>
            <van-swipe-item><img src="/static/tips1.png"></van-swipe-item>
            <van-swipe-item><img src="/static/tips2.png"></van-swipe-item>
            <van-swipe-item><img src="/static/tips3.png"></van-swipe-item>
            <van-swipe-item><img src="/static/tips4.png"></van-swipe-item>
        </van-swipe>
    </div>
</template>

    

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style lang="less">
@total-width:750;

.w{
    width: 750/40rem;
    
    margin: 0 auto;
}

html{
    font-size: 100vw/@total-width *40;
    height: 1466/40rem;
}

a{
    text-decoration: none;
}
.main:extend(.w){
    background-image: url("/static/firstBg.png");
    overflow: hidden;

    .swipe-list{
        margin-top: 170px;
    }

    img {
        width: 100%;
    }
}

</style>


          

