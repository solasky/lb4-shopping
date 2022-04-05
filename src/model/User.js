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
 * The User model module.
 * @module model/User
 * @version 1.1.1
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:model/User
     * @param email {String} 
     */
    constructor(email) { 
        
        User.initialize(this, email);
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
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
            if (data.hasOwnProperty('resetKey')) {
                obj['resetKey'] = ApiClient.convertToType(data['resetKey'], 'String');
            }
            if (data.hasOwnProperty('resetCount')) {
                obj['resetCount'] = ApiClient.convertToType(data['resetCount'], 'Number');
            }
            if (data.hasOwnProperty('resetTimestamp')) {
                obj['resetTimestamp'] = ApiClient.convertToType(data['resetTimestamp'], 'String');
            }
            if (data.hasOwnProperty('resetKeyTimestamp')) {
                obj['resetKeyTimestamp'] = ApiClient.convertToType(data['resetKeyTimestamp'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
User.prototype['id'] = undefined;

/**
 * @member {String} email
 */
User.prototype['email'] = undefined;

/**
 * @member {String} firstName
 */
User.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
User.prototype['lastName'] = undefined;

/**
 * @member {Array.<String>} roles
 */
User.prototype['roles'] = undefined;

/**
 * @member {String} resetKey
 */
User.prototype['resetKey'] = undefined;

/**
 * @member {Number} resetCount
 */
User.prototype['resetCount'] = undefined;

/**
 * @member {String} resetTimestamp
 */
User.prototype['resetTimestamp'] = undefined;

/**
 * @member {String} resetKeyTimestamp
 */
User.prototype['resetKeyTimestamp'] = undefined;






export default User;

