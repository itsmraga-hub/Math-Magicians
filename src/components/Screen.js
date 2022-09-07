// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class Screen extends PureComponent {
  render() {
    const { value } = this.props;
    return (
      <span className="grid-span-full grid-item screen">{value}</span>
    );
  }
}

Screen.propTypes = {
  value: PropTypes.string.isRequired,
};
