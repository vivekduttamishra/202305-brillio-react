// What is the purpose of a array.map function?  

// Write your own map function which works just like built-in map function

// map takes an array and function as argumentfunction 
 function mapFun(matchFun,values){
    var arrResult=[]

    for(let i=0;i<values.length;i++){
        arrResult.push(matchFun(values[i]));
    }
    return arrResult;
 }

 var mapResult=mapFun(num => num ** 2,[2,3,4,5,6])
 console.log("mapping",mapResult);

