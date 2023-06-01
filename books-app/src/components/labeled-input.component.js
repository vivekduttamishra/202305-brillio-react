

const LabeledInput = ({id, value, onChange, label=id, placeholder=label, type="text", error="" }) => {

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input className="form-control" id={id} value={value} onChange={onChange} 
                            placeholder={placeholder}
                            type={type}
                            />
            <small className="form-text text-muted">{error}</small>
        </div>
    );

}

export default LabeledInput;