<template>
  <div>
    <Nav />
    <div class="bg-gray-900 text-white">
      <router-view />
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
