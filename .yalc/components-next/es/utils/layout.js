function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-nocheck
import { CodeOutlined, CopyOutlined, EyeOutlined, FullscreenOutlined } from '@ant-design/icons';
import { useDebounceFn } from 'ahooks';
import { Button, Card, Col, Empty, Input, message, Modal, Row, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import { Button as TwButton, RcProvider, _isEmpty, _lowerCase } from 'components-next';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../assets/styles.css';
export var DemoLayout = function DemoLayout(props) {
  var _itemData$map;

  var cols = {
    xxl: 8,
    xl: 12,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }; // const renderSpan = props.isSmallSpan ? sm : sm;

  var data = props.data,
      children = props.children,
      _props$colProps = props.colProps,
      colProps = _props$colProps === void 0 ? _objectSpread({}, props.colProps) : _props$colProps,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? [20, 20] : _props$gutter;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = useState('light'),
      _useState4 = _slicedToArray(_useState3, 2),
      dark = _useState4[0],
      setDark = _useState4[1];

  var _useState5 = useState('preview'),
      _useState6 = _slicedToArray(_useState5, 2),
      view = _useState6[0],
      setView = _useState6[1];

  var _useState7 = useState(data),
      _useState8 = _slicedToArray(_useState7, 2),
      itemData = _useState8[0],
      setItemData = _useState8[1];

  var ToggleDark = function ToggleDark() {
    setDark(dark === 'dark' ? 'light' : 'dark');

    if (dark === 'dark') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  var _useDebounceFn = useDebounceFn(function (v) {
    var filterVal = data === null || data === void 0 ? void 0 : data.filter(function (i) {
      return _lowerCase(i.title).includes(v.toLowerCase());
    });
    setItemData(v ? filterVal : data);
  }, {
    wait: 100
  }),
      onSearch = _useDebounceFn.run;

  return /*#__PURE__*/React.createElement(RcProvider, null, !children && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Space, {
    align: "baseline"
  }, /*#__PURE__*/React.createElement(TwButton, {
    variant: dark === 'dark' ? 'outline' : 'primary',
    color: dark === 'dark' ? 'light' : 'dark',
    className: "py-2",
    onClick: ToggleDark
  }, dark ? 'Dark' : 'Light'), /*#__PURE__*/React.createElement(Input, {
    onChange: function onChange(v) {
      var _v$target;

      return onSearch((_v$target = v.target) === null || _v$target === void 0 ? void 0 : _v$target.value);
    },
    className: "max-w-xs mb-6",
    placeholder: "Search...",
    allowClear: true
  })), /*#__PURE__*/React.createElement(Row, {
    gutter: gutter,
    justify: _isEmpty(itemData) ? 'center' : 'start'
  }, _isEmpty(itemData) && /*#__PURE__*/React.createElement(Empty, null), itemData === null || itemData === void 0 ? void 0 : (_itemData$map = itemData.map) === null || _itemData$map === void 0 ? void 0 : _itemData$map.call(itemData, function (i, k) {
    // console.log("i", reactElementToJSXString(i.component as any, {}));
    var code = 'working on it soon';
    var copyCode = /*#__PURE__*/React.createElement(Text, {
      copyable: {
        text: code,
        onCopy: function onCopy() {
          message.success('copies!');
        },
        icon: /*#__PURE__*/React.createElement(CopyOutlined, {
          style: {
            fontSize: 20,
            marginLeft: 4,
            color: '#1890ff'
          }
        }),
        tooltips: false
      }
    }, "Copy");
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: k
    }, /*#__PURE__*/React.createElement(Modal, {
      destroyOnClose: true,
      onCancel: function onCancel() {
        return setTitle('');
      },
      style: {
        minWidth: '70vw',
        borderRadius: 4
      },
      bodyStyle: {
        minHeight: '60vh'
      },
      visible: i.title === title,
      footer: false,
      title: /*#__PURE__*/React.createElement(Row, {
        justify: "space-between",
        align: "middle"
      }, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Button, {
        type: view === 'preview' ? 'primary' : 'default',
        onClick: function onClick() {
          return setView('preview');
        }
      }, /*#__PURE__*/React.createElement(EyeOutlined, {
        style: {
          fontSize: 22
        }
      }), /*#__PURE__*/React.createElement(Text, null, "Preview")), /*#__PURE__*/React.createElement(Button, {
        type: view === 'code' ? 'primary' : 'default',
        onClick: function onClick() {
          return setView('code');
        }
      }, /*#__PURE__*/React.createElement(CodeOutlined, {
        style: {
          fontSize: 20
        }
      }), /*#__PURE__*/React.createElement(Text, null, "Sort Code")), /*#__PURE__*/React.createElement(Button, {
        type: view === 'fullCode' ? 'primary' : 'default',
        onClick: function onClick() {
          return setView('fullCode');
        }
      }, /*#__PURE__*/React.createElement(CodeOutlined, {
        style: {
          fontSize: 20
        }
      }), /*#__PURE__*/React.createElement(Text, null, "Full Code"))), /*#__PURE__*/React.createElement("div", {
        style: {
          marginRight: 30
        }
      }, copyCode))
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, view === 'preview' ? i.component : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SyntaxHighlighter, {
      language: "javascript",
      style: docco,
      customStyle: {
        minHeight: 300
      }
    }, code)))), /*#__PURE__*/React.createElement(Col, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, cols), colProps), i.span === '12' ? _objectSpread(_objectSpread({}, cols), {}, {
      xxl: 12,
      xl: 24
    }) : {}), i.span === '24' ? _objectSpread(_objectSpread({}, cols), {}, {
      xxl: 24,
      xl: 24
    }) : {}), /*#__PURE__*/React.createElement(Card, {
      bordered: true,
      title: /*#__PURE__*/React.createElement(Title, {
        className: "mr-3 text-lg mb-0 "
      }, i.title),
      extra: /*#__PURE__*/React.createElement(Space, {
        align: "center"
      }, /*#__PURE__*/React.createElement(FullscreenOutlined, {
        style: {
          fontSize: 20,
          marginRight: 12,
          color: '#1890ff'
        },
        onClick: function onClick() {
          return setTitle(i.title);
        }
      }), copyCode)
    }, i === null || i === void 0 ? void 0 : i.component)));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "py-3"
  }, children, " "));
};