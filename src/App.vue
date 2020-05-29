<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <Nav />
    <div class="container mx-auto">
      <router-view :key="$route.path"/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default {
  components: {
    Nav, Footer
  },
  created() {
    this.$store.dispatch("genre/getGenre");
  }
};
</script>
<style>
</style>
