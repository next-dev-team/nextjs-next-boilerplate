"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _componentsNext = require("components-next");

var _layout = require("../../utils/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//@ts-ignore
var Demo = function Demo() {
  var data = [{
    title: 'ecommerce card4',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.EcommerceCard4, null)
  }, {
    title: 'ecommerce card3',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.EcommerceCard3, null)
  }, {
    title: 'ecommerce card2',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.EcommerceCard2, null)
  }, {
    title: 'ecommerce card1',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.EcommerceCard1, null)
  }];
  return /*#__PURE__*/_react.default.createElement(_layout.DemoLayout, {
    data: data
  });
};

var _default = Demo;
exports.default = _default;