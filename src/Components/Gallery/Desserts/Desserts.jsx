import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Desserts.module.css';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function Desserts({ data }) {
  const header = data?.header;
  const products = data?.products;

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
              <Link to="/menu/desserts" key={i}>
                <div className={styles.one_desert}>
                  <LazyLoadImage alt={info} src={img} />
                  <span>{info}</span>
                </div>
              </Link>
            );
          })}
        </Box>
      </section>
    </div>
  );
}
