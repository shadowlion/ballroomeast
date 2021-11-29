import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import style from "../style/home.module.css";
import WeddingImg from "../public/img/wedding.webp";
import GroupImg from "../public/img/group.webp";
import CompeteImg from "../public/img/compete.webp";

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Home | Ballroom East</title>
        <meta name="description" content="Ballroom East Dance Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article id="home">
        <section className={style.bg}>
          <div className="container py-5 text-light">
            <div className="text-center">
              <h1 className="display-3">Ballroom East Dance Studio</h1>
              <h2>Let&apos;s get you dancing!</h2>
            </div>
            <hr className="my-5 border-light" />
            <p className="lead text-left">
              Whether you want to learn anything from Salsa, Swing, to Waltz or
              Tango, our dance instructors will ensure the pace is comfortable
              and dances easy to learn. If you have always dreamt of becoming a
              dance maestro, then Ballroom East is the studio for you!
              Regardless of age or experience, Ballroom East has the savvy
              instructors and dance knowledge to make sure your learning
              experience is comfortable and effective.
            </p>
          </div>
        </section>
        <section className="container py-5">
          <div className="row pt-3 pb-5">
            <div className="col-md-7 d-sm-12">
              <h2 className="font-weight-bold mt-5">
                Need to learn how to dance for your wedding?{" "}
                <span className="text-muted">
                  Come in for a Private Lesson!
                </span>
              </h2>
              <p className="lead">
                Let Ballroom East make your wedding dance an incredibly special
                one. Regardless of your song of choice, we will choreograph a
                customized routine for the first dance at your wedding
                reception.
              </p>
              <p className="lead">
                <Link href="/lessons">
                  <a>
                    <span className="text-muted">
                      Check out which lesson is right for you &gt;&gt;
                    </span>
                  </a>
                </Link>
              </p>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <div className="text-center">
                <Image
                  className="img-thumbnail"
                  src={WeddingImg}
                  alt="Wedding Photo"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="row py-5">
            <div className="col-md-5 d-none d-md-block">
              <div className="text-center">
                <Image
                  className="img-thumbnail"
                  src={GroupImg}
                  alt="Social Dance Group"
                />
              </div>
            </div>
            <div className="col-md-7 d-sm-12">
              <h2 className="font-weight-bold">
                Just want to learn how to dance socially?{" "}
                <span className="text-muted">Come in for Group Lessons!</span>
              </h2>
              <p className="lead">
                Have the opportunity to meet and dance with other novice
                dancers. Because dancers have different heights, personalities,
                and skill levels, group lessons are the perfect blend of
                instruction and social ambiance.
              </p>
              <p className="lead">
                <Link href="/calendar">
                  <a>
                    <span className="text-muted">
                      Check out our calendar for more information &gt;&gt;
                    </span>
                  </a>
                </Link>
              </p>
            </div>
          </div>
          <hr />
          <div className="row py-5">
            <div className="col-md-7 d-sm-12">
              <h2 className="font-weight-bold">
                Want to compete in the world of Dancesport?{" "}
                <span className="text-muted">
                  Get coaching from some of the best in the US!
                </span>
              </h2>
              <p className="lead">
                Ballroom East creates an environment of high-level dancing in a
                non-franchised studio with no contractual agreements. The
                instructors dream of inspiring everyone to be great dancers.
              </p>
              <p className="lead">
                <Link href="/about">
                  <a>
                    <span className="text-muted">
                      Meet the Instructors &gt;&gt;
                    </span>
                  </a>
                </Link>
              </p>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <div className="text-center">
                <Image
                  className="img-thumbnail"
                  src={CompeteImg}
                  alt="dancesport"
                />
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default HomePage;
