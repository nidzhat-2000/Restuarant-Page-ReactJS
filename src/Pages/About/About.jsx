import React, { lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '../../utils/useFetch';
import styles from './About.module.css';
const RestAbout = lazy(() => import('./RestAbout'));

export default function About() {
  const { data } = useFetch('./data/data.json');
  const about = data?.about;

  const route = useLocation();
  const rest = route.pathname === '/about';

  if (rest) {
    window.scrollTo({ top: 40, behavior: 'smooth' });
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
            <Link className={styles.linko} to="/about">
              Explore more ...
            </Link>
          </div>
        )}

        {rest && <RestAbout about={about} />}
      </section>
    </div>
  );
}
