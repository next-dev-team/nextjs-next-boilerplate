"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileCard9 = function ProfileCard9() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-white w-full shadow rounded hover:shadow-lg transition duration-200 transform hover:-translate-y-2 overflow-hidden my-5"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://images.unsplash.com/photo-1597652578663-963b7a8a5de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80",
    className: "h-48 w-full object-cover object-center"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full flex flex-col"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "font-bold text-gray-700 w-full text-center mt-1 cursor-default text-lg"
  }, "My Name"), /*#__PURE__*/_react.default.createElement("p", {
    className: "p-3 pt-1 cursor-default"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias?"), /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 m-2 focus:outline-none rounded"
  }, "Look")));
};

var _default = ProfileCard9;
exports.default = _default;