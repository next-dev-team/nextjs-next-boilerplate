"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _componentsNext = require("components-next");

var _ = require("../");

var _layout = require("../../utils/layout");

var _formList = require("./demos/formList");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default() {
  var _useForm = (0, _componentsNext.useForm)(),
      _useForm2 = _slicedToArray(_useForm, 1),
      form = _useForm2[0];

  var _useForm3 = (0, _componentsNext.useForm)(),
      _useForm4 = _slicedToArray(_useForm3, 1),
      form1 = _useForm4[0];

  var data = [{
    title: 'RcForm custom submit btn',
    span: '12',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.RcForm, {
      form: form,
      hasSubmitBtn: false,
      onFinish: function onFinish(values) {
        alert(JSON.stringify(values));
      }
    }, /*#__PURE__*/_react.default.createElement(_.RcField, {
      name: "name",
      rules: [{
        required: true
      }]
    }), /*#__PURE__*/_react.default.createElement(_.RcField, {
      various: "select",
      name: "test",
      rules: [{
        required: true
      }],
      options: [{
        value: 1
      }]
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex justify-end gap-2"
    }, /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
      onClick: function onClick() {
        return form.resetFields();
      },
      variant: "outline",
      color: "dark"
    }, "Reset"), /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
      onClick: form.submit,
      color: "dark"
    }, "Submit")))
  }, {
    span: '12',
    title: 'Form With default submit',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.RcForm, {
      form: form1,
      onFinish: function onFinish(values) {
        alert(JSON.stringify(values));
      }
    }, /*#__PURE__*/_react.default.createElement(_.RcField, {
      name: "name1",
      rules: [{
        required: true
      }]
    }), /*#__PURE__*/_react.default.createElement(_.RcField, {
      various: "select",
      name: "test1",
      rules: [{
        required: true
      }],
      options: [{
        value: 1
      }]
    }))
  }, (0, _formList.FormListDemo)()];
  return /*#__PURE__*/_react.default.createElement(_layout.DemoLayout, {
    data: data
  });
};

exports.default = _default;