<template>
  <div>
    <div class="one" v-show="bool">
      <h1 class="title">欢迎加入豆瓣</h1>
      <div class="form">
        <input type="text" name="email" placeholder="邮箱" />
        <div class="pwd">
          <input
            :type="pwdType"
            placeholder="请输入新密码"
            @on-change="userPassword"
            maxlength="18"
            v-model="userPassword"
            name="pwd"
          />
          <span id="pwd">
            <img :src="seen?openeye:nopeneye" class="eye" @click="changeType()" />
          </span>
        </div>
        <input type="text" name="uname" placeholder="用户名" />
        <button type="submit" id="btns" @click="fun()">立即注册</button>
      </div>
      <div class="footer">
        <div class="agreement">点击「注册」代表你已阅读并同意用户使用协议</div>
        <div class="btn">下载豆瓣APP</div>
      </div>
    </div>
    <div class="second" v-show="!bool">
      <div class="form">
        <h1 class="title">注册成功</h1>
        <div class="agreement toke">请复制以下Token进行登录</div>
        <input type="text" name="token" placeholder="token" id="token" />
        <button type="submit" id="btn" @click="login()">去登录</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      seen: "",
      pwdType: "password", // 密码类型
      openeye: require("../../static/img/eyeg.png"), //图片地址
      nopeneye: require("../../static/img/eye.png"), //图片地址
      userPassword: "",
      bool: true
    };
  },
  methods: {
    changeType() {
      this.pwdType = this.pwdType === "password" ? "text" : "password";
      this.seen = !this.seen; //小眼睛的变化
    },
    login() {
      this.$router.push({ path: "/audios" });
    },
    fun() {
      // var uname = document.getElementsByName("uname")[0].value;
      // var upwd = document.getElementsByName("pwd")[0].value;
      // var uemail = document.getElementsByName("email")[0].value;
      // var ubtns = document.getElementById("btns");
      // ubtns.style.backgroundColor = "#eeeeee";
      // ubtns.style.borderColor = "#eeeeee";
      // ubtns.innerHTML = "正在提交...";
      // console.log(uname + upwd + uemail);
      // let param = new URLSearchParams();
      // param.append("uname", uname);
      // param.append("uemail", uemail);
      // param.append("upwd", upwd);
      // this.axios({
      //   method: "post",
      //   url: "http://localhost:3000/zhuce",
      //   data: param
      // }).then(ok => {
      //   console.log(ok);
      //   if (ok.data.linkid == 1) {
      //     // 保存后台发送过来的token码
      //     window.localStorage.setItem("token", ok.data.token);
      //     console.log(ok.data.token);
      //     window.localStorage.setItem("uname", uname);
      //     window.localStorage.setItem("uemail", uemail);
      //     this.bool = !this.bool;
      //     //  location.href="shouye.html"
      //     // alert("注册成功 ");
      //     var utoken = document.getElementById("token");
      //     utoken.value = ok.data.token;
      //   } else {
      //     alert("注册失败");
      //   }
      // });
    }
  }
};
</script>
<style scoped>
h1 {
  margin: 10% 0 9%;
  font-size: 0.4rem;
  font-weight: 300;
  color: #42bd56;
  text-align: center;
}
.form {
  padding: 0.2rem 0.15rem;
  font-size: 0;
}
.toke {
  float: left;
}
input {
  width: 100%;
  height: 0.55rem;
  padding: 0 0.08rem;
  box-sizing: border-box;
  font-size: 0.15rem;
  background: #fff;
  border: 0.01rem solid #ccc;
  border-top-left-radius: 0.03rem;
  border-top-right-radius: 0.03rem;
  outline: 0;
}
input::-webkit-input-placeholder {
  color: #ccc;
}
.pwd {
  position: relative;
}
.eye {
  position: absolute;
  right: 0.1rem;
  top: 0.13rem;
  display: block;
  height: 0.28rem;
  width: 0.28rem;
  z-index: 1;
}
button {
  cursor: pointer;
  width: 100%;
  padding: 0.12rem 0.26rem;
  margin-top: 0.1rem;
  font-size: 0.17rem;
  text-align: center;
  color: #fff;
  background: #42bd56;
  border: 0.01rem solid #17aa52;
  border-radius: 0.03rem;
}
.agreement {
  font-size: 0.14rem;
  color: #aaa;
  text-align: center;
}
.btn {
  font-size: 0.13rem;
  color: #42bd56;
  text-align: center;
  margin-top: 0.5rem;
}
</style>