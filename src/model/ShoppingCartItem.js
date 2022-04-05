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
 * The ShoppingCartItem model module.
 * @module model/ShoppingCartItem
 * @version 1.1.1
 */
class ShoppingCartItem {
    /**
     * Constructs a new <code>ShoppingCartItem</code>.
     * @alias module:model/ShoppingCartItem
     */
    constructor() { 
        
        ShoppingCartItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShoppingCartItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShoppingCartItem} obj Optional instance to populate.
     * @return {module:model/ShoppingCartItem} The populated <code>ShoppingCartItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShoppingCartItem();

            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} productId
 */
ShoppingCartItem.prototype['productId'] = undefined;

/**
 * @member {String} name
 */
ShoppingCartItem.prototype['name'] = undefined;

/**
 * @member {Number} quantity
 */
ShoppingCartItem.prototype['quantity'] = undefined;

/**
 * @member {Number} price
 */
ShoppingCartItem.prototype['price'] = undefined;






export default ShoppingCartItem;
