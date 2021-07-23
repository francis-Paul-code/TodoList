/*var taskContainer = document.getElementById('taskList')

function addTask(){
    const newListItem = document.createElement('li');
    const newInputField= document.createElement('input');
    const newLabel = document.createElement('label');
    newListItem.appendChild(newInputField);
    newListItem.appendChild(newLabel);

    console.log(newListItem);
}*/

/*
const addTask = () => {
 
var input = document.getElementById("todoInput");
    var idNumber = 0;   
    ++idNumber;

    if(input && input.value ){
   
    var taskList = document.getElementById("taskList")
    var listItem = document.getElementById("ListItem");
    var newListItem = listItem.cloneNode(true);
    var change = newListItem.children;
    // var node = change[0].lastElementChild.innerHTML = ""+input.value+"";
    change[0].firstElementChild.id = "task"+ idNumber +"";
    change[0].firstElementChild.setAttribute("value", "option"+ idNumber +"");
    change[0].lastElementChild.setAttribute("for", "task"+ idNumber +"");
    change[0].lastElementChild.innerHTML = ""+input.value+"";
    taskList.appendChild(newListItem);
    
    localStorage.setItem("newTask", ""+input.value+"")


   }
   else{
       document.getElementById('todoInput').placeholder="*required field*";

    console.log('no')
   }
}
*/

var input = document.getElementById('todoInput');
var addNewTask = document.getElementById('addBtn');
var taskList = document.getElementById('taskList');
var addNumber = 0;
++addNumber;
var storedTask = localStorage.getItem("task"+addNumber+"");

const addTask = () => {

 if (input && input.value){
    
//Create New HTML Elements for the New Task
    var newListItem = document.createElement('li');
    var newInputField= document.createElement('input');
    var newLabel = document.createElement('label');
    var newDiv = document.createElement('div');
//Rearrange new Elements 
    newListItem.appendChild(newDiv);
    newDiv.appendChild(newInputField);
    newDiv.appendChild(newLabel);
    taskList.appendChild(newListItem);
//Customize new Elements to follow bootstrap classes
    newLabel.innerHTML=""+ input.value +""
    newListItem.setAttribute("class", "list-group-item ");
    newListItem.setAttribute("style", "border:none; border-bottom:1px solid rgba(0, 0, 0, 0.125)!important;");
    newDiv.setAttribute("class", "custom-control custom-radio");
    newInputField.setAttribute("type", "checkbox");
    newInputField.setAttribute("class", "custom-control-input");
    newInputField.setAttribute("name", "taskSelect")
    newInputField.setAttribute("value", "option"+addNumber+"")
    newInputField.id ="task"+addNumber +"";
    newLabel.setAttribute("for", "task"+addNumber +"" )
    newLabel.setAttribute("class", "custom-control-label")

   
//Save to Localstorage
    const saveToLocalStorage = () => {
        localStorage.setItem("task"+addNumber+"", ""+newLabel.textContent+"" )
    }
    saveToLocalStorage();
//Clear Input Field
    input.value=null;


    console.log("success");
}
else{
    document.getElementById('todoInput').placeholder="*required field*";

    console.log('Error')
}

};

if(storedTask){
        
    //Create New HTML Elements for the New Task
    var newListItem = document.createElement('li');
    var newInputField= document.createElement('input');
    var newLabel = document.createElement('label');
    var newDiv = document.createElement('div');
    //Rearrange new Elements 
    newListItem.appendChild(newDiv);
    newDiv.appendChild(newInputField);
    newDiv.appendChild(newLabel);
    taskList.appendChild(newListItem);
    //Customize new Elements to follow bootstrap classes
    newLabel.innerHTML=""+ storedTask +""
    newListItem.setAttribute("class", "list-group-item ");
    newListItem.setAttribute("style", "border:none; border-bottom:1px solid rgba(0, 0, 0, 0.125)!important;");
    newDiv.setAttribute("class", "custom-control custom-radio");
    newInputField.setAttribute("type", "checkbox");
    newInputField.setAttribute("class", "custom-control-input");
    newInputField.setAttribute("name", "taskSelect")
    newInputField.setAttribute("value", "option"+addNumber+"")
    newInputField.id ="task"+addNumber +"";
    newLabel.setAttribute("for", "task"+addNumber +"" )
    newLabel.setAttribute("class", "custom-control-label")
}