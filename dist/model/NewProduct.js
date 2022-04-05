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
 * The NewProduct model module.
 * @module model/NewProduct
 * @version 1.1.1
 */
var NewProduct = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewProduct</code>.
   * (tsType: Omit&lt;Product, &#39;productId&#39;&gt;, schemaOptions: { title: &#39;NewProduct&#39;, exclude: [ &#39;productId&#39; ] })
   * @alias module:model/NewProduct
   * @param name {String} 
   * @param price {Number} 
   */
  function NewProduct(name, price) {
    _classCallCheck(this, NewProduct);

    NewProduct.initialize(this, name, price);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewProduct, null, [{
    key: "initialize",
    value: function initialize(obj, name, price) {
      obj['name'] = name;
      obj['price'] = price;
    }
    /**
     * Constructs a <code>NewProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewProduct} obj Optional instance to populate.
     * @return {module:model/NewProduct} The populated <code>NewProduct</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewProduct();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewProduct;
}();
/**
 * @member {String} name
 */


NewProduct.prototype['name'] = undefined;
/**
 * @member {Number} price
 */

NewProduct.prototype['price'] = undefined;
/**
 * @member {String} image
 */

NewProduct.prototype['image'] = undefined;
/**
 * @member {String} description
 */

NewProduct.prototype['description'] = undefined;
/**
 * @member {String} details
 */

NewProduct.prototype['details'] = undefined;
var _default = NewProduct;
exports["default"] = _default;