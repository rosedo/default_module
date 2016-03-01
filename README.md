# TODO description

## Installation
```sh
$ npm install --save MODULE_NAME
```

## Usage
```js
// require default instance (created with default options)
const MODULE_CONST_NAME = require('MODULE_NAME');

// override default options
const MODULE_CONST_NAME = require('MODULE_NAME')({ anOption: true });

// making an instance available to other files
const MODULE_CONST_NAME = require('MODULE_NAME');
MODULE_CONST_NAME.anInstance = MODULE_CONST_NAME({ anOption: true });

// if Promise isn't defined
global.Promise = require('promise-module');
var MODULE_CONST_NAME = require('MODULE_NAME');
```

### TODO usage example
```js
```

## Running tests
```sh
$ npm install
$ npm test
```