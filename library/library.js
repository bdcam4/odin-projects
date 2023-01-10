/*
*
*   The Odin Project
*   Library
*
*
*
*/

const neuromancer = new Book('Neuromancer', 'William Gibson', 'read', 271);
const realityDysfunction = new Book('The Reality Dysfunction', 'Peter F. Hamilton', 'not read', 1223)

let myLibrary = [neuromancer,realityDysfunction];

// 'Book' object constructor
function Book(title, author, pages, status) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
};

function addBookToLibrary(title,author,pages,status) {
    // let title = document.getElementbyId('title');
    // let author = document.getElementById('author');
    // let pages = document.getElementById('pages');
    // let status = document.getElementById('status');

    myLibrary.push(new Book(title,author,pages,status))
};

addBookToLibrary('Before the Coffee Gets Cold', 'Toshikazu Kawaguchi', 'currently reading', 213);
console.log(myLibrary)


/*
*
*   To-do
*
* header panel with stats (total books, total pages, avg pages)
* simple but neat table displaying myLibrary 
* small 'x' button to remove entries 
*
* add book button
* popup or fixed panel?
* submit button triggers addBookToLibrary()
*
* add dark mode switch >:)
*
*/
