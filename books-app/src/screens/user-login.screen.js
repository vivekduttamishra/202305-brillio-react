import {useState} from 'react';
import LabeledInput from '../components/labeled-input.component';


const UserLoginScreen=(props)=>{

    const [user,setUser]=useState({
        email:"",
        password:""
    });

    var handleChange=(e)=>{
        var id = e.target.id;
        var value=e.target.value;

        var newUser= {...user};
        newUser[id] = value;

        setUser(newUser);

        //now validate the entered details
    }

    const handleSubmit=(event)=>{
        //default behavior is to submit form to server
        //here we want to handle it on client side (React)
        //we must prevent the default behavior
        event.preventDefault(); 
        console.log('submitted', user);
    }

    return (
        <div >
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <LabeledInput id="email" value={user.email} label="Email Address" 
                                onChange={handleChange} />
                <LabeledInput id="password" value={user.password} label="Password"  
                                type="password"
                                onChange={handleChange} />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );

}

export default UserLoginScreen;