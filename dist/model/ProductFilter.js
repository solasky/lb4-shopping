"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfobjectset = _interopRequireDefault(require("./OneOfobjectset"));

var _OneOfstringarray = _interopRequireDefault(require("./OneOfstringarray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ProductFilter model module.
 * @module model/ProductFilter
 * @version 1.1.1
 */
var ProductFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductFilter</code>.
   * @alias module:model/ProductFilter
   */
  function ProductFilter() {
    _classCallCheck(this, ProductFilter);

    ProductFilter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProductFilter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProductFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductFilter} obj Optional instance to populate.
     * @return {module:model/ProductFilter} The populated <code>ProductFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductFilter();

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('skip')) {
          obj['skip'] = _ApiClient["default"].convertToType(data['skip'], 'Number');
        }

        if (data.hasOwnProperty('order')) {
          obj['order'] = _ApiClient["default"].convertToType(data['order'], _OneOfstringarray["default"]);
        }

        if (data.hasOwnProperty('where')) {
          obj['where'] = _ApiClient["default"].convertToType(data['where'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _ApiClient["default"].convertToType(data['fields'], _OneOfobjectset["default"]);
        }
      }

      return obj;
    }
  }]);

  return ProductFilter;
}();
/**
 * @member {Number} offset
 */


ProductFilter.prototype['offset'] = undefined;
/**
 * @member {Number} limit
 */

ProductFilter.prototype['limit'] = undefined;
/**
 * @member {Number} skip
 */

ProductFilter.prototype['skip'] = undefined;
/**
 * @member {module:model/OneOfstringarray} order
 */

ProductFilter.prototype['order'] = undefined;
/**
 * @member {Object.<String, Object>} where
 */

ProductFilter.prototype['where'] = undefined;
/**
 * @member {module:model/OneOfobjectset} fields
 */

ProductFilter.prototype['fields'] = undefined;
var _default = ProductFilter;
exports["default"] = _default;