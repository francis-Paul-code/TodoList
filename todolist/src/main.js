
var deleteBtn = document.getElementById('deleteBtn');
var input = document.getElementById('todoInput');
var addNewTask = document.getElementById('addBtn');
var taskList = document.getElementById('taskList');
var tList = document.querySelector('#taskList')
const checker = tList.querySelectorAll("input[type = 'checkbox']:checked")


async function saved(){
    fetch('/tasks')
    .then(response => {
       return response.json()
    })
    .then( resData => {
        const data = resData.body;
        let addItem = '';
        for(const value of data){
              const taskName = value.task;
              console.log(data.indexOf(value))
                 addItem += `
                <li class="list-group-item " id="ListItem" style="border:none; border-bottom:1px solid rgba(0, 0, 0, 0.125)!important;">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" id="${taskName}" onclick="selectTask() "name="taskSelect" class="custom-control-input" value="option0" toggle>
                    <label class="custom-control-label" for="${taskName}">${taskName}</label>
                    <span >
                    <img id="${taskName}" src="./root/fontawesomeDesktop/svgs/solid/trash-alt.svg" style="color:red; width:13px; float:right; cursor: pointer;"/>
                    </span>
                </div>
                </li>
                `
               
          }

          taskList.innerHTML = addItem;

    })
}

saved()









async function addTask(){
if(input?.value){
    const data = input?.value;
   // const FD = new FormData();
    //FD.append('task', data);
    // console.log(Array.from(FD));
    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({task : data}),
    };
    const res = await fetch('/api', options) ;
    const json = await res.json();
    console.log(json);
}

    if(input?.value){
            taskList.innerHTML = `
            <li class="list-group-item " id="ListItem" style="border:none; border-bottom:1px solid rgba(0, 0, 0, 0.125)!important;">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" id="${input?.value}" onclick="selectTask() name="taskSelect" class="custom-control-input" value="option0" toggle>
                <label class="custom-control-label" for="${input?.value}">${input?.value}</label>
                <span >
                <img id="singleDelete" src="./root/fontawesomeDesktop/svgs/solid/trash-alt.svg" style="color:red; width:13px; float:right; cursor: pointer;"/>
                </span>
            </div>
            </li>
            ` 
        saved()
        input.value=null;
    }
    else{
        document.getElementById('todoInput').placeholder="*required field*";
        console.log('Error')
    }          
};
addNewTask.addEventListener("click", addTask);



const selectTask = () => {
  if(tList.querySelectorAll("input[type = 'checkbox']:checked") ){
    console.log(checker)
  }else{
    console.log("no")
  }
};



async function deleteTask(){
   
    const options = {
        method: 'DELETE',
    } 
   const res = await fetch('/tasks'  , options)
   const json = await res.json()
   console.log(json)
}

deleteBtn.addEventListener("click", deleteTask())











































//--------------------Omited Code ------------------

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
