<template>
  <div class="container-notication">
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
              <div class="name">Tài Khoản Của Tôi</div>
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
              <div class="name">Đơn Mua</div>
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
              <div class="name">Thông Báo</div>
            </div>
            <ul class="notication-list-children">
              <li class="name active">Cập Nhật Đơn Hàng</li>
              <li class="name">Khuyến Mãi</li>
              <li class="name">Cập Nhật Ví</li>
              <li class="name">Hoạt Động</li>
            </ul>
          </div>
          <div class="item">
            <div class="name-item">
              <img
                src="https://cf.shopee.vn/file/84feaa363ce325071c0a66d3c9a88748"
              />
              <div class="name">Kho Voucher</div>
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
              <div class="name">Shoppe Xu</div>
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
      <div class="notication-right">
        <div class="option-check">
          <div>Đánh dấu Đã đọc tất cả</div>
        </div>
        <div class="list-notication">
          <div class="item-notication">
            <div class="icon-notication">
              <img
                src="https://cf.shopee.vn/file/1ef84de6682b0ad721fe12c241fe67f7_tn"
                alt=""
              />
            </div>
            <div class="content-notication">
              <p class="title-notication">Chia sẻ nhận xét về sản phẩm</p>
              <div class="detail-notication">
                Đơn hàng <b>2209076B3K1KF9</b> đã hoàn thành. Bạn hãy đánh giá
                sản phẩm trước ngày <b>12-10-2022</b> để nhận <b>200</b> xu và
                giúp người dùng khác hiểu hơn về sản phẩm nhé!
              </div>
              <div class="time-notication">
                <p>07:23 12-09-2022</p>
                <img
                  v-if="!isOpenDetailOrder"
                  @click="handleOpenDetailOrder()"
                  src="../../image/dropdown_grey.png"
                />
                <img
                  v-if="isOpenDetailOrder"
                  @click="handleOpenDetailOrder()"
                  src="../../image/edit.png"
                />
              </div>
            </div>
            <div class="option-button">
              <button>Đánh Giá Sản Phẩm</button>
            </div>
          </div>
          <Transition name="detailOrder">
            <div v-show="isOpenDetailOrder" class="detail-order">
              <div class="status-order">
                <div class="left">
                  <span class="dot"></span>
                </div>
                <div class="right">
                  <div class="title-status">Xác nhận đã nhận hàng</div>
                  <div class="content-status">
                    Vui lòng chọn "Đã Nhận Được Hàng" cho đơn
                    <b>220902PU3KB9SV</b> , nếu bạn hài lòng với tất cả sản phẩm
                    và không có nhu cầu Trả hàng / Hoàn tiền. Đánh giá ngay và
                    nhận <b>200</b> Xu.
                  </div>
                  <p class="content-status">07:23 12-09-2022</p>
                </div>
              </div>
              <div class="status-order">
                <div class="left">
                  <span class="dot"></span>
                </div>
                <div class="right">
                  <div class="title-status">Xác nhận đã nhận hàng</div>
                  <div class="content-status">
                    Vui lòng chọn "Đã Nhận Được Hàng" cho đơn
                    <b>220902PU3KB9SV</b> , nếu bạn hài lòng với tất cả sản phẩm
                    và không có nhu cầu Trả hàng / Hoàn tiền. Đánh giá ngay và
                    nhận <b>200</b> Xu.
                  </div>
                  <p class="content-status">07:23 12-09-2022</p>
                </div>
              </div>
              <div class="status-order">
                <div class="left">
                  <span class="dot"></span>
                </div>
                <div class="right">
                  <div class="title-status">Xác nhận đã nhận hàng</div>
                  <div class="content-status">
                    Vui lòng chọn "Đã Nhận Được Hàng" cho đơn
                    <b>220902PU3KB9SV</b> , nếu bạn hài lòng với tất cả sản phẩm
                    và không có nhu cầu Trả hàng / Hoàn tiền. Đánh giá ngay và
                    nhận <b>200</b> Xu.
                  </div>
                  <p class="content-status">07:23 12-09-2022</p>
                </div>
              </div>
            </div>
          </Transition>
          <div class="item-notication">
            <div class="icon-notication">
              <img
                src="https://cf.shopee.vn/file/1ef84de6682b0ad721fe12c241fe67f7_tn"
                alt=""
              />
            </div>
            <div class="content-notication">
              <p class="title-notication">Chia sẻ nhận xét về sản phẩm</p>
              <div class="detail-notication">
                Đơn hàng <b>2209076B3K1KF9</b> đã hoàn thành. Bạn hãy đánh giá
                sản phẩm trước ngày <b>12-10-2022</b> để nhận <b>200</b> xu và
                giúp người dùng khác hiểu hơn về sản phẩm nhé!
              </div>
            </div>
            <div class="option-button">
              <button>Đánh Giá Sản Phẩm</button>
            </div>
          </div>
          <div class="item-notication">
            <div class="icon-notication">
              <img
                src="https://cf.shopee.vn/file/1ef84de6682b0ad721fe12c241fe67f7_tn"
                alt=""
              />
            </div>
            <div class="content-notication">
              <p class="title-notication">Chia sẻ nhận xét về sản phẩm</p>
              <div class="detail-notication">
                Đơn hàng <b>2209076B3K1KF9</b> đã hoàn thành. Bạn hãy đánh giá
                sản phẩm trước ngày <b>12-10-2022</b> để nhận <b>200</b> xu và
                giúp người dùng khác hiểu hơn về sản phẩm nhé!
              </div>
            </div>
            <div class="option-button">
              <button>Đánh Giá Sản Phẩm</button>
            </div>
          </div>
          <div class="item-notication">
            <div class="icon-notication">
              <img
                src="https://cf.shopee.vn/file/1ef84de6682b0ad721fe12c241fe67f7_tn"
                alt=""
              />
            </div>
            <div class="content-notication">
              <p class="title-notication">Chia sẻ nhận xét về sản phẩm</p>
              <div class="detail-notication">
                Đơn hàng <b>2209076B3K1KF9</b> đã hoàn thành. Bạn hãy đánh giá
                sản phẩm trước ngày <b>12-10-2022</b> để nhận <b>200</b> xu và
                giúp người dùng khác hiểu hơn về sản phẩm nhé!
              </div>
            </div>
            <div class="option-button">
              <button>Đánh Giá Sản Phẩm</button>
            </div>
          </div>
          <div class="item-notication">
            <div class="icon-notication">
              <img
                src="https://cf.shopee.vn/file/1ef84de6682b0ad721fe12c241fe67f7_tn"
                alt=""
              />
            </div>
            <div class="content-notication">
              <p class="title-notication">Chia sẻ nhận xét về sản phẩm</p>
              <div class="detail-notication">
                Đơn hàng <b>2209076B3K1KF9</b> đã hoàn thành. Bạn hãy đánh giá
                sản phẩm trước ngày <b>12-10-2022</b> để nhận <b>200</b> xu và
                giúp người dùng khác hiểu hơn về sản phẩm nhé!
              </div>
            </div>
            <div class="option-button">
              <button>Đánh Giá Sản Phẩm</button>
            </div>
          </div>
          <div class="item-notication">
            <div class="icon-notication">
              <img
                src="https://cf.shopee.vn/file/1ef84de6682b0ad721fe12c241fe67f7_tn"
                alt=""
              />
            </div>
            <div class="content-notication">
              <p class="title-notication">Chia sẻ nhận xét về sản phẩm</p>
              <div class="detail-notication">
                Đơn hàng <b>2209076B3K1KF9</b> đã hoàn thành. Bạn hãy đánh giá
                sản phẩm trước ngày <b>12-10-2022</b> để nhận <b>200</b> xu và
                giúp người dùng khác hiểu hơn về sản phẩm nhé!
              </div>
            </div>
            <div class="option-button">
              <button>Đánh Giá Sản Phẩm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticationOrder",
  data() {
    return {
      isOpenDetailOrder: false,
    };
  },
  methods: {
    handleOpenDetailOrder() {
      this.isOpenDetailOrder = !this.isOpenDetailOrder;
    },
  },
};
</script>

