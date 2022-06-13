import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../../components/GitExpertApp';

describe('Pruebas del componente <GifExpertApp />', () => {

  const wrapper = shallow( <GifExpertApp /> );

  test('Debe mostrase correctamente', () => { 
    
    expect( wrapper ).toMatchSnapshot();

  });

  test('debe mostrar una lista de categorias', () => {

    const categories = ['The rock','john cena'];
    const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe( categories.length );

  });

});