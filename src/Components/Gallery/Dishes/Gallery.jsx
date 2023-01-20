import React from 'react';
import Card from 'react-bootstrap/Card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import useFetch from '../../../utils/useFetch';
import styles from './Gallery.module.css';

export default function Gallery() {
  const { data } = useFetch('./data/data.json');
  const gallery = data?.gallery;

  return (
    <div className="dishes">
      <section className={styles.dishes}>
        <h4 className="header">Our Services</h4>
        <article className={styles.dishes_container}>
          {gallery?.map((dish, i) => {
            const { img, category } = dish;
            return (
              <Card key={i} className={styles.card}>
                <Link to="menu">
                  <LazyLoadImage
                    className={styles.img}
                    variant="top"
                    src={img}
                  />
                  <Card.Title className={styles.box}>
                    <span className={styles.category_name}>{category}</span>
                  </Card.Title>
                </Link>
              </Card>
            );
          })}
        </article>
      </section>
    </div>
  );
}
