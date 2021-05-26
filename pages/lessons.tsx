import Head from "next/head";
import Link from "next/link";
import { Card, Jumbotron } from "react-bootstrap";

const LessonsPage = () => {
  return (
    <>
      <Head>
        <title>Lessons | Ballroom East</title>
        <meta name="description" content="Ballroom East Dance Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article id="lessons">
        <section>
          <Jumbotron className="mb-0" fluid>
            <div className="container">
              <h1 className="text-center display-3">Lessons</h1>
              <hr className="my-5" />
              <div className="text-muted text-justify lead">
                <p>
                  All of our lessons have a purpose. To have fun and at the same
                  time transform the dancing into something great, whether for
                  social dancing or competitive dancing.
                </p>
                <p>
                  A dance partner is not required for any of these lessons.
                  There is no up-front financial commitment, and you only pay
                  for the classes you attend.
                </p>
              </div>
            </div>
          </Jumbotron>
        </section>
        <section className="bg-light">
          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-md-6 pb-2">
                <Card>
                  <Card.Img variant="top" src="/img/beginner.jpg" />
                  <Card.Body>
                    <Card.Title>Group - Beginner</Card.Title>
                    <Card.Text>
                      All Beginner Group Classes are open to the public and
                      usually consists of 16 to 55 people. Beginners especially
                      like the opportunity to meet and dance with other novice
                      dancers and are given the opportunity to rotate partners
                      frequently throughout the group lesson (or stay with one
                      partner if they wish - no pressure!). This lesson is the
                      perfect blend of instruction and social ambiance.
                    </Card.Text>
                    <Card.Text className="text-muted">
                      <address>
                        <strong>Wednesdays:</strong>
                        <br />
                        <span>7:00pm - 7:45pm</span>
                        <br />
                        <strong>Rate:</strong>
                        <br />
                        <span>$10/person</span>
                      </address>
                    </Card.Text>
                    <Card.Link className="mb-0 text-muted" href="/calendar">
                      Check the Calendar &gt;&gt;
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-12 col-md-6 pb-2">
                <Card>
                  <Card.Img variant="top" src="/img/social.jpg" />
                  <Card.Body>
                    <Card.Title>Group - Social Party</Card.Title>
                    <Card.Text>
                      Every so often, we host Friday night social dance parties.
                      These nights normally consist of a Beginner Class (we
                      don't teach the same dance that happens on Wednesdays),
                      followed by some social dancing.
                    </Card.Text>
                    <Card.Text className="text-muted">
                      <address>
                        <strong>Fridays:</strong>
                        <br />
                        <span>7:00pm - 7:30pm ~ Beginner Lesson</span>
                        <br />
                        <span>7:30pm - 8:30pm ~ Dance Social</span>
                        <br />
                        <strong>Rate:</strong>
                        <br />
                        <span>$10/person</span>
                      </address>
                    </Card.Text>
                    <Card.Link className="mb-0 text-muted" href="/calendar">
                      Check the Calendar &gt;&gt;
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-12 col-md-6 pb-2">
                <Card>
                  <Card.Img variant="top" src="/img/private.jpg" />
                  <Card.Body>
                    <Card.Title>Private Lessons</Card.Title>
                    <Card.Text>
                      Private lessons are available for dancers of all ages and
                      experience levels. This is arguably the best way to become
                      a better dancer, faster. Together, with your instructor,
                      you can decide which are the best mix of dances to learn
                      and which skillsets are best for your level of dance.
                    </Card.Text>
                    <Card.Text className="text-muted">
                      <address>
                        <strong>Rate:</strong>
                        <br />
                        <span>$55/30 minutes</span>
                        <br />
                        <span>$80/45 minutes</span>
                        <br />
                        <span>$110/60 minutes</span>
                      </address>
                    </Card.Text>
                    <Card.Link className="mb-0 text-muted" href="/contact">
                      Contact Us to schedule &gt;&gt;
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-12 col-md-6 pb-2">
                <Card>
                  <Card.Img variant="top" src="/img/custom.jpg" />
                  <Card.Body>
                    <Card.Title>Customized Services</Card.Title>
                    <Card.Text>
                      Out-of-town coaching, private wedding party/group lessons,
                      classes for kids - if you need something more tailored to
                      your liking, contact us and we'll work with you to getting
                      that set up.
                    </Card.Text>
                    <Card.Link className="mb-0 text-muted" href="/contact">
                      Contact Us to schedule &gt;&gt;
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default LessonsPage;
