const getCollapsedHeight = () => ({
  height: 0,
  opacity: 0
});

const getRealHeight = node => ({
  height: node.scrollHeight,
  opacity: 1
});

const getCurrentHeight = node => ({
  height: node.offsetHeight
});

const skipOpacityTransition = (_, event) => event.propertyName === 'height';

const collapseMotion = {
  motionName: 'rc-collapse-motion',
  onEnterStart: getCollapsedHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500,
  leavedClassName: 'rc-collapse-content-hidden'
};
export default collapseMotion;