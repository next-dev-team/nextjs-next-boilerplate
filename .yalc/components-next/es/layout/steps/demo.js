function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React from "react";
//@ts-nocheck
import { RcField } from 'components-next';
import { Steps } from '../';
import { DemoLayout } from '../../utils/layout';

var LayoutDemo = function LayoutDemo() {
  var stepsData = [{
    title: 'First',
    content: /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-x-6 gap-y-2"
    }, /*#__PURE__*/React.createElement(RcField, {
      type: "number",
      label: "Age",
      name: "age",
      rules: [{
        required: true
      }]
    }), /*#__PURE__*/React.createElement(RcField, {
      various: "select",
      name: "gender",
      rules: [{
        required: true
      }],
      options: [{
        value: 'MALE'
      }, {
        value: 'FEMALE'
      }]
    }), /*#__PURE__*/React.createElement(RcField, {
      label: "Address",
      name: "address"
    }), /*#__PURE__*/React.createElement(RcField, {
      label: "Email",
      name: "email",
      various: "switch",
      initialValue: false
    }))
  }, {
    title: 'Second',
    content: /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-x-6 gap-y-2"
    }, /*#__PURE__*/React.createElement(RcField, {
      label: "Username2",
      name: "username2",
      rules: [{
        required: true
      }]
    }))
  }];
  var confirmContent = {
    title: 'Confirm',
    content: /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-x-6 gap-y-2"
    }, /*#__PURE__*/React.createElement("h1", null, "Are you sure to submit it?"))
  };
  var data = [{
    title: 'Default',
    component: /*#__PURE__*/React.createElement(Steps, {
      getLoading: function () {
        var _getLoading = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", true);

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function getLoading() {
          return _getLoading.apply(this, arguments);
        }

        return getLoading;
      }(),
      confirmContent: confirmContent,
      stepsData: stepsData,
      resetAfterSubmit: false,
      onSubmitForm: function () {
        var _onSubmitForm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(v) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  console.log('v', v);

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function onSubmitForm(_x) {
          return _onSubmitForm.apply(this, arguments);
        }

        return onSubmitForm;
      }()
    }),
    span: '24'
  }];
  return /*#__PURE__*/React.createElement(DemoLayout, {
    data: data
  });
};

export default LayoutDemo;