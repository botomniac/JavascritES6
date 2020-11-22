var list = document.querySelector('#app ul');
var input = document.querySelector('#app input');
var add = document.querySelector('#app button');

var todos =  JSON.parse(localStorage.getItem('lista_de_todo')) || [];

function renderTodos(){
    list.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode(' X');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','removeTodo(' + pos + ')');

        linkElement.appendChild(linkText);
        linkElement.setAttribute('href','#');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        list.appendChild(todoElement);
    }
}
renderTodos();

function addTodo(){
    var todoText = input.value;

    if(todoText !== ''){
        todos.push(todoText);
        input.value = '';
        renderTodos();
        saveToStorage();
    }
}
add.onclick = addTodo;

function removeTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('lista_de_todo' , JSON.stringify(todos));
}