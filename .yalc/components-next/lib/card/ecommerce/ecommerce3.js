"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EcommerceCard3 = function EcommerceCard3() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col items-center justify-center max-w-sm mx-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md",
    style: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
  }, "Nike Revolt"), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "font-bold text-gray-800 dark:text-gray-200"
  }, "$129"), /*#__PURE__*/_react.default.createElement("button", {
    className: "px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
  }, "Add to cart"))));
};

var _default = EcommerceCard3;
exports.default = _default;