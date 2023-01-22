import React, { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setMenu } from '../../redux/slices/menuSlice';
import FoodCard from './FoodCard';
import styles from './Menu.module.css';

export default function Menu({ data, menuCover }) {
  const [foods, setFoods] = useState(null);
  const ref = useRef();
  const { submenu } = useParams();
  const dispatch = useDispatch();
  const { menu } = useSelector(state => state.menuSlice);

  useEffect(() => {
    if (data) {
      dispatch(setMenu(data));
    }
    if (menu.length !== 0) {
      setFoods(menu[0].products);
    }
  }, []);

  useEffect(() => {
    const needed = menu.find(
      eachMenu => eachMenu.mainCategory.toLowerCase() === submenu.toLowerCase()
    );
    setFoods(needed.products);
  }, [submenu]);

  const activeMenuSetter = e => {
    ref.current
      .querySelectorAll('h4')
      .forEach(h4 => h4.classList.remove(`${styles.active}`));
    e.target.classList.add(`${styles.active}`);
  };

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <LazyLoadImage className={styles.slider} src={menuCover} />
        <article className={styles.slider_info}>
          <h1>Welcome to our Menu</h1>
          <h4>We are glad serving our customers </h4>
          <h5>Please Enjoy your meal</h5>
        </article>
      </div>

      <section className={styles.menu}>
        <article className={styles.categories} ref={ref}>
          {(menu ?? data)?.map((eachMenu, i) => {
            const { mainCategory } = eachMenu;
            return (
              <Link
                key={i}
                to={`/menu/${mainCategory.toLowerCase()}`}
                style={{ textDecoration: 'none' }}
              >
                <div className={styles.category_name}>
                  <h4
                    className={
                      submenu === mainCategory.toLowerCase()
                        ? styles.active
                        : ''
                    }
                    onClick={activeMenuSetter}
                  >
                    {mainCategory}
                  </h4>
                </div>
              </Link>
            );
          })}
        </article>
      </section>

      <section className={styles.submenus}>
        <article className={styles.dishes}>
          <FoodCard foods={foods} />
        </article>
      </section>
    </div>
  );
}
