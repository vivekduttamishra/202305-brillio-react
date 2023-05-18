let inputNumbers = [2, 3, 4, 5, 6, 7, 25, 27];
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


function search(match, values) {
    var result = [];
    for (var value of values) {
        if (match(value)) {
            result.push(value);
        }
    }
    return result;
}

// result = search((x) => x.author.toLowerCase().includes("vivek"), books);
// result = search((x) => x.author.toLowerCase().includes("mohasin"), books);

function byAuthor(name) {
    return (book) => {
        return book.author.toLowerCase().includes(name)
    }
}

let result;
result = search(byAuthor("vivek"), books);
console.log(result);
result = search(byAuthor("mohasin"), books);
