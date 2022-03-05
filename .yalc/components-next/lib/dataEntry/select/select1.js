"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CloseCircleFilled2 = _interopRequireDefault(require("@ant-design/icons/es/icons/CloseCircleFilled"));

var _DownOutlined2 = _interopRequireDefault(require("@ant-design/icons/es/icons/DownOutlined"));

var _react = _interopRequireDefault(require("react"));

var _rcSelect = _interopRequireDefault(require("rc-select"));

var _utils = require("../../utils");

var _excluded = ["className", "theme", "placeholder"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Select1 = function Select1(props) {
  var className = props.className,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? 'default' : _props$theme,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'Please Select' : _props$placeholder,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _utils.clx)('w-full', theme, className)
  }, /*#__PURE__*/_react.default.createElement(_rcSelect.default, _extends({
    placeholder: placeholder,
    inputIcon: /*#__PURE__*/_react.default.createElement(_DownOutlined2.default, null),
    clearIcon: /*#__PURE__*/_react.default.createElement(_CloseCircleFilled2.default, null)
  }, rest)));
};

var _default = Select1;
exports.default = _default;