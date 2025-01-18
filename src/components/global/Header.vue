<template>
  <header class="header">

    <!-- Search Icon -->
    <div class="search-icon">
      <img class="search-img"  :src="require('@/assets/search/searchTanfith.svg')" >
    </div>


    <!-- Hamburger Menu Icon -->
    <div class="hamburger" @click="toggleMenu">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- Navigation Links -->
    <nav :class="['nav-links', { active: isMenuOpen }]">
      <a href="#">تواصل معنا</a>
      <a href="#">العروض</a>
      <a href="#">الخدمات</a>
      <a href="#">من نحن</a>
      <a href="#">الرئيسية</a>
    </nav>

    <!-- Logo Section -->
    <div class="logo-container">
      <img class="logo-img"  :src="require('@/assets/logo/logoTanfith.svg')" >
    </div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false, // التحكم في ظهور القائمة
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Arial", sans-serif;
}

/* Header Styling */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo-container {
  flex: 1;
}

.logo {
  width: 80px;
}
/* Navigation Links */
.logo-img{
  /* width: 90px;
  height: 120px; */
  /* background-color: red; */
}
.search-img{
  /* width: 50px;
  height: 50px; */
}
.nav-links {
  display: flex;
  gap: 20px;
  flex: 2;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  font-size: 1.2em;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #f39c12;
}

/* Search Icon */
.search-icon {
  flex: 1;
  text-align: end;
  font-size: 1.5em;
  cursor: pointer;
}

.search-icon i {
  color: #fff;
}

.search-icon i:hover {
  color: #f39c12;
}

/* Hamburger Menu Icon */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
}

.hamburger div {
  width: 100%;
  height: 3px;
  background-color: #fff;
  transition: all 0.3s ease;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 80px;
    right: 0;
    flex-direction: column;
    background-color: #000;
    width: 100%;
    height: 0;
    overflow: hidden;
    transform: translateY(-100%);
  }

  .nav-links.active {
    height: auto;
    transform: translateY(0);
  }

  .hamburger {
    display: flex;
  }

  .search-icon {
    display: none;
  }
}
</style>
