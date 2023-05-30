

const withVisibility = (Component, defaultVisibility=true)=>{

    const Wrapper = (props)=>{

        var visibility = defaultVisibility;
        if(props.visible!==undefined)
            visibility=props.visible;

        if(visibility)
            return <Component {...props} />;
        else
            return null ; //don't show anything

    };

    return Wrapper;

}

export default withVisibility;