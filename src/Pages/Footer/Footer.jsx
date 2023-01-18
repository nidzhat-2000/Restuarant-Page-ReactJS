import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './Footer.module.css';
import useFetch from '../../utils/useFetch';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { data } = useFetch('./data/data.json');
  const carts = data?.footer.carts;
  const menus = data?.footer.menus;

  const icons = [
    <FacebookIcon style={{ fontSize: 50, color: '#139df8' }} />,
    <YouTubeIcon style={{ fontSize: 50, color: '#f00' }} />,
    <InstagramIcon style={{ fontSize: 50, color: '#fc07b6' }} />,
  ];
  const urls = ['facebook', 'youtube', 'instagram'];

  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.follow_container}>
          <h5>Follow us at:</h5>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {icons.map((icon, i) => {
              return (
                <a
                  key={i}
                  href={`https://www.${urls[i]}.com`}
                  target="_blank"
                  style={{ color: 'blue' }}
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>

        <div className={styles.middle}>
          <article className={styles.menu_cat}>
            {menus?.map((menu, i) => {
              return (
                <Link
                  to={`/${menu.toLowerCase()}`}
                  className={styles.menu}
                  key={i}
                >
                  {menu}
                </Link>
              );
            })}
          </article>
        </div>

        <div className={styles.right}>
          <h5>Carts</h5>
          {carts?.map((cart, i) => {
            const { img } = cart;
            return (
              <img
                style={{ width: '58px', margin: '10px' }}
                key={i}
                src={img}
                alt={img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}