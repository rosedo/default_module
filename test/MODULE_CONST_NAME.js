'use strict';

const assert = require('assert');
const MODULE_CONST_NAMEModule = require('../src/built/MODULE_CONST_NAME');
const MODULE_CONST_NAME = MODULE_CONST_NAMEModule({
});

describe('module MODULE_CONST_NAME', function() {
    describe('managing instances', function() {
        it('module should be a default instance', function() {
            assert.strictEqual(typeof MODULE_CONST_NAMEModule.todoMethod, 'function');
        });
        it('module can create a new instance', function() {
            assert.strictEqual(typeof MODULE_CONST_NAMEModule, 'function');
            assert.strictEqual(typeof MODULE_CONST_NAME, 'function');
            assert.strictEqual(typeof MODULE_CONST_NAME.todoMethod, 'function');
        });
    });
});