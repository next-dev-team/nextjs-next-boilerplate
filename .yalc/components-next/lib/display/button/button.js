"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

var _excluded = ["className", "variant", "title", "color", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(props) {
  var className = props.className,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'primary' : _props$variant,
      _props$title = props.title,
      title = _props$title === void 0 ? 'button' : _props$title,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);
  /**
   * renderBtnClx base on variant
   */


  var renderVariant = function renderVariant() {
    //------- primaryColor ----------
    var primaryColor = (0, _utils.tw)({
      primary: 'bg-blue-500 hover:bg-blue-600  focus:ring-blue-200',
      dark: 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-300',
      success: 'bg-green-500 hover:bg-green-600 focus:ring-green-200'
    }); //------- outlineColor ----------

    var outlineBase = (0, _utils.cls)(primaryColor[color], 'text-blue-500 hover:text-white border border-blue-500 bg-transparent');
    var outlineColor = (0, _utils.tw1)({
      light: 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300',
      primary: outlineBase,
      dark: (0, _utils.cl)(outlineBase, 'border-gray-900 hover:bg-gray-900 text-gray-900')
    });
    /**
     * render variantType
     */

    var variantType = {
      primary: primaryColor[color],
      outline: outlineColor[color]
    };
    return variantType === null || variantType === void 0 ? void 0 : variantType[variant];
  };

  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button"
  }, (0, _omit2.default)(rest, 'variant', 'color'), {
    className: (0, _utils.clx)('text-white focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center', renderVariant(), className)
  }), children || title);
};

Button.displayName = 'Button';
var _default = Button;
exports.default = _default;