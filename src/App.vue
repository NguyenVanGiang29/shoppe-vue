<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/HeaderNavigation/Header.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <Header></Header>
  <!-- <div class="header-container">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/store">Store</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div> -->
  <RouterView />
  <Footer></Footer>
</template>

<style scoped>
.header-container {
  overflow: hidden;
  background-color: #333;
}

a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

a:hover {
  background-color: #ddd;
  color: black;
}
</style>
