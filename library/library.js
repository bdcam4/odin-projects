/*
*
*   The Odin Project
*   Library
*
*
*
*/

const neuromancer = new Book('Neuromancer', 'William Gibson', 271, 'read');
const realityDysfunction = new Book('The Reality Dysfunction', 'Peter F. Hamilton', 1223, 'not read')
const beforeTheCoffeeGetsCold = new Book('Before the Coffee Gets Cold', 'Toshikazu Kawaguchi', 213, 'false');

let myLibrary = [neuromancer];

// 'Book' object constructor
function Book(title, author, pages, status) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
};

function addBookToLibrary() {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = Number(document.getElementById('pages').value);
    let status = document.querySelector('input[name="status"]:checked').value;

    console.log("before: ")
    displayLibrary();
    
    myLibrary.push(new Book(title, author, pages, status));

    console.log("after: ");
    displayLibrary();

};

function displayLibrary(){
    myLibrary.forEach(element => console.log(element))
}

function addTableRow(e){
    let table = document.getElementById('table-container');
    let row = document.createElement('tr');
    table.appendChild(row);
    for(const n of ['title', 'author', 'pages', 'status']) {
        let cell = document.createElement('td');
        row.appendChild(cell).innerHTML = e[n]
    }
}

let array = [];

function addToArray(x){
    array.push(x);
    array.push(new Book("title","author", "123", "read"))
}

/*
*
*   To-do
*
* sanitise user input
*
* generate simple but neat table displaying myLibrary 
* small 'x' button to remove entries 
*
* add book button
* popup or fixed panel?
*
* add dark mode switch >:)
*
*/
