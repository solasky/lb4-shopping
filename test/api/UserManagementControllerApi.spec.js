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
    instance = new Loopback4ExampleShopping.UserManagementControllerApi();
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

  describe('UserManagementControllerApi', function() {
    describe('userManagementControllerCreate', function() {
      it('should call userManagementControllerCreate successfully', function(done) {
        //uncomment below and update the code to test userManagementControllerCreate
        //instance.userManagementControllerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userManagementControllerFindById', function() {
      it('should call userManagementControllerFindById successfully', function(done) {
        //uncomment below and update the code to test userManagementControllerFindById
        //instance.userManagementControllerFindById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userManagementControllerForgotPassword', function() {
      it('should call userManagementControllerForgotPassword successfully', function(done) {
        //uncomment below and update the code to test userManagementControllerForgotPassword
        //instance.userManagementControllerForgotPassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userManagementControllerLogin', function() {
      it('should call userManagementControllerLogin successfully', function(done) {
        //uncomment below and update the code to test userManagementControllerLogin
        //instance.userManagementControllerLogin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userManagementControllerPrintCurrentUser', function() {
      it('should call userManagementControllerPrintCurrentUser successfully', function(done) {
        //uncomment below and update the code to test userManagementControllerPrintCurrentUser
        //instance.userManagementControllerPrintCurrentUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userManagementControllerProductRecommendations', function() {
      it('should call userManagementControllerProductRecommendations successfully', function(done) {
        //uncomment below and update the code to test userManagementControllerProductRecommendations
        //instance.userManagementControllerProductRecommendations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userManagementControllerResetPasswordFinish', function() {
      it('should call userManagementControllerResetPasswordFinish successfully', function(done) {
        //uncomment below and update the code to test userManagementControllerResetPasswordFinish
        //instance.userManagementControllerResetPasswordFinish(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userManagementControllerResetPasswordInit', function() {
      it('should call userManagementControllerResetPasswordInit successfully', function(done) {
        //uncomment below and update the code to test userManagementControllerResetPasswordInit
        //instance.userManagementControllerResetPasswordInit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userManagementControllerSet', function() {
      it('should call userManagementControllerSet successfully', function(done) {
        //uncomment below and update the code to test userManagementControllerSet
        //instance.userManagementControllerSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));