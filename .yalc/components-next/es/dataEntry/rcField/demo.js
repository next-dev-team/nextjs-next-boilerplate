import React from "react";
import { RcField, RcForm } from '../';
import { DemoLayout } from '../../utils/layout';
export default (function () {
  var data = [{
    title: 'Input validation',
    component: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RcForm, {
      className: "w-full",
      onFinish: function onFinish(values) {
        // alert(JSON.stringify(values));
        console.log('values', values);
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RcField, {
      type: "text",
      label: "Username",
      name: "username",
      rules: [{
        required: true
      }]
    }), /*#__PURE__*/React.createElement(RcField, {
      type: "number",
      label: "Username",
      name: "username1",
      rules: [{
        required: true
      }]
    })))))
  }];
  return /*#__PURE__*/React.createElement(DemoLayout, {
    data: data
  });
});