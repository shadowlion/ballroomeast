import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import style from "../style/about.module.css";
import CharlesImg from "../public/img/instructor_charles_jones.webp";
import LindaImg from "../public/img/instructor_linda_jackson.webp";
import ChaseImg from "../public/img/instructor_chase_abell.webp";

const AboutUsPage = () => {
  return (
    <Layout>
      <Head>
        <title>About Us | Ballroom East</title>
        <meta name="description" content="Ballroom East Dance Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article id="about">
        <section className={style.bg}>
          <div className="container py-5 text-light">
            <div className="text-center">
              <h1 className="display-3">Stop by and Visit Us!</h1>
            </div>
            <hr className="my-5 border-light" />
            <p className="lead text-left">
              Located in the east end of town in the heart of St. Matthews in
              Louisville, KY, Ballroom East creates an environment that would
              inspire everyone to be great dancers. Purchased in 1986, with the
              encouragement, inspiration, and passion for ballroom dancing of
              Dr. Alan Thomas, Ballroom East became a reality.
            </p>
          </div>
        </section>
        <div className="container py-5 text-center">
          <div className="row py-3 justify-content-center">
            <h2 className="font-weight-bold">Meet our Instructors!</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Image
                className="img-thumbnail rounded"
                src={CharlesImg}
                alt="image of Charles Jones"
              />
              <h2 className="pt-3">Charles Jones</h2>
              <p className="text-start">
                Charles is a retired ballroom professional who currently teaches
                both competitors and non-competitors alike and also adjudicates
                ballroom competitions. At one point in time, together with Linda
                Jackson, he was the United States Rising Star Champion in
                International Standard. Coupled with being a finalist in
                multiple competitions throughout the United States, Charles has
                received certifications for the highest commendation.
              </p>
            </div>
            <div className="col-md-4">
              <Image
                className="img-thumbnail rounded"
                src={LindaImg}
                alt="image of Linda Jackson"
              />
              <h2 className="pt-3">Linda Jackson</h2>
              <p className="text-start">
                Linda founded the Ballroom East Dance Studio in 1986. With her
                professional dance partnership to Charles Jones of over ten
                years, she went on to becoming the United States Rising Star
                Champion in International Standard and won numerous awards and
                titles across the country. Now retired, Linda currently teaches
                both competitors and non-competitors alike and also adjudicates
                ballroom competitions.
              </p>
            </div>
            <div className="col-md-4">
              <Image
                className="img-thumbnail rounded"
                src={ChaseImg}
                alt="image of Chase Abell"
              />
              <h2 className="pt-3">Chase Abell</h2>
              <p className="text-start">
                After competing Pro/Am with Linda Jackson for many years, Chase
                started competing in the Amateur division. Together, with his
                then-parther Taylor Shorten, he became a finalist in USA Dance
                Nationals, Youth Division, and quarter-finalist in the Adult
                Division. Currently, Chase is the President of USA Dance,
                Louisville Chapter. He also competes Pro/Am with his students in
                both competitions and showcases.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default AboutUsPage;
