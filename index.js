var taskContainer = document.getElementById('taskList')

function addTask(){
    const newListItem = document.createElement('li');
    const newInputField= document.createElement('input');
    const newLabel = document.createElement('label');
    newListItem.appendChild(newInputField);
    newListItem.appendChild(newLabel);

    console.log(newListItem);
}