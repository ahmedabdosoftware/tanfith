<template>
    <div class="about-section">
      <div class="about-container">
        <!-- شعار الشركة -->
        <div class="about-logo">
          <img  :src="require('@/assets/logo/logoAbout.png')" >
        </div>
  
        <!-- محتوى النص -->
        <div class="about-content">
          <pre  class="pre-first">   
    شركة سـعودیـة تـعمل في مـجال العقارا مـصنفة مـن الـدرجـة <span class="highlighted">HG Realestate</span>
      الـاولى مـن هـیئة الـتصنیف. تعمل في أعمال العظم والبناء والتشطيبات وتسليم عالمفتاح   
          وجميع أنواع الصيانة والترميمات وأعمال الحفر والدفان ولديها مصنع خرسانة جاهز
      وجميع أنواع الخرساناتو لدينا قائمة مشاريع عملاقة بالمنطقة من تشجير وصرف صحي 
   وطرق وجسور والكثير من المشاريع. مـرکـزهـا الـرئیسـي في منطقة جازان مدينة الرياض 
                          وفي طـور التوسع لتغطیة كل مناطق  المملکة في المستقبل بمشیئة الله.
          </pre>
          <pre class="pre-second">   
            تـعمل في مـجال العقارا <span class="highlighted">HG Realestate</span>
                            شركة سـعودیـة مـصنفة مـن الـدرجـة 
     الـاولى مـن هـیئة الـتصنیف. تعمل في أعمال العظم والبناء
 والتشطيبات وتسليم عالمفتاح   وجميع أنواع الصيانة والترميمات 
               وأعمال الحفر والدفان ولديها مصنع خرسانة جاهز
              وجميع أنواع الخرساناتو لدينا قائمة مشاريع عملاقة
                                بالمنطقة من تشجير وصرف صحي 
                 وطرق وجسور والكثير من المشاريع. مـرکـزهـا 
    الـرئیسـي في منطقة جازان مدينة الرياض وفي طـور التوسع
                                  لتغطية كل اماكن المملكة بمشیئة الله 
          </pre>
         
  
          <!-- النص المختصر أو الكامل -->
          <pre v-if="showFullText">
            المزيد من المعلومات المتعلقة بمشاريع الشركة والتوسعات
             يمكن أن تُعرض هنا إذا كان هناك تفاصيل اخري
          </pre>
  
          <!-- زرار عرض المزيد أو أقل -->
          <a href="#" @click.prevent="toggleText" class="read-more">
            {{ showFullText ? "اقرأ أقل" : "اقرأ المزيد" }}
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showFullText: false, // تحديد حالة عرض النص بالكامل
      };
    },
    methods: {
      toggleText() {
        this.showFullText = !this.showFullText; // تبديل الحالة عند الضغط على الزر
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .about-section {
    /* background-color: #000; */
    /* padding: 40px 80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: Arial, sans-serif;
    width:100%;
    min-height:400px;
    /* background-color: blue !important; */
    
  }
  .about-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
  }
  .about-content,.about-logo{
      width: 40%;
      height: 100%;
      /* background-color: red; */
      
    }
  
  .about-logo {
    text-align: center;

  }
  
  .about-logo img {
    width: 90%;
    height: 300px;
  }
  
  .about-logo pre {
    font-weight: bold;
    font-size: 22px;
    color: #d4aa6b;
  }
  
  .about-content {
    font-size: 18px;
    line-height: 2;
  }
  
  .about-content .highlighted {
    color: #d4aa6b;
    font-weight: bold;
    font-size: 22px;
  }
  
  .about-content pre {
    margin-bottom: 20px;
  }
  .about-content .pre-first {
    display: block; /* يظهر هذا على الشاشات العادية */
  }

  .about-content .pre-second {
    display: none; /* لا يظهر هذا في الشاشات العادية */
  }
  .about-content .read-more {
    color: #d4aa6b;
    text-decoration:underline;
    font-weight: bold;
    display: inline-block;
    cursor: pointer;
  }
  
  .about-content .read-more:hover {
    text-decoration: underline;
  }

  @media(max-width:460px){
   .about-content,.about-logo{
    width:100%;
    min-height: 300px;

    // background-color: red;
   }
   
   .about-content{
    pre{
     font-size: 17px;
     margin-left: -10px;
    }
   }
   .about-content .pre-first {
    display: none; /* لا يظهر هذا في الشاشات الصغيرة */
  }

  .about-content .pre-second {
    display: block; /* يظهر هذا فقط في الشاشات الصغيرة */
  }
  }

  </style>
  