/// make the class to store book Library

class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }
    addBorrower(borrower) {
        this.borrowers.push(borrower);
    }
    addBook(book) {
        this.books.push(book);
    }

    isInCollection(bookTitle) {
        let foundBooksArr = this.books.filtler(book => book.title === bookTitle);
      return foundBooksArr.length ? true : false;  
    }
    
    getAvailability(book) {
        
    }
} 

class Book {
    constructor(title, author, publishedDate, checkOutToName=null,) {
        this.title = title;
        this.author = author;
        this.publishedDate = publishedDate;
        this.checkOutToName = checkOutToName;
        this.checkOutDate = null;
    }
    checkOut(checkOutToName) {
        this.checkOutToName = checkOutToName;
        let dates = ['April 17, 2023', 'April 10, 2023', 'April 5, 2023', 'April 18, 2023']
        let randomDate = dates[Math.floor(Math.random()*dates.length)]
        this.checkOutDate = new Date(randomDate);
    }
}

let myLibrary = new Library();

myLibrary.addBorrower("John");
myLibrary.addBorrower("Eric");
myLibrary.addBorrower("Oen");
myLibrary.addBorrower("Levin");

myLibrary.addBook(new Book('First Book', 'John Smith', '2018-01-01'));
myLibrary.addBook(new Book('Second Book', 'John Smith', '2018-01-01'));
myLibrary.addBook(new Book('Third Book', 'John Smith', '2018-01-01'));

myLibrary.books[1].checkOut(myLibrary.borrowers[0]);
myLibrary.books[2].checkOut(myLibrary.borrowers[1]);
myLibrary.books[0].checkOut(myLibrary.borrowers[2]);
myLibrary.books[0].checkOut(myLibrary.borrowers[3]);
console.log(myLibrary);





// make a Book class to store book information






// create a Person class to store person