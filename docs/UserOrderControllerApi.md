# Loopback4ExampleShopping.UserOrderControllerApi

All URIs are relative to *http://[::1]:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userOrderControllerCreateOrder**](UserOrderControllerApi.md#userOrderControllerCreateOrder) | **POST** /users/{userId}/orders | 
[**userOrderControllerDeleteOrders**](UserOrderControllerApi.md#userOrderControllerDeleteOrders) | **DELETE** /users/{userId}/orders | 
[**userOrderControllerFindOrders**](UserOrderControllerApi.md#userOrderControllerFindOrders) | **GET** /users/{userId}/orders | 
[**userOrderControllerPatchOrders**](UserOrderControllerApi.md#userOrderControllerPatchOrders) | **PATCH** /users/{userId}/orders | 



## userOrderControllerCreateOrder

> Order userOrderControllerCreateOrder(userId, opts)



### Example

```javascript
import Loopback4ExampleShopping from 'loopback4_example_shopping';
let defaultClient = Loopback4ExampleShopping.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwt
let jwt = defaultClient.authentications['jwt'];
jwt.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Loopback4ExampleShopping.UserOrderControllerApi();
let userId = "userId_example"; // String | 
let opts = {
  'order': new Loopback4ExampleShopping.Order() // Order | 
};
apiInstance.userOrderControllerCreateOrder(userId, opts, (error, data, response) => {
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
 **order** | [**Order**](Order.md)|  | [optional] 

### Return type

[**Order**](Order.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userOrderControllerDeleteOrders

> LoopbackCount userOrderControllerDeleteOrders(userId, opts)



### Example

```javascript
import Loopback4ExampleShopping from 'loopback4_example_shopping';
let defaultClient = Loopback4ExampleShopping.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwt
let jwt = defaultClient.authentications['jwt'];
jwt.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Loopback4ExampleShopping.UserOrderControllerApi();
let userId = "userId_example"; // String | 
let opts = {
  'where': {key: null} // {String: Object} | 
};
apiInstance.userOrderControllerDeleteOrders(userId, opts, (error, data, response) => {
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
 **where** | [**{String: Object}**](Object.md)|  | [optional] 

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userOrderControllerFindOrders

> [Order] userOrderControllerFindOrders(userId, opts)



### Example

```javascript
import Loopback4ExampleShopping from 'loopback4_example_shopping';
let defaultClient = Loopback4ExampleShopping.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwt
let jwt = defaultClient.authentications['jwt'];
jwt.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Loopback4ExampleShopping.UserOrderControllerApi();
let userId = "userId_example"; // String | 
let opts = {
  'filter': new Loopback4ExampleShopping.OrderFilter() // OrderFilter | 
};
apiInstance.userOrderControllerFindOrders(userId, opts, (error, data, response) => {
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
 **filter** | [**OrderFilter**](.md)|  | [optional] 

### Return type

[**[Order]**](Order.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userOrderControllerPatchOrders

> LoopbackCount userOrderControllerPatchOrders(userId, opts)



### Example

```javascript
import Loopback4ExampleShopping from 'loopback4_example_shopping';
let defaultClient = Loopback4ExampleShopping.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: jwt
let jwt = defaultClient.authentications['jwt'];
jwt.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Loopback4ExampleShopping.UserOrderControllerApi();
let userId = "userId_example"; // String | 
let opts = {
  'where': {key: null}, // {String: Object} | 
  'body': {key: null} // Object | 
};
apiInstance.userOrderControllerPatchOrders(userId, opts, (error, data, response) => {
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
 **where** | [**{String: Object}**](Object.md)|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

[**LoopbackCount**](LoopbackCount.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

