# TODO description

## Installation
```sh
$ npm install --save MODULE_NAME
```

## Configuration
```js
const MODULE_CONST_NAME = require('MODULE_NAME');

// customizing options up-front
const MODULE_CONST_NAME = require('MODULE_NAME')({ someOption: true });

// making an instance available to other files
const MODULE_CONST_NAME = require('MODULE_NAME');
MODULE_CONST_NAME.myCustomInstance = MODULE_CONST_NAME({ someOption: true });
// freeing memory: delete MODULE_CONST_NAME.myCustomInstance

// ES5: injecting Promise dependency
var Promise = require('my-promise-lib');
var MODULE_CONST_NAME = require('MODULE_NAME')({ Promise: Promise });
```

## TODO usage example
```js
```

## Running tests
```sh
$ npm install --only=dev
$ npm install mocha // or npm install -g mocha
$ npm test
```
