function convert( values, transformer) {

	var result=[];
	
	for(let value of values)
		result.push( transformer(value));
		
	return result;

}

var books=[

    {title:'The Accursed God', author:'Vivek Dutta Mishra', price:299},
    {title:'The Sons of Fortune', author:'Jeffrey Archer', price:450},
    {title:'मानस', author:'Vivek Dutta Mishra', price:199},
    {title:'Sins of Father', author:'Jeffrey Archer',price:250},
];


var result = convert( books, book=>book.title.toUpperCase());

console.log('result',result);

var result2 = convert(books, book=>book.price/2);

console.log('result2',result2);

var result3= convert (books, book=>({title:book.title, pricing: book.price>300?"expensive":"fair"}));

console.log('result3',result3);


var expensiveBooks = convert (books, book=>({title:book.title, pricing: book.price>300?"expensive":"fair"})).filter(b=>b.pricing==='expensive');

console.log('expensiveBooks',expensiveBooks);




