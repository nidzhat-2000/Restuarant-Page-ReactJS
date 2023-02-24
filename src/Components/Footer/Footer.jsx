import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import Creater from './Creater';
import styles from './Footer.module.css';
import { useFetch } from '../../utils/exporter';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Footer() {
  let { data } = useFetch('../../', 'footer');
  const carts = data?.footer.carts;
  const menus = data?.footer.menus;

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth',
    });
  };

  const icons = [
    <FacebookIcon style={{ fontSize: 50, color: '#139df8' }} />,
    <YouTubeIcon style={{ fontSize: 50, color: '#f00' }} />,
    <InstagramIcon style={{ fontSize: 50, color: '#fc07b6' }} />,
  ];

  const urls = ['facebook', 'youtube', 'instagram'];

  return (
    <footer className={styles.main_footer}>
      <section className={styles.footer}>
        <div className={styles.container}>
          <article className={styles.follow_container}>
            <h5>Follow us at:</h5>
            <div className={styles.icons}>
              {icons?.map((Icon, i) => {
                return (
                  <a
                    key={i}
                    href={`https://www.${urls[i]}.com`}
                    target="_blank"
                    className={styles.icon}
                  >
                    {Icon}
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
                        ? `menu/main_menu`
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
            <LazyLoadImage
              style={{ width: '158px', margin: '10px' }}
              src={carts?.img}
              alt="carts"
            />
          </article>
        </div>
      </section>
      <Creater />
    </footer>
  );
}
