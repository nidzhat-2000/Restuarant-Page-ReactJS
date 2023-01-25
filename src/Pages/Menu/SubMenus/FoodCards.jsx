import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSelector } from 'react-redux';
import styles from '../Menu.module.css';

export default function FoodCard({ foods }) {
  return (
    <>
      {foods?.map((product, i) => {
        const { name, img, instructions, price } = product;
        const length = price.length;
        const dot = price.includes(',');
        return (
          <article
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <LazyLoadImage
              src={img}
              style={{ width: '350px', height: '350px' }}
            />
            <div className={styles.dish_info_cont}>
              <div className={styles.dish_info}>
                <h5>{name}</h5>
                <p className={styles.instructions}>{instructions}</p>
              </div>
              <span className={styles.price}>
                {price.padEnd(
                  `${length >= 2 ? 5 : 4}`,
                  `${dot ? '00' : ',00'}`
                )}
                <p style={{ marginLeft: '5px' }}>₼</p>
              </span>
            </div>
          </article>
        );
      })}
    </>
  );
}
