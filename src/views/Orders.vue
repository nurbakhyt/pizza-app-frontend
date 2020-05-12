<template>
  <div class="my-orders">
    <h3>My orders</h3>

    <ul class="orders">
      <li
        v-for="order in orders"
        :key="order.id"
        class="orders__item oder"
      >
        <address class="order__address">
          {{ order.address }}
          {{ order.username }}
          {{ order.phone }}
        </address>
        <p>Number of Pizzas: {{ numberOf(order.products) }}</p>
        <p>Delivery cost: ${{ order.delivery_cost }}</p>
        <p>Total: ${{ order.total }}</p>
      </li>

      <li v-if="orders.length < 1">
        Order history is empty
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Orders',
  computed: mapGetters(['orders']),
  methods: {
    numberOf(list) {
      return list.reduce((num, pizza) => num + pizza.quantity, 0);
    },
  },
};
</script>

<style lang="sass">
.my-orders
  flex: 1 1 auto

.orders
  list-style: none

  &__item
    margin-bottom: 1rem
</style>
