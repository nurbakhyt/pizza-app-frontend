<template>
  <main>
    <products/>

    <div class="cart">
      <h3>Cart</h3>
    </div>
  </main>
</template>

<script>
import Products from '@/components/Products.vue';

export default {
  name: 'Home',
  components: {
    Products,
  },
};
</script>

<style lang="sass">
main
  display: flex
  margin-right: -.5rem
  margin-left: -.5rem

.cart
  flex: 0 0 30%
  display: none
  padding: 0 .5rem

  @media screen and (min-width: 768px)
    display: flex
</style>
