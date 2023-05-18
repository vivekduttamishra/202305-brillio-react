
function search(match,values){
    var result=[];

    for(var value of values){
        if(match(value))
            result.push(value);        
    }

    return result;
}

var books=[

    {title:'The Accursed God', author:'Vivek Dutta Mishra', price:299},
    {title:'The Sons of Fortune', author:'SJ', price:450},
    {title:'मानस', author:'Vivek Dutta Mishra', price:199},
    {title:'Sins of Father', author:'SJ',price:250},
];


function authorBy(value) { 
    return function match(book){
        return book.author.toLowerCase().includes(value.toLowerCase())
    }
}

var byAuthor= author => book => book.author.toLowerCase().includes(author.toLowerCase())

var sjBooks=search(authorBy('SJ'),books)
console.log("books",sjBooks)

var vivekBooks=search(byAuthor('vivek'),books)
console.log("vivekBooks",vivekBooks)





