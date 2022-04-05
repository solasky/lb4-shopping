"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrderScopeFilter = _interopRequireDefault(require("./OrderScopeFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OrderIncludeFilterItems model module.
 * @module model/OrderIncludeFilterItems
 * @version 1.1.1
 */
var OrderIncludeFilterItems = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderIncludeFilterItems</code>.
   * @alias module:model/OrderIncludeFilterItems
   */
  function OrderIncludeFilterItems() {
    _classCallCheck(this, OrderIncludeFilterItems);

    OrderIncludeFilterItems.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderIncludeFilterItems, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderIncludeFilterItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderIncludeFilterItems} obj Optional instance to populate.
     * @return {module:model/OrderIncludeFilterItems} The populated <code>OrderIncludeFilterItems</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderIncludeFilterItems();

        if (data.hasOwnProperty('relation')) {
          obj['relation'] = _ApiClient["default"].convertToType(data['relation'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _OrderScopeFilter["default"].constructFromObject(data['scope']);
        }
      }

      return obj;
    }
  }]);

  return OrderIncludeFilterItems;
}();
/**
 * @member {String} relation
 */


OrderIncludeFilterItems.prototype['relation'] = undefined;
/**
 * @member {module:model/OrderScopeFilter} scope
 */

OrderIncludeFilterItems.prototype['scope'] = undefined;
var _default = OrderIncludeFilterItems;
exports["default"] = _default;