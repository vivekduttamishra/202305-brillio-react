function map(object, transformer) {
    let result = [];
    for (let i = 0; i < object.length; i++) {
        result.push(transformer(object[i]));
    }
    return result;
}


let books = [
    {
        "title": "Sometitle",
        "author": "abc",
        "price": "Someprice",
        "rating": "Somerating"
    },
    {
        "title": "MyBook",
        "author": "Jeffrey Archer",
        "price": "Someprice",
        "rating": "Somerating"
    },
    {
        "title": "Sometitle",
        "author": "vivek",
        "price": "Someprice",
        "rating": "Somerating"
    },
    {
        "title": "Sometitle",
        "author": "vivek sasd",
        "price": "Someprice",
        "rating": "Somerating"
    },
    {
        "title": "Sometitle",
        "author": "vivekanand",
        "price": "Someprice",
        "rating": "Somerating"
    }
]

result = map(books, (x) => x.title = x.title.toUpperCase());
console.log(result);