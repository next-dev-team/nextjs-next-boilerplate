import React from "react";
import { Space } from 'antd'; //@ts-ignore

import { Button } from 'components-next';
import { DemoLayout } from '../../utils/layout';

var ButtonDemo = function ButtonDemo() {
  var data = [{
    title: 'Button Primary',
    component: /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Button, {
      title: "primary"
    }), /*#__PURE__*/React.createElement(Button, {
      title: "dark",
      variant: "primary",
      color: "dark"
    }), /*#__PURE__*/React.createElement(Button, {
      title: "success",
      variant: "primary",
      color: "success"
    })),
    span: '12'
  }, {
    title: 'Button Outline',
    component: /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Button, {
      title: "light",
      variant: "outline",
      color: "light"
    }), /*#__PURE__*/React.createElement(Button, {
      title: "Primary",
      variant: "outline"
    }), /*#__PURE__*/React.createElement(Button, {
      title: "dark",
      variant: "outline",
      color: "dark"
    })),
    span: '12'
  }];
  return /*#__PURE__*/React.createElement(DemoLayout, {
    data: data
  });
};

export default ButtonDemo;