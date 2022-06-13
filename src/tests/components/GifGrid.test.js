import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGits } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {

  const category = 'The Rock';
  let wrapper;

  beforeEach( () => {
    jest.clearAllMocks();

    useFetchGits.mockReturnValue({
      data: [],
      loading: true
    });

    wrapper = shallow( <GifGrid category={ category } /> );
  });

  test('Debe mostrar el componente correctamente', () => {
    
    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => { 

    const gifs = [{
      id: 'ABC123',
      title: 'Can You Smell The Rock GIF by WWE',
      url: 'https://media1.giphy.com/media/l0HUg6Ypas42ubkXu/giphy.gif?cid=0858df19exqupm9xvcfjarglgzwksmozb9542poktfd6af8i&rid=giphy.gif&ct=g'
    }]; 

    useFetchGits.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow( <GifGrid category={ category } /> );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe( false );
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

  });

});