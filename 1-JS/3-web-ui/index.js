console.log('-index.js-');


//------------------------------------------------------
// using DOM API
//------------------------------------------------------


let box = document.querySelector('.alert-info')
let greetBtn = document.querySelector('.btn-success')
let hideBtn = document.querySelector('.btn-danger')
let showBtn = document.querySelector('.btn-primary')


greetBtn.addEventListener('click', e => {
    box.innerHTML = "good morning"
})
hideBtn.addEventListener('click', e => {
    box.style.display = 'none'
})
showBtn.addEventListener('click', e => {
    box.style.display = 'block'
})

//------------------------------------------------------
// Timer API
//------------------------------------------------------

let timeEle = document.getElementById('timeEle');

setInterval(() => {
    let timeNow = new Date().toLocaleTimeString();
    timeEle.innerHTML = timeNow;
}, 1000)



//------------------------------------------------------
// XHR/Fetch API ==> to make async HTTP calls
//------------------------------------------------------

let todosBtn = document.getElementById('todos-btn');

todosBtn.addEventListener('click', e => {
    let api = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    let promise = fetch(api)
    promise
        .then(response => response.json())
        .then(todos => {
            let arr = [];
            todos.forEach(todo => {
                let liTemplate = `
                    <li class="list-group-item ${todo.completed?'bg-success':''}">
                        ${todo.id} - ${todo.title} - ${todo.completed}
                    </li>
                `
                arr.push(liTemplate)
            })
            document.getElementById('todo-list').innerHTML = arr.join(" ")
        })
})