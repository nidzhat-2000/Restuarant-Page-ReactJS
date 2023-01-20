import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function FoodCard({ foods }) {
  return (
    <>
      {foods?.map((product, i) => {
        const { name, img, instructions, price } = product;
        const length = price.length;
        const dot = price.includes('.');
        return (
          <article key={i} style={{ display: 'flex', flexDirection: 'column' }}>
            <LazyLoadImage src={img} style={{ width: '100%' }} />
            <h4>{name}</h4>
            <h6>{instructions}</h6>
            <span style={{ display: 'flex' }}>
              {price.padEnd(`${length === 3 ? 4 : 5}`, `${dot ? '00' : '.00'}`)}
              <p style={{ marginLeft: '5px' }}>AZN</p>
            </span>
          </article>
        );
      })}
    </>
  );
}
