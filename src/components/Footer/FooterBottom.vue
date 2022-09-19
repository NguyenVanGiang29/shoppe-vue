<template>
  <div class="container-footer-bottom">
    <div class="footer-bottom">
      <div class="policy">
        <div class="name">CHÍNH SÁCH BẢO MẬT</div>
        <div class="name">QUY CHẾ HOẠT ĐỘNG</div>
        <div class="name">CHÍNH SÁCH VẬN CHUYỂN</div>
        <div class="name">CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</div>
      </div>
      <div class="certification">
        <a><img src="" /></a>
        <a><img src="" /></a>
        <a><img src="" /></a>
      </div>
      <div class="name-shoppe">Công ty TNHH Shopee</div>
      <div class="content">
        Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
        Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ
        trợ: 19001221 - Email: cskh@hotro.shopee.vn
      </div>
      <div class="content">
        Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ:
        024 73081221 (ext 4678)
      </div>
      <div class="content">
        Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần
        đầu ngày 10/02/2015
      </div>
      <div class="content">© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBottom",
};
</script>

<style>
.container-footer-bottom {
  height: 312px;
  background: #f5f5f5;
  padding: 40px 0;
}

.footer-bottom {
  margin: 0 21px;
  height: 100%;
}

.policy {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.policy .name {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  padding: 0 25px;
  height: max-content;
}

.policy .name:not(:last-child) {
  border-right: 1px solid rgba(0, 0, 0, 0.09);
}

.certification {
  height: 48px;
  text-align: center;
}

.certification img {
  height: 45px;
  width: 120px;
  background: rgb(250, 162, 162);
}

.name-shoppe {
  text-align: center;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.65);
  margin-top: 8px;
  margin-bottom: 25px;
}

.content {
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.65);
  text-align: center;
  margin-top: 0.5rem;
}
</style>
