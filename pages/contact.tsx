import Head from "next/head";

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Ballroom East</title>
        <meta name="description" content="Ballroom East Dance Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="container pt-3 py-md-5 text-center">
        <h1>Contact Us!</h1>
        <p>
          Phone: <a href="tel:5023964207">(502) 396-4207</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:linda@ballroomeast.com">linda@ballroomeast.com</a>
        </p>
      </article>
    </>
  );
};

export default ContactUsPage;
