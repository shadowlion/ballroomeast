import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <Image
                src={Logo}
                alt="Ballroom East Logo"
                width="60px"
                height="60px"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link text-light">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/calendar">
                  <a className="nav-link text-light">Calendar</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/lessons">
                  <a className="nav-link text-light">Lessons</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link text-light">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link text-light">Contact</a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://facebook.com/ballroomeast"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link text-light"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
