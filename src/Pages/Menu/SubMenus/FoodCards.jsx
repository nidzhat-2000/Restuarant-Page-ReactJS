import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Card } from 'react-bootstrap';
import { Pagination } from './exporter';
import styles from '../Menu.module.css';

export default function FoodCard({ foods }) {
  const [initial, setInitial] = useState(0);
  const [active, setActive] = useState(1);

  const remainder = foods?.length > 5 ? foods?.length % 6 : null;

  return (
    <>
      {foods?.map((product, i) => {
        const { name, img, instructions, price } = product;
        const length = price.length;
        const dot = price.includes(',');
        if (i >= 0 + initial && i <= 5 + initial)
          return (
            <Card
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <LazyLoadImage
                src={img}
                style={{ maxWidth: '100%', height: '350px' }}
              />
              <Card.Body className={styles.dish_info_cont}>
                <div className={styles.dish_info}>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text className={styles.instructions}>
                    {instructions}
                  </Card.Text>
                </div>
                <span className={styles.price}>
                  {price.padEnd(
                    `${length >= 2 ? 5 : 4}`,
                    `${dot ? '00' : ',00'}`
                  )}
                  <p style={{ marginLeft: '5px' }}>₼</p>
                </span>
              </Card.Body>
            </Card>
          );
      })}

      {remainder && (
        <Pagination
          data={{
            setInitial,
            setActive,
            foodsLength: foods?.length,
            active,
          }}
        />
      )}
    </>
  );
}
