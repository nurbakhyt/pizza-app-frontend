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

        <button
          class="cart-product__btn cart-product__btn--reduce"
          @click="reduce(productId)"
        >
          -
        </button>

        <div class="cart-product__quantity">
          {{ quantity }}
        </div>

        <button
          class="cart-product__btn cart-product__btn--add"
          @click="add(productId)"
        >
          +
        </button>

        <button
          class="cart-product__btn cart-product__btn--remove"
          @click="remove(productId)"
        >
          x
        </button>
      </div>
    </div>

  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart',
  computed: mapGetters([
    'cartProducts',
    'productsById',
  ]),
  methods: mapActions([
    'add',
    'reduce',
    'remove',
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
