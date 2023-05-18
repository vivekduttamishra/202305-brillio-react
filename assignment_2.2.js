function getAuthor(str) {
    return (name) => name.author.toLowerCase().includes(str);
}


var booksByAuthor = search(getAuthor("vivek"), books);