var email     = require("emailjs");
var config    = require("./config.json");
var server     = email.server.connect({
   user:     config.email,         //要用来发送邮件的邮箱
   password: config.pass,         //要用来发送邮件的邮箱密码
   host:     config.host,         //你的邮箱对应的服务器地址, 地址可以参考： http://wenku.baidu.com/link?url=PjSYkSnZKY3iuwBeYUT0y-NNifQFV6U3H6WH5Qolr-Jc574avdOSM546UcW2LLqtE1RJXHmdnTVjpjQYZ7miku1IYP5PsGAZx-Ebg5INTMm
   ssl:     config.ssl || true        //是否采用ssl方式的登录（ssl一种安全套接字）
});

// 邮件的内容(纯文本）
server.send({
   text:    "我正在测试邮件发送功能",                            //内容（文字）
   from:    "james long",                                        //发件人
   to:      "1746212033@qq.com",                                 //接收人列表
   cc:      "1746212033@qq.com",                                 //抄送，
   subject: "应用测试邮件"                                           //邮件主题（可以看作是邮件标题
}, function(err, message) { 

   console.log(err || message.text); }

);
