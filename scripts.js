const InputBox=document.getElementById("inputBox");
const listContainer=document.getElementById("list_container");

//for adding a new task
function addTask(){
    if(InputBox.value===''){
        alert("you must write something.");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=InputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    InputBox.value="";
    saveData();
}

//for checking/unchecking and deleting
listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//for saving 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//for displaying everytime website is reloaded
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask()