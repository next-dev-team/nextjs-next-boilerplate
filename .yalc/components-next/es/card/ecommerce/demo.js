import React from "react";
//@ts-ignore
import { EcommerceCard1, EcommerceCard2, EcommerceCard3, EcommerceCard4 } from 'components-next';
import { DemoLayout } from '../../utils/layout';

var Demo = function Demo() {
  var data = [{
    title: 'ecommerce card4',
    component: /*#__PURE__*/React.createElement(EcommerceCard4, null)
  }, {
    title: 'ecommerce card3',
    component: /*#__PURE__*/React.createElement(EcommerceCard3, null)
  }, {
    title: 'ecommerce card2',
    component: /*#__PURE__*/React.createElement(EcommerceCard2, null)
  }, {
    title: 'ecommerce card1',
    component: /*#__PURE__*/React.createElement(EcommerceCard1, null)
  }];
  return /*#__PURE__*/React.createElement(DemoLayout, {
    data: data
  });
};

export default Demo;