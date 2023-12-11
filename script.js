const inputText = document.getElementById("input-text");
const todoList = document.getElementById("todo-list");

function addBtn(){
    if(inputText.value===""){alert('You must write something');}
    else{
        let addLi = document.createElement("li");
        addLi.innerHTML = inputText.value;
        todoList.appendChild(addLi);
        
        let addSpan = document.createElement("span");
        addSpan.innerHTML = "\u00d7";
        addLi.appendChild(addSpan);
    }
    inputText.value="";
    saveData();
}

todoList.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        if(confirm("REMOVE ?")){
            e.target.parentElement.remove();
            saveData();
        }
    }
}, false);

function saveData(){
    localStorage.setItem("todo", todoList.innerHTML);
}
function showTask(){
    todoList.innerHTML = localStorage.getItem("todo");
}
showTask();