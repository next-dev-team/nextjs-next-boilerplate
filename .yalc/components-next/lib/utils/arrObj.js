"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clxx = exports.clx3 = exports.clx2 = exports.clx1 = exports.clx = exports.cls = exports.cl = void 0;
exports.getNotNullVal = getNotNullVal;
exports.getStringVal = getStringVal;
exports.tw3 = exports.tw2 = exports.tw1 = exports.tw = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _tailwindOverride = require("tailwind-override");

var _lodash = require("./lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * override class using clsx
 * @param rest
 * @returns
 */
const clx = (...rest) => {
  return (0, _tailwindOverride.overrideTailwindClasses)((0, _classnames.default)(rest));
};

exports.clx = clx;

const clxx = (...rest) => {
  return (0, _tailwindOverride.overrideTailwindClasses)((0, _classnames.default)(rest));
}; //  the class tw suggestion only one time per file so I need to create it n time


exports.clxx = clxx;
const clx1 = clx;
exports.clx1 = clx1;
const clx2 = clx;
exports.clx2 = clx2;
const clx3 = clx;
exports.clx3 = clx3;

const cls = (...rest) => {
  return (0, _classnames.default)(rest);
};

exports.cls = cls;

const cl = (...rest) => {
  return (0, _classnames.default)(rest);
};
/**
 * get suggestion tw class in vs-code setting.json
 * @param v
 * @returns
 */


exports.cl = cl;

const tw = v => {
  return v;
};

exports.tw = tw;
const tw1 = tw;
exports.tw1 = tw1;
const tw2 = tw;
exports.tw2 = tw2;
const tw3 = tw;
exports.tw3 = tw3;

function getStringVal(v) {
  return (0, _lodash._isEmpty)(v) ? null : v;
}

function getNotNullVal(values) {
  // @ts-ignore
  return (0, _lodash._pickBy)(values || {}, v => v !== null && v !== undefined && v !== ' ' && v !== 'null' && v !== '');
}