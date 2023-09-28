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
    if (obj && obj.data && Array.isArray(obj.data)) {
        var gatekeepers = obj.data[0].gatekeepers;
        if (gatekeepers && Array.isArray(gatekeepers)) {
            for (var i = 0; i < gatekeepers.length; i++) {
                gatekeepers[i].value = true;
            }
        }
        body = JSON.stringify(obj);
    }
} else if (url.match('/aem_conversion_configs')) {
      console.log("4============================aem_conversion_configs:" + body); 
    // 在这里执行 '/aem_conversion_configs' 的逻辑操作
}else if (url.match('/cloudbridge_settings')) {
      console.log("5============================cloudbridge_settings:" + body); 
    // 在这里执行 '/cloudbridge_settings' 的逻辑操作
} else if (url.match('fields=')) {
      console.log("6============================fields:" + body); 
    // 在这里执行包含 '?fields=' 的URL逻辑操作
} else if (url.match('?access_token')) {
  console.log("7============================access_token:" + body); 
} else{
    console.log("9-2============================URL:" + url); 
}
console.log("11------------------------Modified Body:" + body); 
$done({ body });