<style scoped>
.container-notication {
  background: #f0f0f0;
}
.container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  height: max-content;
  padding: 20px 0 50px 0;
}

.notication-left {
  width: 180px;
  height: 100%;
}

.notication-right {
  flex-grow: 1;
  margin-left: 27px;
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
  border: 1px solid #000;
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
  height: max-content;
  margin-bottom: 15px;
}

ul {
  margin-top: 10px;
  display: none;
  margin-left: -5px;
}

ul li {
  list-style: none;
  margin-bottom: 10px;
  width: max-content;
}

/* .item:hover ul {
  display: block;
} */
.name-item {
  display: flex;
  height: 20px;
}
.name-item img {
  height: 100%;
  padding-right: 10px;
}

.name {
  font-size: 14px;
}

.active {
  color: #ee4d2d;
}

.notication-list-children {
  display: block;
}

.option-check {
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  background: #fff;
  padding: 0 20px;
}

.option-check div {
  float: right;
  line-height: 40px;
  font-size: 14px;
}

.time-notication {
  display: flex;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  height: 14px;
  align-items: center;
}

.time-notication img {
  z-index: 1;
  height: 70%;
  margin-left: 10px;
}

.item-notication img:hover {
  cursor: pointer;
}

.option-check div:hover {
  color: #ee4d2d;
  cursor: pointer;
}

