import Head from "next/head";
import { ResponsiveEmbed } from "react-bootstrap";

const CalendarPage = () => {
  return (
    <>
      <Head>
        <title>Calendar | Ballroom East</title>
        <meta name="description" content="Ballroom East Dance Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article id="calendar">
        <div className="container py-5">
          <div className="row text-center justify-content-center">
            <div className="col-md-8">
              <ResponsiveEmbed aspectRatio="1by1">
                <iframe src="https://calendar.google.com/calendar/embed?src=ballroomeast.com_tf7ohgpna1q96c47droquq7e30%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA" />
              </ResponsiveEmbed>
            </div>
          </div>
          <div className="row pt-5 pb-2">
            <div className="col text-center">
              <p>
                Add this{" "}
                <a href="https://calendar.google.com/calendar?cid=YmFsbHJvb21lYXN0LmNvbV90ZjdvaGdwbmExcTk2YzQ3ZHJvcXVxN2UzMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t">
                  Google Calendar
                </a>{" "}
                to your account.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default CalendarPage;
