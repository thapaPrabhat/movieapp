<template>
  <div class="h-screen overflow-hidden flex justify-center">
    <div class="flex justify-center content-center flex-wrap">
      <p class="font-sans text-white error-text">404</p>
      <div class="w-screen text-white text-center font-sans text-xl">
        <span class="opacity-50">Page not Found</span>
        <router-link class="border-b" to="/">&nbsp; Back to Movies Home</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-text {
  font-size: 130px;
}

@media (min-width: 768px) {
  .error-text {
    font-size: 220px;
  }
}
</style>