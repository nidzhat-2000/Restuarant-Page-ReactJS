import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './About.module.css';

export default function RestAbout({ data }) {
  console.log(data);

  return (
    <div>
      <p className={styles.info}>{data?.info.slice(704, -1)}</p>
      <div className={styles.founder_info}>
        <LazyLoadImage
          effect="blur"
          className={styles.founder}
          src={data?.founder.photo}
          alt="founder"
        />
        <span>
          <q>{data?.founder.name}</q>
        </span>
      </div>
    </div>
  );
}
