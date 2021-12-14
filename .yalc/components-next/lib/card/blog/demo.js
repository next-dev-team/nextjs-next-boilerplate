"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _componentsNext = require("components-next");

var _layout = require("../../utils/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//@ts-nocheck
var _default = function _default() {
  var data = [{
    title: 'Bloc Card10',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.BlogCard10, null)
  }, {
    title: 'Bloc Card9',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.BlogCard9, null)
  }, {
    title: 'Bloc Card8',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.BlogCard8, null)
  }, {
    title: 'Bloc Card7',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.BlogCard7, null),
    span: '12'
  }, {
    title: 'Bloc Card6',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.BlogCard6, null)
  }, {
    title: 'Bloc Card5',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.BlogCard5, null)
  }, {
    title: 'Bloc Card4',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.BlogCard4, null)
  }, {
    title: 'blog Card3',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.BlogCard3, null)
  }, {
    title: 'blog Card2',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.BlogCard2, null)
  }, {
    title: 'bloc Card1',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.BlogCard1, null)
  }];
  return /*#__PURE__*/_react.default.createElement(_layout.DemoLayout, {
    data: data
  });
};

exports.default = _default;