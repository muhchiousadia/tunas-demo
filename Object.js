let book = {
  title: "The Da Vinci Code",
  author: "Dan Brown",
  price: 450,
};

console.log(book.title);
console.log(book.author);

console.log(book["price"]);

book.price = 500;
book.publisher = "Penguin Books";

console.log(book);

const book2 = {
  title: "Harry Potter",

  showInfo() {
    console.log(`This book is ${this.title}`);
  },
};

book2.showInfo();
