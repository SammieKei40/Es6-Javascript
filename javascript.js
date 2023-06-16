const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}


//Destructuring 
const book = getBook(1)

// const title = book.title
// const author = book.author

const {title , author, genres} = book
// console.log(title, author, genres)

//Spread Operator in an array
const [primary, secondary, ...otherGenre] = genres
const book1 = getBook(3)
const newGenres = [...book.genres]
newGenres
// console.log(primary, secondary, otherGenre)

//Spread Operator in Object (Adding to an object and overwriting an object)
const updatedBook = {...book, moviePublicationDate: "2001-12-19", pages: 1, author: "Sammie Kei"}
updatedBook

//Template Literal
const summary = `${title} is a book and the ${author} wrote the book with so many genres of ${genres.length}`
summary

//Ternaries Operator instead of If/Else 
const pageRange = book.pages > 1000 ? "Over thousand" : "Less Thousand"
pageRange

//Arrow Function 
const getyear = (str) => str.split("_")[0]
console.log(getyear(book.publicationDate))

//SHort Circuit and logical Operator

//End operator &&
console.log(true && "Hey Sammie Kei")
console.log(false && "Hey Sammie Kei") //Short circuiting happens here (end operator)
console.log(book.hasMovieAdaptation && "Hey Sammie Kei") //Short circuiting (end operator)

//Or Operator ||
console.log(true || "Hiii") //SHort circuiting happens here
console.log(false || "It works")
const translations = book.translations.spanish || "Not Translated"
translations

//Nullish Coaelasing Operator 
const count = book.reviews.librarything.reviewsCount ?? "No data"
count 

//Optional Chaining (?)
function getTotalReviewCount(book){
  const goodreads = book.reviews?.goodreads?.reviewsCount
  const librarything = book.reviews.librarything?.reviewsCount ?? 0
  return goodreads + librarything
}

console.log(getTotalReviewCount(book))

//Array Map method 
const books = getBooks()
const x = [1,2,3,4,5].map((el) => el * 2)
console.log(x)

const titles = books.map((book) => book.title)
titles

const essentialData = books.map((book)=> ({
  title: book.title,
  author: book.author,
  reviews: getTotalReviewCount(book)
}))

essentialData

//Array Filter Method
const longBooks = books
.filter((book)=> book.pages > 500)
.filter((book) => book.hasMovieAdaptation)
longBooks

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title)

adventureBooks;

//Array Reduced Method 
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0)
pagesAllBooks 

//Array Sort Method 
const arr = [1,3,9,6,7,8,0,4,4,5,6]
const sorted = arr.slice().sort((a,b) => a - b)
sorted
arr

const sortedByPages = books.slice().sort((a,b) => a.pages - b.pages)
sortedByPages

//Add Book Object to array 
const newBook = {
  id: 6,
  title: "Harry Potter and Good luck",
  author: "Sammie kei"
}

const addBook = [...books, newBook]
addBook

//Deleting a book Object from array 
const deleteBook = addBook.filter((book) => book.id !== 3)
deleteBook

//Update a book object in the array 
const updateBook = deleteBook.map((book) => book.id === 1 ? {...book, pages: 1234} : book)
updateBook


