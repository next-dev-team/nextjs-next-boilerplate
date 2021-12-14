import React from "react";
import { Select1 } from '..';
import { DemoLayout } from '../../utils/layout';
export default (function () {
  var selData = [{
    value: 1
  }, {
    value: 2
  }];
  var data = [{
    title: 'Select1',
    component: /*#__PURE__*/React.createElement(Select1, {
      className: "w-2/4",
      options: selData
    })
  }, {
    title: 'Select1 with  clear',
    component: /*#__PURE__*/React.createElement(Select1, {
      className: "w-2/4",
      options: selData,
      allowClear: true
    })
  }, {
    title: 'Select1 with search',
    component: /*#__PURE__*/React.createElement(Select1, {
      className: "w-2/4",
      options: selData,
      showSearch: true
    })
  }];
  return /*#__PURE__*/React.createElement(DemoLayout, {
    data: data
  });
});