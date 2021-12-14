"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _price = require("./price");

Object.keys(_price).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _price[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _price[key];
    }
  });
});

var _testimonials = require("./testimonials");

Object.keys(_testimonials).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _testimonials[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _testimonials[key];
    }
  });
});

var _profile = require("./profile");

Object.keys(_profile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _profile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _profile[key];
    }
  });
});

var _blog = require("./blog");

Object.keys(_blog).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _blog[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _blog[key];
    }
  });
});

var _ecommerce = require("./ecommerce");

Object.keys(_ecommerce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ecommerce[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ecommerce[key];
    }
  });
});