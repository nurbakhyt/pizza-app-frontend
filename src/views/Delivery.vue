<template>
  <div class="delivery">
    <h3>Delivery</h3>

    <form
      class="delivery__form"
      @submit.prevent
    >
      <legend>Fill the form, please</legend>

      <div class="field">
        <label
          class="field__label"
          for="username"
        >
          Name
        </label>
        <input
          v-model="username"
          id="username"
          type="text"
          class="field__input"
          placeholder="Your name"
        >
      </div>

      <div class="field">
        <label
          class="field__label"
          for="phone"
        >
          Phone
        </label>
        <input
          v-model="phone"
          id="phone"
          type="text"
          class="field__input"
          placeholder="Your phone"
        >
      </div>

      <div class="field">
        <label
          class="field__label"
          for="address"
        >
          Address
        </label>
        <input
          v-model="address"
          id="address"
          type="text"
          class="field__input"
          placeholder="Your address"
        >
      </div>

      <ul class="list">
        <li class="list__item">
          <span>Nunquam carpseris equiso. Nunquam carpseris equiso.</span>
          <span class="list__price">5.99 $</span>
        </li>
      </ul>

      <button
        type="submit"
        class="delivery__btn"
      >
        Submit order
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Delivery',
  data() {
    return {
      username: '',
      phone: '',
      address: '',
    };
  },
};
</script>

<style lang="sass">
@import "~@/assets/styles/vars"
$input-color: lighten($secondary-color, 40)

.delivery
  flex: 1 1 auto
  display: flex
  flex-direction: column
  align-items: center

  &__form
    width: 320px

  &__btn
    background-color: $brand-color
    border: none
    color: white
    cursor: pointer
    font-size: .875rem
    height: 3rem
    padding: 0 2rem
    width: 100%

legend
  text-align: center
  margin-bottom: 1rem

.list
  list-style: none
  margin-bottom: 2rem

  &__item
    display: flex
    justify-content: space-between
    font-style: italic
    font-size: .875rem
    font-weight: 400
    margin-bottom: 1rem

  &__price
    white-space: nowrap

.field
  display: flex
  flex-direction: column
  margin-bottom: 1.25rem

  &__label
    color: $input-color
    font-size: .75rem
    font-style: italic
    margin-bottom: .5rem

  &__input
    background-color: transparent
    border: none
    border-bottom: 2px solid $input-color
    height: 2rem
    outline: none
    padding: 0 1rem
    width: 100%

    &:focus
      border-bottom-color: lighten($secondary-color, 30)
</style>
