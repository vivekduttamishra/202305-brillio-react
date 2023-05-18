
function search(match,values){
    var result=[];

    for(var value of values){
        if(match(value))
            result.push(value);        
    }

    return result;
}




function isPrime(x){
    if(x<2)
        return false;

    for(let i=2;i<x;i++){
        if(x%i===0)
            return false;
    }

    return true;
}


var numbers=[2,11,8,4,13,3,21,15,17,10];


var primes=search(isPrime, numbers);

console.log('primes',primes);


var evens = search ( n=>n%2===0, numbers);

console.log('evens',evens);



var books=[

    {title:'The Accursed God', author:'Vivek Dutta Mishra', price:299},
    {title:'The Sons of Fortune', author:'Jeffrey Archer', price:450},
    {title:'मानस', author:'Vivek Dutta Mishra', price:199},
    {title:'Sins of Father', author:'Jeffrey Archer',price:250},
];


// let selectedBooks = books.map((each)=>{
//     var book = each.author.includes("Vivek") && each;
//     return book;
// });


var byAuthor = function(authorName){

    return function(book){
        return book.author.toLowerCase().includes(authorName.toLowerCase());
    }
}


//var vivekBooks= search(b=> b.author.toLowerCase().includes('vivek'), books);

var vivekBooks = search(byAuthor('Vivek'), books);
console.log('vivekBooks',vivekBooks);

//var archerBooks= search(b=> b.author.toLowerCase().includes('archer'),books);

var archerBooks = books.filter(byAuthor('archer'));

console.log('archerBooks',archerBooks);






