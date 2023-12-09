/*
MOLDIV 解锁会员

***************************
QuantumultX:

[rewrite_local]
^https://planitphoto\.b4a\.io/classes/Purchase$ url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/test.js
[mitm]
hostname = planitphoto.b4a.io
***************************/

var url = $request.url;
var body = $response.body;
console.log("1============================:" + body); 
if (url.indexOf("https://planitphoto.b4a.io/classes/Purchase") != -1) {
    var modifiedData = {
        "results": [
            {
                "objectId": "sDupKySZxx",
                "userID": "7Y9LXJIPdg",
                "order": {
                    "updatedAt": "2023-12-10T00:01:48.949Z",
                    "original_order_no": "202312100001478322",
                    "payment_method": "Wechat",
                    "amount": "19.99",
                    "__type": "Object",
                    "order_date": "2023-12-10 00:01:48",
                    "fee": "0.44",
                    "sku": "model_five_year",
                    "type": "P",
                    "className": "Sale",
                    "app": "Planit China",
                    "objectId": "32wpDGBz3d",
                    "order_no": "202312100001478322",
                    "currency": "USD",
                    "device_model": "HUAWEI NOP-AN00",
                    "createdAt": "2023-12-10T00:01:48.949Z"
                },
                "updatedAt": "2023-12-10T00:03:11.583Z",
                "createdAt": "2023-12-10T00:03:11.583Z"
            }
        ]
    };
    
    body = JSON.stringify(modifiedData);
}
console.log("2============================:" + body); 
$done({ body });
