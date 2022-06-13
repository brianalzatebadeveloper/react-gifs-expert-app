import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from "../../components/AddCategory";

describe('Pruebas en  <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
  });

  test('Debe mostrar el componente correctamente', () => { 

    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe de cambiar la caja de texto', () => { 

    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value } });

    expect( wrapper.find('p').text().trim() ).toBe( value.trim() );

  });

  test('No debe postear la info con submit', () => { 

    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect( setCategories ).not.toHaveBeenCalled();

  });

  test('Debe llamar el setCategories y limpiar la caja de texto', () => {

    const value = 'Hola Mundo';
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect( setCategories ).toHaveBeenCalled();
    expect( setCategories ).toHaveBeenCalledTimes(1);
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
    expect( wrapper.find('input').props().value.trim() ).toBe( '' );

  });

});