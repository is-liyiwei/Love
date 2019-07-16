<template>
<!-- <div style="background:#f0f2f5;margin-top: -20px;">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" :src="img_404" alt="404">
        <img class="pic-404__child left" :src="img_404_cloud" alt="404">
        <img class="pic-404__child mid" :src="img_404_cloud" alt="404">
        <img class="pic-404__child right" :src="img_404_cloud" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">OOPS!</div>
        <div class="bullshit__info">版权所有<a class="link-type" href="https://wallstreetcn.com" target='_blank'>华尔街见闻</a></div>
        <div class="bullshit__headline">{{ message }}</div>
        <div class="bullshit__info">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
        <a href="/" class="bullshit__return-home">返回首页</a>
      </div>
    </div>
  </div> -->

<div class="not-found">
  <div class="error-container">
    <!-- <img :src="img_404" alt=""> -->
    <h2>很抱歉，页面不存在</h2>
    <p>
      链接可能损坏，或页面已移除
      <a href="/">前往 首页。</a>
    </p>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  computed: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.not-found {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fafafa;
  text-align: center;
  .error-container {
    padding: 100px 40px 0;
  }
  img {
    width: 100px;
  }
  h2 {
    font-size: 22px;
    display: block;
    -webkit-margin-before: 0.83em;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold;
  }
  p {
    display: block;
    font-size: 16px;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    a {
      color: #003569;
    }
  }
}
</style>
