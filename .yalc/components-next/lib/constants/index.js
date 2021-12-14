"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _img = require("./img");

Object.keys(_img).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _img[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _img[key];
    }
  });
});