"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AnyOfOrderIncludeFilterItemsstring = _interopRequireDefault(require("./AnyOfOrderIncludeFilterItemsstring"));

var _OneOfobjectset = _interopRequireDefault(require("./OneOfobjectset"));

var _OneOfstringarray = _interopRequireDefault(require("./OneOfstringarray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderFilter model module.
 * @module model/OrderFilter
 * @version 1.1.1
 */
var OrderFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderFilter</code>.
   * @alias module:model/OrderFilter
   */
  function OrderFilter() {
    _classCallCheck(this, OrderFilter);

    OrderFilter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderFilter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderFilter} obj Optional instance to populate.
     * @return {module:model/OrderFilter} The populated <code>OrderFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderFilter();

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

        if (data.hasOwnProperty('include')) {
          obj['include'] = _ApiClient["default"].convertToType(data['include'], [_AnyOfOrderIncludeFilterItemsstring["default"]]);
        }
      }

      return obj;
    }
  }]);

  return OrderFilter;
}();
/**
 * @member {Number} offset
 */


OrderFilter.prototype['offset'] = undefined;
/**
 * @member {Number} limit
 */

OrderFilter.prototype['limit'] = undefined;
/**
 * @member {Number} skip
 */

OrderFilter.prototype['skip'] = undefined;
/**
 * @member {module:model/OneOfstringarray} order
 */

OrderFilter.prototype['order'] = undefined;
/**
 * @member {Object.<String, Object>} where
 */

OrderFilter.prototype['where'] = undefined;
/**
 * @member {module:model/OneOfobjectset} fields
 */

OrderFilter.prototype['fields'] = undefined;
/**
 * @member {Array.<module:model/AnyOfOrderIncludeFilterItemsstring>} include
 */

OrderFilter.prototype['include'] = undefined;
var _default = OrderFilter;
exports["default"] = _default;