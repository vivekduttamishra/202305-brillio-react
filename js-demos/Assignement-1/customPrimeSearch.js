function findPrimes(min, max) {
    var result = [];
    for (let i = min; i < max; i++) {
        if (isPrimeMatcher(i)) {
            result.push(i);
        }
    }
    console.log(`Returing ${min} : ${max} \t ${result.length} \n\n`)
    return result;
}

function isPrimeMatcher(number) { // returns boolean
    let result = true;
    if (number <= 1) {
        result = false
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                result = false;
                break;
            }
        }
    }
    return result;
}

function findPrimeCount(min, max) {
    let count = 0;
    do {
        let maxRange = min + 1000 >= max ? max : min + 1000;
        setTimeout(() => {let result  = findPrimes(min, maxRange).length;
            console.log(` length :  ${result.length}`);
            count += result.length
        }, 10)
        min = min + 1000;
    } while (max > min)

    setTimeout(() => console.log(` total primes is ${count}`),
        5000);
}

findPrimeCount(2, 2000)
// console.log(findPrimes(2,2000))