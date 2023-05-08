import listObj from './ArrayToDo.js';

const Checked = (taskId) => {
  const toDoList = JSON.parse(localStorage.getItem('data-lis'));
  if (listObj[taskId].completed === false) {
    listObj[taskId].completed = true;
  } else if (listObj[taskId].completed === true) {
    listObj[taskId].completed = false;
  }
  localStorage.setItem('data-lis', JSON.stringify(toDoList));
console.log(taskId);
};

const deleteComplete = () => {
  const CompletedTask = listObj.filter((task) => task.completed === false);
  CompletedTask.forEach((task, index) => {
    task.id = index + 1;
  });
  localStorage.setItem('data-lis', JSON.stringify(CompletedTask));
  window.location.reload();
};

export { Checked, deleteComplete };