"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "twColors", {
  enumerable: true,
  get: function get() {
    return _colors().default;
  }
});

function _colors() {
  const data = _interopRequireDefault(require("tailwindcss/colors"));

  _colors = function _colors() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }