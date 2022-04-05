"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ShoppingCartItem model module.
 * @module model/ShoppingCartItem
 * @version 1.1.1
 */
var ShoppingCartItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ShoppingCartItem</code>.
   * @alias module:model/ShoppingCartItem
   */
  function ShoppingCartItem() {
    _classCallCheck(this, ShoppingCartItem);

    ShoppingCartItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ShoppingCartItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ShoppingCartItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShoppingCartItem} obj Optional instance to populate.
     * @return {module:model/ShoppingCartItem} The populated <code>ShoppingCartItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShoppingCartItem();

        if (data.hasOwnProperty('productId')) {
          obj['productId'] = _ApiClient["default"].convertToType(data['productId'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ShoppingCartItem;
}();
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
var _default = ShoppingCartItem;
exports["default"] = _default;