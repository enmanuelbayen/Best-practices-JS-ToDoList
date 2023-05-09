import './style.css';

import reloadImg from './img/reload.png';
import sendImg from './img/send.png';
import addTask from './modules/addToDo.js';
import createList from './modules/RenderTask.js';
import { deleteComplete } from './modules/checkTask.js';

const reload = document.querySelector('.icon-reload');
const enter = document.querySelector('.icon-send');

enter.src = sendImg;
reload.src = reloadImg;

createList();

const sendBttn = document.getElementById('icon-send-id');
sendBttn.addEventListener('click', addTask);

const greenCheck = document.querySelector('.clear-bttn');
greenCheck.addEventListener('click', deleteComplete);