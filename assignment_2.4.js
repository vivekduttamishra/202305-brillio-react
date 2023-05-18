//Write a function to find all primes between a given min-max range
//var primes = findPrimes(2,10);   // [2,3,5,7]
function findPrimes(a,b) {

    var numbers = []
    let  i;

    for (i = a; i <= b; i++) {

        if (isPrime(i)) {
            numbers.push(i);
        }
    }
        return numbers;
    }

    function isPrime(j) {
        if (j < 2)
            return false;

        for (let i = 2; i < j; i++) {
            if (j % i === 0)
                return false;
        }
        return true;
    }
    

var primes=findPrimes(2,10);
console.log("primes",primes);