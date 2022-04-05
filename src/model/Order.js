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
import ShoppingCartItem from './ShoppingCartItem';

/**
 * The Order model module.
 * @module model/Order
 * @version 1.1.1
 */
class Order {
    /**
     * Constructs a new <code>Order</code>.
     * @alias module:model/Order
     * @param products {Array.<module:model/ShoppingCartItem>} 
     */
    constructor(products) { 
        
        Order.initialize(this, products);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, products) { 
        obj['products'] = products;
    }

    /**
     * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Order} obj Optional instance to populate.
     * @return {module:model/Order} The populated <code>Order</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Order();

            if (data.hasOwnProperty('orderId')) {
                obj['orderId'] = ApiClient.convertToType(data['orderId'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('fullName')) {
                obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [ShoppingCartItem]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} orderId
 */
Order.prototype['orderId'] = undefined;

/**
 * @member {Date} date
 */
Order.prototype['date'] = undefined;

/**
 * @member {String} userId
 */
Order.prototype['userId'] = undefined;

/**
 * @member {String} fullName
 */
Order.prototype['fullName'] = undefined;

/**
 * @member {Number} total
 */
Order.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/ShoppingCartItem>} products
 */
Order.prototype['products'] = undefined;






export default Order;
