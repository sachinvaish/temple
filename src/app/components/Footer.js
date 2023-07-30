import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
  <div className="footer__top padding--top padding--bottom">
    <div className="container">
      <div className="row g-4">
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="footer__about">
            <div className="section__header">
              <h2>About prayerzon</h2>
            </div>
            <div className="section__wrapper">
              <div className="footer__about-thumb">
                <img
                  src="assets/images/footer/about/01.jpg"
                  alt="footer thumb"
                  className="w-100"
                />
              </div>
              <div className="footer__about-contet">
                <p>
                  Dramatically strategize economically sound action items for
                  e-business niches. Quickly re-engineer 24/365 potentialities
                  before.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="footer__tags">
            <div className="section__header">
              <h2>Post Tag</h2>
            </div>
            <div className="section__wrapper">
              <ul>
                <li>
                  <a href="#">Christian</a>
                </li>
                <li>
                  <a href="#">Hindu</a>
                </li>
                <li>
                  <a href="#">Magazine</a>
                </li>
                <li>
                  <a href="#">Muslims</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">SEO</a>
                </li>
                <li>
                  <a href="#">Themes</a>
                </li>
                <li>
                  <a href="#">WordPress</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Photography</a>
                </li>
                <li>
                  <a href="#">Media</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="footer__post">
            <div className="section__header">
              <h2>Recent Post</h2>
            </div>
            <div className="section__wrapper">
              <div className="footer__post-item">
                <div className="footer__post-inner">
                  <div className="footer__post-thumb">
                    <a href="blog-single.html">
                      <img
                        src="assets/images/footer/post/01.jpg"
                        alt="footer post"
                      />
                    </a>
                  </div>
                  <div className="footer__post-content">
                    <a href="blog-single.html">
                      <h6>Collaboratively Coordinate.</h6>
                    </a>
                    <p>
                      <i className="far fa-calendar-alt" /> 10 January, 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer__post-item">
                <div className="footer__post-inner">
                  <div className="footer__post-thumb">
                    <a href="blog-single.html">
                      <img
                        src="assets/images/footer/post/02.jpg"
                        alt="footer post"
                      />
                    </a>
                  </div>
                  <div className="footer__post-content">
                    <a href="blog-single.html">
                      <h6>Quickly Develop Exceptional</h6>
                    </a>
                    <p>
                      <i className="far fa-calendar-alt" /> 10 January, 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer__post-item">
                <div className="footer__post-inner">
                  <div className="footer__post-thumb">
                    <a href="blog-single.html">
                      <img
                        src="assets/images/footer/post/03.jpg"
                        alt="footer post"
                      />
                    </a>
                  </div>
                  <div className="footer__post-content">
                    <a href="blog-single.html">
                      <h6>Why you need prayerzon WordPress Theme?</h6>
                    </a>
                    <p>
                      <i className="far fa-calendar-alt" /> 10 January, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="footer__links">
            <div className="section__header">
              <h2>Useful Links</h2>
            </div>
            <div className="section__wrapper">
              <ul>
                <li>
                  <a href="#">Log in</a>
                </li>
                <li>
                  <a href="#">
                    Entries <abbr title="RSS">RSS</abbr>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Comments <abbr title="RSS">RSS</abbr>
                  </a>
                </li>
                <li>
                  <a href="#">WordPress.org</a>
                </li>
                <li>
                  <a href="#">Google</a>
                </li>
                <li>
                  <a href="#">Template</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer__bottom">
    <div className="container">
      <div className="footer__bottom-area text-center">
        <div className="footer__bottom-logo">
          <a href="index.html">
            <img src="assets/images/logo/03.png" alt="footer logo" />
          </a>
        </div>
        <div className="footer__bottom-content">
          <p>
            Copyright © 2022 <a href="index.html">Website</a> | Designed by{" "}
            <a href="https://www.behance.net/sachinvaish">
              Sachin Vaish
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}
