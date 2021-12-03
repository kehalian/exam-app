<template>
  <div
    class="w-full bg-black bg-opacity-60"
    :class="
      darkMode
        ? 'bg-gray-700 text-gray-300 opacity-15'
        : ' bg-black bg-opacity-60 '
    "
  >
    <div class="w-10/12 m-auto grid grid-cols-5 items-center">
      <div class="col-span-3 p-3">
        <search-bar></search-bar>
      </div>
      <div class="col-span-2 grid grid-cols-5 p-5 items-center">
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
          <img
            class="h-10 w-10 object-cover rounded-full"
            src="@/assets/img/p7.jpg"
            alt=""
          />
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
        <div
          class="
            flex
            col-span-2
            h-12
            bg-gray-600 bg-opacity-40
            rounded-full
            justify-between
            items-center
          "
        >
          <p
            class="
              ml-3
              w-8
              h-8
              bg-black
              rounded-full
              flex
              justify-center
              items-center
            "
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </p>
          <p class="text-gray-200 font-roboto opacity-50">Social App</p>
          <div
            class="
              flex flex-col
              bg-gray-600
              rounded-r-lg
              w-10
              h-full
              items-center
              justify-center
              text-gray-200
            "
          >
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg
            ></span>
          </div>
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