import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Delivery from '@/views/Delivery';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Delivery.vue', () => {
  let wrapper;
  let actions;
  let getters;
  let store;
  const cartProducts = {
    1: 1,
    2: 3,
  };

  const productsById = {
    1: {
      id: 1,
      name: 'Necessitatibus cumque dolor eos.',
      price: '6.99',
    },
    2: {
      id: 2,
      name: 'Sit dolore praesentium odit.',
      price: '6.99',
    },
  };

  beforeEach(() => {
    getters = {
      cartProducts: () => cartProducts,
      productsById: () => productsById,
      isCartFree: () => Object.keys(cartProducts).length < 1,
      cartProductsArray: () => Object.keys(cartProducts)
        .reduce((arr, key) => ([
          ...arr,
          {
            id: key,
            quantity: cartProducts[key],
          },
        ]), []),
      deliveryCost: () => 5,
    };

    actions = {
      order: jest.fn(),
    };

    store = new Vuex.Store({
      actions,
      getters,
    });

    wrapper = shallowMount(Delivery, {
      store,
      localVue,
    });
  });

  it('consists list of products from the cart', () => {
    expect(wrapper.find('.list').text()).toContain(productsById[1].name);
    expect(wrapper.find('.list').text()).toContain(productsById[1].price);
  });

  it('triggers order request when completely filled', () => {
    wrapper.setData({
      username: 'John Doe',
      phone: '012-435-345',
      address: 'Street 12, 44',
    });

    wrapper.find('form').trigger('submit');

    expect(actions.order).toHaveBeenCalled();
  });

  it('displays alert when the form did not filled', () => {
    getters = {
      ...getters,
      cartProducts: () => ({}),
      isCartFree: () => true,
    };

    store = new Vuex.Store({
      getters,
    });

    wrapper = shallowMount(Delivery, {
      store,
      localVue,
    });

    expect(wrapper.find('.list__item').text()).toContain('Cart is empty. ');
  });
});
