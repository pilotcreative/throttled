/**
 * Module dependencies
 */

var Emitter = require('emitter');
var requestAnimFrame = require('raf');


/**
 * Define `Throttled`
 */

function Throttled() {
  this.state = { scroll: false, resize: false, wheel: false };
  this._bind();
}


/**
 * Install Emitter
 */

Emitter(Throttled.prototype);


/**
 * Bind `resize` / `scroll` DOM events
 */

Throttled.prototype._bind = function() {
  window.addEventListener('resize', this.capture.bind(this), false);
  window.addEventListener('scroll', this.capture.bind(this), false);
  window.addEventListener('wheel',  this.capture.bind(this), false);
}


/**
 * Callback to the DOM events
 */

Throttled.prototype.capture = function(e) {
  for ( var k in this.state ) {
    if ( k === e.type && !this.state[k] ) {
      this.state[k] = true;
      requestAnimFrame(this.update.bind(this));
      continue;
    }
  }
}


/**
 * Emit `scroll`, `resize` event respectively
 */

Throttled.prototype.update = function() {
  for ( var k in this.state ) {
    if ( this.state[k] ) {
      this.emit(k);
      this.state[k] = false;
      continue;
    }
  };
};


/**
 * Expose a `Throttled` instance
 */

module.exports = new Throttled();
