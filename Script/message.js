var b = document.getElementById("button");
b.addEventListener("click",function(){
   let login = document.getElementById("form").value;
   let div = document.createElement("div");
   let p1 = document.createElement("p");
   let v = document.createTextNode(login);
   console.log(login);
   p1.appendChild(v);
   div.appendChild(p1);
   let lyb = document.getElementById("lyb");
   lyb.appendChild(div);
   alert("留言成功！");
})