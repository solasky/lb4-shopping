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


import ApiClient from "../ApiClient";
import InlineObject from '../model/InlineObject';
import InlineObject1 from '../model/InlineObject1';
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2002 from '../model/InlineResponse2002';
import KeyAndPassword from '../model/KeyAndPassword';
import NewUser from '../model/NewUser';
import Product from '../model/Product';
import ResetPasswordInit from '../model/ResetPasswordInit';
import User from '../model/User';

/**
* UserManagementController service.
* @module api/UserManagementControllerApi
* @version 1.1.1
*/
export default class UserManagementControllerApi {

    /**
    * Constructs a new UserManagementControllerApi. 
    * @alias module:api/UserManagementControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    userManagementControllerCreate(opts, callback) {
      opts = opts || {};
      let postBody = opts['newUser'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    userManagementControllerFindById(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userManagementControllerFindById");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    userManagementControllerForgotPassword(inlineObject, callback) {
      let postBody = inlineObject;
      // verify the required parameter 'inlineObject' is set
      if (inlineObject === undefined || inlineObject === null) {
        throw new Error("Missing the required parameter 'inlineObject' when calling userManagementControllerForgotPassword");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwt'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/users/forgot-password', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    userManagementControllerLogin(inlineObject1, callback) {
      let postBody = inlineObject1;
      // verify the required parameter 'inlineObject1' is set
      if (inlineObject1 === undefined || inlineObject1 === null) {
        throw new Error("Missing the required parameter 'inlineObject1' when calling userManagementControllerLogin");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/users/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    userManagementControllerPrintCurrentUser(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/users/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    userManagementControllerProductRecommendations(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userManagementControllerProductRecommendations");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Product];
      return this.apiClient.callApi(
        '/users/{userId}/recommend', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    userManagementControllerResetPasswordFinish(opts, callback) {
      opts = opts || {};
      let postBody = opts['keyAndPassword'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/reset-password/finish', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    userManagementControllerResetPasswordInit(opts, callback) {
      opts = opts || {};
      let postBody = opts['resetPasswordInit'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/reset-password/init', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    userManagementControllerSet(userId, opts, callback) {
      opts = opts || {};
      let postBody = opts['user'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userManagementControllerSet");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwt'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/users/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
