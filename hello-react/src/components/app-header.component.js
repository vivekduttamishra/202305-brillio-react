



var AppHeader =function(args) {
    
    console.log('args',args);
    
    var myStyle={
        fontSize: args.size,
        color:args.color,
        borderBottom: `2px solid ${args.color}`
    }

    return <div style={myStyle}>
                <h1>{args.children}</h1>
                <p>Welcome to the world of React</p>
            </div> ;
}

export default AppHeader;