const Mock = require('mockjs');
const _ = require('lodash');

module.exports=function(){
    return {
        showinfo:_.times(10,function(n){
            return {
                id:n,
                img:Mock.Random.image('180x150', Mock.Random.hex()),
                title:Mock.Random.ctitle(),
                author:Mock.Random.cname(),
                text:Mock.Random.cparagraph()
            }
        }),
        news:_.times(100,function(n){
            return {
                id:n,
                title:Mock.Random.ctitle(),
                author:Mock.Random.cname(),
                text:Mock.Random.cparagraph(),
                time:Mock.Random.date(),
                img:Mock.Random.image('336x280', Mock.Random.hex()),
            }
        }),
    }
}
