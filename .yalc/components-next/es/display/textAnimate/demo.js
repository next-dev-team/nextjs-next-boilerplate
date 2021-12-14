import React from "react";
import { useReactive } from 'ahooks';
import { Space } from 'antd'; //@ts-ignore

import { Select1, TextAnimate } from 'components-next';
import animTypes from 'rc-texty/es/animTypes';
import { DemoLayout } from '../../utils/layout';
var text = 'Welcome';

var Demo = function Demo() {
  var state = useReactive({
    show: true,
    mode: 'smooth',
    type: 'left'
  });

  var onClick = function onClick() {
    state.show = !state.show;
  };

  var onChange = function onChange(v) {
    state.type = v;
    onClick();
  };

  var onModeChange = function onModeChange(value) {
    state.mode = value;
    onClick();
  };

  return /*#__PURE__*/React.createElement(DemoLayout, null, /*#__PURE__*/React.createElement(TextAnimate, {
    type: state.type,
    mode: state.mode,
    className: "text-4xl text-green-400"
  }, state.show && text), /*#__PURE__*/React.createElement(Space, {
    size: "large",
    className: "mt-10"
  }, "type:", /*#__PURE__*/React.createElement(Select1, {
    onChange: onChange,
    options: Object.keys(animTypes).map(function (key) {
      return {
        value: key
      };
    })
  }), "mode:", /*#__PURE__*/React.createElement(Select1, {
    onChange: onModeChange,
    options: ['smooth', 'reverse', 'random', 'sync'].map(function (key) {
      return {
        value: key
      };
    })
  })));
};

export default Demo;