/*!
 * clicktap - v0.0.3
 *
 * Copyright (c) 2016, @pazguille <guille87paz@gmail.com>
 * Released under the MIT license.
 */
(function(window) {
'use strict';

/**
 * Privates
 */
var doc = window.document,
    msPointerSupported = window.navigator.msPointerEnabled,
    touch = {
      'start': msPointerSupported ? 'MSPointerDown' : 'touchstart',
      'move': msPointerSupported ? 'MSPointerMove' : 'touchmove',
      'end': msPointerSupported ? 'MSPointerUp' : 'touchend'
    },
    pointerCanceled = false;

/**
 * Adds touch events if browser supports it
 */
if ('createTouch' in doc) {
  doc.addEventListener(touch.start, function() { pointerCanceled = false; }, false);
  doc.addEventListener(touch.move, function() { pointerCanceled = true; }, false);
}

/**
 * Adds a listener to the collection for a specified event.
 * @public
 * @function
 * @name clicktap#on
 * @param {String} el - DOM element.
 * @param {Function} listener - Listener function.
 * @param {Boolean} [capture] - Indicate if use capture path.
 * @example
 * var startDoingStuff = function (event, param1, param2, ...) {
 *   // Some code here!
 * };
 *
 * clicktap(document, startDoingStuff, false);
 */
function clicktap(el, listener, capture) {

  function fn(eve) {
    if (pointerCanceled) { pointerCanceled = false; return; }
    listener.call(el, eve);
    eve.preventDefault();
  }

  listener.fn = fn;

  el.addEventListener(touch.end, listener.fn, capture || false);
  el.addEventListener('click', listener.fn, capture || false);

  return clicktap;
}

/**
 * Adds a listener to a given HTMLElement on click/tap event.
 * @public
 * @function
 * @param {String} el - DOM element.
 * @param {Function} listener - Listener function.
 * @param {Boolean} [capture] - Indicate if use capture path.
 * @example
 * var startDoingStuff = function (event, param1, param2, ...) {
 *   // Some code here!
 * };
 *
 * clicktap.on(document, startDoingStuff);
 */
clicktap.on = clicktap;

/**
 * Removes a listener from a given HTMLElement.
 * @public
 * @function
 * @param {String} el - DOM element.
 * @param {Function} listener = Listener function.
 * @returns itself
 * @example
 * clicktap.off(document, startDoingStuff);
 */
clicktap.off = function(el, listener) {
  el.removeEventListener(touch.end, listener.fn);
  el.removeEventListener('click', listener.fn);
  return clicktap;
};

/**
 * Expose clicktap
 */
// AMD
if (typeof window.define === 'function' && window.define.amd !== undefined) {
  window.define('clicktap', [], function () {
    return clicktap;
  });
// CommonJS
} else if (typeof module !== 'undefined' && module.exports !== undefined) {
  module.exports = clicktap;
// Browser
} else {
  window.clicktap = clicktap;
};

}(this));