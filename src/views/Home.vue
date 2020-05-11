<template>
  <main>
    <products/>

    <cart/>
  </main>
</template>

<script>
import Products from '@/components/Products.vue';
import Cart from '@/components/Cart.vue';

export default {
  name: 'Home',
  components: {
    Products,
    Cart,
  },
};
</script>

<style lang="sass">
main
  display: flex
  margin-right: -.5rem
  margin-left: -.5rem
</style>
