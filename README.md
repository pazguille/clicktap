# clicktap [![Build Status](https://secure.travis-ci.org/pazguille/clicktap.png)](http://travis-ci.org/pazguille/clicktap) [![devDependency Status](https://david-dm.org/pazguille/clicktap/dev-status.png)](https://david-dm.org/pazguille/clicktap#info=devDependencies)

> A JavaScript library to prevent the 300ms click delay on touch devices.

## Installation

    $ npm install clicktap

    $ bower install clicktap

    $ component install pazguille/clicktap

## Usage
```html
<button id="btn">Click me</button>
```

```js
function litenerFunction() {
  // Some code here!
}

var btn = document.getElementById('btn');

clicktap(btn, litenerFunction);
```

## API

### clicktap(el, listener, [capture]);
### clicktap.on(el, listener, [capture]);
Adds a `listener` to a given `HTMLElement` on click/tap event.
- `el` {HTMLElement} - A given `HTMLElement`.
- `listener` {Function} - A given `listener` to execute on click/tap.
- `capture` {Boolean} - Indicate if use capture path.

```js
clicktap(document, litenerFunction, true);

// or

clicktap.on(document, litenerFunction);
```

### clicktap.off(el, listener);
Removes a `listener` from a given `HTMLElement`.
- `el` {HTMLElement} - A given `HTMLElement`.
- `listener` {Function} - A given `listener` to execute on click/tap.

```js
clicktap.off(document, litenerFunction);
```

## Made and maintained with ❤ by
- [@pazguille](http://twitter.com/pazguille)

## License
MIT license. Copyright © 2014.
