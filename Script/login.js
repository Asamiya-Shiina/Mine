var b = document.getElementById("button");
b.addEventListener("click",function(){
   let login = document.getElementById("form").value;
   if(login == "asamiya"){
    window.location.href = "../HTML/home.html";
   }
   else if(login == "Asamiya"){
    window.location.href = "../HTML/home.html";
   }
   else if(login == ""){
    alert("密码的，我非得给你报一个空指针异常");
   }
   else{
    alert("口令错误，请重试！");
    console.log("哇塞你居然按F12看控制台，那我就勉为其难的告诉你口令是“Asamiya”吧");
   }
})