<template>
  <div class="container-footer-header">
    <div class="footer-header1">
      <div class="column">
        <div class="title">CHĂM SÓC KHÁCH HÀNG</div>
        <ul>
          <li>Trung Tâm Trợ Giúp</li>
          <li>Shopee Blog</li>
          <li>Shopee Mall</li>
          <li>Hướng Dẫn Mua Hàng</li>
          <li>Hướng Dẫn Bán Hàng</li>
          <li>Thanh Toán</li>
          <li>Shopee Xu</li>
          <li>Vận Chuyển</li>
          <li>Trả Hàng & Hoàn Tiền</li>
          <li>Chăm Sóc Khách Hàng</li>
          <li>Chính Sách Bảo Hành</li>
        </ul>
      </div>
      <div class="column">
        <div class="title">VỀ SHOPPE</div>
        <ul>
          <li>Giới Thiệu Về Shopee Việt Nam</li>
          <li>Tuyển Dụng</li>
          <li>Điều Khoản Shopee</li>
          <li>Chính Sách Bảo Mật</li>
          <li>Chính Hãng</li>
          <li>Kênh Người Bán</li>
          <li>Flash Sales</li>
          <li>Chương Trình Tiếp Thị Liên Kết Shopee</li>
          <li>Liên Hệ Với Truyền Thông</li>
        </ul>
      </div>
      <div class="column">
        <div class="title">THANH TOÁN</div>
        <div class="pay">
          <ul>
            <li><img src="../../image/visa.png" /></li>
            <li><img src="../../image/jcb.png" /></li>
            <li><img src="../../image/paypal.png" /></li>
            <li>
              <img src="../../image/shoppepay.png" />
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="title">ĐƠN VỊ VẬN CHUYỂN</div>
        <div class="pay">
          <ul>
            <li><img src="../../image/visa.png" /></li>
            <li><img src="../../image/jcb.png" /></li>
            <li><img src="../../image/paypal.png" /></li>
            <li>
              <img src="../../image/shoppepay.png" />
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="column">
        <div class="title">THEO DÕI CHÚNG TÔI TRÊN</div>
        <ul>
          <li style="display: flex; align-items: center">
            <img src="../../image/facebookicon.png" />
            <a>Facebook</a>
          </li>
          <li style="display: flex; align-items: center">
            <img src="../../image/instagramicon.png" />
            <a>Instagram</a>
          </li>
          <li style="display: flex; align-items: center">
            <img src="../../image/linkedinicon.png" />
            <a>Linkedln</a>
          </li>
        </ul>
      </div>
      <div class="column">
        <div class="title">TẢI ỨNG DỤNG SHOPPE NGAY THÔI</div>
      </div>
    </div>
    <div class="footer-header2">
      <div class="left">© 2022 Shopee. Tất cả các quyền được bảo lưu.</div>
      <div class="right">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterHeader",
};
</script>

<style scoped>
.container-footer-header {
  width: 1200px;
  height: 547px;
  margin: 0 auto;
}

.footer-header1 {
  width: 100%;
  height: 430px;
  padding: 5px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.footer-header1 .column {
  flex-grow: 1;
}

.column .title {
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 1.25rem;
  margin-top: 2.5rem;
}

ul {
  padding: 0;
}

ul li {
  list-style: none;
  font-size: 12px;
  margin-bottom: 12px;
  color: rgba(0, 0, 0, 0.65);
}

ul li:hover {
  cursor: pointer;
  color: #ee4d2d;
}

.pay {
  width: 250px;
}

.pay ul {
  display: flex;
  flex-wrap: wrap;
}
.pay ul li {
  list-style: none;
  width: 60px;
  height: 30px;
  box-shadow: 0.7px 0.7px #888888;
  margin: 2px;
  display: flex;
  justify-content: center;
}

img {
  object-fit: fill;
  max-width: 100%;
}

li img {
  height: 18px;
  margin-right: 5px;
}

.footer-header2 {
  display: flex;
  height: 117px;
  padding: 40px 0;
  justify-content: space-between;
}

.footer-header2 .left {
  width: 330px;
  color: #0000008a;
  font-size: 14px;
}

.footer-header2 .right {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
