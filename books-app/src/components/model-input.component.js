
const ModelInput=({id, model, errors,  label=id, placeholder=label,  onChange,type='text'})=>{

    var error=null;
    if(errors!=null && errors[id] && errors[id].length){
        error=errors[id][0];
    }

    return (
        <div className='form-group'>
           <label htmlFor={id}>{label}</label>
           <input className='form-control' type={type} placeholder={placeholder} id={id}
                  value={model.value} onChange={e=>onChange(e.target.value, e.target.id)} />
            {error!==null && <small className="text-danger">{error}</small> }
        </div>
    );
}



export default ModelInput;