import React from "react";
import { Button, Space } from 'antd';
import { notifications } from '../';
import { DemoLayout } from '../../utils/layout';

var Demo = function Demo() {
  var data = [{
    title: 'notifications Info',
    component: /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        notifications.info({
          message: 'top right',
          description: 'Generates passages of lorem ipsum text suitable for use as placeholder copy in web pages, graphics, and more. Works in the browser, NodeJS, ..'
        });
      }
    }, "topRight"), /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        notifications.info({
          message: 'topLeft',
          placement: 'topLeft'
        });
      }
    }, "topLeft"), /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        notifications.info({
          message: 'bottomRight',
          placement: 'bottomRight'
        });
      }
    }, "bottomRight"), /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        notifications.info({
          message: 'bottomLeft',
          placement: 'bottomLeft'
        });
      }
    }, "bottomLeft"))
  }, {
    title: 'notifications success',
    component: /*#__PURE__*/React.createElement(Space, {
      wrap: true
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        notifications.success({
          message: 'success topRight',
          description: 'Generates passages of lorem ipsum text suitable for use as placeholder copy in web pages, graphics, and more. Works in the browser, NodeJS, ..'
        });
      }
    }, "success topRight"))
  }];
  return /*#__PURE__*/React.createElement(DemoLayout, {
    data: data
  });
};

export default Demo;