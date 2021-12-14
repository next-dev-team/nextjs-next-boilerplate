"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _layout = require("../../utils/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var data = [{
    title: 'Default',
    component: /*#__PURE__*/_react.default.createElement(_.Input, {
      theme: "default",
      name: "default",
      label: "default input",
      requiredSign: true,
      errText: "This field is required!"
    })
  }, {
    title: 'Success',
    component: /*#__PURE__*/_react.default.createElement(_.Input, {
      theme: "success",
      name: "success",
      label: "success input"
    })
  }, {
    title: 'Warning',
    component: /*#__PURE__*/_react.default.createElement(_.Input, {
      theme: "warning",
      name: "warning",
      label: "warning input"
    })
  }, {
    title: 'Error',
    component: /*#__PURE__*/_react.default.createElement(_.Input, {
      theme: "error",
      name: "error",
      label: "error input",
      requiredSign: true,
      errText: "This field is required!"
    })
  }];
  return /*#__PURE__*/_react.default.createElement(_layout.DemoLayout, {
    data: data
  });
};

exports.default = _default;