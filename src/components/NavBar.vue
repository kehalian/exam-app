<template>
  <div
    class="w-full bg-white"
    :class="darkMode ? 'bg-gray-700 text-gray-300 opacity-15' : 'bg-white '"
  >
    <div class="w-10/12 m-auto grid grid-cols-5 items-center">
      <div class="col-span-3 p-5">
        <search-bar></search-bar>
      </div>
      <div class="col-span-2 grid grid-cols-4 p-5 items-center">
        <div class="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
        <div class="col-span-2 flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="font-roboto text-gray-400">Henok Tesfu</span>
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              /></svg
          ></span>
        </div>
        <div class="flex">
          <span class="font-roboto">En</span>
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              /></svg
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchBar from "./elements/SearchBar.vue";
import { EventBus } from "@/service/event-bus";
export default {
  components: { SearchBar },
  data() {
    return {
      darkMode: false,
    };
  },
  created() {
    EventBus.$on("themeChange", (res) => {
      this.changeTheme(res);
    });
  },
  methods: {
    changeTheme(res) {
      this.darkMode = res;
    },
  },
};
</script>