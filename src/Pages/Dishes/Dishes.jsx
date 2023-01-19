import React from 'react';
import Card from 'react-bootstrap/Card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useFetch from '../../utils/useFetch';
import styles from './Dishes.module.css';

export default function Dishes() {
  const { data } = useFetch('./data/data.json');
  const dishCategories = data?.dishCategories;

  return (
    <div className="dishes">
      <section className={styles.dishes}>
        <h4 className="header">Our Services</h4>
        <div className={styles.dishes_container}>
          {dishCategories?.map((dish, i) => {
            const { img, category } = dish;
            return (
              <Card key={i} className={styles.card}>
                <LazyLoadImage className={styles.img} variant="top" src={img} />
                <Card.Title className={styles.box}>
                  <span className={styles.category_name}>{category}</span>
                </Card.Title>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
