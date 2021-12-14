import React from "react";
import { TestimonialsCard1, TestimonialsCard2, TestimonialsCard3, TestimonialsCard4, TestimonialsCard5, TestimonialsCard6 } from '../../';
import { DemoLayout } from '../../utils/layout';
export default (function () {
  var data = [{
    title: 'Testimonials Card1',
    component: /*#__PURE__*/React.createElement(TestimonialsCard1, null)
  }, {
    title: 'Testimonials Card2 ',
    component: /*#__PURE__*/React.createElement(TestimonialsCard2, null)
  }, {
    title: 'Testimonials Card2-A ',
    component: /*#__PURE__*/React.createElement(TestimonialsCard2, {
      type: 'primary'
    })
  }, {
    title: 'Testimonials Card3 ',
    component: /*#__PURE__*/React.createElement(TestimonialsCard3, {
      type: 'primary'
    })
  }, {
    title: 'Testimonials Card4',
    component: /*#__PURE__*/React.createElement(TestimonialsCard4, null)
  }, {
    title: 'Testimonials Card5',
    component: /*#__PURE__*/React.createElement(TestimonialsCard5, null)
  }, {
    title: 'Testimonials Card6',
    component: /*#__PURE__*/React.createElement(TestimonialsCard6, null)
  }];
  return /*#__PURE__*/React.createElement(DemoLayout, {
    data: data
  });
});