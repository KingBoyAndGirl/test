/******************************

[rewrite_local]
# > 一甜相机解锁会员
^https?:\/\/api-m2u\.kuaishou\.com\/api-server\/api\/v2\/vip\/vipUserInfo url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/1Tian.js

[mitm] 
hostname = api-m2u.kuaishou.com

*******************************/

var body = $response.body;
var objc = JSON.parse(body);

objc = {
  "status" : 0,
  "data" : {
    "vipUserRedeemLogInfoList" : [

    ],
    "didProductInfo" : [

    ],
    "uidSubscribeType" : 0,
    "vipUserProductInfo" : {
      "expireTime" : 2605102594423,
      "renewFail" : false,
      "materialList" : [

      ],
      "vip" : true,
      "myProducts" : [

      ],
      "trailExpireNotify" : 0,
      "promotionTextType" : 1,
      "trailStatus" : 0,
      "subscribeType" : 0,
      "isInExpireRenewDuration" : 0,
      "reBuyPromotionText" : null,
      "promotionText" : "首充特惠，会员低至每日一毛"
    },
    "uidProductInfo" : [

    ],
    "userType" : 0,
    "didSubscribeType" : 0
  },
  "message" : "SUCCESS",
  "host" : "public-bjdy-rs9-kce-node412.idczw.hb1.kwaidc.com",
  "extraInfo" : {

  },
  "serverTm" : 1723517806413,
  "sign" : "O5vS8VYNMhsAn6JLzy7FNbZ2yeYXf3nNCewijVh13AJFcIFFM/dpg4hDryTwE2ax1TUcdYK1hgyRedLXouCffnqoS0lf9Qyy89OxWjH6Rv9J5S1L0mCHfvIIEKU0GdzBS+cws8rgSUljTWEYuMCQc7S89TTvRs3S4GnzkD+sY3pJZM9UpWOwIJBk6Y5uiXVzchqKE35dx/FQx7BOY9K75FAVQV6PIXgi+mXdmDVMhzvzzYQsqgr53p00fiPVj9+BECStFQIzoORwJ+UqFd5+IOz29hExgPTguHrjl3Gdufj9xUzjWNE9+pj7Ae8a/K0PwADMaqovm14wRVy4yJnm9mjK9iMgFtamUcjSf6nHyX6K3+VU7QqUiyqHYfYGgQQx6vFylvV7ZPiMOyVDr6fvhSKwALDOrGLfDO49rsJwJqE6QtvXdYlZ9kd/CS7k/UHS9lDy5q1B7vi0jdQ1FSqrAxSEh89nU9lkqRvVQHPi36o21a0mvKjOtpnNmiP76yqDOqMOTxsMD2m85xhN82lXePAufdwmQ9jM+h+3yFdBax9ZYNrAbMm55T3IW3ThIP9M"
};

body = JSON.stringify(objc);
$done({ 
    body 
});
