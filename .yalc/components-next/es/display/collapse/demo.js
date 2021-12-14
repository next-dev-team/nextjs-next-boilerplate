import React from "react";
//@ts-ignore
import { Collapse, Panel } from 'components-next';
import { range } from 'lodash';
import { DemoLayout } from '../../utils/layout';

var ButtonDemo = function ButtonDemo() {
  var data = [{
    title: 'Collapse',
    component: /*#__PURE__*/React.createElement(Collapse, {
      accordion: true,
      defaultActiveKey: 0
    }, range(5).map(function (i) {
      return /*#__PURE__*/React.createElement(Panel, {
        header: "hello ".concat(i + 1),
        panelKey: i,
        key: i
      }, "this is panel content Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque sed, delectus architecto voluptate amet ad magnam vel excepturi iste, molestiae dolores soluta laudantium animi. In voluptatibus sint temporibus eaque. ", i);
    })),
    span: '12'
  }];
  return /*#__PURE__*/React.createElement(DemoLayout, {
    data: data
  });
};

export default ButtonDemo;