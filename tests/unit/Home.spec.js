import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from '@/views/Home.vue';
import Product from '@/components/Product.vue';
import productsModule from '@/store/products';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Home.vue', () => {
  let actions;
  let store;
  let state;

  beforeEach(() => {
    state = {
      ids: [1, 2],
      byId: {
        1: {
          id: 1,
          name: 'product 1',
          price: 5.43,
          description: 'description 1',
        },
        2: {
          id: 2,
          name: 'product 2',
          price: 5,
          description: 'description 2',
        },
      },
    };

    actions = {
      fetchProducts: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        products: {
          state,
          actions,
          getters: productsModule.getters,
        },
      },
    });
  });

  it('invokes fetch (products) action when component mounted', () => {
    shallowMount(Home, { store, localVue });

    expect(actions.fetchProducts).toHaveBeenCalled();
  });

  it('presents the loaded products', () => {
    const wrapper = mount(Home, { store, localVue });

    expect(wrapper.findAll(Product)).toHaveLength(state.ids.length);
  });
});
