import axios from 'axios';

export default {
  state: {
    items: [],
  },
  getters: {
    products: (state) => state.items,
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const { data: { data } } = await axios.get('api/products');

        commit('FETCHED_PRODUCTS', data);
      } catch (e) {
        console.warn(e.response);
      }
    },
  },
  mutations: {
    FETCHED_PRODUCTS(state, products) {
      state.items = products;
    },
  },
};
