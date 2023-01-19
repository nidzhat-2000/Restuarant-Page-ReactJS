import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from './logo.png';
import styles from './Navbar.module.css';

export default function MainNav() {
  const homeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const route = useLocation();
  const scroll = route.pathname !== '/';

  return (
    <div className={styles.main_div}>
      <Navbar
        className={styles.navbar}
        bsPrefix="navbar"
        sticky="top"
        fixed="top"
      >
        <Container as="div" className={styles.container}>
          <Navbar.Brand href="/">
            <LazyLoadImage
              effect="blur"
              className={styles.logo}
              src={logo}
              alt="logo"
            />
          </Navbar.Brand>
          <Nav bsPrefix="nav_buttons" className={styles.nav_buttons}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              className={styles.link}
              duration={0}
              // delay={1000}
            >
              <Nav.Link className={styles.nav_btn}>
                <span>About</span>
              </Nav.Link>
            </Link>

            <Nav.Link
              className={styles.nav_btn}
              onClick={homeClick}
              href={scroll ? '/' : null}
            >
              <span> Home</span>
            </Nav.Link>

            <NavDropdown
              className={styles.nav_btn}
              title="Menu"
              id="basic-nav-dropdown"
            >
              <Link
                to="dishes"
                smooth={true}
                offset={-130}
                className={styles.link}
                duration={0}
              >
                <NavDropdown.Item>Main Menu</NavDropdown.Item>
              </Link>
              {/* <NavDropdown.Item href="/action/3.2">Breakfast</NavDropdown.Item> */}

              <Link
                to="desserts"
                smooth={true}
                offset={-130}
                className={styles.link}
                duration={0}
              >
                <NavDropdown.Item>Deserts</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
            </NavDropdown>
            <Link
              to="interier"
              smooth={true}
              offset={-150}
              className={styles.link}
            >
              <Nav.Link className={styles.nav_btn} href="/interier">
                <span>Interier</span>
              </Nav.Link>
            </Link>
            <Link
              to="restaurants"
              smooth={true}
              offset={-150}
              className={styles.link}
              // duration={100}
              delay={0}
              // spyThrottle={5000}
              // isDynamic={true}
            >
              <Nav.Link className={styles.nav_btn} href="/places">
                <span>Restaurants</span>
              </Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
