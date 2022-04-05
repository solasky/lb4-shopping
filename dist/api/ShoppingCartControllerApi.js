"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ShoppingCart = _interopRequireDefault(require("../model/ShoppingCart"));

var _ShoppingCartItem = _interopRequireDefault(require("../model/ShoppingCartItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ShoppingCartController service.
* @module api/ShoppingCartControllerApi
* @version 1.1.1
*/
var ShoppingCartControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ShoppingCartControllerApi. 
  * @alias module:api/ShoppingCartControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ShoppingCartControllerApi(apiClient) {
    _classCallCheck(this, ShoppingCartControllerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the shoppingCartControllerAddItem operation.
   * @callback module:api/ShoppingCartControllerApi~shoppingCartControllerAddItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ShoppingCart} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {String} userId 
   * @param {Object} opts Optional parameters
   * @param {module:model/ShoppingCartItem} opts.shoppingCartItem shopping cart item
   * @param {module:api/ShoppingCartControllerApi~shoppingCartControllerAddItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ShoppingCart}
   */


  _createClass(ShoppingCartControllerApi, [{
    key: "shoppingCartControllerAddItem",
    value: function shoppingCartControllerAddItem(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['shoppingCartItem']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling shoppingCartControllerAddItem");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ShoppingCart["default"];
      return this.apiClient.callApi('/shoppingCarts/{userId}/items', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the shoppingCartControllerCreate operation.
     * @callback module:api/ShoppingCartControllerApi~shoppingCartControllerCreateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ShoppingCart} opts.shoppingCart shopping cart
     * @param {module:api/ShoppingCartControllerApi~shoppingCartControllerCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "shoppingCartControllerCreate",
    value: function shoppingCartControllerCreate(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['shoppingCart']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling shoppingCartControllerCreate");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/shoppingCarts/{userId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the shoppingCartControllerGet operation.
     * @callback module:api/ShoppingCartControllerApi~shoppingCartControllerGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShoppingCart} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {module:api/ShoppingCartControllerApi~shoppingCartControllerGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShoppingCart}
     */

  }, {
    key: "shoppingCartControllerGet",
    value: function shoppingCartControllerGet(userId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling shoppingCartControllerGet");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ShoppingCart["default"];
      return this.apiClient.callApi('/shoppingCarts/{userId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the shoppingCartControllerRemove operation.
     * @callback module:api/ShoppingCartControllerApi~shoppingCartControllerRemoveCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {module:api/ShoppingCartControllerApi~shoppingCartControllerRemoveCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "shoppingCartControllerRemove",
    value: function shoppingCartControllerRemove(userId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling shoppingCartControllerRemove");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/shoppingCarts/{userId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the shoppingCartControllerSet operation.
     * @callback module:api/ShoppingCartControllerApi~shoppingCartControllerSetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ShoppingCart} opts.shoppingCart shopping cart
     * @param {module:api/ShoppingCartControllerApi~shoppingCartControllerSetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "shoppingCartControllerSet",
    value: function shoppingCartControllerSet(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['shoppingCart']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling shoppingCartControllerSet");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/shoppingCarts/{userId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ShoppingCartControllerApi;
}();

exports["default"] = ShoppingCartControllerApi;