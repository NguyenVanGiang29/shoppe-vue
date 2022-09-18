<template>
  <font-awesome-icon icon="fa-light fa-list-dropdown" />
  <NoticationOrder></NoticationOrder>
</template>

<script>
import NoticationOrder from "../components/NoticationOrder/NoticationOrder.vue";
export default {
  name: "NoticationView",
  components: { NoticationOrder },
};
</script>

<style scoped></style>
