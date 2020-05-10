import { shallowMount } from '@vue/test-utils';
import Product from '@/components/Product.vue';

describe('Product.vue', () => {
  let wrapper;
  const product = {
    id: 1,
    name: 'Pizza 1',
    price: 5.99,
    description: 'Description of the pizza'
  };

  beforeEach(() => {
    wrapper = shallowMount(Product, {
      propsData: { product },
    });
  });

  it('displays product details', () => {
    expect(wrapper.find('.product__name').text()).toBe(product.name);

    expect(wrapper.find('.product__price').text()).toContain(product.price);

    expect(wrapper.find('.product__description').text()).toBe(product.description);
  });
});
