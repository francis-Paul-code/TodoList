//const  newTask = require('../transactions');
//const loadTask = require('../transactions');


var deleteBtn = document.getElementById('deleteBtn');
var input = document.getElementById('todoInput');
var addNewTask = document.getElementById('addBtn');
var taskList = document.getElementById('taskList');


/*
const saved = JSON.parse(localStorage.getItem('todos')) || []

const loadTodos = ()=>{
    if(saved)
{
    taskList.innerHTML= saved?.map((item, index)=>{
        return `
        <li class="list-group-item " id="ListItem" style="border:none; border-bottom:1px solid rgba(0, 0, 0, 0.125)!important;">
        <div class="custom-control custom-checkbox">
            <input type="checkbox" id="task${index}" name="taskSelect" class="custom-control-input" value="option0" toggle>
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

        saved.push(input?.value)
        console.log(saved)
        localStorage.setItem('todos',JSON.stringify(saved))
        // taskList.innerHTML=todos2.join('')
        
        loadTodos()
        input.value=null;
        }
        else{

            document.getElementById('todoInput').placeholder="*required field*";

            console.log('Error')
        }
}
loadTodos();


*/


const addTask = () => {
    if(input?.value){
            taskList.innerHTML = `
            <li class="list-group-item " id="ListItem" style="border:none; border-bottom:1px solid rgba(0, 0, 0, 0.125)!important;">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" id="task${input?.value}" name="taskSelect" class="custom-control-input" value="option0" toggle>
                <label class="custom-control-label" for="task${input?.value}">${input?.value}</label>
            </div>
            </li>
            ` 
    }
    else{
        document.getElementById('todoInput').placeholder="*required field*";
        console.log('Error')
    }
            const taskName = input?.value;
            module.exports={taskName}
            newTask()



            
}

addNewTask.addEventListener("click", addTask);
