
function searchEvens(values){
    var result=[];

    for(var value of values){
        if(value%2===0)
            result.push(value);        
    }

    return result;
}


function searchPrimes(values){
    var result=[];
    for(var value of values){
        if(isPrime(value))
            result.push(value);
    }

    return result;
}

function searchByAuthor(values,author){

    var result=[];

    for(var value of values){
        if(value.author===author)
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

var evens= searchEvens(numbers);

console.log('evens',evens);


var primes=searchPrimes(numbers);

console.log('primes',primes);


var books=[

    {title:'The Accursed God', author:'Vivek Dutta Mishra'},
    {title:'The Sons of Fortune', author:'Jeffrey Archer'},
    {title:'मानस', author:'Vivek Dutta Mishra'},
    {title:'Sins of Father', author:'Jeffrey Archer'},
];

var selectedBook= searchByAuthor(books,'Vivek Dutta Mishra');

console.log('selectedBook',selectedBook);






