import CalculatorAppNumbers from "./CalculatorAppNumbers";
import CalculatorAppMathOperations from "./CalculatorAppMathOperations";
import "../styles/CalculatorApp.scss";

function CalculatorAppButtons({
  onButtonClick,
  onMathOperationClick,
  onEqualsClick,
  onClearClick,
}) {
  return (
    <div className="calculator-app__wrapper">
      <CalculatorAppNumbers
        onButtonClick={onButtonClick}
        onClearClick={onClearClick}
      />
      <CalculatorAppMathOperations
        onMathOperationClick={onMathOperationClick}
        onEqualsClick={onEqualsClick}
      />
    </div>
  );
}

export default CalculatorAppButtons;
