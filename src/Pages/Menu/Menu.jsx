import React, { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { setMenu } from '../../redux/slices/menuSlice';
import FoodCard from './FoodCard';
import styles from './Menu.module.css';

export default function Menu({ data, menuCover }) {
  const [foods, setFoods] = useState(null);
  const ref = useRef();
  const route = useLocation();
  const { submenu } = useParams();
  const dispatch = useDispatch();
  const { menu } = useSelector(state => state.menuSlice);

  // const urls = route.pathname.split('/').slice(1).join(' / ');
  const urls = 'menu/snacks/cart';

  console.log(urls.slice(0, urls.lastIndexOf('/')));

  if (route.pathname.includes('menu')) {
    window.scrollTo({
      top: 282,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    if (data) {
      dispatch(setMenu(data));
    }
    if (menu.length !== 0) {
      setFoods(menu[0].products);
    }
  }, []);

  let lowerCategory;
  let spaceIncludes;
  let splittedCategory;

  useEffect(() => {
    const needed = menu.find(eachMenu => {
      lowerCategory = eachMenu.mainCategory.toLowerCase();
      spaceIncludes = lowerCategory.includes(' ');
      splittedCategory = lowerCategory.split(' ').join('_');

      return (
        (spaceIncludes ? splittedCategory : lowerCategory) ===
        submenu.toLowerCase()
      );
    });

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

      <section>
        <h3>{urls}</h3>
      </section>

      <section className={styles.menu}>
        <article className={styles.categories} ref={ref}>
          {(menu ?? data)?.map((eachMenu, i) => {
            const { mainCategory } = eachMenu;
            lowerCategory = mainCategory.toLowerCase();
            spaceIncludes = lowerCategory.includes(' ');
            splittedCategory = lowerCategory.split(' ').join('_');

            return (
              <Link
                key={i}
                to={`/menu/${spaceIncludes ? splittedCategory : lowerCategory}`}
                style={{ textDecoration: 'none' }}
              >
                <div className={styles.category_name}>
                  <h4
                    className={
                      (submenu.includes('_')
                        ? submenu.split('_').join(' ')
                        : submenu) === lowerCategory
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
