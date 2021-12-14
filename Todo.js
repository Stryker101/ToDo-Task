

let input = document.getElementById('toDo');
let btn = document.getElementById('submitBtn');

btn.addEventListener('click', (e) => {
    let para = document.getElementById('todoList');
    let newList = document.createElement('li');
        
    para.appendChild(newList);
    newList.textContent = input.value;
    input.value="";
})