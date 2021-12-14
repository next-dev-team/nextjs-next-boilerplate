"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _rcInputNumber = _interopRequireDefault(require("rc-input-number"));

var _utils = require("../../utils");

var _excluded = ["theme", "name", "className", "placeholder", "type"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Input = function Input(props) {
  var _props$theme = props.theme,
      theme = _props$theme === void 0 ? 'warning' : _props$theme,
      name = props.name,
      className = props.className,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'Please Enter' : _props$placeholder,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      rest = _objectWithoutProperties(props, _excluded);

  var renderInput = function renderInput() {
    var placements = (0, _utils.tw)({
      default: 'border-gray-300  focus:ring-gray-200',
      success: 'border-green-500 text-green-600 placeholder-green-600 focus:ring-green-200',
      warning: 'border-yellow-500 text-yellow-600 placeholder-yellow-600 focus:ring-yellow-200',
      error: 'border-red-500 text-red-600 placeholder-red-600 focus:ring-red-200'
    });
    return placements === null || placements === void 0 ? void 0 : placements[theme];
  };

  var renderNumberClx = function renderNumberClx() {
    var placements = {
      default: 'default',
      success: 'success',
      warning: 'warning',
      error: 'error'
    };
    return placements === null || placements === void 0 ? void 0 : placements[theme];
  };

  if (type === 'number') {
    return (
      /*#__PURE__*/
      // @ts-ignore
      _react.default.createElement(_rcInputNumber.default, _objectSpread({
        className: renderNumberClx(),
        min: 0,
        type: type,
        id: name,
        name: name,
        placeholder: placeholder
      }, rest))
    );
  }

  return /*#__PURE__*/_react.default.createElement("input", _objectSpread({
    type: type,
    id: name,
    name: name,
    placeholder: placeholder,
    className: (0, _utils.clx)('px-4 py-2 rounded-lg border focus:outline-none focus:ring-2', renderInput(), className)
  }, rest));
};

var _default = Input;
exports.default = _default;