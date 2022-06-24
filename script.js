let myLibrary = [];

function Book(title,author,pages,readstatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readstatus = readstatus
    this.info = function() {
        return {title,author,pages,readstatus};
    };
}

var NewBookButtonElement = document.querySelector("button");
NewBookButtonElement.addEventListener('click', NewBookAdder);

function NewBookAdder(event) {
    console.log(myLibrary);
    addBookToLibrary();
}


function addBookToLibrary() {
    var title = prompt("title");
    var author = prompt ("author");
    var pages = prompt ("pages");
    var readstatus = prompt ('readstatus');
    myLibrary.push((new Book(title, author, pages, readstatus)));
    console.log(myLibrary);
    var lastindex = myLibrary.length - 1;
    console.log(lastindex);
    console.log(typeof(lastindex));
    DisplayBook(lastindex);
}
const LibraryElement = document.getElementById("Library");

function DisplayBook(lastindex) {
        const booknode = document.createElement("div");
        booknode.id = "someid";
        var value = JSON.stringify(myLibrary[lastindex]);
        booknode.innerText = value;
        LibraryElement.appendChild(booknode);
        console.log(JSON.stringify(myLibrary[lastindex]));
    }

// attemp1; butclick->addb -empty array> it pushes something-> displays it then the foreach loop does display book for it

//attempt2;butclick


// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.



// findareainhtml(qs/all)->d.createElement->add id maybe-> append 1st const to 2nd one -> add some inner text 



// const theHobbit = new Book('The Hobbit','by J.R.R. Tolkien','295 pages','not read yet');

// console.log(theHobbit.info())