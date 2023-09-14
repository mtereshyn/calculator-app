import Button from "./Button";
import "../styles/CalculatorApp.scss";

function CalculatorAppNumbers({ onButtonClick, onClearClick }) {
  const handleNumberClick = (value) => {
    onButtonClick(value);
  };
  const handleClearAllClick = () => {
    onClearClick();
  };
  return (
    <div className="calculator-app__list-numbers">
      <Button className={"app-button--ac"} onClick={handleClearAllClick}>
        AC
      </Button>
      <div className="calculator-app__list-numbers__wrapper">
        <Button
          className={"app-button--number"}
          onClick={() => handleNumberClick("7")}
        >
          7
        </Button>
        <Button
          className={"app-button--number"}
          onClick={() => handleNumberClick("8")}
        >
          8
        </Button>
        <Button
          className={"app-button--number"}
          onClick={() => handleNumberClick("9")}
        >
          9
        </Button>
      </div>
      <div className="calculator-app__list-numbers__wrapper">
        <Button
          className={"app-button--number"}
          onClick={() => handleNumberClick("4")}
        >
          4
        </Button>
        <Button
          className={"app-button--number"}
          onClick={() => handleNumberClick("5")}
        >
          5
        </Button>
        <Button
          className={"app-button--number"}
          onClick={() => handleNumberClick("6")}
        >
          6
        </Button>
      </div>
      <div className="calculator-app__list-numbers__wrapper">
        <Button
          className={"app-button--number"}
          onClick={() => handleNumberClick("1")}
        >
          1
        </Button>
        <Button
          className={"app-button--number"}
          onClick={() => handleNumberClick("2")}
        >
          2
        </Button>
        <Button
          className={"app-button--number"}
          onClick={() => handleNumberClick("3")}
        >
          3
        </Button>
      </div>
      <div className="calculator-app__list-numbers__wrapper">
        <Button
          className={"app-button--number-zero"}
          onClick={() => handleNumberClick("0")}
        >
          0
        </Button>
        <Button
          className={"app-button--number-comma"}
          onClick={() => handleNumberClick(",")}
        >
          <div className="app-button--number-comma__symbol">⸴</div>
        </Button>
      </div>
    </div>
  );
}
export default CalculatorAppNumbers;
