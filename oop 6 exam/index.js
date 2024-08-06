class book {
  constructor(title, author, price, rentalPrice, copiesAvailable) {
    this.title = title;
    this.#author = author;
    this.#price = price;
    this.#rentalPrice = rentalPrice;
    this.#copiesAvailable = copiesAvailable;
    this.#rentedCopies = 0;
  }

  return(copy){
    this.rentalPrice = rentalPrice;
  }
  getauthor() {
    return this.#author;
  }
  setauthor(author) {
    this.#author = author;
  }
}
let Book = new book("red & white", "rajat sinha", 1000, 500, 1500);
console.log(book.#author);


class Book {
  // Constructor to initialize the book properties
  constructor(title, author, isbn, publishedYear) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.publishedYear = publishedYear;
  }

  // Method to get a brief description of the book
  getDescription() {
    return `${this.title} by ${this.author}, published in ${this.publishedYear}. ISBN: ${this.isbn}`;
  }

  // Method to check if the book is a classic
  isClassic() {
    const currentYear = new Date().getFullYear();
    return (currentYear - this.publishedYear) >= 50;
  }

  // Method to update the book's title
  updateTitle(newTitle) {
    this.title = newTitle;
  }

  // Method to update the book's author
  updateAuthor(newAuthor) {
    this.author = newAuthor;
  }
}

// Example usage
const book1 = new Book('1984', 'George Orwell', '9780451524935', 1949);

console.log(book1.getDescription()); // "1984 by George Orwell, published in 1949. ISBN: 9780451524935"
console.log(book1.isClassic()); // true

book1.updateTitle('Nineteen Eighty-Four');
console.log(book1.getDescription()); // "Nineteen Eighty-Four by George Orwell, published in 1949. ISBN: 9780451524935"
