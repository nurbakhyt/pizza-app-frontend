<template>
  <section class="products-list">
    <h3>Menu</h3>

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
import Product from '@/components/Product.vue';

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
h3
  margin-bottom: 1rem
  width: 100%

.products-list
  display: flex
  flex-wrap: wrap
  padding: 0 .5rem

  &__item
    flex: 1 1 auto
    margin-bottom: 1rem

    &:nth-child(2n+1)
      margin-right: 0

    @media screen and (min-width: 600px)
      flex: 1 1 40%
      margin-right: .5rem
      max-width: calc(50% - 0.5rem)

</style>
