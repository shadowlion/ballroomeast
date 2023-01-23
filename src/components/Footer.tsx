import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../public/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="text-light bg-dark">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-4 pb-4">
            <Link href="/">
              <Image
                src={LogoImg}
                alt="Ballroom East Logo"
                width={60}
                height={60}
              />
            </Link>
            <p>&copy; 1986-{currentYear}</p>
          </div>
          <div className="col-md-4 pb-4">
            <p>
              <strong>Contact Us!</strong>
            </p>
            <ul className="list-unstyled text-small">
              <li className="mb-3">
                <a href="tel:5023964207" className="link-light">
                  (502) 396-4207
                </a>
              </li>
              <li>
                <a href="mailto:linda@ballroomeast.com" className="link-light">
                  linda@balllroomeast.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 pb-4">
            <p>
              <strong>Visit Us!</strong>
            </p>
            <a
              href="https://maps.google.com/maps/place/Ballroom+East/@38.2348982,-85.6417317,17z/data=!3m1!4b1!4m5!3m4!1s0x88690ad4bec9d4db:0xecdb76260813022d!8m2!3d38.234894!4d-85.639543"
              className="link-light"
            >
              <address>
                906 Dupont Road
                <br />
                Louisville, KY 40207
              </address>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
