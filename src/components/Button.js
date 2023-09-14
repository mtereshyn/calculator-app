import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.scss";

function Button({ onClick, className, children }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default Button;
