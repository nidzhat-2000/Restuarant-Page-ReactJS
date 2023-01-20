import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useFetch from '../../utils/useFetch';
import styles from './Menu.module.css';

export default function Menu() {
  const { data } = useFetch('./data/data.json');

  const page = data?.adTapmadim;

  return (
    <section>
      <div style={{ position: 'relative' }}>
        <img className={styles.slider} src={data?.adTapmadim} />
        <article className={styles.slider_info}>
          <h1>Welcome to our Menu</h1>
          <h4>We glad to serve you </h4>
          <h6>Please Enjoy your meal</h6>
        </article>
      </div>
    </section>
  );
}
