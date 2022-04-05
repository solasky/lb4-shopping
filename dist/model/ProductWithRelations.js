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
 * The ProductWithRelations model module.
 * @module model/ProductWithRelations
 * @version 1.1.1
 */
var ProductWithRelations = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductWithRelations</code>.
   * (tsType: ProductWithRelations, schemaOptions: { includeRelations: true })
   * @alias module:model/ProductWithRelations
   * @param name {String} 
   * @param price {Number} 
   */
  function ProductWithRelations(name, price) {
    _classCallCheck(this, ProductWithRelations);

    ProductWithRelations.initialize(this, name, price);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProductWithRelations, null, [{
    key: "initialize",
    value: function initialize(obj, name, price) {
      obj['name'] = name;
      obj['price'] = price;
    }
    /**
     * Constructs a <code>ProductWithRelations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductWithRelations} obj Optional instance to populate.
     * @return {module:model/ProductWithRelations} The populated <code>ProductWithRelations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductWithRelations();

        if (data.hasOwnProperty('productId')) {
          obj['productId'] = _ApiClient["default"].convertToType(data['productId'], 'String');
        }

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

  return ProductWithRelations;
}();
/**
 * @member {String} productId
 */


ProductWithRelations.prototype['productId'] = undefined;
/**
 * @member {String} name
 */

ProductWithRelations.prototype['name'] = undefined;
/**
 * @member {Number} price
 */

ProductWithRelations.prototype['price'] = undefined;
/**
 * @member {String} image
 */

ProductWithRelations.prototype['image'] = undefined;
/**
 * @member {String} description
 */

ProductWithRelations.prototype['description'] = undefined;
/**
 * @member {String} details
 */

ProductWithRelations.prototype['details'] = undefined;
var _default = ProductWithRelations;
exports["default"] = _default;