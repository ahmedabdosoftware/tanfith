import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductsStore = defineStore('useProductsStore', {
  state: () => ({
    products: [],
    url: 'https://dev-hg.tanfith-digital.com/api/v1/', // URL الأساسي
  }),

  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get(`${this.url}ads-for-home`); // استخدام axios لجلب البيانات
        console.log(response.data.data.data);  // تحقق من شكل البيانات
        this.products = response.data.data;
        console.log(this.products)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  }
});
