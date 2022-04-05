"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject1"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2001"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2002"));

var _KeyAndPassword = _interopRequireDefault(require("../model/KeyAndPassword"));

var _NewUser = _interopRequireDefault(require("../model/NewUser"));

var _Product = _interopRequireDefault(require("../model/Product"));

var _ResetPasswordInit = _interopRequireDefault(require("../model/ResetPasswordInit"));

var _User = _interopRequireDefault(require("../model/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* UserManagementController service.
* @module api/UserManagementControllerApi
* @version 1.1.1
*/
var UserManagementControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserManagementControllerApi. 
  * @alias module:api/UserManagementControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserManagementControllerApi(apiClient) {
    _classCallCheck(this, UserManagementControllerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the userManagementControllerCreate operation.
   * @callback module:api/UserManagementControllerApi~userManagementControllerCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/User} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {Object} opts Optional parameters
   * @param {module:model/NewUser} opts.newUser 
   * @param {module:api/UserManagementControllerApi~userManagementControllerCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/User}
   */


  _createClass(UserManagementControllerApi, [{
    key: "userManagementControllerCreate",
    value: function userManagementControllerCreate(opts, callback) {
      opts = opts || {};
      var postBody = opts['newUser'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userManagementControllerFindById operation.
     * @callback module:api/UserManagementControllerApi~userManagementControllerFindByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {module:api/UserManagementControllerApi~userManagementControllerFindByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "userManagementControllerFindById",
    value: function userManagementControllerFindById(userId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userManagementControllerFindById");
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
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{userId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userManagementControllerForgotPassword operation.
     * @callback module:api/UserManagementControllerApi~userManagementControllerForgotPasswordCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/InlineObject} inlineObject 
     * @param {module:api/UserManagementControllerApi~userManagementControllerForgotPasswordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */

  }, {
    key: "userManagementControllerForgotPassword",
    value: function userManagementControllerForgotPassword(inlineObject, callback) {
      var postBody = inlineObject; // verify the required parameter 'inlineObject' is set

      if (inlineObject === undefined || inlineObject === null) {
        throw new Error("Missing the required parameter 'inlineObject' when calling userManagementControllerForgotPassword");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/users/forgot-password', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userManagementControllerLogin operation.
     * @callback module:api/UserManagementControllerApi~userManagementControllerLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/InlineObject1} inlineObject1 
     * @param {module:api/UserManagementControllerApi~userManagementControllerLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */

  }, {
    key: "userManagementControllerLogin",
    value: function userManagementControllerLogin(inlineObject1, callback) {
      var postBody = inlineObject1; // verify the required parameter 'inlineObject1' is set

      if (inlineObject1 === undefined || inlineObject1 === null) {
        throw new Error("Missing the required parameter 'inlineObject1' when calling userManagementControllerLogin");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/users/login', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userManagementControllerPrintCurrentUser operation.
     * @callback module:api/UserManagementControllerApi~userManagementControllerPrintCurrentUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/UserManagementControllerApi~userManagementControllerPrintCurrentUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */

  }, {
    key: "userManagementControllerPrintCurrentUser",
    value: function userManagementControllerPrintCurrentUser(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/users/me', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userManagementControllerProductRecommendations operation.
     * @callback module:api/UserManagementControllerApi~userManagementControllerProductRecommendationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Product>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {module:api/UserManagementControllerApi~userManagementControllerProductRecommendationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Product>}
     */

  }, {
    key: "userManagementControllerProductRecommendations",
    value: function userManagementControllerProductRecommendations(userId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userManagementControllerProductRecommendations");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Product["default"]];
      return this.apiClient.callApi('/users/{userId}/recommend', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userManagementControllerResetPasswordFinish operation.
     * @callback module:api/UserManagementControllerApi~userManagementControllerResetPasswordFinishCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/KeyAndPassword} opts.keyAndPassword 
     * @param {module:api/UserManagementControllerApi~userManagementControllerResetPasswordFinishCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "userManagementControllerResetPasswordFinish",
    value: function userManagementControllerResetPasswordFinish(opts, callback) {
      opts = opts || {};
      var postBody = opts['keyAndPassword'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/users/reset-password/finish', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userManagementControllerResetPasswordInit operation.
     * @callback module:api/UserManagementControllerApi~userManagementControllerResetPasswordInitCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/ResetPasswordInit} opts.resetPasswordInit 
     * @param {module:api/UserManagementControllerApi~userManagementControllerResetPasswordInitCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "userManagementControllerResetPasswordInit",
    value: function userManagementControllerResetPasswordInit(opts, callback) {
      opts = opts || {};
      var postBody = opts['resetPasswordInit'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/users/reset-password/init', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userManagementControllerSet operation.
     * @callback module:api/UserManagementControllerApi~userManagementControllerSetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/User} opts.user update user
     * @param {module:api/UserManagementControllerApi~userManagementControllerSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "userManagementControllerSet",
    value: function userManagementControllerSet(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['user']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userManagementControllerSet");
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
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{userId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UserManagementControllerApi;
}();

exports["default"] = UserManagementControllerApi;