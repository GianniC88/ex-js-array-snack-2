console.log('hi')


//Hai un array di oggetti rappresentanti libri:


const books = [
	{
		title: "React Billionaire",
		pages: 250,
		author: {
			name: 'Alice',
			age: 35
		},
		available: false,
		price: '101€',
		tags: ['advanced', 'js', 'react', 'senior']
	},
	{
		title: "Advanced JS",
		pages: 500,
		author: {
			name: 'Bob',
			age: 20
		},
		available: true,
		price: '25€',
		tags: ['advanced', 'js', 'mid-senior']
	},
	{
		title: "CSS Secrets",
		pages: 320,
		author: {
			name: 'Alice',
			age: 17
		},
		available: true,
		price: '8€',
		tags: ['html', 'css', 'junior']
	},
	{
		title: "HTML Mastery",
		pages: 200,
		author: {
			name: 'Charlie',
			age: 50
		},
		available: false,
		price: '48€',
		tags: ['html', 'advanced', 'junior', 'mid-senior']
	},
];


//Snack 1 - Filtra e Modifica

//Crea una funzione che somma due numeri.

//Crea un array(longBooks) con i libri che hanno più di 300 pagine;

const longBooks = books.filter(b => b.pages > 300);
console.log(longBooks)

//Creare un array(longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.

const longBooksTitles = longBooks.map(b => b.title)
console.log(longBooksTitles)


//Stampa in console ogni titolo nella console.

books.forEach(book => console.log(book.title))


console.log('_____________________________________________')


//Snack 2 -
//Il primo libro scontato


// Creare un array(availableBooks) che contiene tutti i libri disponibili.

const availableBooks = books.filter(book => book.available)
console.log(availableBooks)

//Crea un array(discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20 % (mantieni lo stesso formato e arrotonda al centesimo)

const discountedBooks = availableBooks.map(b => {
	const price = parseFloat(b.price.replace('€', ''));
	const discountedPrice = (price * .8).toFixed(2);
	return {
		...b,
		price: `${discountedPrice}€`
	}
});
console.log(discountedBooks)

//Salva in una variabile(fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero(senza centesimi).

const fullPricedBook = discountedBooks.find(b => {
	const price = parseFloat(b.price.replace('€', ''))
	//return price % 1 === 0
	return Number.isInteger(price)
}
)
console.log(fullPricedBook)


console.log('____________________________')

//Snack 3 - Ordinare gli Autori


//Creare un array(authors) che contiene gli autori dei libri.

const authors = books.map(b => b.author)
console.log(authors)


//Crea una variabile booleana(areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.

const areAuthorsAdult = authors.every(a => a.age >= 18)
console.log(areAuthorsAdult)

//Ordina l’array authors in base all’età, senza creare un nuovo array.
//(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

authors.sort((a, b) => b.age - a.age)

console.log('_____________________________')

//Snack 4 - 
// Calcola l’età media

//Creare un array(ages) che contiene le età degli autori dei libri.

const ages = authors.map(a => a.age)
console.log(ages)

//Calcola la somma delle età(agesSum) usando reduce.

const agesSum = ages.reduce((a, b) => a + b)
console.log(agesSum)


//Stampa in console l’età media degli autori dei libri.

console.log(`${agesSum / ages.length}`)




/*
Usando la l'API http://localhost:3333/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
Testala con l’array[2, 13, 7, 21, 19].*/
/*
console.log('bonus 5')
const ids = [2, 13, 7, 21, 19];

async function getBooks(ids) {
	const url = `http://localhost:3333/books/`
	const bookPromises = ids.map(id => fetch(`${url}${id}`).then(r => r.json()))
	const books = await Promise.all(bookPromises)
	return books
}
getBooks(ids).then(books => console.log(books))
*/


//Snack 6(Bonus) -
// Ordina i libri



//Crea una variabile booleana(areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.

console.log("bonus 6")

const areThereAvailableBooks = books.some(b => b.available)
const booksByPrice = [...books].sort((a, b) => {
	const priceA = parseFloat(a.price.replace('€', ''))
	const priceB = parseFloat(b.price.replace('€', ''))
	return priceA - priceB
})
booksByPrice.sort((a, b) => a.available === b.available ? 0 : a.available ? -1 : 1)
console.log(booksByPrice)
//Crea un array(booksByPrice) con gli elementi di books ordinati in base al prezzo(crescente).

//Ordina l’array booksByPricein base alla disponibilità(prima quelli disponibili), senza creare un nuovo array.