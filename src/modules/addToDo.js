import listObj from './ArrayToDo.js';
import saveData from './savaDataList.js';
import createList from './RenderTask.js';

const inputItem = document.querySelector('.add-item');

const addTask = () => {
  const newObj = {
    id: listObj.length + 1,
    completed: false,
    description: inputItem.value,
  };
  listObj.push(newObj);
  saveData();
  inputItem.value = '';
  createList();
};

export default addTask;