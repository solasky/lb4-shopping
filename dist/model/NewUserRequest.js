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
 * The NewUserRequest model module.
 * @module model/NewUserRequest
 * @version 1.1.1
 */
var NewUserRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewUserRequest</code>.
   * @alias module:model/NewUserRequest
   * @param email {String} 
   * @param password {String} 
   */
  function NewUserRequest(email, password) {
    _classCallCheck(this, NewUserRequest);

    NewUserRequest.initialize(this, email, password);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewUserRequest, null, [{
    key: "initialize",
    value: function initialize(obj, email, password) {
      obj['email'] = email;
      obj['password'] = password;
    }
    /**
     * Constructs a <code>NewUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewUserRequest} obj Optional instance to populate.
     * @return {module:model/NewUserRequest} The populated <code>NewUserRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewUserRequest();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], ['String']);
        }

        if (data.hasOwnProperty('resetKey')) {
          obj['resetKey'] = _ApiClient["default"].convertToType(data['resetKey'], 'String');
        }

        if (data.hasOwnProperty('resetCount')) {
          obj['resetCount'] = _ApiClient["default"].convertToType(data['resetCount'], 'Number');
        }

        if (data.hasOwnProperty('resetTimestamp')) {
          obj['resetTimestamp'] = _ApiClient["default"].convertToType(data['resetTimestamp'], 'String');
        }

        if (data.hasOwnProperty('resetKeyTimestamp')) {
          obj['resetKeyTimestamp'] = _ApiClient["default"].convertToType(data['resetKeyTimestamp'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewUserRequest;
}();
/**
 * @member {String} id
 */


NewUserRequest.prototype['id'] = undefined;
/**
 * @member {String} email
 */

NewUserRequest.prototype['email'] = undefined;
/**
 * @member {String} firstName
 */

NewUserRequest.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

NewUserRequest.prototype['lastName'] = undefined;
/**
 * @member {Array.<String>} roles
 */

NewUserRequest.prototype['roles'] = undefined;
/**
 * @member {String} resetKey
 */

NewUserRequest.prototype['resetKey'] = undefined;
/**
 * @member {Number} resetCount
 */

NewUserRequest.prototype['resetCount'] = undefined;
/**
 * @member {String} resetTimestamp
 */

NewUserRequest.prototype['resetTimestamp'] = undefined;
/**
 * @member {String} resetKeyTimestamp
 */

NewUserRequest.prototype['resetKeyTimestamp'] = undefined;
/**
 * @member {String} password
 */

NewUserRequest.prototype['password'] = undefined;
var _default = NewUserRequest;
exports["default"] = _default;