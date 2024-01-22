/*

***************************
QuantumultX:

[rewrite_local]
^https:\/\/appc-vip.qixin.com\/api\/vip\/getAllVipInfo url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/qxb.js
^https:\/\/appc.qixin.com\/v4\/vip\/getAllVipInfo url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/qxb.js
^https:\/\/app-query.qixin.com\/api\/vip\/getAllVipInfo url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/qxb.js
[mitm]
hostname = appc.qixin.com, app-query.qixin.com
***************************/

var url = $request.url;
var body = $response.body;

console.log("----------=========:\n" + url);
console.log("1------------------:\n" + body);

var modifiedData = {
  "status" : "1",
  "message" : "操作成功",
  "data" : {
    "vipList" : [
      {
        "valid" : true,
        "end" : "2099-01-20",
        "type" : "svip",
        "name" : "启信宝SVIP",
        "start" : "2024-01-17"
      }
    ]
  }
};

body = JSON.stringify(modifiedData);

console.log("2============================:\n" + body);
$done({ body });
