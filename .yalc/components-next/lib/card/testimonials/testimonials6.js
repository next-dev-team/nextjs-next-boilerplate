"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable @typescript-eslint/no-unused-vars */
var TestimonialsCard6 = function TestimonialsCard6(props) {
  var type = props.type,
      clxBg = props.clxBg;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sm:flex items-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "w-40 h-40 sm:mr-10",
    src: _.IMG.profile,
    alt: "Avatar of Jonathan Reinink"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-left"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4 text-gray-500"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "mt-2 text-base leading-6"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."), /*#__PURE__*/_react.default.createElement("div", {
    className: "sm:flex justify-between items-end"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm mt-5"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
  }, "Jonathan Reinink"), /*#__PURE__*/_react.default.createElement("p", null, "Blogger & Youtuber")), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center text-indigo-600 text-xs uppercase"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "mr-2"
  }, "Youtube"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "mr-2"
  }, "Medium"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "mr-2"
  }, "Twitter"))))));
};

var _default = TestimonialsCard6;
exports.default = _default;