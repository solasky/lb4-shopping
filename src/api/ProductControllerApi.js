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
import LoopbackCount from '../model/LoopbackCount';
import NewProduct from '../model/NewProduct';
import Product from '../model/Product';
import ProductFilter from '../model/ProductFilter';
import ProductPartial from '../model/ProductPartial';
import ProductWithRelations from '../model/ProductWithRelations';

/**
* ProductController service.
* @module api/ProductControllerApi
* @version 1.1.1
*/
export default class ProductControllerApi {

    /**
    * Constructs a new ProductControllerApi. 
    * @alias module:api/ProductControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    productControllerCount(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'where': opts['where']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LoopbackCount;
      return this.apiClient.callApi(
        '/products/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    productControllerCreate(opts, callback) {
      opts = opts || {};
      let postBody = opts['newProduct'];

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
      let returnType = Product;
      return this.apiClient.callApi(
        '/products', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    productControllerDeleteById(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productControllerDeleteById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwt'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/products/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    productControllerFind(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ProductWithRelations];
      return this.apiClient.callApi(
        '/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    productControllerFindById(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productControllerFindById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProductWithRelations;
      return this.apiClient.callApi(
        '/products/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    productControllerReplaceById(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['product'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productControllerReplaceById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwt'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/products/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    productControllerUpdateAll(opts, callback) {
      opts = opts || {};
      let postBody = opts['productPartial'];

      let pathParams = {
      };
      let queryParams = {
        'where': opts['where']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwt'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LoopbackCount;
      return this.apiClient.callApi(
        '/products', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    productControllerUpdateById(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['productPartial'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling productControllerUpdateById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jwt'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/products/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
