import React, { lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './About.module.css';

// LazyLoad ⤵
const RestAbout = lazy(() => import('./RestAbout'));

export default function About({ data }) {
  const route = useLocation();
  const rest = route.pathname === '/about';

  if (rest) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="about">
      <section className={styles.about}>
        <h4
          style={{
            marginTop: rest ? '-150px' : '',
          }}
          className="header"
        >
          About Us
        </h4>
        {!rest && (
          <div>
            <p className={styles.info}>{data?.info.slice(0, 704) + '...'}</p>
            <Link className={styles.link} to="/about">
              <span className={styles.linko}>Explore more ...</span>
            </Link>
          </div>
        )}

        {rest && <RestAbout data={data} />}
      </section>
    </div>
  );
}
