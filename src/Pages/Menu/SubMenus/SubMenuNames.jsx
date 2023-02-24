import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../Menu.module.css';
import {
  linkIssuesFixer,
  useDataProvider,
  useFetch,
} from '../../../utils/exporter';
import { UpperLinks, FoodCard } from './exporter';
import WelcomeMenu from '../WelcomeMenu';

export default function SubMenuNames({ category }) {
  const { submenu } = useParams();
  const { data: products } = useFetch('../../', 'products');
  const { data: subNames } = useFetch('../../', 'menu2');

  const { providedData: foods } = useDataProvider(
    products,
    'category',
    'products',
    submenu,
    submenu
  );

  const { providedData: subMenuNames } = useDataProvider(
    subNames?.menu,
    'mainMenu',
    'subMenus',
    category
  );

  return (
    <>
      <WelcomeMenu />
      <UpperLinks links={{ mainMenu: category, subMenu: submenu }} />
      <section className={styles.menu}>
        <article className={styles.categories}>
          {subMenuNames?.map((eachMenu, i) => {
            const { category } = eachMenu;
            let lowerCategory = category.toLowerCase();
            return (
              <Link
                key={i}
                to={linkIssuesFixer(category).toLowerCase()}
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
          <FoodCard foods={foods} />
        </article>
      </section>
    </>
  );
}
