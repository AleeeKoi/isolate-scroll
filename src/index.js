
import _IsolateScroll from './isolateScroll';

// Expose globally
(function (w) {
  w.IsolateScroll = target => {
    return new _IsolateScroll(target);
  };
})(window);

export default _IsolateScroll;
