export default {
  state: {
    products: {},
  },
  getters: {
    cartProducts: (state) => state.products,
    isCartFree: (state) => Object.keys(state.products).length < 1,
    cartProductsArray: (state) => Object.keys(state.products)
      .reduce((arr, key) => ([
        ...arr,
        {
          id: key,
          quantity: state.products[key],
        },
      ]), []),
  },
  actions: {
    add({ commit, getters: { cartProducts } }, productId) {
      if (cartProducts[productId]) {
        commit('ADD_ONE_MORE', productId);
      } else {
        commit('ADD_TO_CART', productId);
      }
    },
    reduce({ commit, getters: { cartProducts } }, productId) {
      if (cartProducts[productId] > 1) {
        commit('REDUCE_AMOUNT_OF_THE_PRODUCT', productId);
      } else {
        commit('REMOVE_THE_PRODUCT', productId);
      }
    },
    remove({ commit }, productId) {
      commit('REMOVE_THE_PRODUCT', productId);
    },
  },
  mutations: {
    ADD_TO_CART(state, productId) {
      state.products = {
        ...state.products,
        [productId]: 1,
      };
    },
    ADD_ONE_MORE(state, productId) {
      state.products = {
        ...state.products,
        [productId]: state.products[productId] + 1,
      };
    },
    REDUCE_AMOUNT_OF_THE_PRODUCT(state, productId) {
      state.products = {
        ...state.products,
        [productId]: state.products[productId] - 1,
      };
    },
    REMOVE_THE_PRODUCT(state, productId) {
      state.products = Object.keys(state.products)
        .filter((id) => id !== productId)
        .reduce((obj, id) => ({
          ...obj,
          [id]: state.products[id],
        }), {});
    },
  },
};
