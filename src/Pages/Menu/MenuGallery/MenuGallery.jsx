import React from 'react';
import Card from 'react-bootstrap/Card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import styles from './MenuGallery.module.css';

export default function MenuGallery({ data }) {
  return (
    <div className="dishes">
      <section className={styles.dishes}>
        <article className={styles.dishes_container}>
          {data?.map((dish, i) => {
            // console.log(dish);
            const { category } = dish;
            return (
              <Card key={i} className={styles.card}>
                <Link to={category.toLowerCase()}>
                  <LazyLoadImage
                    className={styles.img}
                    variant="top"
                    src={dish.products[0].img}
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
