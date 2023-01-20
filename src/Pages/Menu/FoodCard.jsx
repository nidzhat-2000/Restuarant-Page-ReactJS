import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function FoodCard({ foods }) {
  const exString = '10';
  const output = exString.padEnd(4, '$');

  return (
    <>
      {foods?.map(product => {
        const { name, img, instructions, price } = product;
        return (
          <article style={{ display: 'flex', flexDirection: 'column' }}>
            <LazyLoadImage src={img} style={{ width: '100%' }} />
            <h4>{name}</h4>
            <h6>{instructions}</h6>
            <span>
              {`${price.includes('.') ? price : price + '.'}`.padEnd(5, '0')}
            </span>
          </article>
        );
      })}
    </>
  );
}
