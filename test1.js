/*
MOLDIV 解锁会员

***************************
QuantumultX:

[rewrite_local]
^https://graph\.facebook\.com/v\d+\.\d+/\d+/activities url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/test1.js

[mitm]
hostname = graph.facebook.com
**************************/

var url = $request.url;
var body = $response.body;
console.log("1============================:" + body);
if (url.indexOf("/activities") != -1) {
    var modifiedData = {
        "success": false
    };

    body = JSON.stringify(modifiedData);
}
console.log("2============================:" + body);
$done({ body });
