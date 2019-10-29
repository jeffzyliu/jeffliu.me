import React from "react";
import "./App.css";
import CookieClicker from "./components/CookieClicker";
import clicker from "./img/clicker.png";
import neanderthal from "./img/neanderthal.png";
import flask from "./img/flask.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

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
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
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
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
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
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
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
                <h4>Neanderthal.io</h4>
                <p class="text-muted">
                  My first out-of-school project! Simple Unity game with basic
                  animation, interaction, and world nagivation made in 12 hours.
                  I learned Unity and C# while making this. This won third place
                  at my high school's hackathon!
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
                  days before building it. Sadly it was never finished.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 portfolio-item">
              <div class="portfolio-caption">
                <img class="img-fluid" src={clicker} alt="" />
                <h4>React Cookie Clicker</h4>
                <p class="text-muted">
                  This is my first React app, attached to the footer of this
                  webpage! I first learned about React at Ziray's lecture ~2
                  weeks ago, and I just learned it a few days ago to make this
                  website and this cookie clicker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CookieClicker />
      <footer class="footer">
        <div class="container">
          <h5>
            Copyright Jeff Liu 2019. Credit to startbootstrap.com for CSS and
            some HTML I used as JSX. Made with React.js.
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
