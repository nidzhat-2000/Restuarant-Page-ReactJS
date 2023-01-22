import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './Footer.module.css';
import useFetch from '../../utils/useFetch';
import { Link, useLocation } from 'react-router-dom';
import Creater from './Creater';

export default function Footer({ data }) {
  const carts = data?.carts;
  const menus = data?.menus;

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth',
    });
  };

  const route = useLocation();

  const icons = [
    <FacebookIcon style={{ fontSize: 50, color: '#139df8' }} />,
    <YouTubeIcon style={{ fontSize: 50, color: '#f00' }} />,
    <InstagramIcon style={{ fontSize: 50, color: '#fc07b6' }} />,
  ];
  const urls = ['facebook', 'youtube', 'instagram'];

  return (
    <>
      <section className={styles.footer}>
        <div className={styles.container}>
          <article className={styles.follow_container}>
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
          </article>

          <article className={styles.middle}>
            <div className={styles.menu_cat}>
              {menus?.map((menu, i) => {
                return (
                  <Link
                    to={`/${
                      menu === 'Menu'
                        ? `menu/snacks`
                        : (menu.includes(' ')
                            ? menu.split(' ').join('_')
                            : menu
                          ).toLowerCase()
                    }`}
                    className={styles.menu}
                    key={i}
                  >
                    {menu}
                  </Link>
                );
              })}
              <Link onClick={scroll} className={styles.menu}>
                Home
              </Link>
            </div>
          </article>

          <article className={styles.right}>
            <h5>Carts</h5>
            {carts?.map((cart, i) => {
              const { img } = cart;
              return (
                <img
                  style={{ width: '158px', margin: '10px' }}
                  key={i}
                  src={img}
                  alt={img}
                />
              );
            })}
          </article>
        </div>
      </section>
      <Creater />
    </>
  );
}
