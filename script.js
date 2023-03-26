//อ้างอิงจาก html
const name_input = document.getElementById('name');
const date_input = document.getElementById('date');
const time_input = document.getElementById('time');
const form = document.getElementById('form');
// const line = document.getElementById('todo')


const dataTransections = [
    {id: 1, name: 'ซักผ้า', date: '26-3-2023', time: '14:00'},
    {id: 2, name: 'ล้างจาน', date: '27-3-2023', time: '15:00'}
]

const Transections = dataTransections;

function init() {
    Transections.forEach(addDatatoList);
}

function addDatatoList(data) {
    const line = document.createElement('ul')

    const item = document.createElement('li');
    const name_todo = document.createElement('h4');
    const date_todo = document.createElement('p');
    const time_todo = document.createElement('p');

    name_todo.innerHTML = `Name: ${data.name} <span class="todo"><button class="delete-btn">x</button></span>`;
    name_todo.classList.add('todo');

    date_todo.innerHTML = `Date: ${data.date}`;
    date_todo.classList.add('todo');

    time_todo.innerHTML = `Time: ${data.time}`
    time_todo.classList.add('todo');

    item.appendChild(name_todo);
    item.appendChild(date_todo);
    item.appendChild(time_todo);

    line.appendChild(item)
    document.body.appendChild(line)
}

function addTransection(e){
    e.preventDefault()
    console.log('sending data....')
}

init()