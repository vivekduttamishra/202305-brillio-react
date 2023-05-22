import React from 'react';
import ReactDOM from 'react-dom/client';

var element=React.createElement('h1',null,"Hello react");

ReactDOM.createRoot(document.querySelector("#root")).render(element);
