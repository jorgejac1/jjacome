import React from 'react';

export default class ProgressBar extends React.PureComponent {

  const width = {
    width: '75%'
  };

  render() {
    return (
      <section classNameName="colorlib-skills" data-section="skills">
        <div classNameName="col-md-6 animate-box" data-animate-effect="fadeInLeft">
          <div classNameName="progress-wrap">
            <h3>
              Photoshop
            </h3>
            <div classNameName="progress">
              <div
                classNameName="progress-bar color-1"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={ width: '75%' }>
                <span>
                  75%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