.list-notication {
  height: max-content;
}

.item-notication {
  height: 122px;
  background: #fff6e5;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
}

.item-notication:hover {
  background: #fff;
  cursor: pointer;
}

.icon-notication {
  height: 80px;
  margin-right: 20px;
}

.title-notication {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0.625rem;
  color: rgba(0, 0, 0, 0.8);
}

.detail-notication {
  width: 750px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
}

.option-button {
  flex-grow: 1;
}

.option-button button {
  padding: 0 7px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  width: max-content;
  font-size: 0.75rem;
  border-radius: 2px;
  background: #fff;
  padding: 0 7px;
  height: 28px;
}

.option-button button:hover {
  color: #ee4d2d;
  border: 1px solid #ee4d2d;
}

.detail-order {
  height: max-content;
  width: 100%;
  background: #faf8f8;
}

.detailOrder-enter-active,
.detailOrder-leave-active {
  transition: height 0.3s ease;
  height: 500px;
}

.detailOrder-enter-from,
.detailOrder-leave-to {
  height: 0;
}
.status-order {
  height: 135px;
  padding: 20px;
  display: flex;
}

.status-order:hover {
  cursor: pointer;
}

.status-order .left {
  width: 80px;
  margin-right: 20px;
  height: 100%;
  position: relative;
}

.status-order .right {
  flex-grow: 1;
}

.status-order .left::before {
  content: " ";
  border-left: 1px solid #bbb;
  position: absolute;
  left: 0;
  height: 20px;
  top: -20px;
  left: 50%;
  transform: translate(-50%);
}

.status-order .left::after {
  content: " ";
  border-left: 1px solid #bbb;
  position: absolute;
  left: 50%;
  height: calc(100% + 20px);
  transform: translate(-50%);
}

.dot {
  height: 7px;
  width: 7px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}

.title-status {
  color: rgba(0, 0, 0, 0.54);
  font-size: 16px;
  font-weight: 400;
}

.content-status {
  font-size: 14px;
  margin-bottom: 0.3125rem;
  color: rgba(0, 0, 0, 0.54);
}
</style>
