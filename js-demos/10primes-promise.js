
var isPrime= number =>{

    if(number<2)
        return false;
    for(var i=2;i<number;i++)
        if(number%i===0)
            return false;

    return true;
}

var findPrimes= (min,max)=>{

    var promise= new Promise((resolve,reject)=>{

        var result=[];
        var lo=min;
        var hi=Math.min(lo+1000,max); //make a block of max 1000
    
        var iid=setInterval(()=>{
    
            if(hi<=lo){
                clearInterval(iid);
                return reject(new Error( `Invalid range ${min}-${max}`));
            }

            for(var i=lo;i<hi;i++){
                if(isPrime(i))
                    result.push(i);
            }
    
            if(hi>=max){
               clearInterval(iid); //task is over
               //cb({min,max,result});  //inform the result
               resolve({min,max,result});
            }
            else{
                lo=hi;
                hi=Math.min(lo+1000,max);
            }    
    
        },1);


    });
   
    //returns immediately
   return promise;
   
}



function testFindPrimes(min,max){
    console.log(`finding primes between ${min}-${max}`);

    var start=new Date();
    
    var promise= findPrimes(min,max);
    
    promise
        .then(({result})=>{
            var end= new Date();   
            var timeTaken = end-start;
            console.log(`total primes between ${min}-${max} is ${result.length}\t time taken ${timeTaken} ms` );
        })
        .catch(error=>console.log(error.message));
        
        
    

}

testFindPrimes(2,200000); //time taking work
testFindPrimes(2,5000);
testFindPrimes(10000,2);  //this will be rejected
testFindPrimes(2,100);
