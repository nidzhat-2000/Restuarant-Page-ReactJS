import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setMenuCategories } from '../../../redux/slices/menuSlice';
import use_Upper_Lower_Underscore_IssuesFixer from '../../../utils/useNameIssueFixer';
import FoodCard from './FoodCards';
import UpperLinks from './UpperLinks';
import styles from '../Menu.module.css';

export default function SubMenus({ subMenus }) {
  const { submenu } = useParams();
  const dispatch = useDispatch();
  const { menuCategories } = useSelector(state => state.menuSlice);
  const nameIssue = use_Upper_Lower_Underscore_IssuesFixer;

  // On refresh Menu Saver ⤵
  const onRefreshProductsSaver = subMenus?.findIndex(menu =>
    nameIssue(menu, 'category', submenu)
  );

  useEffect(() => {
    dispatch(setMenuCategories(subMenus?.[onRefreshProductsSaver].products));
  }, [subMenus == null]);

  // On Click Products Changer ⤵
  useEffect(() => {
    if (submenu !== undefined) {
      const foodsFinder = subMenus?.find(menu =>
        nameIssue(menu, 'category', submenu)
      );

      if (foodsFinder) {
        dispatch(setMenuCategories(foodsFinder.products));
      }
    }
  }, [submenu]);

  let lowerCategory;
  let spaceIncludes;
  let joinedCategory;

  return (
    <>
      <UpperLinks />
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
