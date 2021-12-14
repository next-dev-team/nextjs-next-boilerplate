function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { FormProvider } from 'rc-field-form';
var defaultMessages = {
  required: "Required"
};

var RcProvider = function RcProvider(props) {
  var isDebug = props.isDebug,
      children = props.children;
  return /*#__PURE__*/React.createElement(FormProvider, _extends({
    validateMessages: defaultMessages,
    onFormChange: function onFormChange(name, _ref) {
      var changedFields = _ref.changedFields,
          forms = _ref.forms;

      if (isDebug) {
        console.log('change from:', name, changedFields, forms);
      }
    }
  }, props), children);
};

export default Object.assign(RcProvider, {});