var Mock=require("mockjs");
// 配置数据请求
Mock.mock("/shou","get",require("./json/shouye.json"))
Mock.mock("/dian","get",require("./json/movie.json"))
Mock.mock("/xiaozu","get",require("./json/groups.json"))
Mock.mock("/book","get",require("./json/book.json"))
Mock.mock("/qita","get",require("./json/other.json"))