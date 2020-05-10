<template>
  <nav class="nav">
    <router-link
      exact
      to="/"
      class="nav__link"
      active-class="nav__link--active"
    >
      Pizzas
    </router-link>

    <router-link
      to="/cart"
      class="nav__link"
      active-class="nav__link--active"
    >
      Cart
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="sass">
@import "~@/assets/styles/vars"

.nav
  display: flex
  justify-content: center
  font-weight: bold
  padding: 2rem 0
  text-align: center

  &__link
    color: $secondary-color
    display: inline-block
    line-height: 2rem
    text-decoration: none
    padding: 0 .25rem
    margin-right: 1rem

    &:last-child
      margin-right: 0

    &--active
      color: $brand-color
      border-bottom: 3px solid $brand-color

</style>
