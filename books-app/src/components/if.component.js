

const If = ({ condition, children }) => {

    console.log('condition is '+ condition);
    

    if (condition){
        console.log("returning the children");
        return children;
    }
        
    else{
        console.log("returning empty");
        return null;
    }
        

}

export default If;