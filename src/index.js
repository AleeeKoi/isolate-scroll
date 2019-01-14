
/**
 * Isolate Scroll v 1.0.0
 * https://github.com/AleeeKoi/isolate-scroll
 *
 * Copyright Alessandro Pellizzari <aleeekoi@hotmail.it>
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */

import _IsolateScroll from './isolateScroll';

// Expose globally
(function (w) {
  w.IsolateScroll = target => {
    return new _IsolateScroll(target);
  };
})(window);
