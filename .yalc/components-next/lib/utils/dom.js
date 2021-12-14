"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goToTop = void 0;

var _ = require("./");

const goToTop = () => {
  const body = document.querySelector('#root');

  if (_.isBrowser) {
    body === null || body === void 0 ? void 0 : body.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

exports.goToTop = goToTop;