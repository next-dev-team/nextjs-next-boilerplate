"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _steps = require("./steps");

Object.keys(_steps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _steps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _steps[key];
    }
  });
});