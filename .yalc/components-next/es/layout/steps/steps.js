function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from "react";
import { useAsyncEffect, useCreation, useMemoizedFn } from 'ahooks';
import RcSteps from 'rc-steps';
import { useCallback, useEffect, useState } from 'react';
import { Button, clx, goToTop, isProd, RcForm, useForm } from '../..';
var Step = RcSteps.Step;

var Steps = function Steps(props) {
  var _useForm = useForm(),
      _useForm2 = _slicedToArray(_useForm, 1),
      dfForm = _useForm2[0];

  var onNext = props.onNext,
      onSubmitForm = props.onSubmitForm,
      confirmContent = props.confirmContent,
      resetAfterSubmit = props.resetAfterSubmit,
      _props$stepsData = props.stepsData,
      stepsData = _props$stepsData === void 0 ? [] : _props$stepsData,
      _props$form = props.form,
      form = _props$form === void 0 ? dfForm : _props$form,
      getLoading = props.getLoading,
      submitBtnProps = props.submitBtnProps;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = useState(stepsData),
      _useState4 = _slicedToArray(_useState3, 2),
      steps = _useState4[0],
      setSteps = _useState4[1];

  var finalContent = useCreation(function () {
    return [].concat(_toConsumableArray(steps), [confirmContent]);
  }, [steps, confirmContent]);
  var isFinalStep = useCreation(function () {
    var _steps$find;

    return steps === null || steps === void 0 ? void 0 : (_steps$find = steps.find) === null || _steps$find === void 0 ? void 0 : _steps$find.call(steps, function (i) {
      var _finalContent;

      return (i === null || i === void 0 ? void 0 : i.title.toLowerCase()) === ((_finalContent = finalContent[finalContent.length - 1]) === null || _finalContent === void 0 ? void 0 : _finalContent.title.toLowerCase());
    });
  }, [steps, finalContent]);

  var submit = function submit(v) {
    onNext === null || onNext === void 0 ? void 0 : onNext(v);
    form.submit();

    if (isProd) {
      goToTop();
    }
  };

  var onReset = useMemoizedFn(function () {
    setCurrent(0);
    setSteps(stepsData);
    form.resetFields();
  });
  var previous = useCallback(function () {
    setCurrent(current - 1);
    setSteps(stepsData);

    if (isProd) {
      goToTop();
    }
  }, [stepsData, current]);
  useEffect(function () {
    if (current === stepsData.length && !isFinalStep) {
      setSteps(finalContent);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [current]);
  useAsyncEffect( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getLoading === null || getLoading === void 0 ? void 0 : getLoading();

          case 2:
            if (!_context.sent) {
              _context.next = 4;
              break;
            }

            setSteps(stepsData);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [getLoading]);
  return /*#__PURE__*/React.createElement(RcForm, {
    hasSubmitBtn: false,
    form: form,
    onFinish: /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(v) {
        var isPlus, _onSubmitForm, _onSubmitForm$then;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                isPlus = current > steps.length ? 0 : 1;

                if (!isFinalStep) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 4;
                return onSubmitForm === null || onSubmitForm === void 0 ? void 0 : (_onSubmitForm = onSubmitForm(v)) === null || _onSubmitForm === void 0 ? void 0 : (_onSubmitForm$then = _onSubmitForm.then) === null || _onSubmitForm$then === void 0 ? void 0 : _onSubmitForm$then.call(_onSubmitForm, function () {
                  resetAfterSubmit && (onReset === null || onReset === void 0 ? void 0 : onReset());
                });

              case 4:
                _context2.next = 7;
                break;

              case 6:
                setCurrent(current + isPlus);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  }, /*#__PURE__*/React.createElement(RcSteps, {
    current: current
  }, steps.map(function (item) {
    return /*#__PURE__*/React.createElement(Step, {
      key: item.title,
      title: item.title
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: clx('min-h-200px bg-gray-50 mt-6 p-4 rounded-md')
  }, steps.map(function (i, k) {
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: clx('hidden', current === k && 'block')
    }, (current === k || isFinalStep) && i.content);
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex justify-end gap-2"
  }, current > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onReset
  }, "Reset All"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: previous
  }, "Previous")), (current < steps.length - 1 || current === steps.length - 1 && !isFinalStep) && /*#__PURE__*/React.createElement(Button, {
    onClick: submit
  }, "Next"), isFinalStep && /*#__PURE__*/React.createElement(Button, _extends({
    color: "success",
    onClick: submit
  }, submitBtnProps), "Submit")));
};

export default Steps;