<template>
  <div class="w-full bg-yellow-500 h-screen flex">
     <div class="w-1/5 bg-pink-400">
          <side-bar></side-bar>
     </div>
     <div class="flex-grow bg-gray-200">
       <router-view></router-view>
     </div>
  </div>
</template>
<script>
import SideBar from './components/SideBar.vue';
export default {
  components: { SideBar },};
</script>