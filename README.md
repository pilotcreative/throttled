# throttled

  Throttled scroll and resize event via requestAnimationFrame.

  Based on [this article](http://www.html5rocks.com/en/tutorials/speed/animations/)

## Installation

  Install with [component(1)](http://component.io):

    $ component install pilotcreative/throttled

## Usage

```js
var throttled = require('throttled');

throttled.on('scroll', function(){
  console.log('clean scroll');
});

throttled.on('resize', function(){
  console.log('clean resize');
});

throttled.on('wheel', function(){
  console.log('clean wheel');
});
```

## License

  MIT
