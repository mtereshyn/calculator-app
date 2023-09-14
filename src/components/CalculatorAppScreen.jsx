function CalculatorAppScreen({ input, result }) {
  return (
    <div className="calculator-app__screen">
      <div className="calculator-app__screen-input">{input}</div>
      <div className="calculator-app__screen-result">{result}</div>
    </div>
  );
}

export default CalculatorAppScreen;
