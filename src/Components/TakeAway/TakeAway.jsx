import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './TakeAway.module.css';

export default function TakeAway() {
  return (
    <section className={styles.takeaway}>
      <div className={styles.container}>
        <LazyLoadImage
          src={'https://cafecity.az/static/assets/img/takeaway.png'}
          style={{ margin: '100px' }}
        />

        <div className={styles.middle_cont}>
          <h3 style={{ color: 'rgb(102, 102, 102)' }}>
            In three steps take advantage of our TakeAway service
          </h3>
          <article className={styles.sub_middle}>
            <section>
              <span>01</span>
              <h5>Choice</h5>
            </section>
            <section>
              <span>02</span>
              <h5>Call 987</h5>
            </section>
            <section>
              <span>03</span>
              <h5>Take your order from Restaurant</h5>
            </section>
          </article>
        </div>

        <LazyLoadImage
          className={styles.last_img}
          src={'https://cafecity.az/static/assets/img/home_takeaway.png'}
        />
      </div>
    </section>
  );
}
