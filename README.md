<p align="center">
  <a href="http://alessandropellizzari.it" target="_blank" rel="noopener noreferrer">
    <img height="150" src="http://alessandropellizzari.it/github/alessandro_pellizzari.png" alt="AP Logo" />
  </a>
</p>

---

# Isolate Scroll

<p align="center">
  <a href="https://www.npmjs.com/package/isolate-scroll"><img src="https://img.shields.io/npm/v/isolate-scroll.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/isolate-scroll"><img src="https://img.shields.io/npm/l/isolate-scroll.svg" alt="License"></a>
</p>

## Introduction

Isolate Scroll is a small JavaScript library with no external dependency. 
Activating this library on an element, parents container will don't move when you scroll inside a child. 
This library prevent scroll on wheel and thouch event. 

### Browser Compatibility

Isolate Scroll supports all browsers that are [ES5-compliant] (http://kangax.github.io/compat-table/es5/) (IE8 and below are not supported).

### Mobile support

Isolate Scroll also prevent parent scroll in mobile browsers.

---

### Installing

With a package manager (**recomanded**): 
```js
npm install isolate-scroll --save 
```

**Manually:**  
Download this library from https://github.com/AleeeKoi/isolate-scroll/releases

---

### Basic usage 

### As ES6 module

```js
import IsolateScroll from 'isolate-scroll';

var target = '.target-element';

// or:
// var target = document.querySelector('.target-element');

var isolateScrollInstance = new IsolateScroll(target);
```

#### Including directly as library

```html
<script src="/path/to/isolateScroll.min.js"></script>

<script>
  (function(w) {

    w.addEventListener('load', function () {
      var isolateScrollInstance = IsolateScroll('.container');
    }, true);

  })(window);
</script>
```

### DOM change/resize

On inizialization this library caches some values, if DOM changes or is resized you need to manually call following method: 

```js
isolateScrollInstance.update();
```

--- 

### License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Alessandro Pellizzari
