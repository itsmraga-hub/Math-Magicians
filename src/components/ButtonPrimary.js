import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

class ButtonPrimary extends React.PureComponent {
  render() {
    const { name, getButtonValue } = this.props;
    return (
      <button type="button" onClick={getButtonValue} className={`btn btn-primary grid-item ${+name === 0 ? 'span-2' : null}`} data-id="" data-attribute="">{ name }</button>
    );
  }
}

ButtonPrimary.propTypes = {
  name: PropTypes.string.isRequired,
  getButtonValue: PropTypes.func.isRequired,
};

export default ButtonPrimary;
