import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useFetch from '../../utils/useFetch';
import FoodCard from './FoodCard';
import styles from './Menu.module.css';

export default function Menu() {
  const { data } = useFetch('./data/data.json');
  const menu = data?.menu;
  const initial = menu?.[0].products;
  const [foods, setFoods] = useState(null);

  const setter = e => {
    const needed = menu.find(each => each.mainCategory === e.target.innerText);
    setFoods(needed.products);
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <LazyLoadImage className={styles.slider} src={data?.adTapmadim} />
        <article className={styles.slider_info}>
          <h1>Welcome to our Menu</h1>
          <h4>We are glad serving our customers </h4>
          <h5>Please Enjoy your meal</h5>
        </article>
      </div>

      <section className={styles.menu}>
        <article className={styles.categories}>
          {menu?.map((eachMenu, i) => {
            const { mainCategory } = eachMenu;
            return (
              <div className={styles.category_name} key={i}>
                <h4 onClick={setter}>{mainCategory}</h4>
              </div>
            );
          })}
        </article>
      </section>

      <section>
        <article className={styles.dishes}>
          <FoodCard foods={foods} />
        </article>
      </section>
    </>
  );
}
