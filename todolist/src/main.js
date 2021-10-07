
var deleteBtn = document.getElementById('deleteBtn');
var input = document.getElementById('todoInput');
var addNewTask = document.getElementById('addBtn');
var taskList = document.getElementById('taskList');

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
              const taskId = value.id;
             // console.log(data.indexOf(value))
                 addItem += `
                <li class="list-group-item " id="ListItem" style="border:none; border-bottom:1px solid rgba(0, 0, 0, 0.125)!important;">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" id="${taskId}" "name="taskSelect" class="custom-control-input" value="${taskId}" toggle>
                    <label class="custom-control-label" for="${taskId}">${taskName}</label>
                    <span >
                    <img id="${taskId}" src="./root/fontawesomeDesktop/svgs/solid/trash-alt.svg" style="color:red; width:13px; float:right; cursor: pointer;"/>
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

        saved()
        input.value=null;
    }
    else{
        document.getElementById('todoInput').placeholder="*required field*";
        console.log('Error')
    }          
};
addNewTask.addEventListener("click", addTask);



// const selectTask = (e) => {
//   if(checker !== null ){
//       const ids = tList.querySelectorAll(`input[id=${e}]:checked'`)
//     console.log(ids)
//   }else{
//     console.log("no")
//   }
// };



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
