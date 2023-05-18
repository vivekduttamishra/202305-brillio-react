function getAuthor(authorName) {
    return (name) => name.author.toLowerCase().includes(authorName.toLowerCase());
}


var booksByAuthor = search(getAuthor("vivek"), books);
