import React, { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';
import { setInitialMenu, setMenu } from '../../redux/slices/menuSlice';
import FoodCard from './FoodCard';
import styles from './Menu.module.css';

export default function Menu({ data, img, first }) {
  const [foods, setFoods] = useState(first);
  // const [foods, setFoods] = useState(null);
  const ref = useRef();

  // const dispatch = useDispatch();
  // const { menu, initialMenu } = useSelector(state => state.menuSlice);

  // console.log(first, initialMenu);

  useEffect(() => {
    // if (menu) {
    ref.current.querySelectorAll('h4')[0].classList.add(`${styles.active}`);
    // }
    // dispatch(setMenu(data));
    // if (first) {
    //   dispatch(setInitialMenu(first));
    // }
    setFoods(first);
  }, []);

  // console.log(menu);

  const activeMenuSetter = e => {
    // if (menu) {
    ref.current
      .querySelectorAll('h4')
      .forEach(h4 => h4.classList.remove(`${styles.active}`));
    e.target.classList.add(`${styles.active}`);
    // }
  };

  const subMenusSetter = e => {
    const needed = data?.find(
      // const needed = (menu ?? data)?.find(
      each => each.mainCategory === e.target.innerText
    );
    console.log(needed);
    setFoods(needed.products);
  };

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <LazyLoadImage className={styles.slider} src={img} />
        <article className={styles.slider_info}>
          <h1>Welcome to our Menu</h1>
          <h4>We are glad serving our customers </h4>
          <h5>Please Enjoy your meal</h5>
        </article>
      </div>

      <section className={styles.menu}>
        <article
          className={styles.categories}
          ref={ref}
          onClick={activeMenuSetter}
        >
          {data?.map((eachMenu, i) => {
            // {(menu ?? data)?.map((eachMenu, i) => {
            const { mainCategory } = eachMenu;
            return (
              <div className={styles.category_name} key={i}>
                <h4 onClick={subMenusSetter}>{mainCategory}</h4>
              </div>
            );
          })}
        </article>
      </section>

      <section className={styles.submenus}>
        <article className={styles.dishes}>
          <FoodCard
            foods={foods}
            // foods={initialMenu}
          />
        </article>
      </section>
    </div>
  );
}
