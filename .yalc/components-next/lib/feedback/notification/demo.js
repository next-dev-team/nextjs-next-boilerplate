"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/space/style");

var _space = _interopRequireDefault(require("antd/es/space"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _layout = require("../../utils/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Demo = function Demo() {
  var data = [{
    title: 'notifications Info',
    component: /*#__PURE__*/_react.default.createElement(_space.default, null, /*#__PURE__*/_react.default.createElement(_button.default, {
      onClick: function onClick() {
        _.notifications.info({
          message: 'top right',
          description: 'Generates passages of lorem ipsum text suitable for use as placeholder copy in web pages, graphics, and more. Works in the browser, NodeJS, ..'
        });
      }
    }, "topRight"), /*#__PURE__*/_react.default.createElement(_button.default, {
      onClick: function onClick() {
        _.notifications.info({
          message: 'topLeft',
          placement: 'topLeft'
        });
      }
    }, "topLeft"), /*#__PURE__*/_react.default.createElement(_button.default, {
      onClick: function onClick() {
        _.notifications.info({
          message: 'bottomRight',
          placement: 'bottomRight'
        });
      }
    }, "bottomRight"), /*#__PURE__*/_react.default.createElement(_button.default, {
      onClick: function onClick() {
        _.notifications.info({
          message: 'bottomLeft',
          placement: 'bottomLeft'
        });
      }
    }, "bottomLeft"))
  }, {
    title: 'notifications success',
    component: /*#__PURE__*/_react.default.createElement(_space.default, {
      wrap: true
    }, /*#__PURE__*/_react.default.createElement(_button.default, {
      onClick: function onClick() {
        _.notifications.success({
          message: 'success topRight',
          description: 'Generates passages of lorem ipsum text suitable for use as placeholder copy in web pages, graphics, and more. Works in the browser, NodeJS, ..'
        });
      }
    }, "success topRight"))
  }];
  return /*#__PURE__*/_react.default.createElement(_layout.DemoLayout, {
    data: data
  });
};

var _default = Demo;
exports.default = _default;