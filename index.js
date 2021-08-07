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
var deleteBtn = document.getElementById('deleteBtn');
var input = document.getElementById('todoInput');
var addNewTask = document.getElementById('addBtn');
var taskList = document.getElementById('taskList');
//const saved = JSON.parse(localStorage.getItem('todo')) || []


/*
const addTask = () => {

 if (input?.value){
    
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
    newInputField.setAttribute("value", `option `)
    newInputField.id =`${input?.value}`;
    newLabel.setAttribute("for", `${input?.value}`)
    newLabel.setAttribute("class", "custom-control-label")
    saved.push(input?.value)
   
//Save to Localstorage
    const saveToLocalStorage = (index) => {
        localStorage.setItem('todos',JSON.stringify(saved))
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

addNewTask.addEventListener("click", addTask);

 //Retrieve STored Task
 
const loadTodo = () =>{
     
    if(saved){
            
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

        newLabel.innerHTML = saved?.map((item, index)=>{
            return `
              ${item}
            `
        }).join('');
        newListItem.setAttribute("class", "list-group-item ");
        newListItem.setAttribute("style", "border:none; border-bottom:1px solid rgba(0, 0, 0, 0.125)!important;");
        newDiv.setAttribute("class", "custom-control custom-radio");
        newInputField.setAttribute("type", "checkbox");
        newInputField.setAttribute("class", "custom-control-input");
        newInputField.setAttribute("name", "taskSelect")
        newInputField.setAttribute("value", "option ")
        newInputField.id =`${input.value}`;
        newLabel.setAttribute("for", `${input?.value}` )
        newLabel.setAttribute("class", "custom-control-label")
    }



    
}
 
loadTodo();


//  Deleting a Task

// var selector = document.getElementById("task ");

// const removeTask = () =>{
//   if(selector.checked == true){
//     console.log("success")
//   }else{
//       console.log("no")
//   }
// };

// deleteBtn.addEventListener( "click" , removeTask );

*/



const selected = []
const saved = JSON.parse(localStorage.getItem('todos')) || []
const loadTodos = ()=>{
    if(saved)
{
    taskList.innerHTML= saved?.map((item, index)=>{
        return `<li class="list-group-item " id="ListItem" style="border:none; border-bottom:1px solid rgba(0, 0, 0, 0.125)!important;">
        <div class="custom-control custom-radio">
            <input type="checkbox" onclick="selectedTask(${index})" id="task${index}" name="taskSelect" class="custom-control-input" value="option0" toggle>
            <label class="custom-control-label" for="task${index}">${item}</label>
        </div>
        </li>
        `
            }).join('')
}  else{
}
}
const addTask = () => {
    if(input?.value){
    //     todos.push(`<li class="list-group-item " id="ListItem" style="border:none; border-bottom:1px solid rgba(0, 0, 0, 0.125)!important;">
    //     <div class="custom-control custom-radio">
    //         <input type="checkbox" id="${input?.value}" name="taskSelect" class="custom-control-input" value="option0" toggle>
    //         <label class="custom-control-label" for="${input?.value}">${input?.value}</label>
    //     </div>
    // </li>
    // `)
    saved.push(input?.value)
    console.log(saved)
    localStorage.setItem('todos',JSON.stringify(saved))
    // taskList.innerHTML=todos2.join('')
    loadTodos()
    }else{

        document.getElementById('todoInput').placeholder="*required field*";

        console.log('Error')
    }
}
const selectedTask = (val)=>{
    const y = saved.filter((item)=>item!==saved[val])
    console.log('yyy',y)
    localStorage.setItem('todos',JSON.stringify(y))
    loadTodos()
}
loadTodos();
addNewTask.addEventListener("click", addTask);

