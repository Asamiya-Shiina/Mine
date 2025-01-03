
var b = document.getElementById("button");
b.addEventListener("click",function(){
   let login = document.getElementById("form").value;
   if(login == "asamiya"){
    window.location.href = "HTML/home.html";
   }
   else if(login == "Asamiya"){
    window.location.href = "HTML/home.html";
   }
   else if(login == ""){
    alert("密码的，我非得给你报一个空指针异常.NullPointerException: 114514");
   }
   else{
    alert("口令错误，请重试！(你是不是偷偷骂我了)");
    console.log("哇塞你居然猜到了，空不好使的话那就试试错的吧，那我就勉为其难的奖励你喽，口令是“Asamiya”。");
   }
})

var tips = document.getElementById("tips");
var c = document.getElementById("close");
c.addEventListener("click",function(){
   tips.remove();
})