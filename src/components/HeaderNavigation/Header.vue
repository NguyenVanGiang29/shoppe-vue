<template>
  <div class="container-header">
    <HeaderTop></HeaderTop>
    <HeaderBottom></HeaderBottom>
  </div>
</template>

<script>
import HeaderTop from "./HeaderTop.vue";
import HeaderBottom from "./HeaderBottom.vue";
export default {
  name: "HeaderNavigation",
  components: { HeaderTop, HeaderBottom },
};
</script>

<style>
.container-header {
  background-image: linear-gradient(#f53d2d, #f63);
}
</style>
