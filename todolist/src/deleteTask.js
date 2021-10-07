
var taskList = document.getElementById('taskList');
var tList = document.querySelector('#taskList')
const checkbox = tList.querySelectorAll("input[name = 'taskSelect']:checked")
var deleteBtn = document.getElementById('deleteBtn');





async function getSelectedCheckboxValues(name) {
   const check = tList.querySelectorAll('input[type="checkbox"]:checked')
   let values = [];
   check.forEach((checkvalue) =>{
        values.push(checkvalue.value);
   })
    

   const options = {
    method:"DELETE",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({task:values}),
};
const res = await fetch('/tasks', options) ;
const json = await res.json();
console.log(json);
    console.log(values)
    saved()
}

const btn = deleteBtn;
btn.addEventListener('click', getSelectedCheckboxValues)






function deleteSingleTask(){
    
}