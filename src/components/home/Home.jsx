import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.PureComponent {
  render() {
    return (
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li className="img_bg_1.jpg">
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>
                          I am
                          <br />
                          a Developer
                        </h1>
                        <h2>“Knowledge is power.” – Francis Bacon</h2>
                        <p>button to download CV</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="img_bg_2.jpg">
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>
                          I am
                          <br />
                          a FrontEnd Engineer
                        </h1>
                        <h2>I dont find excuses, I find solutions</h2>
                        <p>
                          <Link to="/experience" className="btn btn-primary btn-learn">
                            View Portfolio
                            <i className="icon-briefcase3" />
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
