import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/CalculatorApp.scss";

function CalculatorAppScreen({ input, result }) {
  const [fontSizeInput, setFontSizeInput] = useState(70);
  const [fontSizeCursor, setFontSizeCursor] = useState(90);
  const [fontSizeResult, setFontSizeResult] = useState(42);

  useEffect(() => {
    const newFontSize = 70 - 2 * (input.length - 1);
    setFontSizeInput(Math.max(newFontSize, 12));
    setFontSizeCursor(Math.max(newFontSize + 20, 12));
  }, [input]);

  useEffect(() => {
    const newFontSize = 42 - 2 * (result.length - 1);
    setFontSizeResult(Math.max(newFontSize, 12));
  }, [result]);

  useEffect(() => {
    if (input.length < result.length) {
      const newFontSize = 70 - 3 * (input.length - 1);
      setFontSizeInput(Math.max(newFontSize, 12));
      setFontSizeCursor(Math.max(newFontSize + 20, 12));
    }
  }, [input, result]);

  return (
    <div className="calculator-app__screen">
      <div
        className={`calculator-app__screen-input`}
        style={{ fontSize: `${fontSizeInput}px` }}
      >
        {input}
        <span
          className="calculator-app__screen--cursor"
          style={{ fontSize: `${fontSizeCursor}px` }}
        >
          |
        </span>
      </div>
      <div
        className="calculator-app__screen-result"
        style={{ fontSize: `${fontSizeResult}px` }}
      >
        {result}
      </div>
    </div>
  );
}

CalculatorAppScreen.propTypes = {
  input: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};

export default CalculatorAppScreen;
