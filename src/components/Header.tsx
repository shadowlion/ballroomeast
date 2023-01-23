import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image src={Logo} alt="Ballroom East Logo" width={60} height={60} />
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
                <Link
                  href="/"
                  className="nav-link link-light text-decoration-none"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/calendar"
                  className="nav-link link-light text-decoration-none"
                >
                  Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/lessons"
                  className="nav-link link-light text-decoration-none"
                >
                  Lessons
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about"
                  className="nav-link link-light text-decoration-none"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact"
                  className="nav-link link-light text-decoration-none"
                >
                  Contact
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
