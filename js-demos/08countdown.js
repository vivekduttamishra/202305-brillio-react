

var x=10;

var iid= setInterval(()=>{
	console.log(x);
    x--;
},1000);


setTimeout(()=>{
    clearInterval(iid);
},11000);


console.log('count down is starting');
