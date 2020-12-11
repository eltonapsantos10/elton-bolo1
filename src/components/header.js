import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Container,Navbar, Nav, } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Navbar bg="danger" expand="lg" fixed="top" variant="dark">
      <img src="https://img.icons8.com/doodle/48/000000/cake--v1.png"/>
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <Link to="/page-2" className="nav-link" activeClassName="active">Bolos</Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link to="/page-4" className="nav-link" activeClassName="active">Salgados</Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link to="/page-3" className="nav-link" activeClassName="active">Contatos</Link>
            </Nav.Item>

           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
