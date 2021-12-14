import React from "react";
import { Input } from '../';
import { DemoLayout } from '../../utils/layout';
export default (function () {
  var data = [{
    title: 'Default',
    component: /*#__PURE__*/React.createElement(Input, {
      theme: "default",
      name: "default",
      label: "default input",
      requiredSign: true,
      errText: "This field is required!"
    })
  }, {
    title: 'Success',
    component: /*#__PURE__*/React.createElement(Input, {
      theme: "success",
      name: "success",
      label: "success input"
    })
  }, {
    title: 'Warning',
    component: /*#__PURE__*/React.createElement(Input, {
      theme: "warning",
      name: "warning",
      label: "warning input"
    })
  }, {
    title: 'Error',
    component: /*#__PURE__*/React.createElement(Input, {
      theme: "error",
      name: "error",
      label: "error input",
      requiredSign: true,
      errText: "This field is required!"
    })
  }];
  return /*#__PURE__*/React.createElement(DemoLayout, {
    data: data
  });
});