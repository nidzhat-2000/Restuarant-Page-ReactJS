import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link as Linkito, useLocation } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import logo from './logo.png';
import styles from './Navbar.module.css';

export default function MainNav() {
  const homeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const route = useLocation();
  const scroll = route.pathname !== '/';

  return (
    <header className={styles.main_div}>
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
            <LinkScroll
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              className={styles.nav_btn}
              duration={0}
              // delay={1000}
            >
              <span>About</span>
            </LinkScroll>

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
              <LinkScroll
                to="desserts"
                smooth={true}
                offset={-130}
                className={styles.link}
                duration={0}
              >
                <NavDropdown.Item>Deserts</NavDropdown.Item>
              </LinkScroll>
              <NavDropdown.Divider
                style={{ background: 'rgb(235, 232, 232)' }}
              />

              <LinkScroll
                to="dishes"
                smooth={true}
                offset={-130}
                className={styles.link}
                duration={0}
              >
                <NavDropdown.Item>Main Menu</NavDropdown.Item>
              </LinkScroll>
            </NavDropdown>

            <Linkito className={styles.nav_btn} to="/interier">
              <span>Interier</span>
            </Linkito>

            <Linkito className={styles.nav_btn} to="/branches">
              <span>Branches</span>
            </Linkito>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
