<template>
  <div class="container-footer">
    <FooterHeader></FooterHeader>
    <FooterBottom></FooterBottom>
  </div>
</template>

<script>
import FooterHeader from "./FooterHeader.vue";
import FooterBottom from "./FooterBottom.vue";
export default {
  name: "FooterView",
  components: { FooterHeader, FooterBottom },
};
</script>

<style scoped>
.container-footer {
  border-top: 4px solid #ee4d2d;
}
</style>
