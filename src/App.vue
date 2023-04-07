<template>
  <router-view />
</template>

<script>
import Home from "./views/Home.vue";
import "normalize.css"; //reset css

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style scoped lang="scss">
</style>