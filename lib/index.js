'use strict';

import * as validator from './validator.js';
import * as helpers from './helpers.js';

export var Validator = validator.default;
export var ValidatorResult = helpers.ValidatorResult;
export var ValidationError = helpers.ValidationError;
export var SchemaError = helpers.SchemaError;

export function validate(instance, schema, options) {
  var v = new Validator();
  return v.validate(instance, schema, options);
};
