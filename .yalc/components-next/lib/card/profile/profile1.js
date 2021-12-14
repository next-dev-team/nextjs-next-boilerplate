"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileCard1 = function ProfileCard1() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "object-cover w-full h-56",
    src: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "avatar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "py-5 text-center"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "block text-2xl font-bold text-gray-800 dark:text-white"
  }, "John Doe"), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-sm text-gray-700 dark:text-gray-200"
  }, "Software Engineer")));
};

var _default = ProfileCard1;
exports.default = _default;