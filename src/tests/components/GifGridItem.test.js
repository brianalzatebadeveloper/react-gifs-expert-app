import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from  '../../components/GifGridItem';


describe('Pruebas del componente GifGridItem.js', () => {

  const image = {
    id: '1', 
    title: 'Can You Smell The Rock GIF by WWE', 
    url: 'https://media1.giphy.com/media/l0HUg6Ypas42ubkXu/giphy.gif?cid=0858df19exqupm9xvcfjarglgzwksmozb9542poktfd6af8i&rid=giphy.gif&ct=g'
  };
  const wrapper = shallow( <GifGridItem { ...image } /> );

  test('Debe mostrar el componente <GifGridItem /> correctamente', () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe tener un parrafo con el title', () => {

    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( image.title );

  });

  test('Debe tener la imagen igual al url y alt de los props', () => {

    const img = wrapper.find('img');
    expect( img.props().alt ).toBe( image.title );
    expect( img.prop('src') ).toBe( image.url );

  });

  test('Debe tener animate_fadeIn', () => {

    const div = wrapper.find('div');
    const className = div.props().className;
    expect( className.includes('animate__fadeIn') ).toBe( true );

  });

});