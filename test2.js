/*
MOLDIV 解锁会员

***************************
QuantumultX:

[rewrite_local]
^https://firebaseinstallations\.googleapis\.com/v1/projects/jellybus-apps/installations/* url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/test/main/test2.js
[mitm]
hostname = firebaseinstallations.googleapis.com
**************************/


var url = $request.url;
var body = $response.body;
 console.log("1============================:" + body); 
if (url.indexOf("https://firebaseinstallations.googleapis.com/v1/projects/jellybus-apps/installations/") != -1) {
    var modifiedData = {
        {
  "refreshToken" : "3_AS3qfwJmGhPk5ATRGQ98mV8h-w-_jQ7l-LkNzfZKFOr6SDxFL_7qlgvq6cDFxYhyN3ejh8o0qfXGcmF2-J8ywpVMy-KTCGy87xbKF-H3kt_5u7w",
  "fid" : "ceW0voFb0Uoqsl5He_mDqi",
  "name" : "projects/932065416488/installations/ceW0voFb0Uoqsl5He_mDqi",
  "authToken" : {
    "token" : "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjE6OTMyMDY1NDE2NDg4Omlvczo1MDI5MmQ2MzVkZGE4ZGY1ZGYyYzFkIiwiZXhwIjoxNjk2NDk1NTgwLCJmaWQiOiJjZVcwdm9GYjBVb3FzbDVIZV9tRHFpIiwicHJvamVjdE51bWJlciI6OTMyMDY1NDE2NDg4fQ.AB2LPV8wRAIgKgxJCuqWrs7hdFK4AoA1ozTtoksAsR63VxI6DGqKPcgCIFZ7AumG3QJIHoftENKL_3i3dVYSSw8BLatwcEaIXKnh",
    "expiresIn" : "604800s"
  }
}

    };
    
    body = JSON.stringify(modifiedData);
}
 console.log("2============================:" + body); 
$done({ body });
