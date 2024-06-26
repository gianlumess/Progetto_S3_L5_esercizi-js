/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
console.log(
  "***********************************  JS BASICS  ***********************************"
);

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("------------------------ESERCIZIO A------------------------");

let sum = 10 + 20;
console.log("10+20= ", sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("------------------------ESERCIZIO B------------------------");

let random = Math.floor(Math.random() * 21);
console.log("numero generato randomicamente tra 0 e 20 : ", random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("------------------------ESERCIZIO C------------------------");

let me = {
  name: "Gianluca",
  surname: "Messina",
  age: 23,
};
console.log("oggetto contenente i miei dati anagrafici: ", me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("------------------------ESERCIZIO D------------------------");

delete me.age;
console.log("rimossa la proprietà 'età' dall'oggetto 'me': ", me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("------------------------ESERCIZIO E------------------------");

me.skills = ["javascript"];
console.log("aggiunto array 'skills' all'oggetto: ", me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("------------------------ESERCIZIO F------------------------");

me.skills.push("elemento");
console.log(
  "aggiunto elemento all'array contenuto all'interno dell'oggetto 'me': ",
  me
);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("------------------------ESERCIZIO G------------------------");

let ultimoElemento = me.skills.pop();
console.log(
  "rimosso ultimo elemento dell'array contenuto nell'oggetto 'me': ",
  me
);
console.log("l'elemento rimosso è: ", ultimoElemento);
// Funzioni
console.log(
  "***********************************  FUNZIONI  ***********************************"
);

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("------------------------ESERCIZIO 1------------------------");

const dice = (numero) => {
  const randNumb = Math.floor(Math.random() * numero + 1);
  console.log(randNumb);
};

dice(6);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("------------------------ESERCIZIO 2------------------------");

const whoIsBigger = (num1, num2) => {
  let largerNumb = 0;
  if (num1 > num2) {
    largerNumb = num1;
  } else {
    largerNumb = num2;
  }
  return largerNumb;
};

console.log(whoIsBigger(6, 9));
/* ESERCIZIO 3
 
 Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("------------------------ESERCIZIO 3------------------------");

const splitMe = (string) => {
  return string.split(" ");
};
console.log(splitMe("ciao come va"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("------------------------ESERCIZIO 4------------------------");

const deleteOne = (string, boolean) => {
  let newString = "";
  if (boolean) {
    newString = string.substring(1);
  } else {
    newString = string.substring(0, string.length - 1);
  }
  return newString;
};

console.log(deleteOne("ciao mondo", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("------------------------ESERCIZIO 5------------------------");

const onlyLetters = (string) => {
  let newString = string.replace(/\d/g, "");
  newString.trim();
  return newString;
};

console.log(onlyLetters("ciao ho 8 mele e 4 banane"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("------------------------ESERCIZIO 6------------------------");

const isThisAnEmail = (string) => {};
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("------------------------ESERCIZIO 7------------------------");

const whatDayIsIt = () => {
  const giorniSettimana = [
    "lunedì",
    "martedì",
    "mercoledì",
    "giovedì",
    "venerdì",
    "sabato",
    "domenica",
  ];
  let data = new Date();
  let numGiornoDellaSettimana = data.getDay();
  let giornoCorrente = giorniSettimana[numGiornoDellaSettimana - 1];
  return giornoCorrente;
};

console.log("oggi è: ", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("------------------------ESERCIZIO 8------------------------");

const rollTheDices = (number) => {};
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("------------------------ESERCIZIO 9------------------------");

const howManyDays = (date) => {
  const oggi = new Date();
  const dataInserita = new Date(date);
  console.log("data fornita come parametro: ", dataInserita);
  const differenza = oggi.getDate() - dataInserita.getDate();
  console.log("data corrente: ", oggi);

  return differenza;
};
console.log("Differenza di giorni: ", howManyDays("10 May 2024"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("------------------------ESERCIZIO 10------------------------");

const isTodayMyBirthday = (birthday) => {
  const oggi = new Date();
  const compleanno = new Date(birthday);
  const selezioneGionroMeseCorrente = oggi.getDate();
  const selezioneGiornoMeseCompleanno = compleanno.getDate();
  const selezioneMeseCorrente = oggi.getMonth();
  const selezioneMeseCompleanno = compleanno.getMonth();

  if (
    selezioneGionroMeseCorrente === selezioneGiornoMeseCompleanno &&
    selezioneMeseCorrente === selezioneMeseCompleanno
  ) {
    return true;
  } else {
    return false;
  }
};

console.log("il giorno del mio compleanno è l'8 febbraio");
console.log(
  "oggi è il mio compleanno?  ",
  isTodayMyBirthday("17 February 2001")
);
// Arrays & Oggetti

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("------------------------ESERCIZIO 11------------------------");

const deleteProp = (obj, string) => {
  delete obj[string];
  return obj;
};

let secondMe = {
  name: "Gianluca",
  surname: "Messina",
  age: 23,
};

console.log(
  "elimino la proprieta 'surname' dall'oggetto : ",
  deleteProp(secondMe, "surname")
);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("------------------------ESERCIZIO 12------------------------");

const newestMovie = (array) => {
  const sortedMovies = array
    .slice()
    .sort((a, b) => parseInt(b.Year) - parseInt(a.Year));

  return sortedMovies[0];
};

console.log("il film più recente è: ", newestMovie(movies));
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("------------------------ESERCIZIO 13------------------------");

const countMovies = (array) => {
  return array.length;
};

console.log(
  "Il numero di film contenuti nell'array 'movies' è: ",
  countMovies(movies)
);
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("------------------------ESERCIZIO 14------------------------");

const onlyTheYears = (array) => {
  const years = array.map((movies) => movies.Year);
  return years;
};

console.log(
  "array contenente solamente la data di uscita dei film",
  onlyTheYears(movies)
);
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("------------------------ESERCIZIO 15------------------------");

const onlyInLastMillennium = (array) => {
  const lastMillennium = array.filter((array) => parseInt(array.Year) <= 2000);
  return lastMillennium;
};

console.log(
  "film usciti nel millennio passato: ",
  onlyInLastMillennium(movies)
);
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("------------------------ESERCIZIO 16------------------------");

const sumAllTheYears = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum + parseInt(element.Year);
  }
  return sum;
};

console.log(sumAllTheYears(movies));
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("------------------------ESERCIZIO 17------------------------");

const searchByTitle = (array, string) => {
  //filtro l'array vedendo se nella proprietà Title è inclusa la parola della striga, do ad entrambi valore lowercase per rendere la verifica case insensitive
  const serarchMovie = array.filter((array) =>
    array.Title.toLowerCase().includes(string.toLowerCase())
  );
  return serarchMovie;
};

console.log(
  "cerco i film che contengono nel titolo la parola 'avengers': ",
  searchByTitle(movies, "avengers")
);
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("------------------------ESERCIZIO 18------------------------");

const searchAndDivide = (string) => {
  searchByTitle(movies, string);
};
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("------------------------ESERCIZIO 19------------------------");

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("------------------------ESERCIZIO 20------------------------");

const selectContainer = () => {
  const container = document.getElementById("container");
  return container;
};

console.log(selectContainer());
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("------------------------ESERCIZIO 21------------------------");

const selectAllTd = () => {
  const allTd = document.querySelectorAll("td");
  return allTd;
};

console.log(selectAllTd());
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("------------------------ESERCIZIO 22------------------------");

const printContentTd = () => {
  let allTd = document.querySelectorAll("td");
  allTd.forEach(function (td) {
    console.log(td.textContent);
  });
};

console.log("stampo il contenuto di tutti i tag 'td': ");
printContentTd();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("------------------------ESERCIZIO 23------------------------");

const linkBackgroundRed = () => {
  const allLinks = document.querySelectorAll("a");
  allLinks.forEach(function (link) {
    link.style.backgroundColor = "red";
  });
};
linkBackgroundRed();
console.log("aggiunto background color RED ai LINK");
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("------------------------ESERCIZIO 24------------------------");

const newUlElement = () => {
  const ul = document.getElementById("myList");
  const newLi = document.createElement("li");
  newLi.innerText = "Nuovo LI";
  ul.appendChild(newLi);
};

newUlElement();
console.log("aggiunto nuovo elemento alla lista non ordinata con id='myList'");
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("------------------------ESERCIZIO 25------------------------");

const svuotaUl = () => {
  const ul = document.getElementById("myList");

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
};

svuotaUl();
console.log("lista non ordinata svuotata");
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("------------------------ESERCIZIO 26------------------------");

const addClassToTr = () => {
  const allTr = document.querySelectorAll("tr");
  allTr.forEach(function (tr) {
    tr.classList.add("test");
  });
};
addClassToTr();
console.log("aggiunta classe 'test' a tutti i <tr>");
// [EXTRA] JS Avanzato

console.log(
  "***********************************  JS AVANZATO  ***********************************"
);

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("------------------------ESERCIZIO 27------------------------");

const halfTree = (height) => {
  if (typeof height !== "number" || height <= 0) {
    console.log("fornisci numero positivo maggiore di 0");
    return;
  }

  for (let index = 1; index <= height; index++) {
    console.log("*".repeat(index));
  }
};

halfTree(5);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("------------------------ESERCIZIO 28------------------------");

const tree = (height) => {
  if (typeof height !== "number" || height <= 0) {
    console.log("fornisci numero positivo maggiore di 0");
    return;
  }

  for (let index = 1; index <= height; index++) {
    let foglia = "*".repeat(2 * index - 1);
    let spazi = " ".repeat(height - index);
    console.log(spazi + foglia);
  }
};

tree(5);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
