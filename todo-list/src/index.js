
// Ignore the DOM Stuff to start with!
//
// Make the object constructors
//


const exampleCategory = {
    title: "general household tasks",   // User inputted string (will need to be sanitised)
    description: "tasks for the fam",   // User inputted string (will need to be sanitised)
    todoContainer: []
};

const exampleTodoObject = {
    title: "shopping",                  // User inputted string (will need to be sanitised)
    dueDate: "someDate",                // Handle this with some date package
    priority: "High",                   // Low - Medium - High
    status: "Done",                     // Done - Not Done
    // checklist: ["eggs","milk","flour"]  // Multiple user inputted strings (will need to be sanitised)
};

exampleCategory.todoContainer.push(exampleTodoObject);

console.log(exampleCategory);


// 'todo' class constructor
class Todo {
    constructor(title, dueDate, priority, status) {
        this.title = title,
        this.dueDate = dueDate,
        this.priority = priority,
        this.status = status
    }
};
