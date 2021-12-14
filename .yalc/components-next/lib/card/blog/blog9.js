"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlogCard9 = function BlogCard9() {
  return /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white hover:bg-gray-100 border shadow-md items-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg",
    src: "https://flowbite.com/docs/images/blog/image-4.jpg"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "p-4 flex flex-col justify-between leading-normal"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "text-gray-900 font-bold text-2xl tracking-tight mb-2"
  }, "Noteworthy technology acquisitions 2021"), /*#__PURE__*/_react.default.createElement("p", {
    className: "font-normal text-gray-700 mb-3"
  }, "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.")));
};

var _default = BlogCard9;
exports.default = _default;