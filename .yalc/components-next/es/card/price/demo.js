import React from "react";
//@ts-ignore
import { PriceCard1, PriceCard2 } from 'components-next';
import { DemoLayout } from '../../utils/layout';
export default (function () {
  var data = [{
    title: 'Pricing Card2',
    component: /*#__PURE__*/React.createElement(PriceCard2, {
      data: {
        title: undefined
      }
    })
  }, {
    title: 'Pricing Card1',
    component: /*#__PURE__*/React.createElement(PriceCard1, null)
  }];
  return /*#__PURE__*/React.createElement(DemoLayout, {
    data: data
  });
});