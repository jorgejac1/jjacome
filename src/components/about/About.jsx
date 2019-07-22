import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.PureComponent {
  render() {
    return (
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About this guy</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>
                      <strong>Hi Im Jackson Ford</strong>
                      text
                    </p>
                    <p>more text</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                  <div className="services color-1">
                    <span className="icon2"><i className="icon-bulb" /></span>
                    <h3>Graphic Design</h3>
                  </div>
                </div>
                <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                  <div className="services color-2">
                    <span className="icon2"><i className="icon-globe-outline" /></span>
                    <h3>Web Design</h3>
                  </div>
                </div>
                <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                  <div className="services color-3">
                    <span className="icon2"><i className="icon-data" /></span>
                    <h3>Software</h3>
                  </div>
                </div>
                <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                  <div className="services color-4">
                    <span className="icon2"><i className="icon-phone3" /></span>
                    <h3>Application</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                  <div className="hire">
                    <h2>
                      I am happy to know you
                      <br />
                      that 300+ projects done sucessfully!
                    </h2>
                    <Link to="/contact" className="btn-hire">Hire me</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
