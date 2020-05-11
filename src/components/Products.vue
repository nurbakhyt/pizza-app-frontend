<template>
  <section class="products-list">
    <h3 class="products-list__header">Menu</h3>

    <product
      v-for="id in productsIds"
      :key="id"
      :product="productsById[id]"
      class="products-list__item"
    />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Product from './Product.vue';

export default {
  name: 'Products',
  components: {
    Product,
  },
  computed: mapGetters([
    'productsIds',
    'productsById',
  ]),
  mounted() {
    this.fetchProducts();
  },
  methods: mapActions(['fetchProducts']),
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
