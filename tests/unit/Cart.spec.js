import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Cart from '@/components/Cart.vue';
import cartModule from '@/store/cart';
import productsModule from '@/store/products';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Cart.vue', () => {
  let wrapper;
  let actions;
  let store;
  let stateCart;
  let stateProducts;

  beforeEach(() => {
    actions = {
      add: jest.fn(),
      reduce: jest.fn(),
      remove: jest.fn(),
    };

    stateCart = {
      products: {
        1: 1,
        2: 3,
      },
    };

    stateProducts = {
      ids: [1 ,2],
      byId: {
        1: {
          id: 1,
          name: 'product 1',
          price: 4,
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

    store = new Vuex.Store({
      modules: {
        cart: {
          state: stateCart,
          getters: cartModule.getters,
          actions,
        },
        products: {
          state: stateProducts,
          getters: productsModule.getters,
        },
      },
    });

    wrapper = shallowMount(Cart, {
      store,
      localVue,
    });
  });

  it('consists products list (with quantity)', () => {
    expect(wrapper.findAll('.cart-product')).toHaveLength(2)

    expect(wrapper.find('.cart-product__name').text()).toContain(stateProducts.byId[1].name);
    expect(wrapper.find('.cart-product__quantity').text()).toContain(stateCart.products[1]);

    expect(wrapper.findAll('.cart-product__name').at(1).text()).toContain(stateProducts.byId[2].name);
    expect(wrapper.findAll('.cart-product__quantity').at(1).text()).toContain(stateCart.products[2]);
  });

  it('adds another one of existing products', () => {
    wrapper.find('.cart-product__btn--add').trigger('click');

    expect(actions.add).toHaveBeenCalled();
  });

  it('reduces the amount of products', () => {
    wrapper.find('.cart-product__btn--reduce').trigger('click');

    expect(actions.reduce).toHaveBeenCalled();
  });

  it('removes the product', () => {
    wrapper.find('.cart-product__btn--remove').trigger('click');

    expect(actions.remove).toHaveBeenCalled();
  });
});
