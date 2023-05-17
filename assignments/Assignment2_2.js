
function search(match,values){
    var result=[];

    for(var value of values){
        if(match(value))
            result.push(value);        
    }

    return result;
}

var books=[

    {title:'The Accursed God', author:'Vivek Dutta Mishra', price:299},
    {title:'The Sons of Fortune', author:'SJ', price:450},
    {title:'मानस', author:'Vivek Dutta Mishra', price:199},
    {title:'Sins of Father', author:'SJ',price:250},
];


function authorBy(value) { 
    
}





