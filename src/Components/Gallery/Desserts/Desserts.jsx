import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useFetch from '../../../utils/useFetch';
import styles from './Desserts.module.css';
import Box from '@mui/material/Box';

export default function Desserts() {
  const { data } = useFetch('../data/data.json');
  const header = data?.dessertsPage.header;
  const products = data?.dessertsPage.products;

  return (
    <div className="desserts">
      <section className={styles.dessert}>
        <h2 className="header">{header}</h2>
        <Box
          style={{
            display: 'grid',
            gap: '36px',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          {products?.map((product, i) => {
            const { img, info } = product;
            return (
              <div className={styles.one_desert} key={i}>
                <LazyLoadImage alt={info} src={img} />
                <span>{info}</span>
              </div>
            );
          })}
        </Box>
      </section>
    </div>
  );
}
