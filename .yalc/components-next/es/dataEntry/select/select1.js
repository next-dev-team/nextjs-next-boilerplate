var _excluded = ["className", "theme", "placeholder"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import { CloseCircleFilled, DownOutlined } from '@ant-design/icons';
import Select from 'rc-select';
import { clx } from '../../utils';

var Select1 = function Select1(props) {
  var className = props.className,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? 'default' : _props$theme,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'Please Select' : _props$placeholder,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("div", {
    className: clx('w-full', theme, className)
  }, /*#__PURE__*/React.createElement(Select, _extends({
    placeholder: placeholder,
    inputIcon: /*#__PURE__*/React.createElement(DownOutlined, null),
    clearIcon: /*#__PURE__*/React.createElement(CloseCircleFilled, null)
  }, rest)));
};

export default Select1;