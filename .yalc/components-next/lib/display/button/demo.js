"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/space/style");

var _space = _interopRequireDefault(require("antd/es/space"));

var _react = _interopRequireDefault(require("react"));

var _componentsNext = require("components-next");

var _layout = require("../../utils/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//@ts-ignore
var ButtonDemo = function ButtonDemo() {
  var data = [{
    title: 'Button Primary',
    component: /*#__PURE__*/_react.default.createElement(_space.default, null, /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
      title: "primary"
    }), /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
      title: "dark",
      variant: "primary",
      color: "dark"
    }), /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
      title: "success",
      variant: "primary",
      color: "success"
    })),
    span: '12'
  }, {
    title: 'Button Outline',
    component: /*#__PURE__*/_react.default.createElement(_space.default, null, /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
      title: "light",
      variant: "outline",
      color: "light"
    }), /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
      title: "Primary",
      variant: "outline"
    }), /*#__PURE__*/_react.default.createElement(_componentsNext.Button, {
      title: "dark",
      variant: "outline",
      color: "dark"
    })),
    span: '12'
  }];
  var com = [{
    folder: 'dataEntry',
    com: ['button/button', 'test']
  }];

  var customName = function customName(libComName) {
    var _com$map;

    var folder = ' ';
    var comName;
    var libCom;
    com === null || com === void 0 ? void 0 : (_com$map = com.map) === null || _com$map === void 0 ? void 0 : _com$map.call(com, function (i, k) {
      folder = i.folder;
      comName = i.com.find(function (cm) {
        // console.log('dd', cm === libComName || cm.includes(libComName));
        return cm === libComName || cm.includes(libComName);
      });
      libCom = comName ? folder + '/' + comName : '';
    });
    var name = libCom;
    var sign = name.lastIndexOf('-');
    var libName = name.substring(0, sign);
    var fullLibName = name.substring(sign + 1, name.length);
    var getLibNum = fullLibName.replace(/\D/g, '');
    var libFolder = fullLibName.substring(0, fullLibName.lastIndexOf(getLibNum));
    var customName = "components-next/lib/".concat(libFolder);
    return customName;
  };

  return /*#__PURE__*/_react.default.createElement(_layout.DemoLayout, {
    data: data
  });
};

var _default = ButtonDemo;
exports.default = _default;