import { renderHook } from '@testing-library/react-hooks';
import { useFetchGits } from '../../hooks/useFetchGifs';

describe('Pruebas de hook useFetchGifs.js', () => {

  test('Debe retornar el estado inicial', async () => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGits( 'The Rock' ) );
    const {data, loading} = result.current;
    await waitForNextUpdate();

    expect( data ).toEqual([]);
    expect( loading ).toBe(true);

  });

  test('Debe retornar un arreglo de imagenes y el loading en false', async () => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGits( 'The Rock' ) );
    await waitForNextUpdate();

    const {data, loading} = result.current;

    expect( data.length ).toEqual( 10 );
    expect( loading ).toBe( false );

  });

});