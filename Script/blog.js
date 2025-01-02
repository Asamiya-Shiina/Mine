//我的第一次学习javaScript,嘻嘻
console.log('偷偷打开控制台的你一定是一个电脑大神吧 ./笑');

//start!!!!!!
alert('欢迎来到我的blog！！！');
//鼠标进入steam
var icon = document.getElementById("steamicon");
icon.addEventListener("mouseenter",function(){
    let steamtitle = document.createElement("div");     //创建一个div
    let title = document.createElement("steamtitle");   //设置一个字体
    let text = document.createTextNode("My Steam");     //文字
    title.appendChild(text);
    steamtitle.appendChild(title);                      //把<steamtitle>My Steam放进div里并设置样式
    let id = document.createAttribute("id");
    id.value = "steam_title";
    steamtitle.setAttributeNode(id);
    let c = document.getElementsByClassName("c")[0];
    c.appendChild(steamtitle);                          //让div出现
})

//离开消失
icon.addEventListener("mouseleave",function(){
    let c = document.getElementsByClassName("c")[0];
    c.removeChild(c.lastChild);
})
