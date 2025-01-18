   
 <template>
  <div class="hero-section">
    <!-- <img class="back" :src="require('@/assets/background/sliderImageSmall.png')" /> -->
    <!-- محتوى النص والزرار -->
    <!-- <div class="content">
      <button @click="navigateToProperties">انظر العقار</button>
    </div> -->

    <!-- الكاتيجوريز في أسفل الصفحة -->
    <div class="categories">
      <div v-for="category in categories" :key="category.name" class="category-item cursor">
        <img :src="category.icon" :alt="category.name" />
        <span>{{ category.name }}</span>
      </div>
      <div class="cont-whats cursor">
        <img class="whats" :src="require('@/assets/categories/whats.png')" />

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
      { name: "محلات", icon: require('@/assets/categories/Condo.png') },
      { name: "غرف", icon: require('@/assets/categories/rooms.png') },
      { name: "فيلا", icon: require('@/assets/categories/vila.png') },
      { name: "شقق", icon: require('@/assets/categories/rooms.png') },
      { name: "أراضي", icon: require('@/assets/categories/grounds.png') },
      { name: "مزارع", icon: require('@/assets/categories/farms.png') },
      { name: "استراحه", icon: require('@/assets/categories/breaks.png') },
      { name: "رووف", icon: require('@/assets/categories/roofs.png') },
      { name: "الكل", icon: require('@/assets/categories/all.png') },
      // أضف الفئات الأخرى بنفس الطريقة...
    ],

    };
  },
  methods: {
    navigateToProperties() {
      // التنقل إلى صفحة العقارات
      console.log("Navigating to properties...");
    },
  },
};
</script>

<style scoped lang="scss">





/* قسم الخلفية */
.hero-section {
  height: 70vh;
  width: 100%;
  background: url('../../assets/background/sliderImageSvg.svg'); 
  background-size: 100% 100% !important; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* المساحة بين النص والكاتيجوريز */
  position: relative;
  // background-color: red;
}
.hero-section img.back {
  width: 100%;
  height: 100%;
  object-fit: cover; /* يضمن أن تغطي الصورة العنصر دون تشويه */
  position: absolute;
  top: 0;
  left: 0;
}

/* قسم النص والزرار */
.content {
  text-align: center;
  color: #fff;
  margin-top: 50px; /* مسافة من أعلى الصفحة */
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

button {
  background-color: #d4aa6b;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #b38850;
}

/* قسم الكاتيجوريز */
.categories {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* padding: 20px; */
  background-color:white; 
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  border-radius: 15px;
}

.category-item {
  margin: 10px;
  text-align: center;
  color: #fff;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease; 

}
.category-item:hover {
  transform: scale(1.1); 
}
.category-item img {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}

.category-item span {
  font-size: 0.9rem;
  font-weight: bold;
  color: black;
}
.cont-whats{
  position: absolute;
  left: -10%;
  bottom: 50%;
  transform: translateY(50%);
  // background-color: red;
  width: 60px;
  height:60px ;
  
  .whats{
    width: 60px;
    height:60px ;
    transition: transform 0.3s ease;

  }
  .whats:hover {
  transform: scale(1.1);
}
}
.cursor{
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .hero-section {
    background: url('../../assets/background/sliderImageSvgSmall.svg') no-repeat center center; 

    /* height: 100vh ;  */
    

  }
}

</style>
