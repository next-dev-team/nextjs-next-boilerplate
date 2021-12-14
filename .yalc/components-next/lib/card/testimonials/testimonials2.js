"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../constants");

var _arrObj = require("../../utils/arrObj");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestimonialsCard2 = function TestimonialsCard2(props) {
  var type = props.type,
      clxBg = props.clxBg;
  var isPrimary = type === 'primary';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center flex flex-col items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _arrObj.clx)('mb-4 bg-indigo-600 p-10 text-white', isPrimary ? 'bg-gray-100 p-10 text-gray-500' : clxBg)
  }, /*#__PURE__*/_react.default.createElement("svg", {
    height: "25px",
    className: "mx-auto mb-5",
    fill: "white",
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
    className: "mt-2 text-sm leading-6"
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum.")), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "mb-3 rounded-full mx-auto h-16 w-16 border-4 border-white",
    src: _constants.IMG.profile
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "hover:text-indigo-500 text-gray-900 font-semibold"
  }, "Zakir Hussain"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-500 uppercase text-sm"
  }, "VueJS Developer"));
};

var _default = TestimonialsCard2;
exports.default = _default;