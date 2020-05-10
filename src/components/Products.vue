<template>
  <section class="products-list">
    <h3 class="products-list__header">Menu</h3>

    <product
      v-for="product in products"
      :key="product.name"
      :product="product"
      class="products-list__item"
    />
  </section>
</template>

<script>
import axios from 'axios';
import Product from './Product.vue';

export default {
  name: 'Products',
  components: {
    Product,
  },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    try {
      const { data: { data } } = await axios.get('api/products');

      this.products = data;
    } catch (e) {
      console.warn('catched', e.response);
    }
  },
};
</script>

<style lang="sass">
.products-list
  flex: 1 1 auto
  flex-wrap: wrap
  display: flex
  padding: 0 .5rem

  &__header
    margin-bottom: 1rem
    width: 100%

  &__item
    flex: 1 1 40%
    max-width: calc(50% - 0.5rem)
</style>
