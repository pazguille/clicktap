'use strict';

/**
 * Private module variables
 */
var bind = 'addEventListener',
    unbind = 'removeEventListener',
    doc = window.document,
    touchesSupported = 'createTouch' in doc,
    msPointerSupported = window.navigator.msPointerEnabled,
    touch = {
      'start': msPointerSupported ? 'MSPointerDown' : 'touchstart',
      'move': msPointerSupported ? 'MSPointerMove' : 'touchmove',
      'end': msPointerSupported ? 'MSPointerUp' : 'touchend'
    },
    pointerCanceled = false;

if (touchesSupported) {
  doc[bind](touch.start, function() { pointerCanceled = false; }, false);
  doc[bind](touch.move, function() { pointerCanceled = true; }, false);
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

  el[bind](touch.end, listener.fn, capture || false);
  el[bind]('click', listener.fn, capture || false);

  return clicktap;
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
 * clicktap.on(document, startDoingStuff);
 */
clicktap.on = clicktap;

/**
 * Removes a listener from the collection for a specified event.
 * @public
 * @function
 * @name clicktap#on
 * @param {String} el - DOM element.
 * @param {Function} listener = Listener function.
 * @returns itself
 * @example
 * clicktap.off(document, startDoingStuff);
 */
clicktap.off = function(el, listener) {
  el[unbind](touch.end, listener.fn);
  el[unbind]('click', listener.fn);
  return clicktap;
};

/**
 * Expose clicktap
 */
module.exports = clicktap;
