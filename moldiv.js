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
} else if (url.match('\\?fields=')) {
    // 在这里执行包含 '?fields=' 的URL逻辑操作
    // 修改逻辑操作
    var modifiedObj = JSON.parse(body);
    if (modifiedObj && modifiedObj.ios_sdk_dialog_flows && modifiedObj.ios_sdk_dialog_flows.default) {
        modifiedObj.ios_sdk_dialog_flows.default.use_native_flow = true;
    }
    if (modifiedObj && modifiedObj.gdpv4_nux_enabled !== undefined) {
        modifiedObj.gdpv4_nux_enabled = true;
    }
    if (modifiedObj && modifiedObj.suggested_events_setting) {
        var suggestedEvents = JSON.parse(modifiedObj.suggested_events_setting);
        if (suggestedEvents) {
            suggestedEvents.eligible_for_prediction_events = ["fb_mobile_add_to_cart", "fb_mobile_complete_registration", "fb_mobile_initiated_checkout"];
            modifiedObj.suggested_events_setting = JSON.stringify(suggestedEvents);
        }
    }
    body = JSON.stringify(modifiedObj);
} else if (url.match('\\?access_token=')) {
    // 在这里执行包含 '?access_token=' 的URL逻辑操作
    // 修改逻辑操作
     console.log("8============================access_token:1"); 
    var modifiedObj = JSON.parse(body);
    if (modifiedObj && modifiedObj.app_events_config) {
        modifiedObj.app_events_config.default_ate_status = 1;
        modifiedObj.app_events_config.event_collection_enabled = false;
        modifiedObj.app_events_config.advertiser_id_collection_enabled = false;
    }
    body = JSON.stringify(modifiedObj);
} else{
    console.log("9-1============================URL:" + url); 
    console.log("9-2============================body:" + body); 
}
console.log("11------------------------Modified Body:" + body); 
$done({ body });
