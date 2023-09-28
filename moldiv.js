/*
MOLDIV 解锁会员

***************************
QuantumultX:

[rewrite_local]
^https://graph\.facebook\.com/v(\d+\.\d+)/(\d+/mobile_sdk_gk\?fields=gatekeepers&format=json&include_headers=false&os_version=17\.0&platform=ios&sdk=ios&sdk_version=\d+\.\d+\.\d+) url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/moldiv.js

[mitm]
hostname = graph.facebook.com
**************************/

var body = $response.body;
var obj = JSON.parse(body);

const ad = '/mobile_sdk_gk';
const vip = '/feawfewaf';

if (url.indexOf(ad) != -1) {
	if (obj && obj.data && Array.isArray(obj.data)) {
        var gatekeepers = obj.data[0].gatekeepers;
        if (gatekeepers && Array.isArray(gatekeepers)) {
            for (var i = 0; i < gatekeepers.length; i++) {
                gatekeepers[i].value = true;
            }
        }
        body = JSON.stringify(obj);
    }
}
if (url.indexOf(vip) != -1) {
	
}
$notify("Modified Body", "", body); // 发送通知显示修改后的
console.log("Modified Body:", body); 
$done({ body });
