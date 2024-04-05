let myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function render(){
    let books = document.querySelector("#books")
    books.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookCard = document.createElement("div");
        bookCard.classList = "bookCard"
        books.appendChild(bookCard)

        let titlehtml = document.createElement("div")
        titlehtml.classList = "titlehtml"
        titlehtml.innerHTML = book.title;
        bookCard.appendChild(titlehtml)

        let authorhtml = document.createElement("div")
        authorhtml.classList = "authorhtml"
        authorhtml.innerHTML = book.author;
        bookCard.appendChild(authorhtml)

        let pageshtml = document.createElement("div")
        pageshtml.classList = "pageshtml"
        pageshtml.innerHTML = book.pages;
        bookCard.appendChild(pageshtml)

        let del = document.createElement("div");
        del.classList = "delete";
        bookCard.appendChild(del);
        let deleteBtn = document.createElement("button");
        deleteBtn.classList = "delete-btn";
        deleteBtn.innerHTML = "Delete"
        del.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function(index){
            myLibrary.splice(index, 1)
            render();
        })

        let readhtml = document.createElement("div");
        readhtml.classList = "readhtml";
        bookCard.appendChild(readhtml);
        let readBtn = document.createElement("button");
        readBtn.classList = "read-btn";
        readBtn.innerHTML = book.read ? "Read" : "Not Read Yet"
        readhtml.appendChild(readBtn);
        readBtn.addEventListener("click", function(){
            book.read = !book.read;
            readBtn.innerHTML = book.read ? "Read" : "Not Read Yet"
            render();
        })

        const form = document.querySelector("#newBook");
        form.style.display = "none"
        
        title.value = ""
        author.value = ""
        pages.value = ""
        read.value = false
    }
}

function addBookToLibrary(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value + " pages";
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render()
}

const btn = document.querySelector("#newBookbtn");
btn.addEventListener("click", function(){
    const form = document.querySelector("#newBook");
    form.style.display = "flex"
});


document.querySelector("#inputs").addEventListener("submit", function(){
    event.preventDefault()
    addBookToLibrary();


})


const cancel = document.querySelector("#cancel");
cancel.addEventListener("click", function(){

    const form = document.querySelector("#newBook");
    form.style.display = "none"
});


