/*
MOLDIV 解锁会员

***************************
QuantumultX:

[rewrite_local]
^https://firebase-settings\.crashlytics\.com/spi/v2/platforms/ios/gmp/.* url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/moldiv.js

[mitm]
hostname = firebase-settings.crashlytics.com
**************************/


var url = $request.url;
var body = $response.body;
 console.log("1============================:" + body); 
if (url.indexOf("https://firebase-settings.crashlytics.com/spi/v2/platforms/ios/gmp/") != -1) {
    var modifiedData = {
        "fabric" : {
            "org_id" : "60379b6fb1f49ada1139998a",
            "bundle_id" : "com.jellybus.moldiv"
        },
        "cache_duration" : 86400,
        "settings_version" : 3,
        "app" : {
            "status" : "activated",
            "update_required" : false,
            "report_upload_variant" : 2
        },
        "on_demand_upload_rate_per_minute" : 10,
        "on_demand_backoff_base" : 1.2,
        "on_demand_backoff_step_duration_seconds" : 60,
        "features" : {
            "collect_reports" : true,
            "push_enabled" : false,
            "collect_anrs" : true,
            "collect_logged_exceptions" : true,
            "collect_analytics" : false,
            "collect_metric_kit" : false,
            "collect_build_ids" : true,
            "prompt_enabled" : false,
            "firebase_crashlytics_enabled" : true
        },
        "app_quality" : {
            "session_timeout_seconds" : 1800,
            "sessions_enabled" : true,
            "sampling_rate" : 1
        }
    };
    
    body = JSON.stringify(modifiedData);
}
 console.log("2============================:" + body); 
$done({ body });
