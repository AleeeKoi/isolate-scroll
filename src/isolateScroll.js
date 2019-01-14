
/*!
 * Isolate Scroll v 1.0.1
 * https://github.com/AleeeKoi/isolate-scroll
 *
 * Copyright Alessandro Pellizzari <aleeekoi@hotmail.it>
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */

export default class IsolateScroll {

  constructor (target) {

    if (typeof target === 'string') {
      target = document.querySelector(target);
    }
    if (!target) throw new Error('Invalid target');

    this.target = target;

    let touchStart = 0;

    this.events = [
      {
        name: 'wheel',
        callback: event => { this.scrollEvent.call(this, event); }
      },
      {
        name: 'touchstart',
        callback: event => { touchStart = this.getTouchY(event); }
      },
      {
        name: 'touchmove',
        callback: event => { this.scrollEvent.call(this, event, (touchStart - this.getTouchY(event))); }
      }
    ];

    this.update();
    this.bindEvents();
  }

  update () {
    if (!this.target) return;
    this.scrollHeight = this.target.scrollHeight;
    this.height = this.target.clientHeight;
    this.lineHeight = -1;
  }

  bindEvents () {
    for (let i = 0, l = this.events.length; i < l; i++) {
      let { name, callback } = this.events[i];

      this.target.addEventListener(name, callback, true);
    }
  }

  destroy () {
    for (let i = 0, l = this.events.length; i < l; i++) {
      let { name, callback } = this.events[i];

      this.target.removeEventListener(name, callback, true);
    }
  }

  getTouchY (event) {
    return event.changedTouches[0].clientY;
  }

  prevent (event) {
    event.preventDefault();
    event.returnValue = false;
  }

  scrollEvent (event, deltaY) {

    if (!deltaY) {
      deltaY = event.deltaY;
    }

    let top = this.target.scrollTop;
    let upDisrection = deltaY < 0;

    event.stopPropagation();

    if (upDisrection && top === 0) {
      return this.prevent(event);
    }

    if (parseInt(event.deltaMode, 10) === 1) { // deltaY in LINE units
      if (this.lineHeight < 0) {
        let style = window.getComputedStyle(this.target, null).getPropertyValue('font-size');

        this.lineHeight = parseFloat(style);
      }
      deltaY *= this.lineHeight;
    }

    if (!upDisrection && deltaY > this.scrollHeight - this.height - top) {
      this.target.scrollTop = this.scrollHeight - this.height;
      return this.prevent(event);
    }

    return this;
  }

}
