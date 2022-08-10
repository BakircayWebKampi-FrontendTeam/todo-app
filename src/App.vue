<template>
  <HomeDesktop v-if="!isMobile">
    <TodosDesktop />
  </HomeDesktop>

  <HomeMobile v-if="isMobile">
    <TodosMobile />
  </HomeMobile>
</template>

<script>
import HomeDesktop from "@/components/desktop/HomeDesktop.vue";
import TodosDesktop from "@/components/desktop/TodosDesktop.vue";
import HomeMobile from "@/components/mobile/HomeMobile.vue";
import TodosMobile from "@/components/mobile/TodosMobile.vue";

export default {
  name: "App",
  data() {
    return {
      isMobile: true,
    };
  },
  components: {
    HomeDesktop,
    TodosDesktop,
    HomeMobile,
    TodosMobile,
  },
};
</script>

<style></style>
