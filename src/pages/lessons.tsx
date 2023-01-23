import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import BeginnerImg from "../../public/img/beginner.jpg";
import SocialImg from "../../public/img/social.jpg";
import PrivateImg from "../../public/img/private.jpg";
import CustomImg from "../../public/img/custom.jpg";

const LessonsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Lessons | Ballroom East</title>
        <meta name="description" content="Ballroom East Dance Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article id="lessons">
        <section style={{ backgroundColor: "#e9ecef" }}>
          <div className="container py-5">
            <h1 className="text-center display-3">Lessons</h1>
            <hr className="my-5" />
            <div className="text-muted text-justify lead">
              <p>
                All of our lessons have a purpose. To have fun and at the same
                time transform the dancing into something great, whether for
                social dancing or competitive dancing.
              </p>
              <p>
                A dance partner is not required for any of these lessons. There
                is no up-front financial commitment, and you only pay for the
                classes you attend.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-light">
          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-md-6 pb-2">
                <div className="card">
                  <Image
                    src={BeginnerImg}
                    alt="image for beginner classes"
                    className="card-img-top w-100"
                    height={400}
                  />
                  <section className="card-body">
                    <h5 className="card-title">Group - Beginner</h5>
                    <p className="card-text">
                      All Beginner Group Classes are open to the public and
                      usually consists of 16 to 55 people. Beginners especially
                      like the opportunity to meet and dance with other novice
                      dancers and are given the opportunity to rotate partners
                      frequently throughout the group lesson (or stay with one
                      partner if they wish - no pressure!). This lesson is the
                      perfect blend of instruction and social ambiance.
                    </p>
                    <div className="card-text text-muted">
                      <address>
                        <strong>Wednesdays:</strong>
                        <br />
                        <span>7:00pm - 7:45pm</span>
                        <br />
                        <strong>Rate:</strong>
                        <br />
                        <span>$11/person (incl. sales tax)</span>
                      </address>
                    </div>
                    <Link
                      href="/calendar"
                      className="card-link mb-0 link-secondary text-decoration-none"
                    >
                      Check the Calendar &gt;&gt;
                    </Link>
                  </section>
                </div>
              </div>
              <div className="col-12 col-md-6 pb-2">
                <div className="card">
                  <Image
                    src={SocialImg}
                    alt="image for social classes"
                    className="card-img-top w-100"
                    height={400}
                  />
                  <section className="card-body">
                    <h5 className="card-title">Group - Social Party</h5>
                    <p className="card-text">
                      Every so often, we host Friday night social dance parties.
                      These nights normally consist of a Beginner Class (we
                      don&apos;t teach the same dance that happens on
                      Wednesdays), followed by some social dancing.
                    </p>
                    <div className="card-text text-muted">
                      <address>
                        <strong>Fridays:</strong>
                        <br />
                        <span>7:00pm - 7:30pm ~ Beginner Lesson</span>
                        <br />
                        <span>7:30pm - 8:30pm ~ Dance Social</span>
                        <br />
                        <strong>Rate:</strong>
                        <br />
                        <span>$11/person (incl. sales tax)</span>
                      </address>
                    </div>
                    <Link
                      href="/calendar"
                      className="card-link mb-0 link-secondary text-decoration-none"
                    >
                      Check the Calendar &gt;&gt;
                    </Link>
                  </section>
                </div>
              </div>
              <div className="col-12 col-md-6 pb-2">
                <div className="card">
                  <Image
                    src={PrivateImg}
                    alt="image private lessons"
                    className="card-img-top w-100"
                    height={400}
                  />
                  <section className="card-body">
                    <p className="card-text">
                      Private lessons are available for dancers of all ages and
                      experience levels. This is arguably the best way to become
                      a better dancer, faster. Together, with your instructor,
                      you can decide which are the best mix of dances to learn
                      and which skillsets are best for your level of dance.
                    </p>
                    <div className="card-text text-muted">
                      <address>
                        <strong>Rate (incl. sales tax):</strong>
                        <br />
                        <span>$64/30 minutes</span>
                        <br />
                        <span>$96/45 minutes</span>
                        <br />
                        <span>$128/60 minutes</span>
                      </address>
                    </div>
                    <Link
                      href="/contact"
                      className="card-link mb-0 link-secondary text-decoration-none"
                    >
                      Contact Us to schedule &gt;&gt;
                    </Link>
                  </section>
                </div>
              </div>
              <div className="col-12 col-md-6 pb-2">
                <div className="card">
                  <Image
                    src={CustomImg}
                    alt="image for custom services"
                    className="card-img-top w-100"
                    height={400}
                  />
                  <section className="card-body">
                    <h5 className="card-title">Customized Services</h5>
                    <p className="card-text">
                      Out-of-town coaching, private wedding party/group lessons,
                      classes for kids - if you need something more tailored to
                      your liking, contact us and we&apos;ll work with you to
                      getting that set up.
                    </p>
                    <Link
                      href="/contact"
                      className="card-link mb-0 link-secondary text-decoration-none"
                    >
                      Contact Us to schedule &gt;&gt;
                    </Link>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default LessonsPage;
