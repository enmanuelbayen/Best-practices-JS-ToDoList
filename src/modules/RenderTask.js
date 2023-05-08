// functions variables
import listObj from './ArrayToDo.js';
import saveData from './savaDataList.js';
import updateDescription from './editTodo.js';
import deleteImg from '../img/trashpin.png';
import moveImg from '../img/move.png';
import { Checked } from './checkTask.js';

const listData = document.querySelector('.list-holder');

// append new list to ul
const createList = () => {
  listData.innerHTML = '';
  listObj.forEach((item, i) => {
    const lisItem = document.createElement('li');
    lisItem.className = 'list-item flex';
    lisItem.innerHTML = `
      <div class="check-descrip flex">
        <label>
          <input type="checkbox" name="completed" class="check" ${item.completed ? 'checked' : ''} data-id="${item.id}">
        </label>
        <label label class="description-label" for="descrip-id${item.id}">
          <input type="text" name="action-toDo" class="description ${item.completed ? 'completed' : ''}" id="descrip-id${item.id}" value="${item.description}">
        </label>
      </div>
      <img src="${moveImg}" alt="move icon" class="icon-move pointer" id="swapIcon${item.id}-${i}">
      <img src="${deleteImg}" alt="trash pin icon" class="icon-delete pointer hide" id="swapHide-icon-${i}">    
    `;
  
    listData.appendChild(lisItem);
  
    // interaccion while clicking the input item
    const edit = document.querySelector(`label[for="descrip-id${item.id}"]`);
    const removeBttn = document.getElementById(`swapHide-icon-${i}`);
    const hideIcon = document.getElementById(`swapIcon${item.id}-${i}`);
    const reverseEdit = document.getElementById(`descrip-id${item.id}`);
  
    edit.addEventListener('click', () => {
      lisItem.classList.add('bgYellow');
      removeBttn.classList.remove('hide');
      hideIcon.classList.add('hide');
    });
  
    reverseEdit.addEventListener('blur', (event) => {
      const input = event.target;
      const id = parseInt(input.id.replace('descrip-id', ''), 10);
      const value = input.value.trim();
      updateDescription(id, value);
      setTimeout(() => {
        lisItem.classList.remove('bgYellow');
        removeBttn.classList.add('hide');
        hideIcon.classList.remove('hide');
        saveData();
      }, 100);
    });
  
    // remove
    removeBttn.addEventListener('click', (event) => {
      const button = event.target;
      if (button.classList.contains('icon-delete')) {
        const lisItem = button.parentElement;
        const indexToRemove = Array.from(listData.children).indexOf(lisItem);
        listObj.splice(indexToRemove, 1);
        saveData();
        listData.removeChild(lisItem);
        // update remaining items
        for (let i = indexToRemove; i < listObj.length; i += 1) {
          listObj[i].id = i + 1;
        }
        saveData();
        createList();
      }
    });
  
    const checkboxes = Array.from(document.querySelectorAll('.check'));
    checkboxes.forEach((checkbox, idx) => {
      checkbox.addEventListener('click', () => {
        Checked(idx);
        saveData();
        createList();
      });
    });
  });
};

createList();

export default createList;