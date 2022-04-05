"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoopbackCount = _interopRequireDefault(require("../model/LoopbackCount"));

var _Order = _interopRequireDefault(require("../model/Order"));

var _OrderFilter = _interopRequireDefault(require("../model/OrderFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* UserOrderController service.
* @module api/UserOrderControllerApi
* @version 1.1.1
*/
var UserOrderControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserOrderControllerApi. 
  * @alias module:api/UserOrderControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserOrderControllerApi(apiClient) {
    _classCallCheck(this, UserOrderControllerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the userOrderControllerCreateOrder operation.
   * @callback module:api/UserOrderControllerApi~userOrderControllerCreateOrderCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Order} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {String} userId 
   * @param {Object} opts Optional parameters
   * @param {module:model/Order} opts.order 
   * @param {module:api/UserOrderControllerApi~userOrderControllerCreateOrderCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Order}
   */


  _createClass(UserOrderControllerApi, [{
    key: "userOrderControllerCreateOrder",
    value: function userOrderControllerCreateOrder(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['order']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userOrderControllerCreateOrder");
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
      var returnType = _Order["default"];
      return this.apiClient.callApi('/users/{userId}/orders', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userOrderControllerDeleteOrders operation.
     * @callback module:api/UserOrderControllerApi~userOrderControllerDeleteOrdersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoopbackCount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: Object}>} opts.where 
     * @param {module:api/UserOrderControllerApi~userOrderControllerDeleteOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoopbackCount}
     */

  }, {
    key: "userOrderControllerDeleteOrders",
    value: function userOrderControllerDeleteOrders(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userOrderControllerDeleteOrders");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'where': opts['where']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoopbackCount["default"];
      return this.apiClient.callApi('/users/{userId}/orders', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userOrderControllerFindOrders operation.
     * @callback module:api/UserOrderControllerApi~userOrderControllerFindOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Order>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/OrderFilter} opts.filter 
     * @param {module:api/UserOrderControllerApi~userOrderControllerFindOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Order>}
     */

  }, {
    key: "userOrderControllerFindOrders",
    value: function userOrderControllerFindOrders(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userOrderControllerFindOrders");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'filter': opts['filter']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Order["default"]];
      return this.apiClient.callApi('/users/{userId}/orders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userOrderControllerPatchOrders operation.
     * @callback module:api/UserOrderControllerApi~userOrderControllerPatchOrdersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoopbackCount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: Object}>} opts.where 
     * @param {Object.<String, Object>} opts.body 
     * @param {module:api/UserOrderControllerApi~userOrderControllerPatchOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoopbackCount}
     */

  }, {
    key: "userOrderControllerPatchOrders",
    value: function userOrderControllerPatchOrders(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userOrderControllerPatchOrders");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'where': opts['where']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LoopbackCount["default"];
      return this.apiClient.callApi('/users/{userId}/orders', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UserOrderControllerApi;
}();

exports["default"] = UserOrderControllerApi;