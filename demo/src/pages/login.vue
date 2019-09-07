<template>
  <div>
    <h1 class="title">
      <a href>取消</a> 登录豆瓣
    </h1>
    <div class="form">
      <input type="text" name="email" placeholder="邮箱" />
      <div class="pwd">
        <input
          :type="pwdType"
          @on-change="userPassword"
          maxlength="18"
          v-model="userPassword"
          name="token"
          placeholder="token"
        />
        <span id="pwd">
          <img :src="seen?openeye:nopeneye" class="eye" @click="changeType()" />
        </span>
      </div>
      <button id="btns" type="submit" @click="logins()">登录</button>
    </div>
    <div class="footer">
      <div class="agreement">使用其他方式登录 & 找回密码</div>
      <div class="btn">
        <router-link to="register">注册豆瓣帐号</router-link>
        <a href>下载豆瓣APP</a>
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
      userPassword: ""
    };
  },
  methods: {
    changeType() {
      this.pwdType = this.pwdType === "password" ? "text" : "password";
      this.seen = !this.seen; //小眼睛的变化
    },
    logins() {
      // var ubtns = document.getElementById("btns");
      // ubtns.style.backgroundColor = "#eeeeee";
      // ubtns.style.borderColor = "#eeeeee";
      // ubtns.innerHTML = "正在登录...";
      // var uemail = document.getElementsByName("email")[0].value;
      // var utoken = document.getElementsByName("token")[0].value;
      // console.log(utoken + uemail);
      // let param = new URLSearchParams();
      // param.append("uemail", uemail);
      // param.append("utoken", utoken);
      // //  param.append("uname", uname);

      // this.axios({
      //   method: "post",
      //   url: "http://localhost:3000/denglu",
      //   data: param
      // }).then(ok => {
      //   console.log(ok);
      //   if (ok.data.linkid == 2) {
      //     //  this.$router.push({ path: '/audios' })
      //     alert("登录成功 ！");
      //   } else {
      //     alert("不好意思当前页面仅对会员开放请您登录后访问");
      //   }
      // });
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #42bd56;
}
h1 {
  height: 0.5rem;
  margin: 0 0 0.1rem;
  padding: 0 0.18rem;
  line-height: 0.45rem;
  background: #fff;
  border-bottom: 0.01rem solid #eee;
  text-align: center;
  font-size: 0.18rem;
  font-weight: 700;
}
.title a {
  position: absolute;
  left: 0.18rem;
  top: 0;

  font-size: 0.15rem;
  font-weight: 400;
}
.form {
  padding: 0.2rem 0.15rem;
  font-size: 0;
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
  background: #17aa52;
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