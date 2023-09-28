/*
MOLDIV 解锁会员

***************************
QuantumultX:

[rewrite_local]
^https://graph\.facebook\.com/v\d+\.\d+/\d+.* url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/moldiv.js

[mitm]
hostname = graph.facebook.com
**************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

if (url.match('/mobile_sdk_gk')) {
    console.log("2============================mobile_sdk_gk:" + body); 
} else if (url.match('/aem_conversion_configs')) {
      console.log("4============================aem_conversion_configs:" + body); 
    // 在这里执行 '/aem_conversion_configs' 的逻辑操作
}else if (url.match('/cloudbridge_settings')) {
      console.log("5============================cloudbridge_settings:" + body); 
    // 在这里执行 '/cloudbridge_settings' 的逻辑操作
} else if (url.match('\\?fields=')) {
    // 在这里执行包含 '?fields=' 的URL逻辑操作
    // 修改逻辑操作
    console.log("6============================fields:" + body); 
} else if (url.match('\\?access_token=')) {
    // 在这里执行包含 '?access_token=' 的URL逻辑操作
    // 修改逻辑操作
    console.log("7============================access_token:" + body); 
} else{
    console.log("9-1============================URL:" + url); 
    console.log("9-2============================body:" + body); 
}
//console.log("11------------------------Modified Body:" + body); 
$done({ body });
