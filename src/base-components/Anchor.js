import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Anchor extends Component {
  render () {
    return (
      <a
        href={this.props.href}
        target={this.props.target}
        className={this.props.class}
      >
        {this.props.content}
      </a>
    )
  }
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Anchor;
