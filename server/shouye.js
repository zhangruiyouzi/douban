var express = require("express");
var app = express();
// 3.引用加密模块
var crypto = require("crypto");
// 5.引用mongoose模块
var mongoose = require("mongoose");
// 10.应用post的解析模块
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
// 11.使用body-parser下的解析post功能
var uE = bodyParser.urlencoded({ extended: false });
// 2.解决跨域
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
})
// 7.定义集合 但是注意定义集合的时候不能放到路由内
var dbCollection = mongoose.model("chuichuis", {
    uname: String,
    upwd: String,
    uemail: String,
    utoken: String
})
app.post("/zhuce", uE, function (req, res) {
    // 1.得到前台的数据
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    var uemail = req.body.uemail;
    console.log(uname + "-----" + upwd + "------" + uemail);
    // 4.开始加密
    var md5Pwd = crypto.createHash('md5').update(upwd).digest('hex');
    console.log(md5Pwd);



    // 6.开始连接数据库
    mongoose.connect("mongodb://localhost:27017/bb", { useNewUrlParser: true }, function (err) {
        if (err) {
            console.log("数据库连接失败");
        } else {
            console.log("数据库ok");
            // 8.设置存入的数据
            var userdemo = new dbCollection({
                uname,
                uemail,
                upwd: md5Pwd
            })
            // 9.开始存
            userdemo.save(),
                // 查询数据库
                dbCollection.find({ uname: uname, upwd: md5Pwd, uemail: uemail }).then((ok) => {
                    // ******16******token 2 创建token 用来保存用户的登录信息
                    // jwt.sign(要保存的数据，私钥（一堆越乱越好的乱码）)
                    console.log(ok);
                    var obj = {
                        // loginok: true,
                        uname: uname,//用户名
                        uemail: uemail
                    }
                    var mi = "zkxhcksdjhfkjhweljfku1233";
                    var token = jwt.sign(obj, mi);
                    res.send({ mes: "注册成功", status: 200, linkid: 1, token })
                      // 9.开始存
                      var userdemo = new dbCollection({
                        uname,
                        uemail,
                        upwd: md5Pwd,
                        utoken:token
                    })
                      userdemo.save()
  

                }, (err) => {
                    res.send({ mes: "注册", status: 500, linkid: 0 })
                })
        }
    })
})
app.post("/denglu", uE, function (req, res) {
    var utoken = req.body.utoken;
    var uemail = req.body.uemail;
    console.log(uemail + utoken)
    mongoose.connect("mongodb://localhost:27017/bb", { useNewUrlParser: true }, function (err) {
        if (err) {
            console.log("数据库连接失败");
        } else {
            console.log("数据库ok");
            // dbCollection.find({ uemail:uemail, utoken:utoken }).then((ok) => {
            //     console.log(ok)
            // }
           
            dbCollection.find({ "uemail":uemail},{"utoken":utoken}).then((ok) => {
                // 在查询的时候成功可能有两种结果 第一种查出来值了 第二种没有查出来但是反悔了一个空数组
                console.log(ok);
                if (ok.length > 0) {

              
                    var obj = {
                        // loginok:true,
                        uemail: uemail,  //用户名
                        utoken: utoken
                    }

                    res.send({ mes: "登陆成功", status: 200, linkid: 2 })
                } else if (ok.length == 0) {
                    res.send({ mes: "登陆失败", status: 400, linkid: 3 })
                }
            }, (err) => {
                res.send({ mes: "连接超时请稍后再试", status: 500, linkid: 4 })
            })
        }
    })


})
app.listen(3000);