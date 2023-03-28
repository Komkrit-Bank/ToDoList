//อ้างอิงจาก html
const name_input = document.getElementById('name');
const date_input = document.getElementById('date');
const time_input = document.getElementById('time');
const form = document.getElementById('form');
const container = document.getElementById('todo-container')

let Transections = [];

function init() {;
    Transections.forEach(addDatatoList);
}

function randomID() {
    return Math.floor(Math.random()*1000000)
}

function removeItem(id) {
    // console.log(Transections);
    // const removeEle = document.getElementById(id);
    // removeEle.parentNode.removeChild(removeEle);
    // Transections  = Transections.filter(Transections=> Transections.id !== id);
    const removeEle = document.getElementById(id)
    return removeEle.parentNode.removeChild(removeEle)
    // console.log(container)
    // init();
}

function addDatatoList(data) {
    const line = document.createElement('ul');
    line.id = data.id

    const item = document.createElement('li');
    const name_todo = document.createElement('h4');
    const date_todo = document.createElement('p');
    const time_todo = document.createElement('p');

    name_todo.innerHTML = `Name: ${data.name} <span class="todo"><button class="delete-btn" onclick="removeItem(${data.id})">x</button></span>`;
    name_todo.classList.add('todo');

    date_todo.innerHTML = `Date: ${data.date}`;
    date_todo.classList.add('todo');

    time_todo.innerHTML = `Time: ${data.time}`
    time_todo.classList.add('todo');

    item.appendChild(name_todo);
    item.appendChild(date_todo);
    item.appendChild(time_todo);

    line.appendChild(item);
    container.appendChild(line)
}

function addTransection(e){
    e.preventDefault()
    if(name_input.value.trim() === '' || date_input.value.trim() === '' || time_input.value.trim() === ''){
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
    } else {
        const data = {
            id: randomID(),
            name: name_input.value,
            date: date_input.value,
            time: time_input.value
        };

        Transections.push(data);
        addDatatoList(data);
        name_input.value = '';
        date_input.value = '';
        time_input.value = '';
    }
}

form.addEventListener('submit', addTransection);
init();