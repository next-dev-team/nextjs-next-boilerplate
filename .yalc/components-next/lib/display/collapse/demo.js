"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _range2 = _interopRequireDefault(require("lodash/range"));

var _react = _interopRequireDefault(require("react"));

var _componentsNext = require("components-next");

var _layout = require("../../utils/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//@ts-ignore
var ButtonDemo = function ButtonDemo() {
  var data = [{
    title: 'Collapse',
    component: /*#__PURE__*/_react.default.createElement(_componentsNext.Collapse, {
      accordion: true,
      defaultActiveKey: 0
    }, (0, _range2.default)(5).map(function (i) {
      return /*#__PURE__*/_react.default.createElement(_componentsNext.Panel, {
        header: "hello ".concat(i + 1),
        panelKey: i,
        key: i
      }, "this is panel content Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque sed, delectus architecto voluptate amet ad magnam vel excepturi iste, molestiae dolores soluta laudantium animi. In voluptatibus sint temporibus eaque. ", i);
    })),
    span: '12'
  }];
  return /*#__PURE__*/_react.default.createElement(_layout.DemoLayout, {
    data: data
  });
};

var _default = ButtonDemo;
exports.default = _default;