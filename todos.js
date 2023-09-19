let todoInput = prompt('What would you like to do?');
const todoList = [];


while (todoInput) {
    if (todoInput === 'new') {                                  //'new' 입력 시
        const newTodo = prompt('Enter new Todo:');
        todoList.push(newTodo);
        console.log(`'${newTodo}' add to list`);
        todoInput = prompt('What would you like to do?');
    } else if (todoInput === 'list') {                          //'list' 입력 시
        console.log('****************');
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]} `);
        }
        console.log('****************');
        todoInput = prompt('What would you like to do?');
    } else if (todoInput === 'delete') {                        //'delete' 입력 시
        const deleteInput = parseInt(prompt('Enter index of todo to delete:'));
        if (!Number.isNaN(deleteInput)) {
            console.log(`deleted '${todoList[deleteInput]}'`);
            todoList.splice(deleteInput, 1);
            todoInput = prompt('What would you like to do?');
        } else {
            console.log('Unknown index');
            todoInput = prompt('What would you like to do?');
        }
    } else if (todoInput === 'quit' || todoInput === 'q') {     //'quit' or 'q' 입력 시
        console.log('OK, YOU QUIT THE APP');
        break;
    } else {
        todoInput = prompt("i don't know What would you like to do?");
    }
}