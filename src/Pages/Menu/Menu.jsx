import React, { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { setMenu } from '../../redux/slices/menuSlice';
import styles from './Menu.module.css';
import SubMenus from './SubMenus/SubMenus';
import MenuGallery from './MenuGallery/MenuGallery';

export default function Menu({ data, menuCover, gallery }) {
  const [subMenus, setSubMenus] = useState(null);
  const ref = useRef();
  const route = useLocation();
  const { category } = useParams();
  const dispatch = useDispatch();
  const { menu } = useSelector(state => state.menuSlice);

  // console.log(submenu);
  // // const urls = route.pathname.split('/').slice(1).join(' / ');
  // const urls = 'menu/snacks/cart';
  // console.log(urls.slice(0, urls.lastIndexOf('/')));

  // if (route.pathname.includes('menu')) {
  //   window.scrollTo({
  //     top: 282,
  //     behavior: 'smooth',
  //   });
  // }

  const openSubMenus = route.pathname.lastIndexOf('/');

  useEffect(() => {
    if (data) {
      dispatch(setMenu(data));
    }
    // setSubMenus(data?.[1].subMenus);
  }, []);

  let lowerCategory;
  let spaceIncludes;
  let joinedCategory;

  useEffect(() => {
    const mainFinder = menu.find(eachMenu => {
      lowerCategory = eachMenu.mainMenu.toLowerCase();
      spaceIncludes = lowerCategory.includes(' ');
      joinedCategory = lowerCategory.split(' ').join('_');

      return (
        (spaceIncludes ? joinedCategory : lowerCategory) ===
        category.toLowerCase()
      );
    });

    // console.log(mainFinder);

    if (mainFinder) {
      setSubMenus(mainFinder.subMenus);
    }
  }, [category]);

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
      {/* <section>
        <h3>{urls}</h3>
      </section> */}

      {openSubMenus === 5 && (
        <div>
          <section className={styles.menu}>
            <article className={styles.categories} ref={ref}>
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
                        // onClick={() => setSubOpened(true)}
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
