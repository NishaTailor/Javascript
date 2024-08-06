class Book {
  #author;
  #price;
  #rentalPrice;
  #AvilableCopies;

  constructor(title, author, price, rentalPrice, AvilableCopies) {
      this.title = title;
      this.#author = author;
      this.#price = price;
      this.#rentalPrice = rentalPrice;
      this.#AvilableCopies = AvilableCopies;
  }

    // author
  getAuthor() {return this.#author;}

  setAuthor(author) {this.#author = author;}
  
   //price
  getPrice() {return this.#price;}

  setPrice(price) {this.#price = price;}

  //Rental price
  getRentalPrice() {return this.#rentalPrice;}

  setRentalPrice(rentalPrice) {this.#rentalPrice = rentalPrice;}

  //Avilable Copies
  getAvilableCopies() {return this.#AvilableCopies; }

  setAvilableCopies(AvilableCopies) {this.#AvilableCopies = AvilableCopies;}

  //Buy
  BookforBuy() {
      if (this.#AvilableCopies > 0) {
          this.#AvilableCopies--;
          console.log(`Book purchased. ${this.#AvilableCopies}`);
      } else {
          console.log('Copies Not avilable');
      }
  }

  //Book for rent
  Bookforrent() {
      if (this.#AvilableCopies > 0) {
          this.#AvilableCopies--;
          console.log(`Book rented. ${this.#AvilableCopies}`);
      } else {
          console.log('copies Not Avilable.');
      }
  }

  // Return book
  BookforReturn() {
      this.#AvilableCopies++;
      console.log(`Book returned. ${this.#AvilableCopies} copies are Avilable.`);
  }

  // Avilable book
  CheckforAvilability() {
      console.log(`${this.#AvilableCopies} copies Avilable.`);
  }
}

let book = new Book("Life's Amazing Secrets", "Gour Gopal Das", 200, 150, 5);
console.log(book);
console.log(book.author);
book.CheckforAvilability();
book.BookforBuy();
book.CheckforAvilability();
book.Bookforrent();
book.CheckforAvilability();
book.BookforReturn();
book.CheckforAvilability();
