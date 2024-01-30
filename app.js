console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

//Startup stuff
class bookOnline {
    constructor(bookTitle, bookAuthor, bookRead) 
    {   
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookRead = bookRead;
    }
    }

class libraryOnline {
    constructor()
    {
        this.catalogCount = 0;
        this.currentNextNumber = 1;
        this.catalog = [];
    }        
    addaBook(newBook)
        {
        newBook.bookNumber = this.currentNextNumber;
        this.catalog.push(newBook);
        this.currentNextNumber++;
        this.catalogCount = this.catalog.length;
        }     
    deleteaBook(bookNumber)
        {   
            const vintLoc = this.catalog.findIndex(item => item.bookNumber == bookNumber);
            if (vintLoc > -1) {this.catalog.splice(vintLoc,1)};
            this.catalogCount = this.catalog.length;
        } 
    markRead(bookNumber, toggleRead)
        {   
            const vintLoc = this.catalog.findIndex(item => item.bookNumber == bookNumber);
            if (vintLoc > -1) {this.catalog[vintLoc].bookRead = toggleRead};
        }
}

function addBook() {
    tmpBook = new bookOnline(
        document.getElementById("bookTitle").value,
        document.getElementById("bookAuthor").value,
        document.getElementById("bookRead").value
        );
    currentLibrary.addaBook(tmpBook);
    presentAllBooks();
    }

function deleteBook(event) 
    {  
        currentLibrary.deleteaBook(event.srcElement.id.substring(1));
        presentAllBooks(); 
    }

function markRead(event) 
    {  
        currentLibrary.markRead(event.srcElement.id.substring(1), event.srcElement.checked);
        presentAllBooks(); 
    }

function presentAllBooks() {
    var tmpTableBody = document.createElement("tbody");
    tmpTableBody.id = "tablebody";

    for (vint=0; vint < currentLibrary.catalog.length; vint++)
      {
      const tmpTR = document.createElement("tr");
      const cell1 = document.createElement("td");
      const cellText1 = document.createTextNode(currentLibrary.catalog[vint].bookTitle);

      const cell2 = document.createElement("td");
      const cellText2 = document.createTextNode(currentLibrary.catalog[vint].bookAuthor);

      const cell3 = document.createElement("td");
      const cellText3 = document.createElement("input");
      cellText3.type = "checkbox";
      cellText3.checked = currentLibrary.catalog[vint].bookRead;
      cellText3.id = "C" + currentLibrary.catalog[vint].bookNumber;
      cellText3.addEventListener("click", (event) => markRead(event));
      
      const cell4 = document.createElement("td");
      const cellText4 = document.createTextNode(currentLibrary.catalog[vint].bookNumber);

      const cell5 = document.createElement("td");
      const cellText5 = document.createElement("button");
      cellText5.id = "D" + currentLibrary.catalog[vint].bookNumber;
      cellText5.textContent = "Delete";
      cellText5.addEventListener("click", (event) => deleteBook(event));

      cell1.appendChild(cellText1);
      cell2.appendChild(cellText2);
      cell3.appendChild(cellText3);
      cell4.appendChild(cellText4);
      cell5.appendChild(cellText5);
      tmpTR.appendChild(cell1);
      tmpTR.appendChild(cell2);
      tmpTR.appendChild(cell3);
      tmpTR.appendChild(cell4);
      tmpTR.appendChild(cell5);
      tmpTableBody.appendChild(tmpTR);
      };
      document.getElementById("tablebody").replaceWith(tmpTableBody);

      let vtmpHD = document.getElementById("counters");
      vtmpHD.innerHTML = `Titles = ${currentLibrary.catalogCount}`;
    }

document.getElementById("bookButton").addEventListener("click", addBook);
let currentLibrary = new libraryOnline();
//
currentLibrary.addaBook(new bookOnline("Reign of the Gray-Eyed Kings","Charles Weindorf", true));
currentLibrary.addaBook(new bookOnline("Prophecy of a Memory","Charles Weindorf", true));
currentLibrary.addaBook(new bookOnline("Perfection's Design","Charles Weindorf", true));
currentLibrary.addaBook(new bookOnline("Progression","Charles Weindorf", true));
currentLibrary.addaBook(new bookOnline("The Fourth Part of the Triad","Charles Weindorf", false));
currentLibrary.addaBook(new bookOnline("The Unequal and Opposite Reaction","Charles Weindorf", false));
currentLibrary.addaBook(new bookOnline("The Two Inhuman Minds","Charles Weindorf", false));
currentLibrary.addaBook(new bookOnline("The Unballanced Happiness","Charles Weindorf", false));
currentLibrary.addaBook(new bookOnline("The Remembrances of Death","Charles Weindorf", false));
currentLibrary.addaBook(new bookOnline("The Prophecies Beyond the Grave","Charles Weindorf", true));
currentLibrary.addaBook(new bookOnline("Leading Software Engineers","Charles Weindorf", true));
presentAllBooks();