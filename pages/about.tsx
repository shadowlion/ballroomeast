import Head from "next/head";
import { Image, Jumbotron } from "react-bootstrap";
import style from "../style/about.module.css";

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>About Us! | Ballroom East</title>
        <meta name="description" content="Ballroom East Dance Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article id="about">
        <Jumbotron
          className={style.bg}
          text-variant="light"
          bg-variant="transparent"
          fluid
        >
          <div className="text-light">
            <div className="text-center">
              <h1>Stop by and Visit Us!</h1>
            </div>
            <hr className="container my-5 border-light" />
            <p className="container lead text-left">
              Located in the east end of town in the heart of St. Matthews in
              Louisville, KY, Ballroom East creates an environment that would
              inspire everyone to be great dancers. Purchased in 1986, with the
              encouragement, inspiration, and passion for ballroom dancing of
              Dr. Alan Thomas, Ballroom East became a reality.
            </p>
          </div>
        </Jumbotron>
        <div className="container py-5 text-center">
          <div className="row py-3 justify-content-center">
            <h2 className="font-weight-bold">Meet our Instructors!</h2>
          </div>
          <div className="row">
            {instructors.map((instructor) => (
              <div className="col-md-4">
                <Image src={instructor.src} thumbnail fluid roundedCircle />
                <h2 className="pt-3">{instructor.name}</h2>
                <p className="text-justify">{instructor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

const instructors = [
  {
    name: "Charles Jones",
    src: "/img/instructor_charles_jones.webp",
    bio: "Charles is a retired ballroom professional who currently teaches both competitors and non-competitors alike and also adjudicates ballroom competitions. At one point in time, together with Linda Jackson, he was the United States Rising Star Champion in International Standard. Coupled with being a finalist in multiple competitions throughout the United States, Charles has received certifications for the highest commendation.",
  },
  {
    name: "Linda Jackson",
    src: "/img/instructor_linda_jackson.webp",
    bio: "Linda founded the Ballroom East Dance Studio in 1986. With her professional dance partnership to Charles Jones of over ten years, she went on to becoming the United States Rising Star Champion in International Standard and won numerous awards and titles across the country. Now retired, Linda currently teaches both competitors and non-competitors alike and also adjudicates ballroom competitions.",
  },
  {
    name: "Chase Abell",
    src: "/img/instructor_chase_abell.webp",
    bio: "After competing Pro/Am with Linda Jackson for many years, Chase started competing in the Amateur division. Together, with his then-parther Taylor Shorten, he became a finalist in USA Dance Nationals, Youth Division, and quarter-finalist in the Adult Division. Currently, Chase is the President of USA Dance, Louisville Chapter. He also competes Pro/Am with his students in both competitions and showcases.",
  },
];

export default AboutUsPage;
