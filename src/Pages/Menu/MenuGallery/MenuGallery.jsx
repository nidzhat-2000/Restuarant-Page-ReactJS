import React from 'react';
import Card from 'react-bootstrap/Card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import linkIssuesFixer from '../../../utils/linkFixer';
import styles from './MenuGallery.module.css';

export default function MenuGallery({ data }) {
  return (
    <section className={styles.dishes}>
      <article className={styles.dishes_container}>
        {data?.map((dish, i) => {
          const { img, category } = dish;
          return (
            <Card key={i} className={styles.card}>
              <Link to={linkIssuesFixer(category).toLowerCase()}>
                <LazyLoadImage className={styles.img} variant="top" src={img} />
                <Card.Title className={styles.box}>
                  <span className={styles.category_name}>{category}</span>
                </Card.Title>
              </Link>
            </Card>
          );
        })}
      </article>
    </section>
  );
}
