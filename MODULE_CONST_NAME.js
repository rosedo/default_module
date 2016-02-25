'use strict';

var _ = require('lodash');

var defaultOptions = {
};

module.exports = new_();
function new_(mainOptions) {
  mainOptions = _.cloneDeep(mainOptions || {});
  _.defaultsDeep(mainOptions, defaultOptions);
  return _.assign(new_.bind(), {
    todoMethod: todoMethod,
  });

  function todoMethod(options) {
    options = _.cloneDeep(options || {});
    _.defaultsDeep(options, mainOptions);
    return requireOptions(options, [
    ]).then(function() {
      return new Promise(function(resolve, reject) {
        // TODO
        resolve();
      });
    });
  }
}

function requireOptions(providedOptions, requiredOptionNames) {
  return new Promise(function(resolve, reject) {
    requiredOptionNames.forEach(function(optionName) {
      if (typeof providedOptions[optionName] === 'undefined') {
        return reject(new Error('missing option: ' + optionName));
      }
    });
    return resolve();
  });
}
