import * as React from "react";
import { Helmet } from "react-helmet";
import "../styles/styles.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Field, connectPage } from "@jaenjs/jaen";
import { graphql, PageProps } from 'gatsby'
import PartnerSection from "../sections/PartnerSection/PartnerSection";
import DownloadSection from "../sections/DownloadSection/DownloadSection";
import AboutSection from "../sections/AboutSection/AboutSection";
import FeaturesSection from "../sections/FeaturesSection/FeaturesSection";

// markup
const IndexPage = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  function handleClick() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <main>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&amp;display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <body id="page-top">
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
          id="mainNav"
        >
          <div className="container px-5">
            <a className="navbar-brand fw-bold" href="#page-top">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleClick}
            >
              Menu
              <i className="bi-list"></i>
            </button>
            {navbarOpen ? (
              <div className="navbar-collapse">
                <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                  <li className="nav-item">
                    <a className="nav-link me-lg-3" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-lg-3" href="#download">
                      Download
                    </a>
                  </li>
                </ul>
                <button
                  className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
                  data-bs-toggle="modal"
                  data-bs-target="#feedbackModal"
                >
                  <span className="d-flex align-items-center">
                    <i className="bi-chat-text-fill me-2"></i>
                    <span className="small">Send Feedback</span>
                  </span>
                </button>
              </div>
            ) : (
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                  <li className="nav-item">
                    <a className="nav-link me-lg-3" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-lg-3" href="#download">
                      Download
                    </a>
                  </li>
                </ul>
                <button
                  className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
                  data-bs-toggle="modal"
                  data-bs-target="#feedbackModal"
                >
                  <span className="d-flex align-items-center">
                    <i className="bi-chat-text-fill me-2"></i>
                    <span className="small">Send Feedback</span>
                  </span>
                </button>
              </div>
            )}
          </div>
        </nav>
        <header className="masthead">
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="mb-5 mb-lg-0 text-center text-lg-start">
                  <h1 className="display-1 lh-1 mb-3">
                    <Field.Text name="Headline" defaultValue={"Showcase your app beautifully."}/>
                  </h1>
                  <p className="lead fw-normal text-muted mb-5">
                    <Field.Text name="Undertitel" defaultValue={"Launch your mobile app landing page faster with this free, open source theme from Start Bootstrap!"} />
                  </p>
                  <div className="d-flex flex-column flex-lg-row align-items-center">
                    <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                      <img
                        className="app-badge"
                        src="https://raw.githubusercontent.com/StartBootstrap/startbootstrap-new-age/4bfda90b95322054a0af4249174c673598b00296/src/assets/img/google-play-badge.svg"
                        alt="..."
                      />
                    </a>
                    <a href="#!">
                      <img
                        className="app-badge"
                        src="https://raw.githubusercontent.com/StartBootstrap/startbootstrap-new-age/4bfda90b95322054a0af4249174c673598b00296/src/assets/img/app-store-badge.svg"
                        alt="..."
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="masthead-device-mockup">
                  <svg
                    className="circle"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="circleGradient"
                        gradientTransform="rotate(45)"
                      >
                        <stop
                          className="gradient-start-color"
                          offset="0%"
                        ></stop>
                        <stop
                          className="gradient-end-color"
                          offset="100%"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50"></circle>
                  </svg>
                  <svg
                    className="shape-1 d-none d-sm-block"
                    viewBox="0 0 240.83 240.83"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="-32.54"
                      y="78.39"
                      width="305.92"
                      height="84.05"
                      rx="42.03"
                      transform="translate(120.42 -49.88) rotate(45)"
                    ></rect>
                    <rect
                      x="-32.54"
                      y="78.39"
                      width="305.92"
                      height="84.05"
                      rx="42.03"
                      transform="translate(-49.88 120.42) rotate(-45)"
                    ></rect>
                  </svg>
                  <svg
                    className="shape-2 d-none d-sm-block"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="50"></circle>
                  </svg>
                  <div className="device-wrapper">
                    <div
                      className="device"
                      data-device="iPhoneX"
                      data-orientation="portrait"
                      data-color="black"
                    >
                      <div className="screen bg-black">
                        <video
                          muted={true}
                          autoPlay={true}
                          loop={true}
                          style={{ width: "100%", height: "100%" }}
                        >
                          <source
                            src="https://raw.githubusercontent.com/StartBootstrap/startbootstrap-new-age/master/src/assets/img/demo-screen.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Field.Section sections={[PartnerSection, DownloadSection, AboutSection, FeaturesSection]} name="Sections" displayName="Sections"/>
        <section className="bg-gradient-primary-to-secondary" id="download">
          <div className="container px-5">
            <h2 className="text-center text-white font-alt mb-4">
              Get the app now!
            </h2>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
              <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                <img
                  className="app-badge"
                  src="https://raw.githubusercontent.com/StartBootstrap/startbootstrap-new-age/4bfda90b95322054a0af4249174c673598b00296/src/assets/img/google-play-badge.svg"
                  alt="..."
                />
              </a>
              <a href="#!">
                <img
                  className="app-badge"
                  src="https://raw.githubusercontent.com/StartBootstrap/startbootstrap-new-age/4bfda90b95322054a0af4249174c673598b00296/src/assets/img/app-store-badge.svg"
                  alt="..."
                />
              </a>
            </div>
          </div>
        </section>
        <footer className="bg-black text-center py-5">
          <div className="container px-5">
            <div className="text-white-50 small">
              <div className="mb-2">
                &copy; Your Website 2022. All Rights Reserved.
              </div>
              <a href="#!">Privacy</a>
              <span className="mx-1">&middot;</span>
              <a href="#!">Terms</a>
              <span className="mx-1">&middot;</span>
              <a href="#!">FAQ</a>
            </div>
          </div>
        </footer>
        <div
          className="modal fade"
          id="feedbackModal"
          tabIndex={-1}
          aria-labelledby="feedbackModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-gradient-primary-to-secondary p-4">
                <h5
                  className="modal-title font-alt text-white"
                  id="feedbackModalLabel"
                >
                  Send feedback
                </h5>
                <button
                  className="btn-close btn-close-white"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body border-0 p-4">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      data-sb-validations="required"
                    />
                    <label htmlFor="name">Full name</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="name:required"
                    >
                      A name is required.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      data-sb-validations="required,email"
                    />
                    <label htmlFor="email">Email address</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:required"
                    >
                      An email is required.
                    </div>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:email"
                    >
                      Email is not valid.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      data-sb-validations="required"
                    />
                    <label htmlFor="phone">Phone number</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required"
                    >
                      A phone number is required.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Enter your message here..."
                      style={{ height: "10rem" }}
                      data-sb-validations="required"
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        Form submission successful!
                      </div>
                      To activate this form, sign up at
                      <br />
                      <a href="https://startbootstrap.com/solution/contact-forms">
                        https://startbootstrap.com/solution/contact-forms
                      </a>
                    </div>
                  </div>
                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary rounded-pill btn-lg disabled"
                      id="submitButton"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      </body>
    </main>
  );
};

export const query = graphql`
  query($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default connectPage(IndexPage, { displayName: "Test" });
