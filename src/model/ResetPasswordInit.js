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
 * The ResetPasswordInit model module.
 * @module model/ResetPasswordInit
 * @version 1.1.1
 */
class ResetPasswordInit {
    /**
     * Constructs a new <code>ResetPasswordInit</code>.
     * @alias module:model/ResetPasswordInit
     * @param email {String} 
     */
    constructor(email) { 
        
        ResetPasswordInit.initialize(this, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email) { 
        obj['email'] = email;
    }

    /**
     * Constructs a <code>ResetPasswordInit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResetPasswordInit} obj Optional instance to populate.
     * @return {module:model/ResetPasswordInit} The populated <code>ResetPasswordInit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResetPasswordInit();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
ResetPasswordInit.prototype['email'] = undefined;






export default ResetPasswordInit;
