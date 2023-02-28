/*
*
*   The Odin Project
*   Library
*
*
*
*/

let myLibrary = [];

// 'Book' class constructor
class Book {
    constructor(title, author, pages, status) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.status = status
    }
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
    addTableRow(newBook);
    runStats();
};

// generate table row, insert relevant properties
function addTableRow(e){
    let table = document.getElementById('books-body');
    let row = document.createElement('tr');
    row.setAttribute('id',`bookId-${myLibrary.length}`)
    table.appendChild(row);
    for(const n of ['title', 'author', 'pages', 'status']) {
        let cell = document.createElement('td');
        row.appendChild(cell).innerHTML = e[n]
    }
    let cell = document.createElement('td');
    cell.classList.add('delete-button');
    cell.setAttribute('onclick',`deleteBook(${myLibrary.length})`)
    row.appendChild(cell).innerHTML = 'x'

    document.getElementById(`bookId-${myLibrary.length}`).children[3].setAttribute('onclick',`toggleStatus(${myLibrary.length})`);
}

function displayLibrary(){
    myLibrary.forEach(element => console.log(element))
}

function deleteBook(n) {
    // myLibrary.splice(n,1);
    document.getElementById(`bookId-${n}`).remove();
}

function toggleStatus(n){
    let currentBookStatus = document.getElementById(`bookId-${n}`).children[3].innerText;
    switch(currentBookStatus){
        case 'read':
            document.getElementById(`bookId-${n}`).children[3].innerText = 'not read';
            myLibrary[n-1].status = 'not read';
            break;
        case 'not read':
            document.getElementById(`bookId-${n}`).children[3].innerText = 'read';
            myLibrary[n-1].status = 'read';
            break;
    }
}


function runStats() {
    let totalPages = 0;
    let avgPages = 0;
    myLibrary.forEach(element => totalPages+=element.pages);
    avgPages = Math.round(totalPages/myLibrary.length);

    document.getElementById('total-pages').innerHTML = totalPages;
    document.getElementById('avg-pages').innerHTML = avgPages
}