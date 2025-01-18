<template>
  <div class="property-card">
    <img :src="oneProduct.min_image" alt="Property Image" class="property-image" />
    <div class="property-info">
      <h3 class="property-title">{{ oneProduct.title }}</h3>
      <p class="property-description">{{ oneProduct.sub_description }}</p>
      <div class="property-price">{{ formatPrice(oneProduct.price) }} ريال سعودي</div>
      <div class="property-location">
        {{ oneProduct.city }} - {{ oneProduct.neighborhood }}
      </div>
      <div class="property-attributes">
        <div
          v-for="(attribute, index) in oneProduct.attributes"
          :key="index"
          class="attribute"
        >
        <span class="attribute-value">
          {{ attribute.value }} {{ attribute.unit }}
        </span>
        <img :src="attribute.first_img" :alt="attribute.title" class="attribute-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertyCard",
  props: ["oneProduct"],
  methods: {
    formatPrice(price) {
      return price.toLocaleString(); // Format the price with commas
    },
  },
};
</script>

<style scoped>
.property-card {
  background-color: #181818;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}
.property-card:hover {
  transform: translateY(-5px);
}
.property-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.property-info {
  padding: 15px;
  text-align: center;
}
.property-title {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
}
.property-description {
  font-size: 14px;
  margin-bottom: 15px;
}
.property-price {
  font-size: 16px;
  color: #ffca28;
  margin-bottom: 10px;
}
.property-location {
  font-size: 14px;
  margin-bottom: 10px;
}
.property-attributes {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}
.attribute {
  display: flex;
  align-items: center;
  gap: 5px;
}
.attribute-icon {
  width: 20px;
  height: 20px;
}
.attribute-value {
  font-size: 14px;
}
@media (max-width: 768px) {
  .property-card {
    margin: 20px auto;
    width: 100%; 
  }
  .property-image {
    height: 150px;
  }
  .property-info {
    padding: 10px; 
  }
  .property-title {
    font-size: 16px;
  }
  .property-description {
    font-size: 12px; 
  }
  .property-price {
    font-size: 14px; 
  }
  .property-location {
    font-size: 12px; 
  }
  .property-attributes {
    flex-wrap: wrap; 
    gap: 5px;
  }
  .attribute {
    gap: 3px;
  }
  .attribute-icon {
    width: 16px; 
    height: 16px;
  }
  .attribute-value {
    font-size: 12px; 
  }
}

@media (max-width: 480px) {
  .property-card {
    box-shadow: none; 
    border-radius: 5px; 
    /* margin-left: 10px;
    margin-right: 10px; */
  }
  .property-image {
    height: 120px; 
  }
  .property-title {
    font-size: 14px;
  }
  .property-price {
    font-size: 12px;
  }
}

</style>
