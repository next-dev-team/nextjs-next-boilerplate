import React from "react";
var initData = {
  title: 'Pay as you go'
};

var PricingCard2 = function PricingCard2(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? initData : _props$data;

  var _ref = data || {},
      title = _ref.title;

  return /*#__PURE__*/React.createElement("div", {
    className: "relative bg-gray-100 rounded shadow-lg overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-medium text-green-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "block sm:flex md:block lg:flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl font-medium"
  }, "1.4%"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl text-gray-600 ml-2"
  }, "+"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl ml-2"
  }, "20p")), /*#__PURE__*/React.createElement("span", {
    className: "block text-sm text-gray-600 mt-2"
  }, "for European cards")), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 mb-8 sm:m-8 md:m-0 md:mt-4 md:mb-8 lg:m-8 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl font-medium"
  }, "2.9%"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl text-gray-600 ml-2"
  }, "+"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl ml-2"
  }, "20p")), /*#__PURE__*/React.createElement("span", {
    className: "block text-sm text-gray-600 mt-2"
  }, "for non-European cards"))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center mt-3"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-green-200 rounded-full p-2 fill-current text-green-700"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    className: "primary",
    d: "M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "secondary",
    d: "M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-700 text-lg ml-3"
  }, "No setup, monthly, or hidden fees")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center mt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-green-200 rounded-full p-2 fill-current text-green-700"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    className: "primary",
    d: "M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "secondary",
    d: "M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-700 text-lg ml-3"
  }, "Pay only for what you use")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center mt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-green-200 rounded-full p-2 fill-current text-green-700"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    className: "primary",
    d: "M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "secondary",
    d: "M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-700 text-lg ml-3"
  }, "Real-time fee reporting")))), /*#__PURE__*/React.createElement("a", {
    className: "flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16",
    href: "#"
  }, /*#__PURE__*/React.createElement("span", null, "Create account"), /*#__PURE__*/React.createElement("span", {
    className: "font-medium text-gray-700 ml-2"
  }, "\u2794")));
};

export default PricingCard2;