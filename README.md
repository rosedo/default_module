# TODO description

## Installation
```sh
$ npm install --save MODULE_NAME
```

## Usage
```js
const MODULE_CONST_NAME = require('MODULE_NAME');

// customizing options up-front
const MODULE_CONST_NAME = require('MODULE_NAME')({ someOption: true });

// making an instance available to other files
const MODULE_CONST_NAME = require('MODULE_NAME');
MODULE_CONST_NAME.myCustomInstance = MODULE_CONST_NAME({ someOption: true });
// freeing memory: delete MODULE_CONST_NAME.myCustomInstance

// if Promise isn't defined
global.Promise = require('promise-module');
var MODULE_CONST_NAME = require('MODULE_NAME');
```

### TODO usage example
```js
```

## Running tests
```sh
$ npm install --only=dev
$ npm install mocha // or npm install -g mocha
$ npm test
```
