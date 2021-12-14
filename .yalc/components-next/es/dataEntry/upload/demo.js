function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from "react";
//@ts-ignore
import { DragUpload, RcField, RcForm, useForm } from 'components-next';
import { useState } from 'react';
import { DemoLayout } from '../../utils/layout';

var UploadDemo = function UploadDemo() {
  var _useForm = useForm(),
      _useForm2 = _slicedToArray(_useForm, 1),
      form = _useForm2[0];

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      upload = _useState2[0],
      setUpload = _useState2[1];

  var data = [{
    title: 'Upload with Form',
    component: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RcForm, {
      form: form,
      onFinish: function onFinish(values) {
        console.log('values', values);
      }
    }, /*#__PURE__*/React.createElement(RcField, {
      name: "test"
    }, /*#__PURE__*/React.createElement(DragUpload, {
      onSuccess: function onSuccess(res, file) {
        setUpload(file.name);
      }
    }))))
  }, {
    title: 'Drag Upload or Browse',
    component: /*#__PURE__*/React.createElement(DragUpload, null)
  }];
  return /*#__PURE__*/React.createElement(DemoLayout, {
    data: data
  });
};

export default UploadDemo;