<template>
  <div class="container-header-bottom">
    <div class="content-header-bottom">
      <div class="logo"><img src="../../image/logo.jpg" /></div>
      <div class="search">
        <div class="search-form">
          <input />
          <div class="search-button">
            <img src="../../image/search.png" />
          </div>
        </div>
        <div>
          <a>keyword1</a>
          <a>keyword1</a>
          <a>keyword1</a>
          <a>keyword1</a>
          <a>keyword1</a>
        </div>
      </div>
      <div class="cart">
        <a href="">
          <div class="cart-icon">
            <img src="../../image/cart.png" />
            <div class="cart-badge">160</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBottom",
};
</script>

<style>
.container-header-bottom {
  height: 85px;
}

.content-header-bottom {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 16px;
  display: flex;
}

.logo {
  width: 202px;
}

.search {
  flex-grow: 1;
}

.cart {
  width: 138px;
}

.search input {
  width: 100%;
  height: 40px;
  font-size: large;
}

img {
  height: 100%;
}

.search a {
  color: #fff;
  font-size: 0.75rem;
  padding: 5px;
}

.search a:hover {
  cursor: pointer;
}

.cart-icon {
  height: 30px;
  width: 100px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cart a {
  text-decoration: none;
}

.cart-badge {
  max-width: 36px;
  max-height: 20px;
  text-align: center;
  background: #fff;
  color: #ee4d2d;
  border-radius: 10px;
  line-height: 20px;
  position: absolute;
  top: -8px;
  left: 20px;
}

.search-button {
  height: 34px;
  width: 60px;
  background: #fb5533;
  position: absolute;
  right: 3px;
  top: 3px;
  border-radius: 3px;
}

.search-form {
  display: flex;
  position: relative;
}

.search-button img {
  height: 50%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.search-button:hover {
  background: #f56d52;
  cursor: pointer;
}
</style>
