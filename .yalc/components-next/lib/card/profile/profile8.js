"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileCard8 = function ProfileCard8() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full max-w-xs text-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80",
    alt: "avatar",
    className: "object-cover object-center w-full h-48 mx-auto rounded-lg"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-lg font-medium text-gray-700 dark:text-gray-200"
  }, "Ahmed Omer"), /*#__PURE__*/_react.default.createElement("span", {
    className: "mt-1 font-medium text-gray-600 dark:text-gray-300"
  }, "CEO")));
};

var _default = ProfileCard8;
exports.default = _default;