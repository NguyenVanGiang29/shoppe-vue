<template>
  <div class="service-container">
    <div class="service-item-holder" @click="redirectToTimeSale">
      <div class="service-item">
        <img
          src="https://cf.shopee.vn/file/46a2a2c810622f314d78455da5e5d926_xhdpi"
        />
      </div>
      <h4>Khung giờ săn Sale</h4>
    </div>
    <div class="service-item-holder">
      <div class="service-item">
        <img
          src="https://cf.shopee.vn/file/96385a65fa50800e096bb790fa5c1dba_xhdpi"
        />
      </div>
      <h4>Deal sốc từ 1K</h4>
    </div>
    <div class="service-item-holder">
      <div class="service-item">
        <img
          src="https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi"
        />
      </div>
      <h4>Miễn phí vận chuyển</h4>
    </div>
    <div class="service-item-holder">
      <div class="service-item">
        <img
          src="https://cf.shopee.vn/file/b15de7d7368673a82583a88333ed23e7_xhdpi"
        />
      </div>
      <h4>Bắt Trend - Giá sốc</h4>
    </div>
    <div class="service-item-holder">
      <div class="service-item">
        <img
          src="https://cf.shopee.vn/file/9da9a3acb5520d601f86a90434f455a5_xhdpi"
        />
      </div>
      <h4>Hoàn xu</h4>
    </div>
    <div class="service-item-holder">
      <div class="service-item">
        <img
          src="https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi"
        />
      </div>
      <h4>Nạp thẻ & Dịch vụ</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceList",
  methods: {
    redirectToTimeSale() {
      this.$router.push({
        path: "/khunggiosale",
      });
    },
  },
};
</script>

<style scoped>
.service-container {
  display: flex;
  column-gap: 50px;
  margin-top: 30px;
}

.service-item {
  height: 70px;
  width: 70px;
}

img {
  object-fit: contain;
}

h4 {
  text-align: center;
  font-family: Helvetica Neue, Helvetica, Arial, 文泉驛正黑, WenQuanYi Zen Hei,
    Hiragino Sans GB, 儷黑 Pro, LiHei Pro, Heiti TC, 微軟正黑體,
    Microsoft JhengHei UI, Microsoft JhengHei, sans-serif;
  font-weight: 500;
}
.service-item-holder {
  max-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: top 0.1s;
}

.service-item-holder:hover {
  cursor: pointer;
  top: -5px;
}
</style>
