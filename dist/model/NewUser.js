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
 * The NewUser model module.
 * @module model/NewUser
 * @version 1.1.1
 */
var NewUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewUser</code>.
   * (tsType: NewUserRequest, schemaOptions: { title: &#39;NewUser&#39; })
   * @alias module:model/NewUser
   * @param email {String} 
   * @param password {String} 
   */
  function NewUser(email, password) {
    _classCallCheck(this, NewUser);

    NewUser.initialize(this, email, password);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewUser, null, [{
    key: "initialize",
    value: function initialize(obj, email, password) {
      obj['email'] = email;
      obj['password'] = password;
    }
    /**
     * Constructs a <code>NewUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewUser} obj Optional instance to populate.
     * @return {module:model/NewUser} The populated <code>NewUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewUser();

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

  return NewUser;
}();
/**
 * @member {String} id
 */


NewUser.prototype['id'] = undefined;
/**
 * @member {String} email
 */

NewUser.prototype['email'] = undefined;
/**
 * @member {String} firstName
 */

NewUser.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

NewUser.prototype['lastName'] = undefined;
/**
 * @member {Array.<String>} roles
 */

NewUser.prototype['roles'] = undefined;
/**
 * @member {String} resetKey
 */

NewUser.prototype['resetKey'] = undefined;
/**
 * @member {Number} resetCount
 */

NewUser.prototype['resetCount'] = undefined;
/**
 * @member {String} resetTimestamp
 */

NewUser.prototype['resetTimestamp'] = undefined;
/**
 * @member {String} resetKeyTimestamp
 */

NewUser.prototype['resetKeyTimestamp'] = undefined;
/**
 * @member {String} password
 */

NewUser.prototype['password'] = undefined;
var _default = NewUser;
exports["default"] = _default;