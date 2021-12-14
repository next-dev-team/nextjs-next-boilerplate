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
    title: 'Profile Card10',
    component: /*#__PURE__*/_react.default.createElement(_.ProfileCard10, null)
  }, {
    title: 'Profile Card9',
    component: /*#__PURE__*/_react.default.createElement(_.ProfileCard9, null)
  }, {
    title: 'Profile Card8',
    component: /*#__PURE__*/_react.default.createElement(_.ProfileCard8, null)
  }, {
    title: 'Profile Card7',
    component: /*#__PURE__*/_react.default.createElement(_.ProfileCard7, null)
  }, {
    title: 'Profile Card6',
    component: /*#__PURE__*/_react.default.createElement(_.ProfileCard6, null)
  }, {
    title: 'Profile Card5',
    component: /*#__PURE__*/_react.default.createElement(_.ProfileCard5, null)
  }, {
    title: 'Profile Card1',
    component: /*#__PURE__*/_react.default.createElement(_.ProfileCard1, null)
  }, {
    title: 'Profile Card2',
    component: /*#__PURE__*/_react.default.createElement(_.ProfileCard2, null)
  }, {
    title: 'Profile Card3',
    component: /*#__PURE__*/_react.default.createElement(_.ProfileCard3, null)
  }, {
    title: 'Profile Card4',
    component: /*#__PURE__*/_react.default.createElement(_.ProfileCard4, null)
  }];
  return /*#__PURE__*/_react.default.createElement(_layout.DemoLayout, {
    data: data
  });
};

exports.default = _default;