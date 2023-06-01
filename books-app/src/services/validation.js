import { useState } from "react";

export const required = (errorMessage="required")=> value =>{
    if(!value) throw new Error(errorMessage);
}

export const number=(errorMessage="Must be a number") => value=>{
    if(isNaN(value)) throw new Error(errorMessage);
}

export const range=(min,max,errorMessage=null)=> value=>{
    if(value<min || value>max) 
        throw new Error(errorMessage||`value must be between min and max`);
}

export const stringLength=(min,max,errorMessage=null)=> value=>{
    if(!value) 
        return;
    var length=value.toString().length
    if(length<min || length>max)  
        throw new Error(errorMessage || `Length must be in range ${min} to ${max}`);
}

export const email=(errorMessage="Invalid Email") => email =>{

    var emailRegex=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if(!email.match(emailRegex))
        throw new Error(errorMessage)

}



export const validate=( model, schema)=>{

    var errors={__count:0};

    for(var field in schema){
        var validators = schema[field];
        if(!validators || !validators.length)
            continue;
        var value= model[field];
        for(var validator of validators){
            try{
               
                
                validator(value,model);
            } catch(error){
               // console.log('validator in catch',validator);
                errors.__count++;
                if(errors[field])
                    errors[field].push(error.message);
                else
                    errors[field]=[error.message]
            }
        }        
    }

    if(errors.__count>0)
        return errors;
    else
        return null;

}


export const useModel = (schema,model)=>{

    if(!model){
        model={};
        for(var field in schema){
            model[field]=""
        }
    }

    const [_model,setModel] = useState(model);
    const [errors,setErrors] = useState(validate(model,schema));

    const handleChange = (value,id)=>{
        var m = {
            ..._model,
            [id]:value
        };
        setModel(m);
        var e= validate(m,schema);
        setErrors(e);

        console.log('m',m);
        console.log('e',e);
        
        
    }

    return [_model, handleChange, errors];
}