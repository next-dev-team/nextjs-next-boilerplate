"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ahooks = require("ahooks");

var _antd = require("antd");

var _componentsNext = require("components-next");

var _animTypes = _interopRequireDefault(require("rc-texty/es/animTypes"));

var _layout = require("../../utils/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//@ts-ignore
var text = 'Welcome';

var Demo = function Demo() {
  var state = (0, _ahooks.useReactive)({
    show: true,
    mode: 'smooth',
    type: 'left'
  });

  var onClick = function onClick() {
    state.show = !state.show;
  };

  var onChange = function onChange(v) {
    state.type = v;
    onClick();
  };

  var onModeChange = function onModeChange(value) {
    state.mode = value;
    onClick();
  };

  return /*#__PURE__*/_react.default.createElement(_layout.DemoLayout, null, /*#__PURE__*/_react.default.createElement(_componentsNext.TextAnimate, {
    type: state.type,
    mode: state.mode,
    className: "text-4xl text-green-400"
  }, state.show && text), /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: "large",
    className: "mt-10"
  }, "type:", /*#__PURE__*/_react.default.createElement(_componentsNext.Select1, {
    onChange: onChange,
    options: Object.keys(_animTypes.default).map(function (key) {
      return {
        value: key
      };
    })
  }), "mode:", /*#__PURE__*/_react.default.createElement(_componentsNext.Select1, {
    onChange: onModeChange,
    options: ['smooth', 'reverse', 'random', 'sync'].map(function (key) {
      return {
        value: key
      };
    })
  })));
};

var _default = Demo;
exports.default = _default;