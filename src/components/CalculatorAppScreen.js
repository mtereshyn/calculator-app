import React from "react";
import PropTypes from "prop-types";
function CalculatorAppScreen({ input, result }) {
  return (
    <div className="calculator-app__screen">
      <div className="calculator-app__screen-input">{input}</div>
      <div className="calculator-app__screen-result">{result}</div>
    </div>
  );
}

CalculatorAppScreen.propTypes = {
  input: PropTypes.func.isRequired,
  result: PropTypes.func.isRequired,
};

export default CalculatorAppScreen;
