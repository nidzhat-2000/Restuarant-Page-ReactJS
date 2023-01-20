import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../utils/useFetch';
import styles from './Branches.module.css';

export default function Branches() {
  const { data } = useFetch('./data/data.json');
  const restaurants = data?.restaurants;
  const route = useLocation();

  const rest = route.pathname === '/restaurants';

  if (rest) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <section className={styles.branches}>
      <h5 className="header">Our Branches</h5>
      <article className={styles.branches_cont}>
        {restaurants?.map((res, i) => {
          const { name, address, contact } = res;
          return (
            <div className={styles.branch} key={i}>
              <h4>{name}</h4>
              <address style={{ color: '#2067a4' }}>{address}</address>
              <span style={{ fontStyle: 'italic' }}>{contact}</span>
            </div>
          );
        })}
        <h3></h3>
      </article>
    </section>
  );
}
