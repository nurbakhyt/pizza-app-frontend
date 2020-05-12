import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import cart from './cart';
import products from './products';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({
    cart: {
      orders: state.cart.orders,
    },
  }),
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    products,
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  plugins: [vuexLocal.plugin],
});
