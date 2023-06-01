
const Input=({id, label=id, placeholder=label, value, onChange,type='text'})=>{

    return (
        <div className='form-group'>
           <label htmlFor={id}>{label}</label>
           <input className='form-control' type={type} placeholder={placeholder} id={id}
                  value={value} onChange={e=>onChange(e.target.value, e.target.id)} />
        </div>
    );
}



export default Input;