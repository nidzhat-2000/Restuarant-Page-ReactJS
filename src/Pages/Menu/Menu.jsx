import React, { useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FoodCard from './FoodCard';
import styles from './Menu.module.css';

export default function Menu({ data, img }) {
  const [foods, setFoods] = useState(null);
  const ref = useRef();

  const subMenusSetter = e => {
    const needed = data.find(each => each.mainCategory === e.target.innerText);
    setFoods(needed.products);
  };

  const activeMenuSetter = e => {
    ref.current
      .querySelectorAll('h4')
      .forEach(h4 => h4.classList.remove(`${styles.active}`));
    e.target.classList.add(`${styles.active}`);
  };

  return (
    <div>
      <div>
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
          <FoodCard foods={foods} />
        </article>
      </section>
    </div>
  );
}
