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
    title: 'Input validation',
    component: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.RcForm, {
      className: "w-full",
      onFinish: function onFinish(values) {
        // alert(JSON.stringify(values));
        console.log('values', values);
      }
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_.RcField, {
      type: "text",
      label: "Username",
      name: "username",
      rules: [{
        required: true
      }]
    }), /*#__PURE__*/_react.default.createElement(_.RcField, {
      type: "number",
      label: "Username",
      name: "username1",
      rules: [{
        required: true
      }]
    })))))
  }];
  return /*#__PURE__*/_react.default.createElement(_layout.DemoLayout, {
    data: data
  });
};

exports.default = _default;