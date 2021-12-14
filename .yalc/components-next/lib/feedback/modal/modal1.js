"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ModalUI1 = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("./");

var _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ModalUI1 = function ModalUI1() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center p-5 flex-auto justify-center"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-4 h-4 -m-1 flex items-center text-red-500 mx-auto",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })), /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-16 h-16 flex items-center text-red-500 mx-auto",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
    clipRule: "evenodd"
  })), /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-xl font-bold py-4 "
  }, "Are you sure?"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-sm text-gray-500 px-8"
  }, "Do you really want to delete your account? This process cannot be undone"));
};

exports.ModalUI1 = ModalUI1;

var Modal1 = function Modal1() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react.default.createElement(_.Modal, _extends({
    footer: [/*#__PURE__*/_react.default.createElement("button", {
      key: "cancel",
      onClick: props.onClose,
      className: "mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
    }, "Cancel"), /*#__PURE__*/_react.default.createElement("button", {
      key: "delete",
      className: "ml-2 mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
    }, "Delete")]
  }, rest), /*#__PURE__*/_react.default.createElement(ModalUI1, null));
};

var _default = Object.assign(Modal1, {});

exports.default = _default;