"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoopbackCount = _interopRequireDefault(require("../model/LoopbackCount"));

var _NewProduct = _interopRequireDefault(require("../model/NewProduct"));

var _Product = _interopRequireDefault(require("../model/Product"));

var _ProductFilter = _interopRequireDefault(require("../model/ProductFilter"));

var _ProductPartial = _interopRequireDefault(require("../model/ProductPartial"));

var _ProductWithRelations = _interopRequireDefault(require("../model/ProductWithRelations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ProductController service.
* @module api/ProductControllerApi
* @version 1.1.1
*/
var ProductControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProductControllerApi. 
  * @alias module:api/ProductControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProductControllerApi(apiClient) {
    _classCallCheck(this, ProductControllerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the productControllerCount operation.
   * @callback module:api/ProductControllerApi~productControllerCountCallback
   * @param {String} error Error message, if any.
   * @param {module:model/LoopbackCount} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {Object} opts Optional parameters
   * @param {Object.<String, {String: Object}>} opts.where 
   * @param {module:api/ProductControllerApi~productControllerCountCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/LoopbackCount}
   */


  _createClass(ProductControllerApi, [{
    key: "productControllerCount",
    value: function productControllerCount(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'where': opts['where']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoopbackCount["default"];
      return this.apiClient.callApi('/products/count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the productControllerCreate operation.
     * @callback module:api/ProductControllerApi~productControllerCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/NewProduct} opts.newProduct 
     * @param {module:api/ProductControllerApi~productControllerCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Product}
     */

  }, {
    key: "productControllerCreate",
    value: function productControllerCreate(opts, callback) {
      opts = opts || {};
      var postBody = opts['newProduct'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Product["default"];
      return this.apiClient.callApi('/products', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the productControllerDeleteById operation.
     * @callback module:api/ProductControllerApi~productControllerDeleteByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/ProductControllerApi~productControllerDeleteByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "productControllerDeleteById",
    value: function productControllerDeleteById(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productControllerDeleteById");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/products/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the productControllerFind operation.
     * @callback module:api/ProductControllerApi~productControllerFindCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProductWithRelations>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductFilter} opts.filter 
     * @param {module:api/ProductControllerApi~productControllerFindCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProductWithRelations>}
     */

  }, {
    key: "productControllerFind",
    value: function productControllerFind(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter': opts['filter']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ProductWithRelations["default"]];
      return this.apiClient.callApi('/products', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the productControllerFindById operation.
     * @callback module:api/ProductControllerApi~productControllerFindByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductWithRelations} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductFilter} opts.filter 
     * @param {module:api/ProductControllerApi~productControllerFindByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductWithRelations}
     */

  }, {
    key: "productControllerFindById",
    value: function productControllerFindById(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productControllerFindById");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'filter': opts['filter']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProductWithRelations["default"];
      return this.apiClient.callApi('/products/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the productControllerReplaceById operation.
     * @callback module:api/ProductControllerApi~productControllerReplaceByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Product} opts.product 
     * @param {module:api/ProductControllerApi~productControllerReplaceByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "productControllerReplaceById",
    value: function productControllerReplaceById(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['product']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productControllerReplaceById");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/products/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the productControllerUpdateAll operation.
     * @callback module:api/ProductControllerApi~productControllerUpdateAllCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoopbackCount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: Object}>} opts.where 
     * @param {module:model/ProductPartial} opts.productPartial 
     * @param {module:api/ProductControllerApi~productControllerUpdateAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoopbackCount}
     */

  }, {
    key: "productControllerUpdateAll",
    value: function productControllerUpdateAll(opts, callback) {
      opts = opts || {};
      var postBody = opts['productPartial'];
      var pathParams = {};
      var queryParams = {
        'where': opts['where']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LoopbackCount["default"];
      return this.apiClient.callApi('/products', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the productControllerUpdateById operation.
     * @callback module:api/ProductControllerApi~productControllerUpdateByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductPartial} opts.productPartial 
     * @param {module:api/ProductControllerApi~productControllerUpdateByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "productControllerUpdateById",
    value: function productControllerUpdateById(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['productPartial']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productControllerUpdateById");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/products/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProductControllerApi;
}();

exports["default"] = ProductControllerApi;