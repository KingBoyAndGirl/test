/*

***************************
QuantumultX:

[rewrite_local]
^https://planitphoto\.b4a\.io/classes/Purchase$ url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/qs.js
[mitm]
hostname = planitphoto.b4a.io
***************************/

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

function generateOrderNo() {
    const now = new Date();
    now.setDate(now.getDate() - 1); // 减去一天

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

    let orderNo = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;

    // 如果当前 orderNo 的长度小于 17，添加随机数字
    while (orderNo.length < 17) {
        orderNo += Math.floor(Math.random() * 10);
    }

    return {
        orderNo,
        updatedAt: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`,
        createdAt: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`
    };
}

var url = $request.url;
var body = $response.body;

if (url.indexOf("https://planitphoto.b4a.io/classes/Purchase") != -1) {
    var orderNoValue = generateOrderNo().orderNo;  // 生成 order_no 的值
    var modifiedData = {
        "results": [
            {
                "objectId": generateRandomString(10),
                "userID": generateRandomString(10),
                "order": {
                    ...generateOrderNo(),
                    "original_order_no": orderNoValue,
                    "order_no": orderNoValue,
                    "payment_method": "Wechat",
                    "amount": "19.99",
                    "__type": "Object",
                    "fee": "0.44",
                    "sku": "model_five_year",
                    "type": "P",
                    "className": "Sale",
                    "app": "Planit China",
                    "device_model": "HUAWEI NOP-AN00"
                },
                "updatedAt": generateOrderNo().updatedAt,
                "createdAt": generateOrderNo().createdAt
            },
            {
                "objectId": generateRandomString(10),
                "userID": generateRandomString(10),
                "order": {
                    ...generateOrderNo(),
                    "original_order_no": orderNoValue,
                    "order_no": orderNoValue,
                    "payment_method": "Wechat",
                    "amount": "99.99",
                    "__type": "Object",
                    "fee": "2.20",
                    "sku": "explorer_five_year",
                    "type": "P",
                    "className": "Sale",
                    "app": "Planit China",
                    "device_model": "HUAWEI NOP-AN00"
                },
                "updatedAt": generateOrderNo().updatedAt,
                "createdAt": generateOrderNo().createdAt
            }
        ]
    };

    body = JSON.stringify(modifiedData);
}

console.log("2============================:" + body);
$done({ body });
