//write a function to find all prime between given min-max range
//example var primes = findPrime(2,10);
//[2,3,5,7]

function isPrime(x){
    if(x<2)
        return false;
    for(let i=2;i<x;i++){
        if(x%i===0)
            return false;
    }
    return true;
}

function findPrime(numFrom,numTo){
    var primes =[];    
    if(numFrom<numTo){
        for(var i=numFrom;i<=numTo;i++){
            if(isPrime(i))
                primes.push(i);                
        }
    }
    return primes;
}

var primes= findPrime(2,23);

console.log('primes : ',primes);