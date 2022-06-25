let myLibrary = [];

function Book(title, author, pages, readstatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readstatus = readstatus
    this.info = function () {
        return { title, author, pages, readstatus };
    };
}


var NewBookButtonElement = document.getElementById("1st button");
NewBookButtonElement.addEventListener('click', NewBookAdder);

function NewBookAdder(event) {
    console.log(myLibrary);
    addBookToLibrary();
}


function addBookToLibrary() {
    var title = prompt("title");
    var author = prompt("author");
    var pages = prompt("pages");
    var readstatus = prompt('readstatus');
    myLibrary.push((new Book(title, author, pages, readstatus)));
    console.log(myLibrary);
    var lastindex = myLibrary.length - 1;
    console.log(lastindex);
    console.log(typeof (lastindex));
    DisplayBook(lastindex);
}
const LibraryElement = document.getElementById("Library");

function DisplayBook(lastindex) {
    const booknode = document.createElement("div");
    booknode.id = "someid" + lastindex;
    var value = JSON.stringify(myLibrary[lastindex]);
    booknode.innerText = value;
    LibraryElement.appendChild(booknode);
    console.log(JSON.stringify(myLibrary[lastindex]));
    RemoveBook(lastindex);

}


function RemoveBook(lastindex) {
    const Removebtnn = document.createElement("button");
    Removebtnn.innerHTML = "Remove_Book";
    const booknode = document.getElementById("someid"+lastindex);
    console.log(booknode === true);
    if (booknode) {
        booknode.appendChild(Removebtnn)
        buttonfunctionalityadder();
    }
    else {
      alert ('uh');  
    }
}

function buttonfunctionalityadder() {
    const buttonnode =  document.querySelectorAll('button:not([id])');;
    const buttonnodearray = Array.from(buttonnode);
    for (var i = 0; i < buttonnodearray.length; i++) {
    buttonnodearray[i].addEventListener('click', RemoveBookWork);
}
}

function RemoveBookWork(event) {
element = event.target;
const closestdiv = element.closest('[id^="someid"]');
closestdiv.style.display = "none";
}

