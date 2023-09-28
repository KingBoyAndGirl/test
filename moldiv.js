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

console.log("1============================Before Body:", body); 
console.log("2============================URL:", url); 
console.log("3============================Object:", JSON.stringify(obj)); 

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
    // 在这里执行 '/aem_conversion_configs' 的逻辑操作
} else if (url.match('/cloudbridge_settings')) {
    // 在这里执行 '/cloudbridge_settings' 的逻辑操作
} else if (url.match('/fields=')) {
    // 在这里执行包含 '?fields=' 的URL逻辑操作
}

console.log("------------------------Modified Body:", body); 
$done({ body });
