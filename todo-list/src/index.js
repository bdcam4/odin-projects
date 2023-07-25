
const myCategories = [];

class todoCategory {
    constructor(title, description, categoryId) {
        this.title = title,
        this.description = description,
        this.categoryId = categoryId,
        this.todoContainer = []
    }
};

class Todo {
    constructor(title, dueDate, priority, status, todoId) {
        this.title = title,
        this.dueDate = dueDate,
        this.priority = priority,
        this.status = status,
        this.todoId = todoId
    }
};

const createCategory = () => {
    let title = 'title';
    let description = 'description';
    let categoryId = myCategories.length;
    let newCategory = new todoCategory(title, description, categoryId);
    myCategories.push(newCategory)
};

const createTodo = (categoryId) => {
    let title = 'title';
    let dueDate = 'dueDate';
    let priority = 'priority';
    let status = 'status';
    let todoId = myCategories[categoryId].todoContainer.length;
    // let status = document.querySelector('input[name="status"]:checked').value;
    let newTodo = new Todo(title, dueDate, priority, status, todoId);
    myCategories[categoryId].todoContainer.push(newTodo)
};

createCategory();
createTodo(0)
console.log(myCategories[0])
