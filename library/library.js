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

let myLibrary = [neuromancer,realityDysfunction,beforeTheCoffeeGetsCold];

// 'Book' object constructor
function Book(title, author, pages, status) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
};

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.querySelector('input[name="status"]:checked').value;

    myLibrary.push(new Book(title, author, pages, status));
    
    displayLibrary();

};

function displayLibrary(){
    for (i=0; i<myLibrary.length; i++){
        console.log(myLibrary[i])
    }
}


/*
*
*   To-do
*
* sanitise user input
*
* simple but neat table displaying myLibrary 
* small 'x' button to remove entries 
*
* add book button
* popup or fixed panel?
*
* add dark mode switch >:)
*
*/
