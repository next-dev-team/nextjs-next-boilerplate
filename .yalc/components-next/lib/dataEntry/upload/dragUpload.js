"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.file2Obj = file2Obj;

var _react = _interopRequireDefault(require("react"));

var _ahooks = require("ahooks");

var _componentsNext = require("components-next");

var _rcProgress = require("rc-progress");

var _rcUpload = _interopRequireDefault(require("rc-upload"));

var _excluded = ["name", "className", "imgPersist"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function file2Obj(file) {
  return _objectSpread(_objectSpread({}, file), {}, {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    percent: 0,
    originFileObj: file
  });
}

function getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
}

var DragUpload = function DragUpload(props) {
  var name = props.name,
      className = props.className,
      imgPersist = props.imgPersist,
      rest = _objectWithoutProperties(props, _excluded);

  var state = (0, _ahooks.useReactive)({
    uploadPt: 0,
    previewImg: imgPersist
  });
  var previewImg = state.previewImg;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_rcUpload.default, _objectSpread({
    accept: 'image/*',
    name: 'file',
    type: 'drag',
    onStart: function () {
      var _onStart = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
        var filleObj, fileTo64;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state.uploadPt = 0;
                console.log('onStart', file);
                filleObj = file2Obj === null || file2Obj === void 0 ? void 0 : file2Obj(file);
                _context.next = 5;
                return getBase64 === null || getBase64 === void 0 ? void 0 : getBase64(filleObj === null || filleObj === void 0 ? void 0 : filleObj.originFileObj);

              case 5:
                fileTo64 = _context.sent;

                if (fileTo64) {
                  state.previewImg = fileTo64;
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onStart(_x) {
        return _onStart.apply(this, arguments);
      }

      return onStart;
    }(),
    onSuccess: function onSuccess(file) {
      console.log('onSuccess');
    },
    onProgress: function onProgress(step, file) {
      console.log('onProgress', Math.round(step.percent), file.name);
      state.uploadPt = Math.round(step.percent), file.name;
    },
    onError: function onError(err) {
      console.log('onError', err);
    }
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: "rounded-lg overflow-hidden w-full"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _componentsNext.clx)('text-gray-400 text-center relative h-36 rounded-lg border-dashed border-2 border-gray-200 hover:border-blue-200 bg-white flex justify-center items-center hover:cursor-pointer')
  }, previewImg && /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4 h-32"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: previewImg,
    className: "h-full object-cover p-2"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: ((0, _componentsNext.clx)('flex flex-col'), previewImg && 'absolute bottom-0 py-[2px] bg-gradient-to-r from-green-400 to-blue-500 w-full rounded-md text-white text-xs opacity-60')
  }, /*#__PURE__*/_react.default.createElement("span", null, "Attach you files here"), /*#__PURE__*/_react.default.createElement("span", null, " or "), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _componentsNext.clx)('text-blue-400', previewImg && 'text-white')
  }, "Browse files")))), state.uploadPt > 0 && /*#__PURE__*/_react.default.createElement(_rcProgress.Line, {
    percent: state.uploadPt,
    strokeWidth: 2,
    strokeColor: _componentsNext.twColors.blue['200'],
    className: "mt-2"
  })));
};

var _default = DragUpload;
exports.default = _default;