import Image from "next/image";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar expand="sm" bg="dark" variant="dark" className="text-light">
        <div className="container">
          <Navbar.Brand href="/">
            <Image
              src="/logo.svg"
              alt="Ballroom East Logo"
              width="60px"
              height="60px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="nav-collapse">
            <Nav className="ml-auto text-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/calendar">Calendar</Nav.Link>
              <Nav.Link href="/lessons">Lessons</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <a
                href="https://facebook.com/ballroomeast"
                target="_blank"
                className="nav-link"
              >
                Facebook
              </a>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
