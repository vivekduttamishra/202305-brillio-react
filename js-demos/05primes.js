
var isPrime= number =>{

    if(number<2)
        return false;
    for(var i=2;i<number;i++)
        if(number%i===0)
            return false;

    return true;
}

var findPrimes= (min,max)=>{

    var result=[];

    for(let i=min;i<max;i++){
        if(isPrime(i))
            result.push(i);
    }

    return result;
}



function testFindPrimes(min,max){
    console.log(`finding primes between ${min}-${max}`);
    var start=new Date();
    var result= findPrimes(min,max);
    var end= new Date();

    

    var timeTaken = end-start;

    console.log(`total primes between ${min}-${max} is ${result.length}\t time taken ${timeTaken} ms` );
    

}

testFindPrimes(2,200000); //time taking work
testFindPrimes(2,5000);
testFindPrimes(2,100);
