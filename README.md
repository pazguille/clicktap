# clicktap [![Build Status](https://secure.travis-ci.org/pazguille/clicktap.png)](http://travis-ci.org/pazguille/clicktap) [![devDependency Status](https://david-dm.org/pazguille/clicktap/dev-status.png)](https://david-dm.org/pazguille/clicktap#info=devDependencies)

> A JavaScript library to prevent the 300ms click delay on touch devices.

## Installation

    $ npm install clicktap

    $ bower install clicktap

    $ component install pazguille/clicktap

### Standalone
Also, you can use the standalone version:
```html
<script src="dist/clicktap.js"></script>
```

## How-to
```html
<button id="btn">Click me</button>
```

```js
function handler() {
  // Some code here!
}

var btn = document.getElementById('btn');

clicktap(btn, handler);
```

## API
[TODO]

## Maintained by
- Guille Paz (Front-end developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
Licensed under the MIT license.

Copyright (c) 2014 [@pazguille](http://twitter.com/pazguille).
