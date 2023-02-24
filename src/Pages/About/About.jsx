import React, { lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFetch } from '../../utils/exporter';
import styles from './About.module.css';

// LazyLoad ⤵
const RestAbout = lazy(() => import('./RestAbout'));

export default function About() {
  const { data } = useFetch(undefined, 'about');
  const about = data?.about;
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
            <p className={styles.info}>{about?.info.slice(0, 704) + '...'}</p>
            <Link className={styles.link} to="about">
              <span className={styles.linko}>EXPLORE MORE</span>
              <div className={styles.my_element}></div>
            </Link>
          </div>
        )}

        {rest && <RestAbout data={about} />}
      </section>
    </div>
  );
}
