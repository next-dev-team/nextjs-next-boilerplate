import React from "react";
//@ts-nocheck
import { BlogCard1, BlogCard10, BlogCard2, BlogCard3, BlogCard4, BlogCard5, BlogCard6, BlogCard7, BlogCard8, BlogCard9 } from 'components-next';
import { DemoLayout } from '../../utils/layout';
export default (function () {
  var data = [{
    title: 'Bloc Card10',
    component: /*#__PURE__*/React.createElement(BlogCard10, null)
  }, {
    title: 'Bloc Card9',
    component: /*#__PURE__*/React.createElement(BlogCard9, null)
  }, {
    title: 'Bloc Card8',
    component: /*#__PURE__*/React.createElement(BlogCard8, null)
  }, {
    title: 'Bloc Card7',
    component: /*#__PURE__*/React.createElement(BlogCard7, null),
    span: '12'
  }, {
    title: 'Bloc Card6',
    component: /*#__PURE__*/React.createElement(BlogCard6, null)
  }, {
    title: 'Bloc Card5',
    component: /*#__PURE__*/React.createElement(BlogCard5, null)
  }, {
    title: 'Bloc Card4',
    component: /*#__PURE__*/React.createElement(BlogCard4, null)
  }, {
    title: 'blog Card3',
    component: /*#__PURE__*/React.createElement(BlogCard3, null)
  }, {
    title: 'blog Card2',
    component: /*#__PURE__*/React.createElement(BlogCard2, null)
  }, {
    title: 'bloc Card1',
    component: /*#__PURE__*/React.createElement(BlogCard1, null)
  }];
  return /*#__PURE__*/React.createElement(DemoLayout, {
    data: data
  });
});