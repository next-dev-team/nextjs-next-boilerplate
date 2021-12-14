"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../../");

var _layout = require("../../utils/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var data = [{
    title: 'Testimonials Card1',
    component: /*#__PURE__*/_react.default.createElement(_.TestimonialsCard1, null)
  }, {
    title: 'Testimonials Card2 ',
    component: /*#__PURE__*/_react.default.createElement(_.TestimonialsCard2, null)
  }, {
    title: 'Testimonials Card2-A ',
    component: /*#__PURE__*/_react.default.createElement(_.TestimonialsCard2, {
      type: 'primary'
    })
  }, {
    title: 'Testimonials Card3 ',
    component: /*#__PURE__*/_react.default.createElement(_.TestimonialsCard3, {
      type: 'primary'
    })
  }, {
    title: 'Testimonials Card4',
    component: /*#__PURE__*/_react.default.createElement(_.TestimonialsCard4, null)
  }, {
    title: 'Testimonials Card5',
    component: /*#__PURE__*/_react.default.createElement(_.TestimonialsCard5, null)
  }, {
    title: 'Testimonials Card6',
    component: /*#__PURE__*/_react.default.createElement(_.TestimonialsCard6, null)
  }];
  return /*#__PURE__*/_react.default.createElement(_layout.DemoLayout, {
    data: data
  });
};

exports.default = _default;