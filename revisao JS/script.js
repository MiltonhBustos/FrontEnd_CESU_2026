const taskImput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask(){
  const textInput = taskImput.value.trim();
  if(taskImput.value.trim() !== ''){
    const newTask = document.createElement('li');
    
    newTask.innerHTML = `<span>${textInput}</span>
    
      <button onclick="editar()">Editar</button>
      <button onclick="remover(this)">Remover</button>
      <button onclick="concluir(this)">Concluir</button>`
      
    taskList.appendChild(newTask);
  }
  
}
function editar(){
    
  
  }
  
  function remover(button){
    
    const itemToRemove = button.parentElement;
    taskList.removeChild(itemToRemove);
  }
  
  function concluir(button){
    
    const itemToComplete = button.parentElement;
    itemToComplete.classList.toggle = 'completed';
  }