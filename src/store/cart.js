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
