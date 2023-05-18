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




// Common Array Functions  

// filter 

// returns a list of matching items 

// same as our search function  

// find 

// like filter, but returns 

// first matching item only 

// returns undefined if no match is found 
 

// forEach 

// iterates over each item 

// why? 

// can perform some action over each item 
 

// map 

// returns new array  

// by transforming each item of original array into something different 

// The new array may contain a new set of values derived from the original set of values  

// example 
 

// var result = books.map( b => b.title.toUpperCase()); 

 

// [  'THE ACCURSED GOD', 'THE SONS OF FORTUNE' , 'मानस', 'SINS OF FATHER' ] 

 

// var result = books.map( b=> b.price /2 ); 

 

// [ 149.5, 225, 99.5, 125] 

 

// var result = book.map( b=>  ( {  title: b.title, pricing: b.price>250?"expensive":"fair" }) ); 

 

 

// [  

// { title:'The Accursed God', pricing:'expensive'},  

// {title:'The Sons of Fortune', pricing:'expensive'},  

// {title:'मानस', pricing:'fair'},  

// {title: 'Sins of Father', pricing:'fair' }  

// ]  
