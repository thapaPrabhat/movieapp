<template>
  <header
    class="bg-gray-800 sm:flex sm:justify-between sm:items-center md:justify-start sm:px-4 sm:py-3"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <router-link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 488"
            class="h-10 w-10 fill-current text-gray-200 mx-4"
          >
            <path
              d="M456 152c-13.232 0-24 10.768-24 24v11.608l-72 45.816V168c0-22.056-17.944-40-40-40h-26.848C309.504 114.792 320 94.608 320 72c0-39.704-32.304-72-72-72-27.864 0-52.04 15.944-64 39.168C172.04 15.944 147.864 0 120 0 80.304 0 48 32.296 48 72c0 22.608 10.496 42.792 26.848 56H48c-22.056 0-40 17.944-40 40v224c0 22.056 17.944 40 40 40h120v4.688l-37.656 37.656 11.312 11.312L168 459.312V488h16v-28.688l26.344 26.344 11.312-11.312L184 436.688V432h136c22.056 0 40-17.944 40-40v-65.424l72 45.816V384c0 13.232 10.768 24 24 24s24-10.768 24-24V176c0-13.232-10.768-24-24-24zM248 16c30.88 0 56 25.128 56 56s-25.12 56-56 56-56-25.128-56-56 25.12-56 56-56zm-63.992 88.832A72.125 72.125 0 00202.848 128H165.16a72.465 72.465 0 0018.848-23.168zM64 72c0-30.872 25.12-56 56-56s56 25.128 56 56-25.12 56-56 56-56-25.128-56-56zm280 176v144c0 13.232-10.768 24-24 24H48c-13.232 0-24-10.768-24-24V168c0-13.232 10.768-24 24-24h272c13.232 0 24 10.768 24 24v80zm88 105.424l-72-45.816v-55.216l72-45.824v146.856zM464 384c0 4.416-3.592 8-8 8-4.408 0-8-3.584-8-8V176c0-4.416 3.592-8 8-8 4.408 0 8 3.584 8 8v208z"
            />
            <path
              d="M240 32h16v16h-16zM240 96h16v16h-16zM272 64h16v16h-16zM208 64h16v16h-16zM112 32h16v16h-16zM112 96h16v16h-16zM144 64h16v16h-16zM80 64h16v16H80zM176 184c-52.936 0-96 43.064-96 96s43.064 96 96 96 96-43.064 96-96-43.064-96-96-96zm0 176c-44.112 0-80-35.888-80-80s35.888-80 80-80 80 35.888 80 80-35.888 80-80 80z"
            />
            <path
              d="M227.248 272.688l-72-32a8.064 8.064 0 00-7.608.6A8.004 8.004 0 00144 248v64a8.004 8.004 0 003.64 6.712A8.082 8.082 0 00152 320a7.952 7.952 0 003.248-.688l72-32a8.002 8.002 0 000-14.624zm-67.248 27v-39.376L204.304 280 160 299.688zM312 384h16v16h-16zM280 384h16v16h-16zM248 384h16v16h-16z"
            />
          </svg>
        </router-link>
      </div>
      <p class="text-gray-200 uppercase font-semibold tracking-wide">
        <router-link to="/">Movie App</router-link>
      </p>
      <span class="text-gray-100"></span>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0 text-sm ml-6">
      <router-link
        to="/"
        class="block px-2 py-1 text-gray-400 hover:text-gray-100 font-medium rounded hover:bg-gray-800"
      >Movies</router-link>
      <router-link
        to="/tv-shows"
        class="mt-1 block px-2 py-1 text-gray-400 hover:text-gray-100 font-medium rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
      >TV</router-link>
      <router-link
        to="/actors"
        class="mt-1 block px-2 py-1 text-gray-400 hover:text-gray-100 font-medium rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
      >Actors</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>