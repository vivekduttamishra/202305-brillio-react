

//placeholder.innerHTML='<h2>Hello from Java Script</h2>';

var element=React.createElement('h2',null,'Welcome to React');

var link = React.createElement('a', 
                        {
                            href:'https://react.dev',
                            target:'blank',
                            style:{
                                textDecoration:"none"
                            }
                        
                        },'Learn React');


var app = React.createElement(  "div",
                            {
                                className:"header"
                            },
                            element,
                            link
                            
                        );




var root=document.getElementById('placeholder');

//root.innerHTML=element;
var _root=ReactDOM.createRoot(root);
_root.render(app);








