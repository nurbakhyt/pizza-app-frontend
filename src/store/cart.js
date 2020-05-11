export default {
  state: {
    products: {
      1: 4,
      3: 2,
    },
  },
  getters: {
    cartProducts: (state) => state.products,
  },
  actions: {
    add({ commit }, productId) {
      commit('ADD_TO_CART', productId);
    },
  },
  mutations: {
    ADD_TO_CART(state, productId) {
      state.products = {
        ...state.products,
        [productId]: state.products[productId] ? state.products[productId] + 1 : 1,
      };
    },
  },
};
