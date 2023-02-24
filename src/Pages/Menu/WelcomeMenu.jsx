import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Menu.module.css';
import { useFetch } from '../../utils/exporter';

export default function WelcomeMenu() {
  const { data, isLoading } = useFetch('../../', 'menuCover');

  return (
    <section style={{ position: 'relative' }}>
      {!isLoading && (
        <div>
          <LazyLoadImage className={styles.slider} src={data?.menuCover} />

          <article className={styles.slider_info}>
            <h1>Welcome to our Menu</h1>
            <h4>We are glad to serve our customers </h4>
            <h5>Enjoy your meal</h5>
          </article>
        </div>
      )}
    </section>
  );
}
