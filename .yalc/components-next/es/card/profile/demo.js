import React from "react";
import { ProfileCard1, ProfileCard2, ProfileCard3, ProfileCard4, ProfileCard5, ProfileCard6, ProfileCard7, ProfileCard8, ProfileCard9, ProfileCard10 } from '../';
import { DemoLayout } from '../../utils/layout';
export default (function () {
  var data = [{
    title: 'Profile Card10',
    component: /*#__PURE__*/React.createElement(ProfileCard10, null)
  }, {
    title: 'Profile Card9',
    component: /*#__PURE__*/React.createElement(ProfileCard9, null)
  }, {
    title: 'Profile Card8',
    component: /*#__PURE__*/React.createElement(ProfileCard8, null)
  }, {
    title: 'Profile Card7',
    component: /*#__PURE__*/React.createElement(ProfileCard7, null)
  }, {
    title: 'Profile Card6',
    component: /*#__PURE__*/React.createElement(ProfileCard6, null)
  }, {
    title: 'Profile Card5',
    component: /*#__PURE__*/React.createElement(ProfileCard5, null)
  }, {
    title: 'Profile Card1',
    component: /*#__PURE__*/React.createElement(ProfileCard1, null)
  }, {
    title: 'Profile Card2',
    component: /*#__PURE__*/React.createElement(ProfileCard2, null)
  }, {
    title: 'Profile Card3',
    component: /*#__PURE__*/React.createElement(ProfileCard3, null)
  }, {
    title: 'Profile Card4',
    component: /*#__PURE__*/React.createElement(ProfileCard4, null)
  }];
  return /*#__PURE__*/React.createElement(DemoLayout, {
    data: data
  });
});