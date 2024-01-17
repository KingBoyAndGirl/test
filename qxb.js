/*

***************************
QuantumultX:

[rewrite_local]
^https:\//appc.qixin.com\/v4\/user\/svip\/getSVIPInfo url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/qxb.js
[mitm]
hostname = appc.qixin.com
***************************/


var url = $request.url;
var body = $response.body;


var modifiedData = {
  "status" : "1",
  "message" : "操作成功",
  "data" : {
    "plan" : "",
    "isGrayscaleUser" : true,
    "svipStartTime" : "2024-01-31 23:59:59",
    "isSVIP" : true,
    "svipExpTime" : "2099-01-31 23:59:59"
  }
};

body = JSON.stringify(modifiedData);


console.log("2============================:" + body);
$done({ body });
