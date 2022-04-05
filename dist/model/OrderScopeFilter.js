"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfmapset = _interopRequireDefault(require("./OneOfmapset"));

var _OneOfstringarray = _interopRequireDefault(require("./OneOfstringarray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderScopeFilter model module.
 * @module model/OrderScopeFilter
 * @version 1.1.1
 */
var OrderScopeFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderScopeFilter</code>.
   * @alias module:model/OrderScopeFilter
   */
  function OrderScopeFilter() {
    _classCallCheck(this, OrderScopeFilter);

    OrderScopeFilter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderScopeFilter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderScopeFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderScopeFilter} obj Optional instance to populate.
     * @return {module:model/OrderScopeFilter} The populated <code>OrderScopeFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderScopeFilter();

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
          obj['fields'] = _ApiClient["default"].convertToType(data['fields'], _OneOfmapset["default"]);
        }

        if (data.hasOwnProperty('include')) {
          obj['include'] = _ApiClient["default"].convertToType(data['include'], [{
            'String': Object
          }]);
        }
      }

      return obj;
    }
  }]);

  return OrderScopeFilter;
}();
/**
 * @member {Number} offset
 */


OrderScopeFilter.prototype['offset'] = undefined;
/**
 * @member {Number} limit
 */

OrderScopeFilter.prototype['limit'] = undefined;
/**
 * @member {Number} skip
 */

OrderScopeFilter.prototype['skip'] = undefined;
/**
 * @member {module:model/OneOfstringarray} order
 */

OrderScopeFilter.prototype['order'] = undefined;
/**
 * @member {Object.<String, Object>} where
 */

OrderScopeFilter.prototype['where'] = undefined;
/**
 * @member {module:model/OneOfmapset} fields
 */

OrderScopeFilter.prototype['fields'] = undefined;
/**
 * @member {Array.<Object.<String, Object>>} include
 */

OrderScopeFilter.prototype['include'] = undefined;
var _default = OrderScopeFilter;
exports["default"] = _default;