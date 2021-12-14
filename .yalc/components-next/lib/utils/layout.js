"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DemoLayout = void 0;

var _icons = require("@ant-design/icons");

var _ahooks = require("ahooks");

var _antd = require("antd");

var _Text = _interopRequireDefault(require("antd/lib/typography/Text"));

var _Title = _interopRequireDefault(require("antd/lib/typography/Title"));

var _componentsNext = require("components-next");

var _react = _interopRequireWildcard(require("react"));

var _reactElementToJsxString = _interopRequireDefault(require("react-element-to-jsx-string"));

var _reactSyntaxHighlighter = require("react-syntax-highlighter");

var _hljs = require("react-syntax-highlighter/dist/esm/styles/hljs");

require("../assets/styles.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DemoLayout = function DemoLayout(props) {
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

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = (0, _react.useState)('light'),
      _useState4 = _slicedToArray(_useState3, 2),
      dark = _useState4[0],
      setDark = _useState4[1];

  var _useState5 = (0, _react.useState)('preview'),
      _useState6 = _slicedToArray(_useState5, 2),
      view = _useState6[0],
      setView = _useState6[1];

  var _useState7 = (0, _react.useState)(data),
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

  var _useDebounceFn = (0, _ahooks.useDebounceFn)(function (v) {
    var filterVal = data === null || data === void 0 ? void 0 : data.filter(function (i) {
      return (0, _componentsNext._lowerCase)(i.title).includes(v.toLowerCase());
    });
    setItemData(v ? filterVal : data);
  }, {
    wait: 100
  }),
      onSearch = _useDebounceFn.run;

  return /*#__PURE__*/_react.default.createElement(_componentsNext.RcProvider, null, !children && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    align: "baseline"
  }, /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
    variant: dark === 'dark' ? 'outline' : 'primary',
    color: dark === 'dark' ? 'light' : 'dark',
    className: "py-2",
    onClick: ToggleDark
  }, dark ? 'Dark' : 'Light'), /*#__PURE__*/_react.default.createElement(_antd.Input, {
    onChange: function onChange(v) {
      var _v$target;

      return onSearch((_v$target = v.target) === null || _v$target === void 0 ? void 0 : _v$target.value);
    },
    className: "max-w-xs mb-6",
    placeholder: "Search...",
    allowClear: true
  })), /*#__PURE__*/_react.default.createElement(_antd.Row, {
    gutter: gutter,
    justify: (0, _componentsNext._isEmpty)(itemData) ? 'center' : 'start'
  }, (0, _componentsNext._isEmpty)(itemData) && /*#__PURE__*/_react.default.createElement(_antd.Empty, null), itemData === null || itemData === void 0 ? void 0 : (_itemData$map = itemData.map) === null || _itemData$map === void 0 ? void 0 : _itemData$map.call(itemData, function (i, k) {
    var code = (0, _reactElementToJsxString.default)(i.component);

    var copyCode = /*#__PURE__*/_react.default.createElement(_Text.default, {
      copyable: {
        text: code,
        onCopy: function onCopy() {
          _antd.message.success('copies!');
        },
        icon: /*#__PURE__*/_react.default.createElement(_icons.CopyOutlined, {
          style: {
            fontSize: 20,
            marginLeft: 4,
            color: '#1890ff'
          }
        }),
        tooltips: false
      }
    }, "Copy");

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: k
    }, /*#__PURE__*/_react.default.createElement(_antd.Modal, {
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
      title: /*#__PURE__*/_react.default.createElement(_antd.Row, {
        justify: "space-between",
        align: "middle"
      }, /*#__PURE__*/_react.default.createElement(_antd.Space, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: view === 'preview' ? 'primary' : 'default',
        onClick: function onClick() {
          return setView('preview');
        }
      }, /*#__PURE__*/_react.default.createElement(_icons.EyeOutlined, {
        style: {
          fontSize: 22
        }
      }), /*#__PURE__*/_react.default.createElement(_Text.default, null, "Preview")), /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: view === 'code' ? 'primary' : 'default',
        onClick: function onClick() {
          return setView('code');
        }
      }, /*#__PURE__*/_react.default.createElement(_icons.CodeOutlined, {
        style: {
          fontSize: 20
        }
      }), /*#__PURE__*/_react.default.createElement(_Text.default, null, "Sort Code")), /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: view === 'fullCode' ? 'primary' : 'default',
        onClick: function onClick() {
          return setView('fullCode');
        }
      }, /*#__PURE__*/_react.default.createElement(_icons.CodeOutlined, {
        style: {
          fontSize: 20
        }
      }), /*#__PURE__*/_react.default.createElement(_Text.default, null, "Full Code"))), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          marginRight: 30
        }
      }, copyCode))
    }, /*#__PURE__*/_react.default.createElement(_antd.Card, {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, view === 'preview' ? i.component : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactSyntaxHighlighter.Prism, {
      language: "javascript",
      style: _hljs.docco,
      customStyle: {
        minHeight: 300
      }
    }, code)))), /*#__PURE__*/_react.default.createElement(_antd.Col, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, cols), colProps), i.span === '12' ? _objectSpread(_objectSpread({}, cols), {}, {
      xxl: 12,
      xl: 24
    }) : {}), i.span === '24' ? _objectSpread(_objectSpread({}, cols), {}, {
      xxl: 24,
      xl: 24
    }) : {}), /*#__PURE__*/_react.default.createElement(_antd.Card, {
      bordered: true,
      title: /*#__PURE__*/_react.default.createElement(_Title.default, {
        className: "mr-3 text-lg mb-0 "
      }, i.title),
      extra: /*#__PURE__*/_react.default.createElement(_antd.Space, {
        align: "center"
      }, /*#__PURE__*/_react.default.createElement(_icons.FullscreenOutlined, {
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
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "py-3"
  }, children, " "));
};

exports.DemoLayout = DemoLayout;