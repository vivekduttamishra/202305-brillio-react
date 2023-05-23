import React from 'react'
import ReactDOM from 'react-dom/client'

/*var element = React.createElement("h1",
    null,
    "Hello React");*/
/*var mystyle = {
    color:'red',
    borderBottom:'2 px solid red'
}

let element =   <div style={mystyle}>
                            <h1>Hello</h1>
                            <p>This is a para</p>
                        </div>

ReactDOM.createRoot(document.querySelector(("#root")))
    .render(element);


console.log("this should appear in console")*/

var placeholder1 = document.getElementById("placeholder-1")
var placeholder2 = document.getElementById("placeholder-2")
var placeholder3 = document.getElementById("placeholder-3")
var placeholder4 = document.getElementById("placeholder-4")

// reactRoot.innerHTML= '<H2>THIS IS BEING INJECTED</H2>';
// -------------------------------------------------------------

// var element = React.createElement("h2", null, 'Welcome' )
// reactRoot.innerHTML= element;
// var reactRoot = ReactDOM.createRoot(reactRoot)
// ReactDOM.render(reactRoot, element)
// ReactDOM.createRoot(reactRoot).render(element)

// -------------------------ahref to react dev page------------------------------------

/*
var reactDevPage = React.createElement("A",
    {
        HREF: "https://reactjs.org/link/react-devtools",
        target: "blank"
    },
    'React Devtools')
ReactDOM.createRoot(placeholder1).render(reactDevPage)
*/

// -------------------------------------------------------------

/*const header = React.createElement("div",
    {
        className: "header"
    },
    React.createElement("h1", null, "ReactWeb"),
    React.createElement("p",
        {
            className: "slogan"
        },
        "Welcome to React para"
    )
);
ReactDOM.createRoot(placeholder2).render(header)*/


//----------------Tag rendering---------------------------

/*
var Header = function () {
    return <div>
        <h1>Welcome to the React</h1>
    </div>
}

var Footer = function () {
    return <div>
        <h1>Learn React</h1>
    </div>
}

var Content = function () {
    return <div>
        <h1>This will be the content of the react application</h1>
    </div>
}

var App =  <div>
        <Header/>
        <Footer/>
        <Content/>
    </div>


ReactDOM.createRoot(document.querySelector(("#root")))
    .render(App);*/


//---------------Class based rendering------------------

/*
var Header = function () {
    return <div>
        <h1>Welcome to the React</h1>
    </div>
}

var Footer = function () {
    return <div>
        <h1>Learn React</h1>
    </div>
}

var Content = function () {
    return <div>
        <h1>This will be the content of the react application</h1>
    </div>
}

class App extends React.Component {
    render() {
        return <div>
            <Header/>
            <Footer/>
            <Content/>
        </div>
    }
}


ReactDOM.createRoot(document.querySelector(("#root")))
    .render(<App/>);*/