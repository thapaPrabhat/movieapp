<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <Nav />
    <div class="container mx-auto mt-24 md:mt-16">
      <router-view :key="$route.path" />
    </div>
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "./components/TheNavigation";
import Footer from "./components/TheFooter";

export default {
  components: {
    Nav,
    Footer
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    
    this.$store.dispatch("genre/getGenre");

    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach(() => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
  }
};
</script>
<style>
</style>
