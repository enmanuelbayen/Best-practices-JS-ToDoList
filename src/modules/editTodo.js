import listObj from './ArrayToDo.js';
import saveData from './savaDataList.js';

const updateDescription = (id, value) => {
  const index = listObj.findIndex((item) => item.id === id);
  if (index >= 0) {
    listObj[index].description = value;
    saveData();
  }
};

export default updateDescription;