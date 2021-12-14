"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestimonialsCard5 = function TestimonialsCard5(props) {
  var type = props.type,
      clxBg = props.clxBg;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sm:flex items-start"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "w-48 h-full rounded-sm mr-10",
    src: "https://tailwindcss.com/img/card-left.jpg",
    alt: "Avatar of Jonathan Reinink"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-left mt-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4 text-gray-500"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    height: "35px",
    className: "mb-2",
    fill: "#5a67d8",
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("g", {
    id: "right_x5F_quote"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"
  }))))), /*#__PURE__*/_react.default.createElement("p", {
    className: "mt-2 text-base leading-6"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm mt-5"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
  }, "Jonathan Reinink"), /*#__PURE__*/_react.default.createElement("p", null, "CEO")))));
};

var _default = TestimonialsCard5;
exports.default = _default;