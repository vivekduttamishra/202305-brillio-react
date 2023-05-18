function map(object, transformer) {
    let result = [];
    for (let i = 0; i < object.length; i++) {
        result.push(transformer(x));
    }
    return result;

}