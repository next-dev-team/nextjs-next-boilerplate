var _excluded = ["children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import { DownCircleFilled, UpCircleFilled } from '@ant-design/icons';
import RcCollapse, { Panel } from 'rc-collapse';
import { collapseMotion, twColors } from '../..';
export { Panel };

var Collapse = function Collapse(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(RcCollapse, _extends({
    expandIcon: function expandIcon(param) {
      return /*#__PURE__*/React.createElement("div", {
        className: "mr-3"
      }, (param === null || param === void 0 ? void 0 : param.isActive) ? /*#__PURE__*/React.createElement(UpCircleFilled, {
        style: {
          fontSize: 20,
          color: twColors.blue['400']
        }
      }) : /*#__PURE__*/React.createElement(DownCircleFilled, {
        style: {
          fontSize: 20,
          color: twColors.blue['400']
        }
      }));
    },
    openMotion: collapseMotion
  }, rest), children);
};

export default Collapse;