"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _layout = require("../../utils/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var selData = [{
    value: 1
  }, {
    value: 2
  }];
  var data = [{
    title: 'Select1',
    component: /*#__PURE__*/_react.default.createElement(_.Select1, {
      className: "w-2/4",
      options: selData
    })
  }, {
    title: 'Select1 with  clear',
    component: /*#__PURE__*/_react.default.createElement(_.Select1, {
      className: "w-2/4",
      options: selData,
      allowClear: true
    })
  }, {
    title: 'Select1 with search',
    component: /*#__PURE__*/_react.default.createElement(_.Select1, {
      className: "w-2/4",
      options: selData,
      showSearch: true
    })
  }];
  return /*#__PURE__*/_react.default.createElement(_layout.DemoLayout, {
    data: data
  });
};

exports.default = _default;