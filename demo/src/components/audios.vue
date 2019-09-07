<template>
    <div class="context">
        
      <div class="card">
          <div class="top">
              <img src="../../static/img/dou.png" alt="">
              <span class="title"><strong>豆瓣</strong>写了日记</span>
              <di class="time">2017-03-01 19:30:41</di>
          </div>
          <div class="bottom">
          <div class="article">
              <div class="tit"> 豆瓣App 4.12.0 主要更新</div>
              <div class="content">.可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</div>  
            
          </div>
          <div class="info">
                <span class="btn zan"><i>4</i></span>
                <span class="btn talk"><i>0</i></span>
                <span class="btn squre"><i>1</i></span>
                <span class="btn slips"></span>
            </div>
            </div>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.card{
    position: relative;
    margin: .2rem .18rem;
    /* box-sizing: border-box; */
    height: 2.4rem;
    border-bottom: .01rem solid #d8d8d8;
    
  
    
}
.top{
    font-size: 0;
}
img{
        width: .5rem;
    height: .5rem;
    margin-right: .1rem;
    border-radius: 50%;
}
.title{
    position: absolute;
    top:0.1rem;
    font-size: .17rem;
    line-height: 1;
    color: #494949;
}
.time{
    font-size: .14rem;
    margin-top: .06rem;
    line-height: 1;
    color: #aaa;
}
.bottom{
      position: absolute;
    left:.6rem;
}
.article{
    
    margin: .1rem 0 .2rem;
    padding: .15rem;
    border-radius: .02rem;
    margin-right: .4rem;
    border: .01rem solid #d8d8d8;
}
.tit{
    font-size: .17rem;
    font-weight: 500;
    line-height: 1.4;
    color: #494949;
    margin-bottom: .05rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.content{
  
    font-size: .12rem;
    line-height: .2rem;
    color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
}
.info{
    font-size: 0;
    overflow: hidden;
    position: absolute;
}
.btn{
    margin-right: .3rem;
    display: inline-block;
      height: .24rem;
}
.btn i{
    position: absolute;
    top:0; 
    line-height: .24rem;
    font-size: .14rem;
    font-style: normal;
    color: #ccc;
}
.zan:before{
    content:url("../../static/img/zan.svg");
    display: inline-block;
       width: .24rem;
    height: .24rem;   
}
.talk:before{
    content:url("../../static/img/ping.svg");
    width: .24rem;
    height: .24rem;
    display: inline-block;
}

.squre:before{
    content:url("../../static/img/shua.svg");
    width: .24rem;
    height: .24rem;
    display: inline-block;
}

.slips{
    background:url("../../static/img/slips.svg") no-repeat center center;
    width: .24rem;
    height: .24rem;
    margin-left: .6rem;
    display: inline-block;
}

</style> 