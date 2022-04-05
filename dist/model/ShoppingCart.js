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
 * The ShoppingCart model module.
 * @module model/ShoppingCart
 * @version 1.1.1
 */
var ShoppingCart = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ShoppingCart</code>.
   * @alias module:model/ShoppingCart
   */
  function ShoppingCart() {
    _classCallCheck(this, ShoppingCart);

    ShoppingCart.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ShoppingCart, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ShoppingCart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShoppingCart} obj Optional instance to populate.
     * @return {module:model/ShoppingCart} The populated <code>ShoppingCart</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShoppingCart();

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'String');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_ShoppingCartItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ShoppingCart;
}();
/**
 * @member {String} userId
 */


ShoppingCart.prototype['userId'] = undefined;
/**
 * @member {Array.<module:model/ShoppingCartItem>} items
 */

ShoppingCart.prototype['items'] = undefined;
var _default = ShoppingCart;
exports["default"] = _default;