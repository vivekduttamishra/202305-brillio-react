
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

var Header = <div style={myStyle}>
                <h1>React App</h1>
                <p>Welcome to the world of React</p>
            </div> ;

var Footer = <div>
                &copy; 
                <a href="https://conceptarchitect.in">
                    Concept Architect
                </a>
            </div>;

var Content=<div>
                <h1>Welcome to React</h1>
                <p>Here we will learn 
                    about React Programming</p>
            </div>


//How do I merge header, footer and content in a single app
var app= <div>            
            <Header/>
            <Content/>
            <Footer/>
        </div>


ReactDOM
    .createRoot(document.querySelector("#root"))
    .render(app);