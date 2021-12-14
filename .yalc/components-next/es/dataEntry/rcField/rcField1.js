var _excluded = ["name", "label", "inputProps", "various", "requiredSign", "className", "errText", "children", "selectProps", "textAreaProps", "options", "placeholder", "type", "themeColor", "switchProps", "uploadValue"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import { Field } from 'rc-field-form';
import { cloneElement } from 'react';
import { Input } from '..';
import { clx, TextArea } from '../..';
import { Select1 } from '../select';
import { Switch } from '../switch';

var RcField = function RcField(props) {
  var _props$name = props.name,
      name = _props$name === void 0 ? '' : _props$name,
      label = props.label,
      inputProps = props.inputProps,
      _props$various = props.various,
      various = _props$various === void 0 ? 'input' : _props$various,
      requiredSign = props.requiredSign,
      className = props.className,
      errText = props.errText,
      children = props.children,
      selectProps = props.selectProps,
      textAreaProps = props.textAreaProps,
      options = props.options,
      placeholder = props.placeholder,
      type = props.type,
      _props$themeColor = props.themeColor,
      themeColor = _props$themeColor === void 0 ? 'default' : _props$themeColor,
      switchProps = props.switchProps,
      uploadValue = props.uploadValue,
      rest = _objectWithoutProperties(props, _excluded);
  /**
   * isListField will remove init
   * for select init undefined to show placeholder
   */


  var initField = {
    initialValue: various === 'select' ? undefined : ''
  };
  var newName = (inputProps === null || inputProps === void 0 ? void 0 : inputProps.name) || name;
  return /*#__PURE__*/React.createElement(Field, _extends({
    name: newName
  }, initField, rest), function (control, meta, form) {
    var _props$rules, _props$rules$find, _meta$errors, _meta$errors$map;

    var isErr = (meta === null || meta === void 0 ? void 0 : meta.errors.length) > 0;
    var isSuccess = !isErr && (control === null || control === void 0 ? void 0 : control.value) || typeof (control === null || control === void 0 ? void 0 : control.value) === 'number'; //@ts-ignore

    var checkRule = props === null || props === void 0 ? void 0 : (_props$rules = props.rules) === null || _props$rules === void 0 ? void 0 : (_props$rules$find = _props$rules.find) === null || _props$rules$find === void 0 ? void 0 : _props$rules$find.call(_props$rules, function (i) {
      return i === null || i === void 0 ? void 0 : i.required;
    });
    var renderTheme = isErr ? 'error' : isSuccess ? 'success' : themeColor;

    if (uploadValue) {
      form.setFieldsValue(_defineProperty({}, name, uploadValue));
    }
    /**
     * renderVarious
     */


    var renderVarious = function renderVarious() {
      var placements = {
        input:
        /*#__PURE__*/
        //@ts-ignore
        React.createElement(Input, _objectSpread({
          id: name,
          type: type,
          theme: renderTheme
        }, inputProps)),
        select: /*#__PURE__*/React.createElement(Select1, _objectSpread({
          id: name,
          theme: renderTheme,
          options: options
        }, selectProps)),
        textArea: /*#__PURE__*/React.createElement(TextArea, _objectSpread({
          id: name,
          placeholder: placeholder,
          name: name
        }, textAreaProps)),
        switch: /*#__PURE__*/React.createElement(Switch, _objectSpread({
          id: name
        }, switchProps))
      };
      return placements[various];
    };

    var childNode = typeof children === 'function' ? children(control, meta, form) : /*#__PURE__*/cloneElement(children || renderVarious(), _objectSpread({}, control));
    return /*#__PURE__*/React.createElement("div", {
      className: clx('flex flex-col w-full mb-4', className)
    }, (label || name) && /*#__PURE__*/React.createElement("label", {
      htmlFor: name,
      className: "text-gray-700 select-none font-medium mb-3 capitalize"
    }, (requiredSign || checkRule) && /*#__PURE__*/React.createElement("sup", {
      className: "text-red-500 text-sm relative top-0 mr-1"
    }, "*"), label || name), childNode, (errText || isErr) && /*#__PURE__*/React.createElement("p", {
      className: "text-red-500 text-sm relative top-2 "
    }, errText || (meta === null || meta === void 0 ? void 0 : (_meta$errors = meta.errors) === null || _meta$errors === void 0 ? void 0 : (_meta$errors$map = _meta$errors.map) === null || _meta$errors$map === void 0 ? void 0 : _meta$errors$map.call(_meta$errors, function (er) {
      return er;
    }))));
  });
};

export default RcField;