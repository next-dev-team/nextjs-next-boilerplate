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
var _default = function _default() {
  var data = [{
    title: 'Pricing Card2',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.PriceCard2, {
      data: {
        title: undefined
      }
    })
  }, {
    title: 'Pricing Card1',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.PriceCard1, null)
  }];
  return /*#__PURE__*/_react.default.createElement(_layout.DemoLayout, {
    data: data
  });
};

exports.default = _default;