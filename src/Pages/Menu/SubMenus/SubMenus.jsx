import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { setMenuCategories } from '../../../redux/slices/menuSlice';
import FoodCard from './FoodCard';
import styles from '../Menu.module.css';

export default function SubMenus({ subMenus }) {
  const { submenu } = useParams();
  const dispatch = useDispatch();
  const { menuCategories } = useSelector(state => state.menuSlice);
  const route = useLocation();

  // console.log(route.pathname);

  let lowerCategory;
  let spaceIncludes;
  let joinedCategory;

  // On refresh Menu Saver ⤵
  const onRefreshProductsSaver = subMenus?.findIndex(fruit => {
    console.log(fruit);
    lowerCategory = fruit.category.toLowerCase();
    spaceIncludes = lowerCategory.includes(' ');
    joinedCategory = lowerCategory.split(' ').join('_');

    return (
      (spaceIncludes ? joinedCategory : lowerCategory) === submenu.toLowerCase()
    );
  });
  useEffect(() => {
    dispatch(setMenuCategories(subMenus?.[onRefreshProductsSaver].products));
  }, [subMenus == null]);

  // On Click Products Changer ⤵
  useEffect(() => {
    if (submenu !== undefined) {
      const foodsFinder = subMenus?.find(menu => {
        lowerCategory = menu.category.toLowerCase();
        spaceIncludes = lowerCategory.includes(' ');
        joinedCategory = lowerCategory.split(' ').join('_');

        return (
          (spaceIncludes ? joinedCategory : lowerCategory) ===
          submenu.toLowerCase()
        );
      });

      if (foodsFinder) {
        dispatch(setMenuCategories(foodsFinder.products));
      }
    }
  }, [submenu]);

  const routeElements = route.pathname.split('/').slice(-2);
  let replaced;

  const menuLinks = routeElements.map(link => {
    if (link.includes('_')) {
      replaced = link.replace('_', ' ');
      return (
        replaced[0].toUpperCase() +
        replaced.slice(1, replaced.indexOf(' ')) +
        ' ' +
        replaced.slice(replaced.indexOf(' ') + 1)[0].toUpperCase() +
        replaced.slice(replaced.indexOf(' ') + 2).toLowerCase()
      );
    }
    return link[0].toUpperCase() + link.slice(1).toLowerCase();
  });

  return (
    <>
      <section>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          {menuLinks.map((route, i) => {
            lowerCategory = route.toLowerCase();
            spaceIncludes = lowerCategory.includes(' ');
            joinedCategory = lowerCategory.split(' ').join('_');

            return (
              <li key={i}>
                <Link
                  to={
                    i !== menuLinks.length
                      ? spaceIncludes
                        ? `/menu/${joinedCategory}`
                        : `/menu/${lowerCategory}`
                      : lowerCategory
                  }
                  style={{ textDecoration: 'none' }}
                >
                  {route.includes('_') ? route.replace('_', ' ') : route}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className={styles.menu}>
        <article className={styles.categories}>
          {subMenus?.map((eachMenu, i) => {
            const { category } = eachMenu;
            lowerCategory = category.toLowerCase();
            spaceIncludes = lowerCategory.includes(' ');
            joinedCategory = lowerCategory.split(' ').join('_');

            return (
              <Link
                key={i}
                to={`${spaceIncludes ? joinedCategory : lowerCategory}`}
                style={{ textDecoration: 'none' }}
              >
                <div className={styles.category_name}>
                  <h4
                    className={
                      submenu
                        ? (submenu.includes('_')
                            ? submenu.split('_').join(' ')
                            : submenu) === lowerCategory
                          ? styles.active
                          : ''
                        : ''
                    }
                  >
                    {category}
                  </h4>
                </div>
              </Link>
            );
          })}
        </article>
      </section>

      <section className={styles.submenus}>
        <article className={styles.dishes}>
          <FoodCard foods={menuCategories} />
        </article>
      </section>
    </>
  );
}
