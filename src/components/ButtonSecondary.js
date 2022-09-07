import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

class ButtonSecondary extends React.PureComponent {
  render() {
    const { name, getButtonValue } = this.props;
    return <button type="button" onClick={getButtonValue} className="btn btn-secondary grid-item" data-id="" data-attribute="">{ name }</button>;
  }
}

ButtonSecondary.propTypes = {
  name: PropTypes.string.isRequired,
  getButtonValue: PropTypes.func.isRequired,
};

export default ButtonSecondary;
