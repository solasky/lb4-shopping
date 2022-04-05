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

import ApiClient from '../ApiClient';
import AnyOfOrderIncludeFilterItemsstring from './AnyOfOrderIncludeFilterItemsstring';
import OneOfobjectset from './OneOfobjectset';
import OneOfstringarray from './OneOfstringarray';

/**
 * The OrderFilter model module.
 * @module model/OrderFilter
 * @version 1.1.1
 */
class OrderFilter {
    /**
     * Constructs a new <code>OrderFilter</code>.
     * @alias module:model/OrderFilter
     */
    constructor() { 
        
        OrderFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderFilter} obj Optional instance to populate.
     * @return {module:model/OrderFilter} The populated <code>OrderFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderFilter();

            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], OneOfstringarray);
            }
            if (data.hasOwnProperty('where')) {
                obj['where'] = ApiClient.convertToType(data['where'], {'String': Object});
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], OneOfobjectset);
            }
            if (data.hasOwnProperty('include')) {
                obj['include'] = ApiClient.convertToType(data['include'], [AnyOfOrderIncludeFilterItemsstring]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} offset
 */
OrderFilter.prototype['offset'] = undefined;

/**
 * @member {Number} limit
 */
OrderFilter.prototype['limit'] = undefined;

/**
 * @member {Number} skip
 */
OrderFilter.prototype['skip'] = undefined;

/**
 * @member {module:model/OneOfstringarray} order
 */
OrderFilter.prototype['order'] = undefined;

/**
 * @member {Object.<String, Object>} where
 */
OrderFilter.prototype['where'] = undefined;

/**
 * @member {module:model/OneOfobjectset} fields
 */
OrderFilter.prototype['fields'] = undefined;

/**
 * @member {Array.<module:model/AnyOfOrderIncludeFilterItemsstring>} include
 */
OrderFilter.prototype['include'] = undefined;






export default OrderFilter;
