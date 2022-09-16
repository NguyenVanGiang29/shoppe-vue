<template>
  <div class="container">
    <div class="header-top-left">
      <a href="">Kênh người bán</a>
      <div class="dropdown">
        <a href="">Tải ứng dụng</a>
        <div class="dropdown-downapp">
          <img src="../../image/qr-code.png" />
          <img class="appdown" src="../../image/appdown.png" />
        </div>
      </div>
      <a href="">Kết nối</a>
    </div>
    <ul>
      <div class="item-header-right item1">
        <div class="icon">
          <img src="../../image/notication.png" class="notication-icon" />
        </div>
        <li>Thông báo</li>
        <div class="dropdown-notication">
          <h4>Thông báo mới nhận</h4>
          <div class="item-notication">
            <div class="icon-item">
              <img
                src="https://media.karousell.com/media/photos/products/2018/05/21/rm3_for_rm10_shopee_voucher_1526870883_92399d4b.jpg"
              />
            </div>
            <div class="content-notication">
              <h3>Vocher cực sịn, đặt thoải mái!</h3>
              <p>Mã này chỉ riêng bạn có, đang thèm ăn gì đặt ngay đi nào</p>
            </div>
          </div>
          <div class="item-notication">
            <div class="icon-item">
              <img
                src="https://media.karousell.com/media/photos/products/2018/05/21/rm3_for_rm10_shopee_voucher_1526870883_92399d4b.jpg"
              />
            </div>
            <div class="content-notication">
              <h3>Vocher cực sịn, đặt thoải mái!</h3>
              <p>Mã này chỉ riêng bạn có, đang thèm ăn gì đặt ngay đi nào</p>
            </div>
          </div>
          <div class="item-notication">
            <div class="icon-item">
              <img
                src="https://media.karousell.com/media/photos/products/2018/05/21/rm3_for_rm10_shopee_voucher_1526870883_92399d4b.jpg"
              />
            </div>
            <div class="content-notication">
              <h3>Vocher cực sịn, đặt thoải mái!</h3>
              <p>Mã này chỉ riêng bạn có, đang thèm ăn gì đặt ngay đi nào</p>
            </div>
          </div>
          <div class="item-notication">
            <div class="icon-item">
              <img
                src="https://media.karousell.com/media/photos/products/2018/05/21/rm3_for_rm10_shopee_voucher_1526870883_92399d4b.jpg"
              />
            </div>
            <div class="content-notication">
              <h3>Vocher cực sịn, đặt thoải mái!</h3>
              <p>Mã này chỉ riêng bạn có, đang thèm ăn gì đặt ngay đi nào</p>
            </div>
          </div>
          <div class="item-notication">
            <div class="icon-item">
              <img
                src="https://media.karousell.com/media/photos/products/2018/05/21/rm3_for_rm10_shopee_voucher_1526870883_92399d4b.jpg"
              />
            </div>
            <div class="content-notication">
              <h3>Vocher cực sịn, đặt thoải mái!</h3>
              <p>Mã này chỉ riêng bạn có, đang thèm ăn gì đặt ngay đi nào</p>
            </div>
          </div>
          <div class="item-notication">
            <div class="icon-item">
              <img
                src="https://media.karousell.com/media/photos/products/2018/05/21/rm3_for_rm10_shopee_voucher_1526870883_92399d4b.jpg"
              />
            </div>
            <div class="content-notication">
              <h3>Vocher cực sịn, đặt thoải mái!</h3>
              <p>Mã này chỉ riêng bạn có, đang thèm ăn gì đặt ngay đi nào</p>
            </div>
          </div>
          <p class="view-all" @click="redirectNotication()">Xem tất cả</p>
        </div>
      </div>
      <div class="item-header-right item2">
        <div class="icon">
          <img src="../../image/support.png" class="notication-icon" />
        </div>
        <li>Hỗ trợ</li>
      </div>
      <div class="item-header-right item3">
        <div class="icon">
          <img src="../../image/global.png" class="notication-icon" />
        </div>
        <li>Tiếng việt</li>
        <div class="dropdown-icon">
          <img src="../../image/dropdown.png" />
        </div>
      </div>
      <div class="item-header-right avatar">
        <div class="icon">
          <img src="../../image/avatar.png" class="notication-icon" />
        </div>
        <li>giangbe2911</li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderTop",
  methods: {
    redirectNotication() {
      this.$router.push({
        path: "/notication",
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  margin: 0 auto;
  max-width: 1200px;
}

ul {
  display: flex;
}

ul li {
  list-style: none;
  color: #fff;
  font-size: 0.8125rem;
  padding: 3px;
}

ul li:hover {
  color: rgb(202, 190, 190);
}

.header-top-left {
  min-width: max-content;
}

.header-top-left a {
  text-decoration: none;
  color: #fff;
  padding: 10px;
  font-size: 0.8125rem;
}

a:hover {
  cursor: pointer;
  color: rgb(202, 190, 190);
}
/*
.header-top-left a::before {
  content: "";
  border-left: 2px solid rgb(199, 196, 196);
  position: relative;
  left: -10px;
}

.header-top-left a:first-of-type::before {
  display: none;
}

.header-top-left a:last-of-type::after {
  display: none;
} */

.item-header-right {
  display: flex;
  align-items: center;
  padding: 5px;
  position: relative;
}

.icon {
  width: 20px;
  height: 20px;
}
img {
  height: 100%;
}

.avatar {
  margin-left: 5px;
}

.dropdown-icon {
  height: 20px;
  width: 20px;
}
.item-header-right:hover {
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-downapp {
  height: 260px;
  width: 200px;
  background: hwb(0 96% 4% / 0.952);
  position: absolute;
  display: none;
  z-index: 1;
}

.dropdown-downapp img {
  height: 180px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  top: 15px;
  object-fit: contain;
}

.dropdown-downapp .appdown {
  height: 50px;
}

.dropdown:hover .dropdown-downapp {
  display: block;
}

.dropdown-notication {
  height: auto;
  width: 380px;
  background: hwb(0 96% 4% / 0.952);
  position: absolute;
  top: 35px;
  right: 0;
  z-index: 1;
  border: 1px solid rgb(223, 220, 220);
  display: none;
}

.item1:hover .dropdown-notication {
  display: block;
}

.dropdown-notication h4 {
  font-weight: 100;
  padding: 10px;
  background: #fff;
  color: rgb(184, 184, 184);
}

.item-notication {
  display: flex;
  max-height: max-content;
  background: #ddd;
}

.item-notication:hover {
  background: #fff;
}
.icon-item {
  width: 50px;
  padding: 5px;
}

.icon-item img {
  width: 100%;
  height: 80%;
  object-fit: cover;
}

.content-notication {
  flex-grow: 1;
  margin-left: 5px;
}

.content-notication p {
  font-size: small;
}

.view-all {
  text-align: center;
  padding: 10px;
  background: #fff;
}

.view-all:hover {
  background: rgb(245, 113, 69);
}
</style>
