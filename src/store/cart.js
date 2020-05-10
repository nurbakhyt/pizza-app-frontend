export default {
  state: {
    products: {},
  },
  getters: {},
  actions: {
    add({ commit }, { productId, quantity = 1 }) {
      commit('ADD_TO_CART', { productId, quantity });
    },
  },
  mutations: {
    ADD_TO_CART(state, { productId, quantity }) {
      state.products = {
        ...state.products,
        [productId]: quantity,
      };
    },
  },
};
