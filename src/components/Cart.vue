<template>
  <section class="cart-preview">
    <h3>Cart</h3>
    <div class="card-list">
      <div
        v-for="(quantity, productId) in cartProducts"
        :key="productId"
        class="cart-list__item cart-product"
      >
        <div class="cart-product__name">
          {{ productsById[productId].name }}
        </div>

        <div class="cart-product__quantity">
          {{ quantity }}
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  computed: mapGetters([
    'cartProducts',
    'productsById',
  ]),
};
</script>

<style lang="sass">
.cart-preview
  flex: 0 0 30%
  display: none
  padding: 0 .5rem

  @media screen and (min-width: 768px)
    display: block
</style>
