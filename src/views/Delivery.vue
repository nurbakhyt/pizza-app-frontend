<template>
  <div class="delivery">
    <h3>Delivery</h3>

    <form
      class="delivery__form"
      @submit.prevent="submit"
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
        <li
          v-for="(value, key, idx) in cartProducts"
          :key="key"
          class="list__item"
        >
          <span>
            {{ idx + 1 }})
            {{ productsById[key].name }}
          </span>
          <span class="list__price">
            {{ value }}
            x
            {{ productsById[key].price }}$
          </span>
        </li>

        <li
          v-if="isCartFree"
          class="list__item"
        >
          Cart is empty. Please, add pizza you like to the cart.
        </li>

        <template v-else>
          <hr>
          <li class="list__item">
            <span>Delivery:</span>
            <span class="list__price">{{ deliveryCost }}$</span>
          </li>

          <li class="list__item">
            <span>Total:</span>
            <span class="list__price">{{ total }}$</span>
          </li>
        </template>
      </ul>

      <div
        v-if="success"
        class="alert"
      >
        We have accepted your order, we will deliver soon
      </div>

      <button
        :disabled="disableBtn"
        type="submit"
        class="delivery__btn"
      >
        Submit order
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Delivery',
  data() {
    return {
      loading: false,
      username: '',
      phone: '',
      address: '',
      success: '',
    };
  },
  computed: {
    ...mapGetters([
      'cartProducts',
      'productsById',
      'isCartFree',
      'cartProductsArray',
      'deliveryCost',
    ]),
    isFilled() {
      return !this.isCartFree
        && !!this.username
        && !!this.phone
        && !!this.address;
    },
    disableBtn() {
      return this.loading || !this.isFilled;
    },
    total() {
      return this.deliveryCost + Object.keys(this.cartProducts)
        .reduce((total, key) => (total + this.cartProducts[key] * this.productsById[key].price), 0);
    },
  },
  methods: {
    ...mapActions(['order']),
    submit() {
      this.order({
        ...this.$data,
        products: this.cartProductsArray,
      })
        .then(() => {
          this.success = 'We have accepted your order, we will deliver soon.';
        })
        .finally(() => {
          this.username = '';
          this.phone = '';
          this.address = '';
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="sass">
@import "~@/assets/styles/vars"
$input-color: lighten($secondary-color, 40)

hr
  margin-bottom: 1rem

button[disabled]
  background-color: lighten($brand-color, 40)
  pointer-events: none

.delivery
  flex: 1 1 auto
  display: flex
  flex-direction: column
  align-items: center

  &__form
    max-width: 320px

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
    font-size: .75rem
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

.alert
  font-size: .75rem
  font-style: italic
  color: darken($brand-color, 10)
  margin-bottom: 1rem
</style>
