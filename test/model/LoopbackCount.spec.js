/**
 * loopback4-example-shopping
 * LoopBack 4 Example: Online Shopping APIs
 *
 * The version of the OpenAPI document: 1.1.1
 * Contact: dev@loopback.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Loopback4ExampleShopping);
  }
}(this, function(expect, Loopback4ExampleShopping) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Loopback4ExampleShopping.LoopbackCount();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LoopbackCount', function() {
    it('should create an instance of LoopbackCount', function() {
      // uncomment below and update the code to test LoopbackCount
      //var instance = new Loopback4ExampleShopping.LoopbackCount();
      //expect(instance).to.be.a(Loopback4ExampleShopping.LoopbackCount);
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instance = new Loopback4ExampleShopping.LoopbackCount();
      //expect(instance).to.be();
    });

  });

}));