

const withBorder = Component =>{

    return (props)=>{
        return (
            <div className="border" >
                <Component {...props} />
            </div>
        )
    }
};

export default withBorder;