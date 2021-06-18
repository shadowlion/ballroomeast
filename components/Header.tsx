import Image from "next/image";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar expand="sm" bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="/">
            <Image
              src="/logo.svg"
              alt="Ballroom East Logo"
              width="60px"
              height="60px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav-collapse" />
          <Navbar.Collapse id="nav-collapse">
            <Nav className="ml-auto text-center">
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/calendar" className="text-white">
                Calendar
              </Nav.Link>
              <Nav.Link href="/lessons" className="text-white">
                Lessons
              </Nav.Link>
              <Nav.Link href="/about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="/contact" className="text-white">
                Contact
              </Nav.Link>
              <a
                href="https://facebook.com/ballroomeast"
                target="_blank"
                rel="noreferrer"
                className="nav-link text-white"
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
