<template>
    <footer class="footer">
      <div class="footer-container">
        <!-- الدعم -->
        <div class="footer-section support">
          <h3 class="footer-section__title">الدعم</h3>
          <p>تواصل معنا</p>
          <div class="social-icons">
            <a href="#">
              <img src="@/assets/icons/facebook.png" alt="Facebook" class="social-icon" />
            </a>
            <a href="#">
              <img src="@/assets/icons/whatsapp.png" alt="WhatsApp" class="social-icon" />
            </a>
            <a href="#">
              <img src="@/assets/icons/instagram.png" alt="Instagram" class="social-icon" />
            </a>
            <a href="#">
              <img src="@/assets/icons/linkedin.png" alt="LinkedIn" class="social-icon" />
            </a>
          </div>
        </div>
  
        <!-- الخدمات -->
        <div class="footer-section services">
          <h3 class="footer-section__title">الخدمات</h3>
          <ul>
            <li>تأجير العقارات (السكني - التجاري)</li>
            <li>تسويق العقارات للبيع والتأجير</li>
            <li>بيع العقارات (السكني - التجاري)</li>
            <li>توثيق عقود عبر شبكة إيجار</li>
            <li>بيع شراكات وتأجير تمليك حلول ذكية</li>
            <li>استلام وإنهاء إجراءات طلب التمويل العقاري</li>
          </ul>
        </div>
  
        <!-- الشركة -->
        <div class="footer-section company">
          <h3 class="footer-section__title">الشركة</h3>
          <ul>
            <li>الرئيسية</li>
            <li>من نحن</li>
            <li>العروض</li>
            <li>الخدمات</li>
          </ul>
        </div>
  
        <!-- معلومات الاتصال -->
        <div class="footer-section contact">
          <img src="@/assets/logo/logoAbout.png" alt="HG Real Estate Logo" class="logo" />
          <ul>
            <li>
                aljubran05334@gmail.com
                <img src="@/assets/icons/email.png" alt="Email" class="icon" />
            </li>
            <li>
                ttb_111@hotmail.com
                <img src="@/assets/icons/email.png" alt="Email" class="icon" />
            </li>
            <li>
                أبها - المحالة
                <img src="@/assets/icons/location.png" alt="Location" class="icon" />
            </li>
            <li>
                0540855124
                <img src="@/assets/icons/phone.png" alt="Phone" class="icon" />
            </li>
            <li>
                0533499863
                <img src="@/assets/icons/phone.png" alt="Phone" class="icon" />
            </li>
          </ul>
        </div>
      </div>
  
      <!-- حقوق النشر -->
      <div class="footer-bottom">
        <p>© حقوق الطبع والنشر 2021 جميع الحقوق محفوظة. تصميم تنفيذ الحلول الرقمية</p>
        <div class="theme-toggle">
          الوضع الليلي <input type="checkbox" />
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped lang="scss">
  .footer {
    background-color: #000;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    font-family: Arial, sans-serif;
    border-top: 2px #DEC38C80 solid;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
    // background-color: blue; 
  }
  
  .footer-section {
    // flex: 1 1 20%;
    margin: 10px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  
  .footer-section h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .footer-section ul {
    list-style: disc; 
    padding: 0;
  }
  
  .footer-section ul li {
    margin: 5px 0;
    display: flex;
    align-items: start;
  }
  
  .footer-section .social-icons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .footer-section .social-icon {
    width: 30px;
    height: 30px;
    margin: 0 5px;
  }
  
  .footer-section .logo {
    width: 80px;
    margin-bottom: 10px;
  }
  
  .footer-section .icon {
    width: 20px;
    margin-left: 20px;
  }
  
  .footer-bottom {
    margin-top: 20px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    // background-color: red;

    
  }
  
  .footer-bottom .theme-toggle input {
    margin-left: 10px;
  }
  .theme-toggle{
    margin-left: 200px !important;
  }
  .contact li{
    margin-top: 10px !important;

  }
  .footer-section__title{
    font-size: 25px !important;
    text-decoration: underline;
    color: #DEC38C;

  }

  @media (max-width: 480px) {
.services{
    width: 100% !important;
    // background-color: red;
}
   

.footer-bottom{
    p{
        font-size: 17px;
    }
}
.theme-toggle {
    margin-left: 0px !important;
}
.support{
    order: 1;
}
.company{
    order: 2;
}
.services{
    order: 3;
}
.contact{
    order: 4;
}
}
  </style>
  