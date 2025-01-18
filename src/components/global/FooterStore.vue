<template>
    <footer class="footer">
      <div class="footer-container">
      <!-- Section 1: Social Media -->
        <div class="footer-section">
        <h5 class="title">Contact Us</h5>
        <div class="footer-icons">
            <a href="https://www.facebook.com/sayed.afrecano?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'facebook']" class="icon" />
            </a>
            <a href="https://www.instagram.com/simba_supplements?igsh=MXYyd25qYmppYmZjMg==" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
            </a>
            <a href="https://www.twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'twitter']" class="icon" />
            </a>
        </div>
        </div>

  
        <!-- Section 2: Contact Info -->
        <div class="footer-section">
          <h5 class="title">Contact With Us</h5>
          <p class="mr-top">
            <font-awesome-icon :icon="['fas', 'envelope']" /> Sayed.saeed@yahoo.com
          </p>
          <p class="mr-top">
            <font-awesome-icon :icon="['fas', 'phone']" /> +201140665450
          </p>
        </div>
  
        <!-- Section 3: Quick Links -->
        <div class="footer-section">
          <h5 class="title">Quick Links</h5>
          <ul>
            <li><router-link style="font-size: 14px;" to="/Policies">Privacy Policy</router-link></li>
            <li><router-link style="font-size: 14px;" to="/RefundsPolicy">Refund and Exchange Policy</router-link></li>
            <li>Our Products</li>
            <li>Locations</li>
          </ul>
        </div>
  
        <!-- Section 4: Location -->
        <div class="footer-section">
          <h5 class="title">Location</h5>
          <p class="mr-top">Main center: Shubra - Al Mahjar district</p>
          <p class="mr-top">07:00 AM - 03:00 PM</p>
        </div>
        <div class="footer-section map">
          <div class="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3451.005976487672!2d31.26676367555679!3d30.1226424748844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA3JzIxLjUiTiAzMcKwMTYnMDkuNiJF!5e0!3m2!1sen!2seg!4v1737190610930!5m2!1sen!2seg" 
                width="200px"
                height="200px"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                >
            </iframe>

          </div>
        </div>
      </div>
      <div class="footer-bottom">
        Simpa Supplements — 2024 ©
      </div>
    </footer>
  </template>
  
  <script>
  
  export default {
    name: "Footer-section",
    components: {
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #000;
    color: white;
    padding: 20px;
    text-align: center;
    min-height: 300px !important;
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: start;
  }
  
  .footer-section {
    text-align: left;
    /* background-color: rgb(91, 91, 34); */
    /* padding-left: 20px; */
  }
  .map{
    width: 200px;
    height: 200px;
  }
  .footer-icons a .icon {
    font-size: 24px;
    margin: 0 10px;
    cursor: pointer;
  }
  
  .footer-icons a .icon:hover {
    color: #ccc;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    margin: 10px 0 !important;
    color: white;
    font-size: 14px !important;
  }
  
  ul li a {
    text-decoration: none;
    color: white;
  }
  
  ul li a:hover {
    text-decoration: underline;
  }
  
  .map-container {
    width: 100%;
    height: 150px;
    /* border: 1px solid #ccc; */
    overflow: hidden;
  }
  
  .footer-bottom {
    margin-top: 20px;
    font-size: 19px;
    text-align: center;
    /* background-color: red; */
}
.title{
      font-size: 19px;
      margin-bottom: 10px;
    }
    .mr-top{
    margin-top: 10px;

  }
  
  @media(max-width:460px){
    .footer-section {
        width: 100%;
        margin-top: 30px;
    }
    .map{
        width: 100%;
  }
  }
  </style>
  