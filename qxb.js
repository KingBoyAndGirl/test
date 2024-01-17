/*

***************************
QuantumultX:

[rewrite_local]
^https:\/\/app[.-]qixin\.com\/(v4\/vip\/getAllVipInfo|api\/vip\/getAllVipInfo) url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/qxb.js
[mitm]
hostname = app-query.qixin.com, appc.qixin.com
***************************/

var url = $request.url;
var body = $response.body;

console.log("1============================:" + url);

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

console.log("2============================:" + body);
$done({ body });
