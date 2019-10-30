import React from "react";
import "./App.css";
import CookieClicker from "./components/CookieClicker";
import clicker from "./img/clicker.png";
import neanderthal from "./img/neanderthal.png";
import flask from "./img/flask.png";
import dataxfer from "./img/dataxfer.png";
import classes from "./img/classes.png";
import scouts from "./img/scouts.png";
import luxwooden from "./img/luxwooden.jpg";
import orenda from "./img/orenda.png";
import hack from "./img/hackathon.png";
import q0 from "./img/ext.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faUsers, faSearch, faCogs } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <React.Fragment>
      <link
        href="vendor/fontawesome-free/css/all.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Kaushan+Script"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700"
        rel="stylesheet"
        type="text/css"
      />
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
        <div class="container">
          <a class="navbar-brand " href="#page-top">
            Jeff Liu
          </a>
        </div>
      </nav>

      <header class="masthead">
        <div class="container">
          <div class="intro-text">
            <div class="intro-lead-in">Jeff Liu</div>
            <div class="intro-heading text-uppercase">
              Dreamer, Innovator, Tinkerer
            </div>
          </div>
        </div>
      </header>

      <section class="page-section" id="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">My values</h2>
              <h3 class="section-subheading text-muted">
                My background, interests, and goals.
              </h3>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <FontAwesomeIcon icon={faUsers} />
              </span>
              <h4 class="service-heading">Social Entrepreneurship</h4>
              <p class="text-muted">
                I believe that we are here for a reason, and that we should not
                waste our abilities and privileges. I dream to catalyze massive
                social change through building products, organizations, and
                ideas. I aim to create value instead of seizing it.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <h4 class="service-heading">Curiosity and Exploration</h4>
              <p class="text-muted">
                The world is magical to me, and I am lucky to be able to explore
                and learn from it. I look to understand both the external world
                around me and the internal world within me. I value
                self-awareness and cultivating both hard and soft skills to
                become the best that I can be.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <FontAwesomeIcon icon={faCogs} />
              </span>
              <h4 class="service-heading">Tech and Craftsmanship</h4>
              <p class="text-muted">
                Raised in the Silicon Valley, I'm well-aware of the tech around
                us. But beyond the powerhouse of its exterior, my tinkerer's
                mind is drawn to inward to the beauty of creation. I hope to
                keep building tools and apps, and watch them grow to inhabit a
                spirit of their own.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light page-section" id="portfolio">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">Portfolio</h2>
              <h3 class="section-subheading text-muted">
                My software projects of interest.
              </h3>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-6 portfolio-item">
              <div class="portfolio-caption">
                <img class="img-fluid" src={neanderthal} alt="" />
                <h4>neanderthal.io</h4>
                <p class="text-muted">
                  My first out-of-school project. Unity game with basic
                  animation, interaction, and world nagivation made in 12 hours.
                  Includes realistic gravity and projectile physics. I learned
                  Unity and C# while making this. This won third place at my
                  high school's hackathon!
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 portfolio-item">
              <div class="portfolio-caption">
                <img class="img-fluid" src={flask} alt="" />
                <h4>receipts.me</h4>

                <p class="text-muted">
                  This is a collaboration with a friend who knew OCR.
                  Receipts.me is a personal finance app that scans and
                  automatically tracks expenses from receipts. It was made as a
                  Flask app in python with sqlite, and I learned python just 3
                  days before building it.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 portfolio-item">
              <div class="portfolio-caption">
                <img class="img-fluid" src={clicker} alt="" />
                <h4>React Cookie Clicker</h4>
                <p class="text-muted">
                  This is my first React app(along with this website)! I went to
                  Ziray's React lecture ~2 weeks ago, and I just learned it a
                  few days ago to make this website and this cookie clicker.
                  Learned to lift state up, interact with props, and use
                  lifecycle hooks.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 portfolio-item">
              <div class="portfolio-caption">
                <img class="img-fluid" src={dataxfer} alt="" />
                <h4>DataXfer</h4>
                <p class="text-muted">
                  Volunteering with a Tuck startup to help build an MVP.
                  DataXfer aims to streamline call centers by referring callers
                  to online links when faced with repetitive tasks like spelling
                  their name. Still in planning phase but plan to use Django
                  with Twilio API.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 portfolio-item">
              <div class="portfolio-caption">
                <img class="img-fluid" src={classes} alt="" />
                <h4>And more!</h4>
                <p class="text-muted">
                  From lawn-mower games to abstract art webcam filters, I've
                  made some other cool projects in my classes, too. However, I'm
                  only getting started, and I can't wait to learn and build so
                  many more things in the future!
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 portfolio-item">
              <div class="portfolio-caption">
                <h4>The fabled cookie clicker...</h4>

                <CookieClicker />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">My Journey</h2>
              <h3 class="section-subheading text-muted">
                Stories I carry with me.
              </h3>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ul class="timeline">
                <li>
                  <div class="timeline-image">
                    <img
                      class="rounded-circle img-fluid"
                      src={scouts}
                      alt="image1"
                    />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>March 2012</h4>
                      <h4 class="subheading">Joined the Boy Scouts</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">
                        I joined BSA Troop 452 in Cupertino, California in fifth
                        grade. Much of my character was developed here. I
                        learned how to be confident in myself, communicate
                        effectively, and serve others through leadership.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-image">
                    <img
                      class="rounded-circle img-fluid"
                      src={luxwooden}
                      alt="image2"
                    />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>June 2016</h4>
                      <h4 class="subheading">
                        Tried to Start my First Business
                      </h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">
                        Attended an summer bootcamp where I discovered my love
                        for entrepreneurship. Sold laser-cut wooden postcards on
                        the streets and online for a few weeks with a venture
                        called Lux Wooden.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-image">
                    <img
                      class="rounded-circle img-fluid"
                      src={orenda}
                      alt="image3"
                    />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>October 2016</h4>
                      <h4 class="subheading">Joined Orenda Academy</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">
                        I attended Orenda, an education program based on
                        developing soft skills like interpersonal prowess, habit
                        management, and life goal development, and then returned
                        to be their first and only intern. There, I learned the
                        importance of empathy and mission for organizations.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-image">
                    <img
                      class="rounded-circle img-fluid"
                      src={hack}
                      alt="image4"
                    />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>May 2017</h4>
                      <h4 class="subheading">My First Hackathon</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">
                        I had always enjoyed making something out of nothing
                        using code before, but Hackathons cemented that for me.
                        I love their frenetic pace, and that they allow me to
                        wear multiple hats and unite my software and business
                        skillsets.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-image">
                    <img
                      class="rounded-circle img-fluid"
                      src={q0}
                      alt="image3"
                    />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>July 2018</h4>
                      <h4 class="subheading">
                        Launched Social Venture at a Summer Incubator
                      </h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">
                        I was part of Quarter Zero's 2018 cohort. I launched
                        Viva music, an instrument donation nonprofit which was
                        implemented for several schools in the Ferguson area in
                        St.Louis. Building it up from the ground 12 hours a day
                        for a summer was one of the best times of my life.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-image">
                    <h4>And my story continues!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="container">
          <h5>
            Copyright Jeff Liu 2019. Credit to startbootstrap.com for open
            source CSS and HTML snippets. Made with React.js.
          </h5>
        </div>
        <div>
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/jeffzyliu">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.facebook.com/jeff.zy.liu">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
