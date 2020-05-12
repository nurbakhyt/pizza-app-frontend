<template>
  <section class="cart-preview">
    <h3>Cart</h3>
    <div class="card-list">
      <div
        v-for="(quantity, productId, idx) in cartProducts"
        :key="productId"
        class="cart-list__item cart-product"
      >
        <p class="cart-product__name">
          {{ idx + 1 }})
          {{ productsById[productId].name }}
        </p>

        <div class="cart-product__actions">
          <div>
            <button
              class="cart-product__btn cart-product__btn--reduce"
              @click="reduce(productId)"
            >
              -
            </button>

            <span class="cart-product__quantity">
              {{ quantity }}
            </span>

            <button
              class="cart-product__btn cart-product__btn--add"
              @click="add(productId)"
            >
              +
            </button>
          </div>

          <button
            class="cart-product__btn cart-product__btn--remove"
            @click="remove(productId)"
          >
            x
          </button>
        </div>
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
@import "~@/assets/styles/vars"
$red: #b05656

.cart-preview
  flex: 0 0 30%
  display: none
  padding: 0 .5rem

  @media screen and (min-width: 768px)
    display: block

.cart-product
  border-bottom: 1px solid lighten($secondary-color, 50)
  color: lighten($secondary-color, 15)
  margin-bottom: 1rem
  padding-bottom: .5rem

  &__name
    margin-bottom: .25rem
    font-size: .875rem

  &__actions
    display: flex
    justify-content: space-between

  &__quantity
    line-height: 1.5rem
    padding: 0 .5rem

  &__btn
    background-color: lighten($secondary-color, 50)
    border: none
    cursor: pointer
    font-size: 1rem
    line-height: 1.5rem
    padding: 0
    height: 1.5rem
    width: 2rem

    &:hover,
    &:focus
      background-color: lighten($secondary-color, 40)

    &:active
      background-color: lighten($secondary-color, 30)

    &--add
      border-top-right-radius: 1rem
      border-bottom-right-radius: 1rem

    &--reduce
      border-top-left-radius: 1rem
      border-bottom-left-radius: 1rem

    &--remove
      background-color: $red
      border-radius: 1rem
      color: white

      &:hover,
      &:focus
        background-color: darken($red, 10)

      &:active
        background-color: darken($red, 15)
</style>
