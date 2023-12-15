var Inpbox = document.getElementById("input");
var Listitem = document.getElementById("list");
function Add(){
        if(Inpbox.value==''){
        alert('Please enter a task');
    }
    else{
            let li= document.createElement("li");
            li.innerHTML=Inpbox.value;
            Listitem.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
    Inpbox.value="";
    save();
} 

Listitem.addEventListener("click",function(a){
    if(a.target.tagName == "LI"){
        a.target.classList.toggle("checked");
        save();
    }
    else if(a.target.tagName=="SPAN"){
        a.target.parentElement.remove();
        save();
    }
}, false);

function save(){
    localStorage.setItem("info",Listitem.innerHTML)
}
function show()
{
    Listitem.innerHTML=localStorage.getItem("info");
}
show()