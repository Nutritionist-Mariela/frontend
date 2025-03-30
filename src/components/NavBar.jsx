import "./NavBar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import navBarPhoto from "../assets/logo.png";
import { NavLink as RouterNavLink } from "react-router";

function NavBar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={RouterNavLink} to="/">
                    <img
                        src={navBarPhoto}
                        style={{
                            width: 40,
                            height: 40,
                        }}
                    />
                </Navbar.Brand>

                <Navbar.Toggle className="navbar-toggler border-0 bg-transparent focus-ring-0" aria-controls="basic-navbar-nav">
                    <i className="fa-solid fa-bars fa-lg" style={{ color: "white" }}></i>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={RouterNavLink} className="navBarItem" to="/" end>
                            Inicio{" "}
                        </Nav.Link>

                        <Nav.Link as={RouterNavLink} className="navBarItem" to="/blog" end>
                            Blog
                        </Nav.Link>

                        <Nav.Link as={RouterNavLink} className="navBarItem" to="/productos" end>
                            Productos
                        </Nav.Link>

                        <NavDropdown className="navBarItem" title="Redes" style={{ color: "white" }}>
                            <NavDropdown.Item href="https://www.instagram.com/licmarielabarcelo/">Instagram</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.facebook.com/profile.php?id=61564011368750">Facebook</NavDropdown.Item>
                            <NavDropdown.Item href="http://wa.link/k5nn5e">Whatsapp</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
