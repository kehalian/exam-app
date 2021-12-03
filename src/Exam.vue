<template>
  <div class="w-full bg-yellow-500 h-screen flex">
    <div class="w-1/6 bg-pink-400">
      <side-bar></side-bar>
    </div>
    <div class="flex-grow bg-gray-200 flex flex-col">
      <div>
        <nav-bar></nav-bar>
      </div>
      <div class="flex-grow mt-5">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
export default {
  components: { SideBar, NavBar },
};
</script>