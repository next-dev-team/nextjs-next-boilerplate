"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _rcFieldForm = require("rc-field-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultMessages = {
  required: "Required"
};

var RcProvider = function RcProvider(props) {
  var isDebug = props.isDebug,
      children = props.children;
  return /*#__PURE__*/_react.default.createElement(_rcFieldForm.FormProvider, _extends({
    validateMessages: defaultMessages,
    onFormChange: function onFormChange(name, _ref) {
      var changedFields = _ref.changedFields,
          forms = _ref.forms;

      if (isDebug) {
        console.log('change from:', name, changedFields, forms);
      }
    }
  }, props), children);
};

var _default = Object.assign(RcProvider, {});

exports.default = _default;