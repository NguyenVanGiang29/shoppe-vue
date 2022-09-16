<template>
  <div class="container">
    <div class="notication-left">
      <div class="profile-item">
        <div class="avatar">
          <img src="../../image/avatar.png" alt="" />
        </div>
        <div class="nameuser">
          <p>giangbe2911</p>
          <div class="edit-profile">
            <img src="../../image/edit.png" /><a href="">Sửa Hồ Sơ</a>
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="item">
          <div class="name-item">
            <img
              src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4"
            />
            <div>Tài Khoản Của Tôi</div>
          </div>
          <ul>
            <li>Hồ Sơ</li>
            <li>Ngân Hàng</li>
            <li>Địa Chỉ</li>
            <li>Đổi Mật Khẩu</li>
          </ul>
        </div>
        <div class="item">
          <div class="name-item">
            <img
              src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078"
            />
            <div>Đơn Mua</div>
          </div>
          <ul>
            <li>Hồ Sơ</li>
            <li>Ngân Hàng</li>
            <li>Địa Chỉ</li>
            <li>Đổi Mật Khẩu</li>
          </ul>
        </div>
        <div class="item">
          <div class="name-item">
            <img
              src="https://cf.shopee.vn/file/e10a43b53ec8605f4829da5618e0717c"
            />
            <div>Thông Báo</div>
          </div>
          <ul>
            <li>Hồ Sơ</li>
            <li>Ngân Hàng</li>
            <li>Địa Chỉ</li>
            <li>Đổi Mật Khẩu</li>
          </ul>
        </div>
        <div class="item">
          <div class="name-item">
            <img
              src="https://cf.shopee.vn/file/84feaa363ce325071c0a66d3c9a88748"
            />
            <div>Kho Voucher</div>
          </div>
          <ul>
            <li>Hồ Sơ</li>
            <li>Ngân Hàng</li>
            <li>Địa Chỉ</li>
            <li>Đổi Mật Khẩu</li>
          </ul>
        </div>
        <div class="item">
          <div class="name-item">
            <img
              src="https://cf.shopee.vn/file/a0ef4bd8e16e481b4253bd0eb563f784"
            />
            <div>Shoppe Xu</div>
          </div>
          <ul>
            <li>Hồ Sơ</li>
            <li>Ngân Hàng</li>
            <li>Địa Chỉ</li>
            <li>Đổi Mật Khẩu</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="notication-right"></div>
  </div>
</template>

<script>
export default {
  name: "NoticationOrder",
};
</script>

<style scoped>
.container {
  display: flex;
  max-width: 1200px;
  margin: 20px auto;
  height: 1000px;
}

.notication-left {
  width: 180px;
  height: 100%;
}

.notication-right {
  flex-grow: 1;
}

.profile-item {
  display: flex;
  padding: 15px 0px;
  border-bottom: 1px solid #efefef;
}

.avatar {
  height: 48px;
  width: 48px;
}

.avatar img {
  border-radius: 50%;
}

.profile-item {
  flex-grow: 1;
}

.nameuser {
  padding-left: 15px;
}

.nameuser p {
  font-weight: 600;
}

.edit-profile a {
  text-decoration: none;
  color: #888888;
  font-size: 14px;
}

.list-item {
  width: 100%;
  height: auto;
  margin-top: 27px;
}
.item {
  height: 20px;
  margin-bottom: 15px;
}

ul {
  margin-top: 10px;
  display: none;
}

ul li {
  list-style: none;
}

/* .item:hover ul {
  display: block;
} */
.name-item {
  display: flex;
  height: 100%;
}
.name-item img {
  height: 100%;
  padding-right: 10px;
}
</style>
