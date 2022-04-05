# Loopback4ExampleShopping.UserManagementControllerApi

All URIs are relative to *http://[::1]:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userManagementControllerCreate**](UserManagementControllerApi.md#userManagementControllerCreate) | **POST** /users | 
[**userManagementControllerFindById**](UserManagementControllerApi.md#userManagementControllerFindById) | **GET** /users/{userId} | 
[**userManagementControllerForgotPassword**](UserManagementControllerApi.md#userManagementControllerForgotPassword) | **PUT** /users/forgot-password | 
[**userManagementControllerLogin**](UserManagementControllerApi.md#userManagementControllerLogin) | **POST** /users/login | 
[**userManagementControllerPrintCurrentUser**](UserManagementControllerApi.md#userManagementControllerPrintCurrentUser) | **GET** /users/me | 
[**userManagementControllerProductRecommendations**](UserManagementControllerApi.md#userManagementControllerProductRecommendations) | **GET** /users/{userId}/recommend | 
[**userManagementControllerResetPasswordFinish**](UserManagementControllerApi.md#userManagementControllerResetPasswordFinish) | **PUT** /users/reset-password/finish | 
[**userManagementControllerResetPasswordInit**](UserManagementControllerApi.md#userManagementControllerResetPasswordInit) | **POST** /users/reset-password/init | 
[**userManagementControllerSet**](UserManagementControllerApi.md#userManagementControllerSet) | **PUT** /users/{userId} | 



## userManagementControllerCreate

> User userManagementControllerCreate(opts)



### Example

```javascript
import Loopback4ExampleShopping from 'loopback4_example_shopping';

let apiInstance = new Loopback4ExampleShopping.UserManagementControllerApi();
let opts = {
  'newUser': new Loopback4ExampleShopping.NewUser() // NewUser | 
};
apiInstance.userManagementControllerCreate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newUser** | [**NewUser**](NewUser.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userManagementControllerFindById

> User userManagementControllerFindById(userId)



### Example

```javascript
import Loopback4ExampleShopping from 'loopback4_example_shopping';
let defaultClient = Loopback4ExampleShopping.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwt
let jwt = defaultClient.authentications['jwt'];
jwt.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Loopback4ExampleShopping.UserManagementControllerApi();
let userId = "userId_example"; // String | 
apiInstance.userManagementControllerFindById(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userManagementControllerForgotPassword

> InlineResponse2001 userManagementControllerForgotPassword(inlineObject)



### Example

```javascript
import Loopback4ExampleShopping from 'loopback4_example_shopping';
let defaultClient = Loopback4ExampleShopping.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwt
let jwt = defaultClient.authentications['jwt'];
jwt.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Loopback4ExampleShopping.UserManagementControllerApi();
let inlineObject = new Loopback4ExampleShopping.InlineObject(); // InlineObject | 
apiInstance.userManagementControllerForgotPassword(inlineObject, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userManagementControllerLogin

> InlineResponse2002 userManagementControllerLogin(inlineObject1)



### Example

```javascript
import Loopback4ExampleShopping from 'loopback4_example_shopping';

let apiInstance = new Loopback4ExampleShopping.UserManagementControllerApi();
let inlineObject1 = new Loopback4ExampleShopping.InlineObject1(); // InlineObject1 | 
apiInstance.userManagementControllerLogin(inlineObject1, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userManagementControllerPrintCurrentUser

> InlineResponse2001 userManagementControllerPrintCurrentUser()



### Example

```javascript
import Loopback4ExampleShopping from 'loopback4_example_shopping';
let defaultClient = Loopback4ExampleShopping.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwt
let jwt = defaultClient.authentications['jwt'];
jwt.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Loopback4ExampleShopping.UserManagementControllerApi();
apiInstance.userManagementControllerPrintCurrentUser((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userManagementControllerProductRecommendations

> [Product] userManagementControllerProductRecommendations(userId)



### Example

```javascript
import Loopback4ExampleShopping from 'loopback4_example_shopping';

let apiInstance = new Loopback4ExampleShopping.UserManagementControllerApi();
let userId = "userId_example"; // String | 
apiInstance.userManagementControllerProductRecommendations(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userManagementControllerResetPasswordFinish

> userManagementControllerResetPasswordFinish(opts)



### Example

```javascript
import Loopback4ExampleShopping from 'loopback4_example_shopping';

let apiInstance = new Loopback4ExampleShopping.UserManagementControllerApi();
let opts = {
  'keyAndPassword': new Loopback4ExampleShopping.KeyAndPassword() // KeyAndPassword | 
};
apiInstance.userManagementControllerResetPasswordFinish(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyAndPassword** | [**KeyAndPassword**](KeyAndPassword.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## userManagementControllerResetPasswordInit

> userManagementControllerResetPasswordInit(opts)



### Example

```javascript
import Loopback4ExampleShopping from 'loopback4_example_shopping';

let apiInstance = new Loopback4ExampleShopping.UserManagementControllerApi();
let opts = {
  'resetPasswordInit': new Loopback4ExampleShopping.ResetPasswordInit() // ResetPasswordInit | 
};
apiInstance.userManagementControllerResetPasswordInit(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetPasswordInit** | [**ResetPasswordInit**](ResetPasswordInit.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## userManagementControllerSet

> User userManagementControllerSet(userId, opts)



### Example

```javascript
import Loopback4ExampleShopping from 'loopback4_example_shopping';
let defaultClient = Loopback4ExampleShopping.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwt
let jwt = defaultClient.authentications['jwt'];
jwt.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Loopback4ExampleShopping.UserManagementControllerApi();
let userId = "userId_example"; // String | 
let opts = {
  'user': new Loopback4ExampleShopping.User() // User | update user
};
apiInstance.userManagementControllerSet(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **user** | [**User**](User.md)| update user | [optional] 

### Return type

[**User**](User.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

