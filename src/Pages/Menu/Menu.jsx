import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styles from './Menu.module.css';
import {
  linkIssuesFixer,
  useDataProvider,
  useFetch,
  useTitleSetter,
} from '../../utils/exporter';
import { WelcomeMenu, MenuGallery, SubMenuNames } from './exporter';

export default function Menu() {
  const { category } = useParams();
  const { pathname } = useLocation();
  const openSubMenus = pathname.lastIndexOf('/');
  const { data, isLoading } = useFetch('../../', 'menu2', pathname);
  const menu = data?.menu;
  useTitleSetter('Menu');

  const { providedData } = useDataProvider(
    menu,
    'mainMenu',
    'subMenus',
    category,
    pathname
  );

  return (
    <>
      {!isLoading && openSubMenus === 5 && (
        <div>
          <WelcomeMenu />
          <section className={styles.menu}>
            <article className={styles.categories}>
              {menu?.map((eachMenu, i) => {
                const { mainMenu } = eachMenu;

                return (
                  <Link
                    key={i}
                    to={'/menu/' + linkIssuesFixer(mainMenu).toLowerCase()}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className={styles.category_name}>
                      <h4
                        className={
                          (category.includes('_')
                            ? category.split('_').join(' ')
                            : category) === mainMenu.toLowerCase()
                            ? styles.active
                            : ''
                        }
                      >
                        {mainMenu}
                      </h4>
                    </div>
                  </Link>
                );
              })}
            </article>
          </section>

          {!isLoading && <MenuGallery data={providedData} />}
        </div>
      )}

      {openSubMenus !== 5 && <SubMenuNames category={category} />}
    </>
  );
}
