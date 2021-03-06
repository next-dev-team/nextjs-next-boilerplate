"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EcommerceCard3 = function EcommerceCard3() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-white rounded shadow hover:shadow-md duration-4 w-full"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row justify-between uppercase font-bold text-blue-dark border-b p-6"
  }, /*#__PURE__*/_react.default.createElement("p", null, "My awesome item name"), /*#__PURE__*/_react.default.createElement("div", {
    className: "cursor-pointer text-grey-dark hover:text-blue duration-4"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-ellipsis-v"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "p-6 text-grey-darker text-justify flex flex-col"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://picsum.photos/300/300",
    alt: "Some image",
    className: "w-64 flex self-center rounded-full shadow-lg mb-6"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "font-bold text-sm uppercase mb-2 text-blue-darker"
  }, "Item description:"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-grey-darker"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-4"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "uppercase bg-green text-white font-bold p-2 text-xs shadow rounded"
  }, "25% off"), /*#__PURE__*/_react.default.createElement("span", {
    className: "uppercase bg-yellow-dark text-grey-darkest font-bold p-2 text-xs shadow rounded"
  }, "stock: 3"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "p-6 text-grey-darker text-justify flex flex-row justify-end border-t"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "uppercase text-blue mx-8 text-sm hover:text-blue-dark duration-4 self-center"
  }, "details"), /*#__PURE__*/_react.default.createElement("button", {
    className: "uppercase self-end bg-green font-bold text-white px-6 py-4 rounded hover:bg-green-dark duration-4"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-cart-plus mr-4"
  }), "Add to cart")));
};

var _default = EcommerceCard3;
exports.default = _default;