/*

***************************
QuantumultX:

[rewrite_local]
^https:\//appc.qixin.com\/v4\/vip\/getAllVipInfo url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/qxb.js
[mitm]
hostname = appc.qixin.com
***************************/


var url = $request.url;
var body = $response.body;

console.log("1============================:" + body);
var modifiedData = {
  "status" : "1",
  "message" : "操作成功",
  "data" : {
    "vipList" : [
      {
        "valid" : true,
        "end" : "2024-01-20",
        "type" : "vip",
        "name" : "启信宝VIP",
        "start" : "2099-01-17"
      }
    ]
  }
};

body = JSON.stringify(modifiedData);


console.log("2============================:" + body);
$done({ body });
