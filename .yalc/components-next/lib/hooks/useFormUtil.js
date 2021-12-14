"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _ahooks() {
  const data = require("ahooks");

  _ahooks = function _ahooks() {
    return data;
  };

  return data;
}

function _lodash() {
  const data = require("lodash");

  _lodash = function _lodash() {
    return data;
  };

  return data;
}

const useFormUtil = props => {
  const _ref = props || {},
        children = _ref.children,
        _ref$form = _ref.form,
        form = _ref$form === void 0 ? {} : _ref$form;
  /**
   * convert input="number" become number value
   */


  const onClickFormSubmit = (0, _ahooks().useMemoizedFn)(() => {
    var _children$props;

    if (typeof children === 'object' && (children === null || children === void 0 ? void 0 : (_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.type) === 'number') {
      var _children$props2, _children$props3;

      const fieldVal = form.getFieldValue(children === null || children === void 0 ? void 0 : (_children$props2 = children.props) === null || _children$props2 === void 0 ? void 0 : _children$props2.name);
      form.setFieldsValue({
        [children === null || children === void 0 ? void 0 : (_children$props3 = children.props) === null || _children$props3 === void 0 ? void 0 : _children$props3.name]: !!fieldVal ? Number(fieldVal) : ''
      });
    } else if ((0, _lodash().isArray)(children)) {
      children.map(i => {
        var _i$props;

        const fieldArrVal = form.getFieldValue(i === null || i === void 0 ? void 0 : (_i$props = i.props) === null || _i$props === void 0 ? void 0 : _i$props.name);

        if ((i === null || i === void 0 ? void 0 : i.props.type) === 'number') {
          form.setFieldsValue({
            [i === null || i === void 0 ? void 0 : i.props.name]: !!fieldArrVal ? Number(fieldArrVal) : ''
          });
        }
      });
    }

    form.submit();
  });
  return {
    onClickFormSubmit
  };
};

var _default = useFormUtil;
exports.default = _default;