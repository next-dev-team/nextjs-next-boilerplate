function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import RcCheckbox from 'rc-checkbox';

var Checkbox = function Checkbox(_ref) {
  var rest = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(RcCheckbox, _extends({
    name: "my-checkbox",
    defaultChecked: true
  }, rest));
};

export default Checkbox;