<template>
  <article class="product">
    <img
      src="@/assets/pizza.png"
      class="product__image"
      alt=""
    >
    <div class="product__body">
      <h2 class="product__name">{{ product.name }}</h2>
      <p class="product__description">{{ product.description }}</p>
    </div>
    <button
      class="product__btn"
      @click="buy"
    >
      Add to cart
      <span class="product__price">
        USD {{ product.price }}
      </span>
    </button>
  </article>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(['add']),
    buy() {
      this.add(this.product.id);
    },
  },
};
</script>

<style lang="sass">
@import "~@/assets/styles/vars"
$sc: $secondary-color

.product
  background-color: #fff
  border-radius: 1rem
  box-shadow: 0 1px 4px -2px lighten($sc, 60), 0 4px 8px -2px lighten($sc, 60)
  display: flex
  flex-direction: column
  margin-right: .5rem
  margin-bottom: 1rem
  overflow: hidden
  position: relative

  &:nth-child(2n+1)
    margin-right: 0

  &__image
    margin-bottom: 1rem
    width: 100%

  &__body
    flex: 1 1 auto
    display: flex
    flex-direction: column
    padding: .5rem

  &__name
    font-size: 1.25rem
    font-weight: 400
    line-height: 1.75rem
    margin-bottom: .5rem

  &__description
    color: lighten($secondary-color, 30)
    font-size: .75rem

  &__price
    padding: 0 1rem

  &__btn
    display: flex
    justify-content: center
    align-items: center
    background-color: $brand-color
    border: none
    color: #fff
    cursor: pointer
    font-size: .875rem
    height: 3rem
    padding: 0 1rem
    transition: background-color .2s ease-in
    width: 100%

    &:hover,
    &:focus
      background-color: darken($brand-color, 5)

</style>
