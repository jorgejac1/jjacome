import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LazyImage extends React.Component {
  state = { src: null };

  componentDidMount() {
    const { src } = this.props;

    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      this.setState({ src });
    };
  }

  render() {
    return <img src={this.state.src || this.props.placeholder} />;
  }
}

LazyImage.propTypes = {
  placeholder: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default LazyImage;
