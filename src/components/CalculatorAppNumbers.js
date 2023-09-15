import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/CalculatorApp.scss";

function CalculatorAppNumbers({ onButtonClick, onClearClick }) {
  const buttons = [
    { text: "AC", className: "app-button--ac", onClick: onClearClick },
    {
      text: "7",
      className: "app-button--number",
      onClick: () => handleNumberClick("7"),
    },
    {
      text: "8",
      className: "app-button--number",
      onClick: () => handleNumberClick("8"),
    },
    {
      text: "9",
      className: "app-button--number",
      onClick: () => handleNumberClick("9"),
    },
    {
      text: "4",
      className: "app-button--number",
      onClick: () => handleNumberClick("4"),
    },
    {
      text: "5",
      className: "app-button--number",
      onClick: () => handleNumberClick("5"),
    },
    {
      text: "6",
      className: "app-button--number",
      onClick: () => handleNumberClick("6"),
    },
    {
      text: "1",
      className: "app-button--number",
      onClick: () => handleNumberClick("1"),
    },
    {
      text: "2",
      className: "app-button--number",
      onClick: () => handleNumberClick("2"),
    },
    {
      text: "3",
      className: "app-button--number",
      onClick: () => handleNumberClick("3"),
    },
    {
      text: "0",
      className: "app-button--number-zero",
      onClick: () => handleNumberClick("0"),
    },
    {
      text: ",",
      className: "app-button--number",
      onClick: () => handleNumberClick(","),
    },
  ];

  const handleNumberClick = (value) => {
    onButtonClick(value);
  };

  return (
    <div className="calculator-app__list-numbers">
      {buttons.map((button, index) => (
        <div key={index} className="calculator-app__list-numbers__wrapper">
          <Button className={button.className} onClick={button.onClick}>
            {button.text}
          </Button>
        </div>
      ))}
    </div>
  );
}

CalculatorAppNumbers.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  onClearClick: PropTypes.func.isRequired,
};

export default CalculatorAppNumbers;
