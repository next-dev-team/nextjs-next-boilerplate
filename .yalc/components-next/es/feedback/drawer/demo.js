function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from "react";
import { HeartOutlined } from '@ant-design/icons';
import { useReactive, useToggle } from 'ahooks';
import { Button, Space } from 'antd';
import { range } from 'lodash';
import { Item as MenuItem } from 'rc-menu';
import { Drawer } from '.';
import { Menus } from '..';
import { DemoLayout } from '../../utils/layout';
export default (function () {
  var _useToggle = useToggle(false),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      modal1 = _useToggle2[0],
      toggle1 = _useToggle2[1].toggle;

  var state = useReactive({
    openKeys: ['0'],
    selectedKeys: ['0']
  });
  var data = [{
    title: 'Simple Modal',
    component: /*#__PURE__*/React.createElement(Space, {
      direction: "vertical"
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: toggle1,
      type: "primary"
    }, "Open Simple Drawer"))
  }];
  var renderMenu = /*#__PURE__*/React.createElement(Menus, {
    mode: modal1 ? 'inline' : 'horizontal',
    onOpenChange: function onOpenChange(openKeys) {
      state.openKeys = openKeys;
    },
    onSelect: function onSelect(_ref) {
      var selectedKeys = _ref.selectedKeys;
      state.selectedKeys = selectedKeys;
    },
    openKeys: state.openKeys,
    selectedKeys: state.selectedKeys
  }, range(5).map(function (_, i) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: i,
      className: "w-40"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center"
    }, /*#__PURE__*/React.createElement(HeartOutlined, {
      className: "mr-3"
    }), " Item ", i));
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DemoLayout, {
    data: data
  }), /*#__PURE__*/React.createElement(Drawer, {
    open: modal1,
    onClose: toggle1,
    onHandleClick: toggle1
  }, renderMenu), !modal1 && renderMenu);
});