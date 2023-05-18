function search(match, values) {
    var result = [];
    for (var value of values) {
        if (match(value)) {
            result.push(value);
        }
    }
    return result;
}

function isPrimeMatcher(number) { // returns boolean
    let result = true;
    if (number <= 1 || (number<= 20 || number >= 30)) {
        result = false
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                result = false;
                break;
            }
        }
        return result;
    }
}


let inputNumbers = [2, 3, 4, 5, 6, 7, 25, 27, 29, 23];
result = search(isPrimeMatcher, inputNumbers);
console.log(result)