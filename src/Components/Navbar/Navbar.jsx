import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-scroll';
import logo from './logo.png';
import styles from './Navbar.module.css';

export default function MainNav() {
  const handleClick = event => {
    event.preventDefault();
    const element = document.querySelector('.about');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
            <img className={styles.logo} src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav bsPrefix="nav_buttons" className={styles.nav_buttons}>
            <Nav.Link
              className={styles.nav_btn}
              // href="/about"
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={0}
              >
                <span onClick={handleClick}> About </span>
              </Link>
            </Nav.Link>
            <Nav.Link className={styles.nav_btn} href="/">
              <span> Home</span>
            </Nav.Link>
            <NavDropdown
              className={styles.nav_btn}
              title="Menu"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/menu">Main Menu</NavDropdown.Item>
              <NavDropdown.Item href="/action/3.2">Breakfast</NavDropdown.Item>
              <NavDropdown.Item href="/action/3.3">Deserts</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="/action/3.4">Drinks</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link className={styles.nav_btn} href="/interier">
              <span>Interier</span>
            </Nav.Link>
            <Nav.Link className={styles.nav_btn} href="/places">
              <span>Restaurants</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
