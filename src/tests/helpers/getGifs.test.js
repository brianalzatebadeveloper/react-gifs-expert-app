import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en el helper getGifs', () => {

  test('Debe traer 10 elementos',  async () => {

    const gifs = await getGifs('The rock');
    expect( gifs.length ).toBe( 10 );
    
  });

  test('Debe traer 0 elementos',  async () => {

    const gifs = await getGifs('');
    expect( gifs.length ).toBe( 0 );
    
  });

});