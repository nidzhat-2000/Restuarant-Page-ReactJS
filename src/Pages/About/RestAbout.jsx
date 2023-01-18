import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './About.module.css';

export default function RestAbout({ about }) {
  return (
    <div>
      <p className={styles.info}>{about?.info.slice(704, -1)}</p>
      <div className={styles.founder_info}>
        <LazyLoadImage
          effect="blur"
          className={styles.founder}
          src={about?.founder}
          alt="founder"
        />
        <span>
          <q>Chris Bumstead</q>
        </span>
      </div>
    </div>
  );
}
