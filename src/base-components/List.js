import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * @default 'li'
   */
   value: PropTypes.string,
   type: PropTypes.string,
   className: PropTypes.string,
   content: PropTypes.string.isRequired
};

const defaultProps = {
  value: '',
  type: '',
  className: ''
};

const Button = React.forwardRef(
  (
    { value, type, className, content, ...props },
    ref,
  ) => {
    const prefix = 'li';

    if (ref) {
      props.ref = ref;
    }

    return (
      <li value={value} type={type} className={className}>
        {content}
      </li>
    );
  },
);

List.displayName = 'List';
List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
