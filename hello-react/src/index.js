
import React from 'react';
import ReactDOM from 'react-dom/client';

// var element = React
//                 .createElement("h1",
//                                 null,
//                                 "Hello React World");

var myStyle={
    color:'brown',
    borderBottom:"2px solid brown"
};

var element = <div style={myStyle}>
                <h1>Hello React World</h1>
                <p>Welcome to the world of React</p>
            </div>

ReactDOM
    .createRoot(document.querySelector("#root"))
    .render(element);