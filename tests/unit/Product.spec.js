import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Product from '@/components/Product.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Product.vue', () => {

  const product = {
    id: 1,
    name: 'Pizza 1',
    price: 5.99,
    description: 'Description of the pizza'
  };

  it('displays product details', () => {
    const wrapper = shallowMount(Product, {
      propsData: { product },
    });

    expect(wrapper.find('.product__name').text()).toBe(product.name);

    expect(wrapper.find('.product__price').text()).toContain(product.price);

    expect(wrapper.find('.product__description').text()).toBe(product.description);
  });

  it('invokes add (to the cart) method when click "add to card" button', () => {
    const actions = {
      add: jest.fn(),
    };

    const store = new Vuex.Store({
      modules: {
        cart: {
          actions,
        },
      },
    });

    const wrapper = shallowMount(Product, {
      propsData: { product },
      store,
      localVue,
    });

    wrapper.find('.product__btn').trigger('click');

    expect(actions.add).toHaveBeenCalled();
  });
});
