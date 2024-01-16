/*

***************************
QuantumultX:

[rewrite_local]
^https:\//aiqicha.baidu.com\/usercenter\/getvipinfoajax url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/aqc.js
[mitm]
hostname = aiqicha.baidu.com
***************************/


var url = $request.url;
var body = $response.body;


var modifiedData = {
  "status" : 0,
  "msg" : "",
  "data" : {
    "vip" : 0,
    "svip" : {
      "status" : 1,
      "startTime" : "2024-01-16",
      "endTime" : "2099-01-22",
      "residueDays" : 6
    },
    "consume" : 0,
    "icp" : {
      "status" : 1,
      "startTime" : "2024-01-16",
      "endTime" : "2099-01-22"
    },
    "time" : "2023-12-30",
    "asset" : {
      "status" : 1,
      "startTime" : "2024-01-16",
      "endTime" : "2099-01-22"
    },
    "isRenewSuc" : 0,
    "isHitOptimize" : 0,
    "yuqing_junior" : {
      "status" : 0,
      "startTime" : "",
      "endTime" : ""
    },
    "comPackage" : {
      "status" : 0,
      "startTime" : "",
      "endTime" : ""
    },
    "yuqing_senior" : {
      "status" : 0,
      "startTime" : "",
      "endTime" : ""
    },
    "signInStaus" : 0,
    "isDisplayPop" : 0
  }
};

body = JSON.stringify(modifiedData);


console.log("2============================:" + body);
$done({ body });
