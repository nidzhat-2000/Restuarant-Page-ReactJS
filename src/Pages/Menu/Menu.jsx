import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { setMenu } from '../../redux/slices/menuSlice';
import styles from './Menu.module.css';
import SubMenus from './SubMenus/SubMenuNames';
import MenuGallery from './MenuGallery/MenuGallery';
import use_Upper_Lower_Underscore_IssuesFixer from '../../utils/useNameIssueFixer';

export default function Menu({ data, menuCover }) {
  const [subMenus, setSubMenus] = useState(null);
  const route = useLocation();
  const { category } = useParams();
  const dispatch = useDispatch();
  const { menu } = useSelector(state => state.menuSlice);
  const nameIssue = use_Upper_Lower_Underscore_IssuesFixer;

  // if (route.pathname.includes('menu')) {
  //   window.scrollTo({
  //     top: 282,
  //     behavior: 'smooth',
  //   });
  // }

  useEffect(() => {
    if (data) {
      dispatch(setMenu(data));
    }
  }, []);

  useEffect(() => {
    const mainFinder = menu.find(eachMenu =>
      nameIssue(eachMenu, 'mainMenu', category)
    );

    if (mainFinder) {
      setSubMenus(mainFinder.subMenus);
    }
  }, [category]);

  let openSubMenus = route.pathname.lastIndexOf('/');
  let lowerCategory;
  let spaceIncludes;
  let joinedCategory;

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

      {openSubMenus === 5 && (
        <div>
          <section className={styles.menu}>
            <article className={styles.categories}>
              {(menu ?? data)?.map((eachMenu, i) => {
                const { mainMenu } = eachMenu;
                lowerCategory = mainMenu.toLowerCase();
                spaceIncludes = lowerCategory.includes(' ');
                joinedCategory = lowerCategory.split(' ').join('_');

                return (
                  <Link
                    key={i}
                    to={`/menu/${
                      spaceIncludes ? joinedCategory : lowerCategory
                    }`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className={styles.category_name}>
                      <h4
                        className={
                          (category.includes('_')
                            ? category.split('_').join(' ')
                            : category) === lowerCategory
                            ? styles.active
                            : ''
                        }
                      >
                        {mainMenu.toUpperCase()}
                      </h4>
                    </div>
                  </Link>
                );
              })}
            </article>
          </section>

          <MenuGallery data={subMenus} />
        </div>
      )}

      {openSubMenus !== 5 && <SubMenus subMenus={subMenus} />}
    </div>
  );
}
