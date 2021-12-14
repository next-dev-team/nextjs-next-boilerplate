"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  RcForm: true,
  RcProvider: true
};
Object.defineProperty(exports, "RcForm", {
  enumerable: true,
  get: function get() {
    return _rcForm.default;
  }
});
Object.defineProperty(exports, "RcProvider", {
  enumerable: true,
  get: function get() {
    return _rcProvider.default;
  }
});

var _rcFieldForm = require("rc-field-form");

Object.keys(_rcFieldForm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _rcFieldForm[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rcFieldForm[key];
    }
  });
});

var _rcForm = _interopRequireDefault(require("./rcForm"));

var _rcProvider = _interopRequireDefault(require("./rcProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }