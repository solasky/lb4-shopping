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
    instance = new Loopback4ExampleShopping.ProductControllerApi();
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

  describe('ProductControllerApi', function() {
    describe('productControllerCount', function() {
      it('should call productControllerCount successfully', function(done) {
        //uncomment below and update the code to test productControllerCount
        //instance.productControllerCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('productControllerCreate', function() {
      it('should call productControllerCreate successfully', function(done) {
        //uncomment below and update the code to test productControllerCreate
        //instance.productControllerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('productControllerDeleteById', function() {
      it('should call productControllerDeleteById successfully', function(done) {
        //uncomment below and update the code to test productControllerDeleteById
        //instance.productControllerDeleteById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('productControllerFind', function() {
      it('should call productControllerFind successfully', function(done) {
        //uncomment below and update the code to test productControllerFind
        //instance.productControllerFind(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('productControllerFindById', function() {
      it('should call productControllerFindById successfully', function(done) {
        //uncomment below and update the code to test productControllerFindById
        //instance.productControllerFindById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('productControllerReplaceById', function() {
      it('should call productControllerReplaceById successfully', function(done) {
        //uncomment below and update the code to test productControllerReplaceById
        //instance.productControllerReplaceById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('productControllerUpdateAll', function() {
      it('should call productControllerUpdateAll successfully', function(done) {
        //uncomment below and update the code to test productControllerUpdateAll
        //instance.productControllerUpdateAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('productControllerUpdateById', function() {
      it('should call productControllerUpdateById successfully', function(done) {
        //uncomment below and update the code to test productControllerUpdateById
        //instance.productControllerUpdateById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
