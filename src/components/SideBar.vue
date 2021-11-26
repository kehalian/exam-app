<template>
  <div
    class="w-full h-full flex flex-col"
    :class="darkMode ? 'bg-gray-700 text-gray-300 opacity-15' : 'bg-white '"
  >
    <div class="w-11/12 m-auto mt-5 flex-grow">
      <p class="text-4xl font-lora flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-20 w-20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
          />
        </svg>
        <span class="font-lora tracking-widest">Khalian</span>
      </p>
      <div
        class="w-full flex flex-col mt-5 text-left"
        :class="
          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-500'
        "
      >
        <div
          class="w-full"
          :class="
            darkMode
              ? 'hover:bg-purple-600 hover:tex-white hover:opacity-100 hover:bg-opacity-50 px-3 py-2 rounded-md'
              : 'hover:bg-blue-300 hover:bg-opacity-50 px-3 py-2 rounded-md'
          "
        >
          <p class="font-roboto flex items-center space-x-3 text-2xl">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                /></svg
            ></span>
            <span>Dashboard</span>
          </p>
        </div>

        <br />
        <div class="mt-3 mb-3"><p class="opacity-50">Test</p></div>
        <div
          class="w-full"
          :class="
            darkMode
              ? 'hover:bg-purple-600 hover:tex-white hover:opacity-100 hover:bg-opacity-50 px-3 py-2 rounded-md'
              : 'hover:bg-blue-300 hover:bg-opacity-50 px-3 py-2 rounded-md'
          "
        >
          <p class="font-roboto flex items-center space-x-3 text-2xl">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                <path
                  fill-rule="evenodd"
                  d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                /></svg
            ></span>
            <span>Items</span>
          </p>
        </div>
        <div
          class="w-full"
          :class="
            darkMode
              ? 'hover:bg-purple-600 hover:tex-white hover:opacity-100 hover:bg-opacity-50 px-3 py-2 rounded-md'
              : 'hover:bg-blue-300 hover:bg-opacity-50 px-3 py-2 rounded-md'
          "
        >
          <p class="font-roboto flex items-center space-x-3 text-2xl">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clip-rule="evenodd"
                /></svg
            ></span>
            <span>Exams</span>
          </p>
        </div>
        <br />
        <div class="mt-3 mb-3"><p class="opacity-50">Organisation</p></div>
        <div
          class="w-full"
          :class="
            darkMode
              ? 'hover:bg-purple-600 hover:tex-white hover:opacity-100 hover:bg-opacity-50 px-3 py-2 rounded-md'
              : 'hover:bg-blue-300 hover:bg-opacity-50 px-3 py-2 rounded-md'
          "
        >
          <p class="font-roboto flex items-center space-x-3 text-2xl">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                /></svg
            ></span>
            <span>Courses</span>
          </p>
        </div>
        <div
          class="w-full"
          :class="
            darkMode
              ? 'hover:bg-purple-600 hover:tex-white hover:opacity-100 hover:bg-opacity-50 px-3 py-2 rounded-md'
              : 'hover:bg-blue-300 hover:bg-opacity-50 px-3 py-2 rounded-md'
          "
        >
          <p class="font-roboto flex items-center space-x-3 text-2xl">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                /></svg
            ></span>
            <span>Students</span>
          </p>
        </div>
        <br />
        <div class="mt-3 mb-3"><p class="opacity-50">Manage</p></div>
        <div
          class="w-full"
          :class="
            darkMode
              ? 'hover:bg-purple-600 hover:tex-white hover:opacity-100 hover:bg-opacity-50 px-3 py-2 rounded-md'
              : 'hover:bg-blue-300 hover:bg-opacity-50 px-3 py-2 rounded-md'
          "
        >
          <p class="font-roboto flex items-center space-x-3 text-2xl">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                /></svg
            ></span>
            <span>Users</span>
          </p>
        </div>
        <div
          class="w-full"
          :class="
            darkMode
              ? 'hover:bg-purple-600 hover:tex-white hover:opacity-100 hover:bg-opacity-50 px-3 py-2 rounded-md'
              : 'hover:bg-blue-300 hover:bg-opacity-50 px-3 py-2 rounded-md'
          "
        >
          <p class="font-roboto flex items-center space-x-3 text-2xl">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                /></svg
            ></span>
            <span>Setting</span>
          </p>
        </div>

        <div
          class="w-full"
          :class="
            darkMode
              ? 'hover:bg-purple-600 hover:tex-white hover:opacity-100 hover:bg-opacity-50 px-3 py-2 rounded-md'
              : 'hover:bg-blue-300 hover:bg-opacity-50 px-3 py-2 rounded-md'
          "
        >
          <p class="font-roboto flex items-center space-x-3 text-2xl">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clip-rule="evenodd"
                /></svg
            ></span>
            <span>Message</span>
          </p>
        </div>
        <div
          class="w-full"
          :class="
            darkMode
              ? 'hover:bg-purple-600 hover:tex-white hover:opacity-100 hover:bg-opacity-50 px-3 py-2 rounded-md'
              : 'hover:bg-blue-300 hover:bg-opacity-50 px-3 py-2 rounded-md'
          "
        >
          <p class="font-roboto flex items-center space-x-3 text-2xl">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                /></svg
            ></span>
            <span>Status</span>
          </p>
        </div>
      </div>
    </div>
    <div class="h-28 flex w-11/12 m-auto justify-start">
      <!-- component -->
      <!-- Not toggled switch -->

      <div class="flex justify-center items-center">
        <span class="">
          <svg
            class="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>
        <!-- Switch Container -->
        <div
          :class="{ 'bg-cyan-700': toggleActive }"
          class="w-14 h-7 flex items-center bg-gray-300 rounded-full mx-3 px-1"
          @click="handleToggleActive"
        >
          <!-- Switch -->
          <div
            class="bg-white w-5 h-5 rounded-full shadow-md transform"
            :class="{ 'translate-x-7': toggleActive }"
          ></div>
        </div>
        <span class="">
          <svg
            class="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </span>
      </div>
      <!-- Toggled switch -->
    </div>
  </div>
</template>
<script>
export default {
  name: "SlideBar",

  data() {
    return {
      darkMode: false,
      toggleActive: false,
    };
  },

  created() {},
  methods: {
    handleToggleActive() {
      this.toggleActive = !this.toggleActive;
      this.darkMode = !this.darkMode;
    },
    changeTheme() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>