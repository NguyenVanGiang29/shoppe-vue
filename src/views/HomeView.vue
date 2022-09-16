<template>
  <BannerHeader></BannerHeader>
  <ServiceList></ServiceList>
</template>

<script>
import ServiceList from "../components/ServiceHome/ServiceList.vue";
import BannerHeader from "../components/Banner/BannerHeader.vue";
export default {
  name: "HomeView",
  components: { ServiceList, BannerHeader },
};
</script>

<style></style>
