var _excluded = ["children", "className", "clxContent"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import RcDrawer from 'rc-drawer';
import { clx } from '../..';

var Drawer = function Drawer(props) {
  var children = props.children,
      className = props.className,
      clxContent = props.clxContent,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(RcDrawer, _extends({
    level: null
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: clx('w-72', clxContent)
  }, children, " "));
};

export default Drawer;