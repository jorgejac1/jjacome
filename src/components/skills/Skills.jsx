import React from 'react';
import ProgressBar from './ProgressBar';

export default class Skills extends React.PureComponent {
  render() {
    return (
      <section classNameName="colorlib-skills" data-section="skills">
        <div classNameName="colorlib-narrow-content">
          <div classNameName="row">
            <div classNameName="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span classNameName="heading-meta">My Specialty</span>
              <h2 classNameName="colorlib-heading animate-box">My Skills</h2>
            </div>
          </div>
          <div classNameName="row">
            <div classNameName="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <p>text</p>
            </div>
            <div>
              <ProgressBar />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
