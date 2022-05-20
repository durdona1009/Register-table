import UserInfo from './GetUserInfo.js'
import render from './render.js';

let myForm = document.getElementById('ourform');
let firstName = document.getElementById('name');
let lastName = document.getElementById('surname');
let group = document.getElementById('group');
let gender = document.getElementById('gender');
let tableBody = document.getElementById('tablebody');

let storage = window.localStorage;

let storageData = storage.getItem('userData');
let userData;

console.log(userData);

storageData ? userData = JSON.parse(storageData) : userData = [];

myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let user = new UserInfo(firstName.value, lastName.value, group.value, gender.value);
    console.log(user);
    userData.push(user);
    storage.setItem('userData', JSON.stringify(userData));
    render(tableBody, userData);
})

render(tableBody, userData);