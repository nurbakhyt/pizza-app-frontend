import axios from 'axios';

export default {
  state: {
    ids: [],
    byId: {},
  },
  getters: {
    productsIds: (state) => state.ids,
    productsById: (state) => state.byId,
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const { data: { data } } = await axios.get('api/products');

        const ids = data.map((item) => item.id);

        const byId = data.reduce((collection, item) => ({
          ...collection,
          [item.id]: item,
        }), {});

        commit('FETCHED_PRODUCTS', { ids, byId });
      } catch (e) {
        console.warn(e.response);
      }
    },
  },
  mutations: {
    FETCHED_PRODUCTS(state, { ids, byId }) {
      state.ids = ids;
      state.byId = byId;
    },
  },
};
