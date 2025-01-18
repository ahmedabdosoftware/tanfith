<template>
    <!--==================== PRODUCT LIST ====================-->  
    <section id="products" class="products">
      <div class="titleProducts">
        <div>
          <!-- Slot for the title, with a default fallback -->
          <h1 class="title-name">
            <slot name="section-title">
              <h2>احدث العروض</h2>
              <p>  نقدم احدث العروض لعملائها باحترافية واتقان وتسعى دائما بأن يكون رضا العميل  اولا </p>
            </slot>
          </h1>
        </div>
        <div class="">
          <input
          placeholder="search"
          type="search"
          v-model="searchQuery" 
        />
        <select class="filter" placeholder="filter" v-model="selectedFilter" >
          <option value="price">السعر</option>
          <option value="city">المدينه</option>
          <option value="title">النوع</option>
        </select>
        </div>
      </div>
      <div class="allContentProduct">
        <div v-for="product in filteredProducts" :key="product.id">
          <BoxProduct
            :oneProduct="product"
          ></BoxProduct>
        </div>
      </div>
      <div v-if="isLoading"   class="loader-container">
          <CircleLoaderSpicific
            :show="isLoading"
          >
        </CircleLoaderSpicific>
      </div>
    </section>
</template>

<script>

// componnents  Vue.js components
  import BoxProduct from "@/components/products/BoxProduct.vue";
  import CircleLoaderSpicific from "@/shared/components/loading/CircleLoaderSpicific.vue";

  // actions 
  import {  mapState , mapActions } from 'pinia'
  //store
  import { useProductsStore } from '@/store/products/products.js'
export default {
  // props: ["ProductList"],

  props: {
    tag: {
      type: String,
      default: null,
    },
    categoryId: {
      default: null,
    },
    ProductList: {
      default: null,
    },
  },
  name: "ProductList",
  components: {
    BoxProduct,
    CircleLoaderSpicific,

  },
  computed: {
  ...mapState(useProductsStore, ['products']),
  // ============ filter => start=======================================
        
    // الفلترة النهائية
    filteredProducts() {
      let filteredProducts = this.products;


      // // الخطوة 2: الفلترة بناءً على البحث
      if (this.searchQuery) {
        filteredProducts = filteredProducts.filter(product => {
          const valueToSearch = product[this.selectedFilter]?.toString().toLowerCase() || '';
          return valueToSearch.includes(this.searchQuery.toLowerCase());
        });
      }

      return filteredProducts;
    },
  // ============ filter => end=======================================

  },
  
  methods:{
  
    // ============ my actions => start=======================================

    ...mapActions(useProductsStore, ['fetchProducts']),

    // ============ my actions => end==========================================

},
async created() {
    try {
      await this.fetchProducts()  
      console.log(this.products)
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      this.isLoading = false; // تعطيل اللودر بعد الانتهاء
    }
  },


data(){
    return{
      selectedFilter:"price",
      searchQuery:"",
      isLoading: true, // الحالة الافتراضية لللودر

    }
  }
  }
</script>

<style scoped lang="scss">
.products,.catogery{
  min-height: 400px;
  // background-color: rgb(209, 157, 52);
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  justify-content: space-evenly;
  margin-top: 10px;
}
.titleCatogery{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  // background-color: rgb(60, 34, 178);
  h1{
    text-transform: capitalize;
    color: black;
    font-weight: 800;
    font-size: 33px;
    span{
      // background-color:  hsl(79, 63%, 50%);
      // background-color: rgb(127, 6, 6);
      display: inline-block;
      padding-left: 25px;
      padding-right: 25px;
      padding-bottom: 5px;
      clip-path: polygon(0% 0% , 100% 0% , 92% 50%, 100% 100% ,0% 100%,8% 50%);
      color: white;
    }
  }
  
}
.titleProducts{
  width: 100%;
  height: 200px ;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  // background-color: firebrick;
  
  >div:first-child{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    // background-color: chocolate;
    height: 44%;
    width: 100%;
    >h1{
      text-transform: capitalize;
      color: black;
      font-weight: 800;
      font-size: 33px;
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
    
    }
  }
  >div:nth-child(2){
    // background-color: seagreen;
    height: 50%;
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    select {
        border-radius: 5px;
        height: 40px;
        width: 100px;
        text-transform: capitalize;
        color: black;
        border: solid 2px rgb(233, 230, 230);
        padding-left: 10px;
      }
      input {
        height: 40px;
        width: 270px;
        padding-left: 15px;
        color: black;
        border: solid 2px rgb(233, 230, 230);
        border-radius: 5px;
      }
      input:focus {
        outline: none;
      }
  }
}
.allContentProduct,.allContentCatogery {
  width: 100%;
  min-height: 300px;
  // background-color: red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  margin-top: 10px;
}
.allContentProduct > div {
  width: 350px;
  height: 450px;
  margin-top: 15px;
  margin-bottom: 15px;
  //  background-color: blue;
}
.allContentCatogery >div{
  margin-top: 15px;
  margin-bottom: 15px;
  width: 250px;
  height: 250px;
  //  background-color: red;
}
.title-name{
    // background-color: red;
    color: white !important;
  }
 /* media => ipad */
 @media(max-width:850px){
  .allContentProduct >div{ 
      width: 40% !important;
  }
  .titleProducts{
  
  >div:nth-child(2){
    width: 100%;
    select {
        width: 60px;
      }
      input {
        width: 150px;
      }
   
  }
}
 
 }
 @media(max-width:500px){
   .allContentProduct >div{ 
      width: 50% !important;
      height: 300px !important;
  }
  }
 @media(max-width:460px){
   .allContentProduct >div{ 
      width: 50% !important;
      height: 300px;
  }

  .title-name{
    // background-color: red;
    font-size: 19px !important;
  }

  .titleProducts{
  >div:nth-child(2){
    width: 100%;
    select {
        width: 80px;
      }
      input {
        width: 200px;
      }
   
  }
}
 }

</style>
