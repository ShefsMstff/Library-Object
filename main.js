class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.isAvailable = true; 
    }
  }
  
 
  class Library {
    constructor() {
      this.books = []; 
    }
  
    
    addBook(book) {
      this.books.push(book);
      console.log(`Kitab əlavə edildi: ${book.title} - ${book.author}`);
    }
  
    
    checkAvailability(title) {
      const book = this.books.find(book => book.title === title);
      if (book) {
        return book.isAvailable ? `Kitab mövcuddur: ${book.title}` : `Kitab mövcud deyil: ${book.title}`;
      } else {
        return `Kitab tapılmadı: ${title}`;
      }
    }
  
    
    borrowBook(title) {
      const book = this.books.find(book => book.title === title);
      if (book) {
        if (book.isAvailable) {
          book.isAvailable = false;
          console.log(`Kitab borc alındı: ${book.title}`);
        } else {
          console.log(`Kitab artıq borc alınıb: ${book.title}`);
        }
      } else {
        console.log(`Kitab tapılmadı: ${title}`);
      }
    }
  
   
    returnBook(title) {
      const book = this.books.find(book => book.title === title);
      if (book) {
        if (!book.isAvailable) {
          book.isAvailable = true;
          console.log(`Kitab geri qaytarıldı: ${book.title}`);
        } else {
          console.log(`Kitab artıq mövcuddur: ${book.title}`);
        }
      } else {
        console.log(`Kitab tapılmadı: ${title}`);
      }
    }
  
   
    listAvailableBooks() {
      const availableBooks = this.books.filter(book => book.isAvailable);
      if (availableBooks.length > 0) {
        console.log("Mövcud olan kitablar:");
        availableBooks.forEach(book => console.log(`${book.title} - ${book.author}`));
      } else {
        console.log(" kitab yoxdur.");
      }
    }
  }
 
  const library = new Library();
  
//  əlavə etmə
  library.addBook(new Book('Maça Kızı 8', 'Dilara Pamuk'));
  library.addBook(new Book('İhtilal' ,'Binnur Şafak Nigiz'));
  library.addBook(new Book('Sokak Nobetçileri','Aslı Arslan'));
  
  //  mövcudluğu yoxlamaq
  console.log(library.checkAvailability('Maça Kızı 8', 'Dilara Pamuk')); // var
  console.log(library.checkAvailability('Bülbül Kapanı','Loresimaa')); // yoxdur
  
  //  borc almaq
  library.borrowBook('İhtilal');

  library.listAvailableBooks('list'); 
  library.returnBook('İhtilal');
  
 
  