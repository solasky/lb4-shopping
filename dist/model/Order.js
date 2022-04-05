"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ShoppingCartItem = _interopRequireDefault(require("./ShoppingCartItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Order model module.
 * @module model/Order
 * @version 1.1.1
 */
var Order = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Order</code>.
   * @alias module:model/Order
   * @param products {Array.<module:model/ShoppingCartItem>} 
   */
  function Order(products) {
    _classCallCheck(this, Order);

    Order.initialize(this, products);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Order, null, [{
    key: "initialize",
    value: function initialize(obj, products) {
      obj['products'] = products;
    }
    /**
     * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Order} obj Optional instance to populate.
     * @return {module:model/Order} The populated <code>Order</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Order();

        if (data.hasOwnProperty('orderId')) {
          obj['orderId'] = _ApiClient["default"].convertToType(data['orderId'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'String');
        }

        if (data.hasOwnProperty('fullName')) {
          obj['fullName'] = _ApiClient["default"].convertToType(data['fullName'], 'String');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('products')) {
          obj['products'] = _ApiClient["default"].convertToType(data['products'], [_ShoppingCartItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Order;
}();
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
var _default = Order;
exports["default"] = _default;