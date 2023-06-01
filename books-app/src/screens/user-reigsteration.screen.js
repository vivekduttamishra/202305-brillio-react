import {required,stringLength,email,useModel} from '../services/validation';
import ModelInput from '../components/model-input.component';

const validRoles = (...roles)=> value=>{
    
    var appliedRoles= value.toLowerCase().split(",");

    for(var appliedRole of appliedRoles){
        appliedRole=appliedRole.trim();
        if(appliedRole.length){
            if(!roles.includes(appliedRole)){
                throw new Error(`Invalid Role: '${appliedRole}'`);
            }
        }
    }

}

const UserRegistrationScreen=(props)=>{

    var [model,handleChange,errors]=useModel({
        name:[required()],
        photo:[],
        email:[required(),email()],
        password:[required(),stringLength(5,10)],
        roles:[validRoles("admin","user","author")]
    });

    
    const handleRegistration=(event)=>{
        event.preventDefault();
        console.log('model',model);
        
        var _model={...model};
        console.log('_model',_model);
        
        if(_model.roles)
            _model.roles=_model.roles.toLowerCase().split(",");
        console.log('submitted',_model);        
    }

    return (
        <div >
            <h2>New User Registration</h2>
            <form onSubmit={handleRegistration}>
                <ModelInput id="name" label="Name" model={model} errors={errors} onChange={handleChange} />
                <ModelInput id="email" label="Email" model={model} errors={errors} onChange={handleChange} />
                <ModelInput id="password" label="Password" model={model} errors={errors} onChange={handleChange} />
                <ModelInput id="photo" label="Profile Photo URL" model={model} errors={errors} onChange={handleChange} />
                <ModelInput id="roles" label="Enter Roles" model={model} errors={errors} onChange={handleChange} />
                
                <button className="btn btn-primary" type="submit" 
                    disabled={errors && errors.__count}
                >
                        Register
                </button>
            </form>
        </div>
    );

}

export default UserRegistrationScreen;