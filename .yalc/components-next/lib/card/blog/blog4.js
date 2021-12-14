"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlogCard4 = function BlogCard4() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 border border-gray-50"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-center md:justify-end -mt-12"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "w-20 h-20 object-cover rounded-full border-2 border-indigo-500",
    src: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-gray-800 text-3xl font-semibold"
  }, "Design Tools"), /*#__PURE__*/_react.default.createElement("p", {
    className: "mt-2 text-gray-600"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!")), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-end mt-4"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "text-xl font-medium text-indigo-500"
  }, "John Doe")));
};

var _default = BlogCard4;
exports.default = _default;