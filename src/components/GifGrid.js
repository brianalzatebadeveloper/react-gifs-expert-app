import React from 'react'
import { useFetchGits } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const {data:images, loading} = useFetchGits( category );
 
  return (
    <>
      <h3 className='animate__animated animate__fadeInDown'>{ category }</h3>

      { loading && <p className='animate__animated animate__flash'>Loading...</p> }

      <div className='card-grid'>
        {
          images.map( image => (
            <GifGridItem 
              key={image.id}
              { ...image }
            />
          ))
        }      
      </div>
    </>
  )
}
