<template>
  <!-- shop view -->
  <div class="shop">
      <!-- Background section -->
      <div class="Background" >
        <backgroundApp></backgroundApp>
      </div> 
      <div class="About" >
        <About></About>
      </div> 
      <!-- product section -->
      <ProductList
      tag="top"
      id="TopProducts"
      >
    </ProductList>
    <services></services>
      
  </div>
</template>
<script>

  // sweetalert 
  // import sweetalert from "sweetalert";

//componnents  Vue.js components

  // backgroundApp
  import backgroundApp from "@/components/background/backgroundApp.vue";
  // About
  import About from "@/components/about/About.vue";
  // ProductList
  import ProductList from "@/components/products/ProductList.vue";
  // ProductList
  import services from "@/components/services/services.vue";

// actions 
  //  import {mapActions } from 'pinia'

export default{
  name: "Home-page",
  components: {
    backgroundApp,
    About,
    ProductList,
    services,

  
  },
  methods: {
      
    // ============ my actions => start=======================================


    // ============ my actions => end==========================================
 
  },
 
  data(){
    return{
    }
  }
}

</script>
<style lang="scss" scoped>
// all the view
.shop{
  min-height: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  background-color: black;
  
}
// Background section
.Background{
  height: 90vh;
  width: 100%;
  // made by canva app
  // background-image: url("@/assets/backgroundC.png");
  // background-color:blue;
}
.About{
  width: 100%;
  min-height: 400px;

}
.mark-it{
  color: white;
  // background-color: rgb(22, 175, 22);
  background-color:  hsl(79, 63%, 50%);
  // background-color: rgb(127, 6, 6);
  display: inline-block;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 5px;
  clip-path: polygon(0% 0% , 100% 0% , 92% 50%, 100% 100% ,0% 100%,8% 50%);

}

</style>