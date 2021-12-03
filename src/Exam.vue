<template>
  <div
    style="background-image: url(/img/background.jpg)"
    class="w-full h-screen flex bg-cover bg-center"
  >
    <div class="w-1/6">
      <side-bar></side-bar>
    </div>
    <div class="flex-grow flex flex-col">
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