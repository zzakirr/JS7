let list1 = document.getElementById('list1');
let list2 = document.getElementById('list2');
let leftListItems = document.querySelectorAll('#list1 li');
let rightListItems = document.querySelectorAll('#list2 li');
leftListItems.forEach(el => {
    el.addEventListener('dragstart', function (ev) {
        ev.dataTransfer.setData('dataId', ev.target.id);
    })
})
rightListItems.forEach(el => {
    el.addEventListener('dragstart', function (ev) {
        ev.dataTransfer.setData('dataId', ev.target.id);
    })
})
list2.addEventListener('dragover', function (ev) {
    ev.preventDefault();
})
list2.addEventListener('drop', function (ev) {
    let dragId = ev.dataTransfer.getData('dataId');
    let li = document.getElementById(dragId);
    list2.appendChild(li);
})
list1.addEventListener('dragover', function (ev) {
    ev.preventDefault();
})
list1.addEventListener('drop', function (ev) {
    let dragId = ev.dataTransfer.getData('dataId');
    let li = document.getElementById(dragId);
    list1.appendChild(li);
})

let box = document.getElementById('box');
box.addEventListener('dragover',function(ev){
    ev.preventDefault();
})
box.addEventListener('drop',function(ev){
    let dragId = ev.dataTransfer.getData('dataId');
    let liText = document.getElementById(dragId).innerText;
    let newP = document.createElement('p'); 
    box.appendChild(newP).innerText = liText;
    document.getElementById(dragId).remove();
})