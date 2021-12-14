"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSsr = exports.isProd = exports.isDev = exports.isBrowser = void 0;
const isDev = process.env.NODE_ENV === 'development';
exports.isDev = isDev;
const isProd = process.env.NODE_ENV === 'production';
exports.isProd = isProd;
const isBrowser = process.env.BROWSER;
exports.isBrowser = isBrowser;
const isSsr = !isBrowser;
exports.isSsr = isSsr;