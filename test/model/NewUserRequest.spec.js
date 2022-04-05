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
    instance = new Loopback4ExampleShopping.NewUserRequest();
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

  describe('NewUserRequest', function() {
    it('should create an instance of NewUserRequest', function() {
      // uncomment below and update the code to test NewUserRequest
      //var instance = new Loopback4ExampleShopping.NewUserRequest();
      //expect(instance).to.be.a(Loopback4ExampleShopping.NewUserRequest);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Loopback4ExampleShopping.NewUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new Loopback4ExampleShopping.NewUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new Loopback4ExampleShopping.NewUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new Loopback4ExampleShopping.NewUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instance = new Loopback4ExampleShopping.NewUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property resetKey (base name: "resetKey")', function() {
      // uncomment below and update the code to test the property resetKey
      //var instance = new Loopback4ExampleShopping.NewUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property resetCount (base name: "resetCount")', function() {
      // uncomment below and update the code to test the property resetCount
      //var instance = new Loopback4ExampleShopping.NewUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property resetTimestamp (base name: "resetTimestamp")', function() {
      // uncomment below and update the code to test the property resetTimestamp
      //var instance = new Loopback4ExampleShopping.NewUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property resetKeyTimestamp (base name: "resetKeyTimestamp")', function() {
      // uncomment below and update the code to test the property resetKeyTimestamp
      //var instance = new Loopback4ExampleShopping.NewUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new Loopback4ExampleShopping.NewUserRequest();
      //expect(instance).to.be();
    });

  });

}));
