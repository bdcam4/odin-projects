/*
*
*   The Odin Project
*   Library
*
*
*
*/

// const neuromancer = new Book('Neuromancer', 'William Gibson', 271, 'read');
// const realityDysfunction = new Book('The Reality Dysfunction', 'Peter F. Hamilton', 1223, 'not read')
// const beforeTheCoffeeGetsCold = new Book('Before the Coffee Gets Cold', 'Toshikazu Kawaguchi', 213, 'false');

let myLibrary = [];

// 'Book' object constructor
function Book(title, author, pages, status) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
};

//  create book object from user input, generate table row to display
function addBookToLibrary() {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = Number(document.getElementById('pages').value);
    let status = document.querySelector('input[name="status"]:checked').value;
    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    addTableRow(newBook)
};

// generate table row, insert relevant properties
function addTableRow(e){
    let table = document.getElementById('books-body');
    let row = document.createElement('tr');
    table.appendChild(row);
    for(const n of ['title', 'author', 'pages', 'status']) {
        let cell = document.createElement('td');
        row.appendChild(cell).innerHTML = e[n]
    }
}

function displayLibrary(){
    myLibrary.forEach(element => console.log(element))
}
/*
*
*   To-do
*
* sanitise user input
*
* style table
* small 'x' button to remove entries 
*
* add book button
* popup or fixed panel?
*
* add dark mode switch >:)
*
*/
