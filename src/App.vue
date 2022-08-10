<template>
  <HomePage>
    <ToDos />
  </HomePage>
</template>

<script>
import HomePage from "@/components/HomePage.vue";
import ToDos from "@/components/ToDos.vue";
export default {
  name: "App",
  components: {
    HomePage,
    ToDos,
  },
};
</script>

<style></style>
