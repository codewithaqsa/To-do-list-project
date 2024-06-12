import inquirer from "inquirer";
let todos = [];
let conditions = true;
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'Groccery ki shopping kia kia ki hai'
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'aur kia khareeda',
            defult: 'false'
        }
    ]);
    todos.push(addTask.todo);
    conditions = addTask.addMore;
    console.log(todos);
}
