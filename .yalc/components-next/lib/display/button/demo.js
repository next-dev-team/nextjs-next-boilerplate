"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _componentsNext = require("components-next");

var _layout = require("../../utils/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//@ts-ignore
var ButtonDemo = function ButtonDemo() {
  var data = [{
    title: 'Button Primary',
    component: /*#__PURE__*/_react.default.createElement(_antd.Space, null, /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
      title: "primary"
    }), /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
      title: "dark",
      variant: "primary",
      color: "dark"
    }), /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
      title: "success",
      variant: "primary",
      color: "success"
    })),
    span: '12'
  }, {
    title: 'Button Outline',
    component: /*#__PURE__*/_react.default.createElement(_antd.Space, null, /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
      title: "light",
      variant: "outline",
      color: "light"
    }), /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
      title: "Primary",
      variant: "outline"
    }), /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
      title: "dark",
      variant: "outline",
      color: "dark"
    })),
    span: '12'
  }];
  return /*#__PURE__*/_react.default.createElement(_layout.DemoLayout, {
    data: data
  });
};

var _default = ButtonDemo;
exports.default = _default;