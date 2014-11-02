'use strict';

/**
 *
 */
var bind = 'addEventListener',
    unbind = 'removeEventListener',
    touchesSupported = 'createTouch' in window.document,
    msPointerSupported = window.navigator.msPointerEnabled,
    touch = {
      'start': msPointerSupported ? 'MSPointerDown' : 'touchstart',
      'move': msPointerSupported ? 'MSPointerMove' : 'touchmove',
      'end': msPointerSupported ? 'MSPointerUp' : 'touchend'
    },
    pointerCanceled = false;

if (touchesSupported) {
  document[bind](touch.start, function() { pointerCanceled = false; }, false);
  document[bind](touch.move, function() { pointerCanceled = true; }, false);
}

/**
 *
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
 *
 */
clicktap.on = clicktap;

/**
 *
 */
clicktap.off = function(el, listener) {
  el[unbind](prefix + touch.end, listener.fn);
  el[unbind](prefix + 'click', listener.fn);
  return clicktap;
};

/**
 * Expose clicktap
 */
module.exports = clicktap;
