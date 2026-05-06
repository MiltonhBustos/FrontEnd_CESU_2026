const taskImput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask(){
  const textInput = taskImput.value.trim();
  if(taskImput.value.trim() !== ''){
    const newTask = document.createElement('li');
    newTask.innerHTML = `<spam> ${textInput} </spam>`;
    taskList.appendChild(newTask);
  }
}