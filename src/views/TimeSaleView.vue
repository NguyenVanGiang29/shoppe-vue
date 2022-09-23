<template>
  <div class="container">
    <div class="view-image">
      <div class="image-show">
        <img :src="`${srcImage}`" />
      </div>
      <div class="images">
        <div class="image" @mouseover="showImage($event)">
          <img
            src="https://cf.shopee.vn/file/436c9db6309246b065839d49bac886a4"
          />
        </div>
        <div class="image" @mouseover="showImage($event)">
          <img
            src="https://cf.shopee.vn/file/0ecb597da925cd8bbb88e64cda9e8ebe"
          />
        </div>
        <div class="image" @mouseover="showImage($event)">
          <img
            src="https://cf.shopee.vn/file/4dc19ecc82db942e97b0e117c8fac66a"
          />
        </div>
        <div class="image" @mouseover="showImage($event)">
          <img
            src="https://cf.shopee.vn/file/93513a26d5ec983576efc6ff26a709b9"
          />
        </div>
        <div class="image" @mouseover="showImage($event)">
          <img
            src="https://cf.shopee.vn/file/0bd26572284148f13a507a80fc2d5420"
          />
        </div>
      </div>
    </div>

    <div style="margin-top: 50px">
      <img src="https://cf.shopee.vn/file/85df50b108d854fed304eb2424b9fc18" />
    </div>
    <div>
      <img src="https://cf.shopee.vn/file/bd8df23874fbaaa54f24e34ae9fee467" />
    </div>
    <div>
      <img src="https://cf.shopee.vn/file/fad059bfd9c6985bf9daeaec4c7ef1bc" />
    </div>
    <div class="container-voucher">
      <div class="left-voucher">
        <p class="text-left">Mien phi van chuyen</p>
      </div>
      <div class="right-voucher">
        <div class="title-voucher">
          <h1>Áp dụng cho một số shop nhất định</h1>
          <p class="text1">Tối đa 15K</p>
          <p class="text2">Có hiệu lực từ 15.09</p>
        </div>
        <div class="button1">
          <button class="buyBtn">Mua ngay</button>
          <a class="condition">Điều kiện</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeSaleView",
  data() {
    return {
      message: "giaaaang",
      content1: "<h1>Giang</h1>",
      urlFacebook: "facebook-url",
      attributeName: "class",
      srcImage: "https://cf.shopee.vn/file/436c9db6309246b065839d49bac886a4",
    };
  },
  methods: {
    showImage(event) {
      this.srcImage = event.srcElement.src;
    },
  },
};
</script>

<style scoped>
.view-image {
  height: 800px;
  width: 800px;
  margin: 30px auto;
}

.image-show {
  width: 800px;
  height: 400px;
  margin: 0 auto;
}

.images {
  width: 50%;
  height: 200px;
  display: flex;
  margin: 0 auto;
}

.image {
  height: 50%;
  flex-grow: 1;
  margin: 3px;
}

img {
  height: 100%;
  object-fit: contain;
}

img:hover {
  opacity: 0.5;
}
.container {
  margin: 10px auto;
  width: 960px;
}
img {
  width: 100%;
}
.container-voucher {
  display: flex;
  width: 100%;
  height: 270px;
}

.left-voucher {
  aspect-ratio: 1/1;
  background: rgb(38, 170, 153);
  position: relative;
}

.left-voucher::before {
  content: "";
  position: absolute;
  height: 100%;
  border-left: 20px dotted #fff;
  transform: translate(-50%);
}

.right-voucher {
  flex-grow: 1;
  max-width: 77%;
  border: 1px solid rgb(192, 189, 189);
  display: flex;
}

.text-left {
  text-align: center;
  font-size: 2.5rem;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
}

h1 {
  font-size: 40px;
  color: rgb(33, 33, 33);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 50px 20px 30px 20px;
  font-family: Helvetica Neue, Helvetica, Arial, 文泉驛正黑, WenQuanYi Zen Hei,
    Hiragino Sans GB, 儷黑 Pro, LiHei Pro, Heiti TC, 微軟正黑體,
    Microsoft JhengHei UI, Microsoft JhengHei, sans-serif;
  font-weight: 500;
}

.buyBtn {
  padding: 20px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: 3px solid #ee4d2d;
  color: #ee4d2d;
  border-radius: 0.375rem;
  font-size: 2rem;
}

.text1 {
  margin-left: 20px;
  padding: 10px;
  width: fit-content;
  color: #ee4d2d;
  border: 1.5px solid #ee4d2d;
  font-size: 1.25rem;
}
.text2 {
  margin: 20px;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.54);
}

p {
  margin: 0;
}

.title-voucher {
  width: 70%;
}

.button1 {
  flex-grow: 1;
}

.condition {
  position: relative;
  top: 50%;
  left: 40%;
  display: block;
  font-size: 1.5rem;
  color: #08f;
  font-weight: 500;
}
</style>
