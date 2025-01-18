<template>
  <Header></Header>
  <router-view class="view"/>
  <FooterTanfith></FooterTanfith>
 
 </template>
 
 
 <script>
 import Header from "@/components/global/Header.vue";
 import FooterStore from "@/components/global/FooterStore.vue";
 import FooterTanfith from "@/components/global/FooterTanfith.vue";
 
 export default {
   name: "App",
   components: {
     Header,
     FooterStore,
     FooterTanfith,
   },
 
 };
 </script>
 
  
  <style scoped lang="scss">
  nav {
  padding: 30px;

  a {
    font-weight: bold;
    // color: #2c3e50;
    color: red;

    &.router-link-exact-active {
      // color: #42b983;
      color: red;

    }
  }
}
.view{
  overflow-x: hidden;
}
  </style>
  