<template>
  <div id="app">
    <navbar/>

    <div class="container">
      <cart/>

      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import Cart from '@/components/Delivery.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Cart,
  },
};
</script>

<style lang="sass">
@import "~@/assets/styles/vars"

*
  box-sizing: border-box
  padding: 0
  margin: 0

html
  color: $secondary-color
  font-size: 16px

body
  background-color: #f1f1f1

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  max-width: 720px
  margin: 0 auto
  padding: 0 .5rem

.container
  display: flex
  flex-direction: row-reverse

main
  flex: 1 1 auto
  display: flex
  padding: 0 .5rem
</style>
