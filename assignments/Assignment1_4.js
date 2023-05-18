// Write a function to find all primes between a given min-max range 
function primeNumbersRange(min, max) {
    var result = []
    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            result.push(i)
        }
    }
    return result;
}

function isPrime(x) {
    if (x < 2)
        return false;

    for (let i = 2; i < x; i++) {
        if (x % i === 0)
            return false;
    }
    return true;
}

var primes=primeNumbersRange(1,30);
console.log("primes",primes);
