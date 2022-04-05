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

/**
 * The InlineResponse200Headers model module.
 * @module model/InlineResponse200Headers
 * @version 1.1.1
 */
class InlineResponse200Headers {
    /**
     * Constructs a new <code>InlineResponse200Headers</code>.
     * @alias module:model/InlineResponse200Headers
     */
    constructor() { 
        
        InlineResponse200Headers.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200Headers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200Headers} obj Optional instance to populate.
     * @return {module:model/InlineResponse200Headers} The populated <code>InlineResponse200Headers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200Headers();

            if (data.hasOwnProperty('Content-Type')) {
                obj['Content-Type'] = ApiClient.convertToType(data['Content-Type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Content-Type
 */
InlineResponse200Headers.prototype['Content-Type'] = undefined;






export default InlineResponse200Headers;
