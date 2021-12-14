"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlogCard6 = function BlogCard6() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "object-center object-cover rounded-full h-36 w-36",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "photo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text-xl text-white font-bold mb-2"
  }, "Lucy Carter"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-base text-gray-400 font-normal"
  }, "Graphic Designer")));
};

var _default = BlogCard6;
exports.default = _default;