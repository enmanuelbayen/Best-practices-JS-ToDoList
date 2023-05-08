import listObj from './ArrayToDo.js';

const saveData = () => {
  localStorage.setItem('data-lis', JSON.stringify(listObj));
};

export default saveData;