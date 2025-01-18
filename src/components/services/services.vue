<template>
    <section class="services-section">
      <h2 class="section-title">الخدمات</h2>
      <p class="section-description">
        نقدم خدمات متنوعة لعملائنا باحترافية وإتقان ونسعى دائماً لأن يكون رضا العميل أولاً.
      </p>
      <swiper
        :slides-per-view="isMobile ? 1 : 4"
        :space-between="30"
        loop="true"
        :pagination="{ clickable: true }"
        :navigation="true" 
        :modules="modules"
        class="services-slider"
      >
        <swiper-slide v-for="(service, index) in services" :key="index" class="service-card">
          <div class="icon-container">
            <img :src="service.icon" :alt="service.title" class="service-icon" />
          </div>
          <div class="text-cont">
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
          </div>
        </swiper-slide>
      </swiper>
      <button class="view-all-button">مشاهدة كل الخدمات</button>
    </section>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import {  Navigation,Pagination } from 'swiper/modules';

  import "swiper/css";
  import "swiper/css/pagination";
  import 'swiper/css/navigation';

  
  export default {
    name: "ServicesSection",
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        isMobile: window.innerWidth <= 768,
        modules: [ Pagination, Navigation],

        services: [
          {
            icon: require("@/assets/icons/icon1.png"),
            title: "استلام وإنهاء إجراءات طلب التمويل العقاري",
            description: "إجراءات سهلة وسريعة لإنهاء طلبك.",
          },
          {
            icon: require("@/assets/icons/icon2.png"),
            title: "بيع، شراء، تأجير، ضمان طول بقاء",
            description: "حلول متكاملة لاحتياجاتك العقارية.",
          },
          {
            icon: require("@/assets/icons/icon3.png"),
            title: "توثيق عقود غير شبكة - إيجار",
            description: "خدمة توثيق العقود بكل سهولة.",
          },
          {
            icon: require("@/assets/icons/icon4.png"),
            title: "بيع العقارات الراقي - مباني",
            description: "استثمارات مميزة للمستقبل.",
          },
          {
            icon: require("@/assets/icons/icon2.png"),
            title: "بيع العقارات الراقي - مباني",
            description: "استثمارات مميزة للمستقبل.",
          },
        ],
      };
    },
    mounted() {
      window.addEventListener("resize", this.updateMobileView);
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.updateMobileView);
    },
    methods: {
      updateMobileView() {
        this.isMobile = window.innerWidth <= 768;
      },
    },
  };
  </script>
  
  <style scoped>
  .services-section {
    text-align: center;
    background-color: #000;
    padding: 50px 20px;
    color: #fff;
  }
 

  .section-title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .section-description {
    font-size: 16px;
    margin-bottom: 30px;
  }
  .services-slider {
    margin: 0 auto;
    max-width: 1200px;
  }
  .service-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    /* padding: 20px; */
    text-align: center;
  }
  .text-cont {
  width: 100%;
  height: 100px;
  background-color: #DEC38C; /* اللون الذهبي الفاتح */
  color: black;
  border-radius: 10px; /* حواف مستديرة */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* ظل خفيف */
  display: flex;
  flex-direction: column;
  justify-content: center; /* محاذاة عمودية للنص */
  align-items: center; /* محاذاة أفقية للنص */
  padding: 10px;
}

  .icon-container {
    margin-bottom: 15px;
    background-color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .service-icon {
    width: 80px;
    height: 80px;
  }
  .service-title {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .service-description {
    font-size: 14px;
    color:  black;
  }
  .view-all-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #f0a500;
    color: #000;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .view-all-button:hover {
    background-color: #ffa700;
  }
  .swiper-pagination-bullets {
    bottom: 20px;
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #f0a500;
    opacity: 1;
    margin: 0 6px;
    transition: background-color 0.3s ease;
  }
  .swiper-pagination-bullet-active {
    background-color: #ffa700;
  }
    ::v-deep .swiper-button-next,
    ::v-deep .swiper-button-prev {
    color: #f0a500;
    font-size: 24px;
    transition: color 0.3s;
    }

    ::v-deep .swiper-button-next:hover,
    ::v-deep .swiper-button-prev:hover {
    color: #ffa700;
    }
  @media (max-width: 480px) {

   
    .section-description {
    font-size: 13px !important;
    margin-bottom: 30px;
  }

}
  </style>
  