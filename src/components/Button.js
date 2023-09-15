import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.scss";

function Button({ onClick, className, children }) {
  return (
    <button className={className} onClick={onClick}>
      {typeof children === "function" ? children() : children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

export default Button;
