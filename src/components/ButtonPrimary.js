import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const ButtonPrimary = (props) => {
  const { name, getButtonValue } = props;
  return (
    <button
      type="button"
      onClick={getButtonValue}
      className={`btn grid-item ${+name === 0 ? 'span-2' : ''} ${name === 'x' || name === '÷' || name === '-' || name === '+' || name === '=' ? 'btn-secondary' : 'btn-primary'}`}
    >
      { name }
    </button>
  );
};

ButtonPrimary.propTypes = {
  name: PropTypes.string.isRequired,
  getButtonValue: PropTypes.func.isRequired,
};

export default ButtonPrimary;
