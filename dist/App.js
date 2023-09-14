"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./styles/App.scss");
var _CalculatorApp = _interopRequireDefault(require("./components/CalculatorApp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_CalculatorApp.default, null));
}
var _default = App;
exports.default = _default;