import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Product from '@/components/Product.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Cart.vue', () => {

  const product = {
    id: 1,
    name: 'Pizza 1',
    price: 5.99,
    description: 'Description of the pizza'
  };


});
