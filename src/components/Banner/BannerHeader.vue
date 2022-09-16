<template>
  <div class="container">
    <div class="item item1"></div>
    <div class="item item2"></div>
    <div class="item item3"></div>
  </div>
</template>

<script>
export default {
  name: "BannerHeader",
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 66% auto;
  gap: 10px;
  margin-top: 30px;
}
.item {
  height: 100px;
  width: 100%;
  background: yellow;
}

.item1 {
  grid-row: 1/3;
  height: 100%;
  background-image: url("https://cf.shopee.vn/file/0ca16f9f4d9162f681324544f70c1bf5_xxhdpi");
  background-size: cover;
}

.item2 {
  background-image: url("https://cf.shopee.vn/file/be5e7d00474f406be998105d4d8e86ff_xhdpi");
  background-size: cover;
}

.item3 {
  background-image: url("https://cf.shopee.vn/file/d844bb5535bbadf51d0d4f7f2ed059d9_xhdpi");
  background-size: cover;
}
</style>
