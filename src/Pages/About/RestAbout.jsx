import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './About.module.css';

export default function RestAbout({ data }) {
  return (
    <div>
      <p className={styles.info}>
        {data?.info.split('.').map((sentence, dot) => {
          if ((dot + 1) % 3 === 0) {
            return (
              <span key={dot}>
                {sentence}.
                <br />
                <br />
              </span>
            );
          }
          return <span key={dot}>{sentence}.</span>;
        })}
      </p>
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
